import React, { useEffect, useState } from "react";
import axios from "axios";

const STORAGE_KEY = "econsult_scale_lead";

export default function ScaleDownload({
    file,
    scale,
    label = "Baixar escala em PDF",
}) {

    const [form, setForm] = useState({
        nome: "",
        email: "",
    });

    const [hasSavedData, setHasSavedData] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showFreeInvite, setShowFreeInvite] = useState(false);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    /*
     * Recupera os dados salvos no navegador.
     */
    useEffect(() => {
        try {
            const savedData = localStorage.getItem(STORAGE_KEY);

            if (!savedData) {
                return;
            }

            const parsedData = JSON.parse(savedData);

            if (parsedData?.nome && parsedData?.email) {

                /*
                 * Normaliza dados antigos que ainda
                 * não possuíam os novos campos.
                 */
                const normalizedData = {
                    nome: parsedData.nome,
                    email: parsedData.email,
                    usos: parsedData.usos || 0,
                    conviteFreeExibido:
                        parsedData.conviteFreeExibido || false,
                    conviteWhatsappExibido:
                        parsedData.conviteWhatsappExibido || false,
                };

                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(normalizedData)
                );

                setForm({
                    nome: normalizedData.nome,
                    email: normalizedData.email,
                });

                setHasSavedData(true);
            }

        } catch (error) {
            console.error(
                "Erro ao recuperar dados locais:",
                error
            );
        }
    }, []);

    /*
     * Alteração dos campos do formulário.
     */
    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    /*
     * Salva o primeiro uso.
     */
    function saveLocalData(nome, email) {
        try {

            const data = {
                nome,
                email,
                usos: 1,
                conviteFreeExibido: false,
                conviteWhatsappExibido: false,
            };

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(data)
            );

            setHasSavedData(true);

            return data;

        } catch (error) {

            console.error(
                "Erro ao salvar dados locais:",
                error
            );

            return null;
        }
    }

    /*
     * Incrementa a quantidade de usos.
     */
    function incrementUsage() {
        try {

            const savedData =
                localStorage.getItem(STORAGE_KEY);

            if (!savedData) {
                return null;
            }

            const parsedData =
                JSON.parse(savedData);

            const updatedData = {
                ...parsedData,

                usos:
                    (parsedData.usos || 0) + 1,

                conviteFreeExibido:
                    parsedData.conviteFreeExibido || false,

                conviteWhatsappExibido:
                    parsedData.conviteWhatsappExibido || false,
            };

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedData)
            );

            return updatedData;

        } catch (error) {

            console.error(
                "Erro ao incrementar uso:",
                error
            );

            return null;
        }
    }

    /*
     * Marca o convite do Free como exibido.
     *
     * Retorna os dados atualizados.
     */
    function markFreeInviteAsShown() {
        try {

            const savedData =
                localStorage.getItem(STORAGE_KEY);

            if (!savedData) {
                return null;
            }

            const parsedData =
                JSON.parse(savedData);

            const updatedData = {
                ...parsedData,
                conviteFreeExibido: true,
            };

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedData)
            );

            return updatedData;

        } catch (error) {

            console.error(
                "Erro ao atualizar convite Free:",
                error
            );

            return null;
        }
    }

    /*
     * Marca o convite do WhatsApp como exibido.
     *
     * Ficará preparado para uso futuro.
     */
    function markWhatsappInviteAsShown() {
        try {

            const savedData =
                localStorage.getItem(STORAGE_KEY);

            if (!savedData) {
                return null;
            }

            const parsedData =
                JSON.parse(savedData);

            const updatedData = {
                ...parsedData,
                conviteWhatsappExibido: true,
            };

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(updatedData)
            );

            return updatedData;

        } catch (error) {

            console.error(
                "Erro ao atualizar convite WhatsApp:",
                error
            );

            return null;
        }
    }

    /*
     * Verifica se chegou o momento de
     * mostrar o convite do eConsult Free.
     */
    function checkFreeInvite(leadData) {

        if (
            leadData &&
            leadData.usos >= 5 &&
            !leadData.conviteFreeExibido
        ) {

            /*
             * Exibe o convite.
             */
            setShowFreeInvite(true);

            /*
             * Marca imediatamente como exibido
             * para não aparecer novamente.
             */
            markFreeInviteAsShown();
        }
    }

    /*
     * Registra o uso da escala na API.
     */
    async function registerDownload(nome, email) {
        try {

            await axios.post(
                "https://econsultapp.com/usescale",
                {
                    nome,
                    email,
                    escala: "Download de " + scale,
                    documento: scale,
                },
                {
                    mode: "cors",
                    headers: {
                        "x-custom-header": JSON.stringify({
                            idusuario: 0,
                            idespecialista: 0,
                            token: "$2b$06$39fmkuhXjZN2OUsPW4ctO.snb.yNUGGGPlyS7..LtvuH61VAwgJam",
                            tokensystem: "$2b$06$39fmkuhXjZN2OUsPW4ctO.snb.yNUGGGPlyS7..LtvuH61VAwgJam",
                        }),
                    },
                }
            );

        } catch (error) {

            /*
             * Mantém o download mesmo
             * se a API estiver indisponível.
             */
            console.error(
                "Erro ao registrar scale-lead:",
                error
            );
        }
    }

    /*
     * Faz o download do arquivo.
     */
    function downloadFile() {

        const link =
            document.createElement("a");

        link.href = file;
        link.download = "";
        link.target = "_blank";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    }

    /*
     * Primeiro download.
     *
     * Usuário ainda precisa informar
     * nome e e-mail.
     */
    async function handleDownload(e) {

        e.preventDefault();

        setError("");

        if (!form.nome.trim()) {
            setError(
                "Informe seu nome completo."
            );
            return;
        }

        if (!form.email.trim()) {
            setError(
                "Informe seu e-mail."
            );
            return;
        }

        if (
            !/\S+@\S+\.\S+/.test(form.email)
        ) {
            setError(
                "Informe um e-mail válido."
            );
            return;
        }

        const nome =
            form.nome.trim();

        const email =
            form.email.trim();

        setLoading(true);

        /*
         * Primeiro uso = 1.
         */
        const leadData =
            saveLocalData(nome, email);

        console.log(
            "Dados locais do lead:",
            leadData
        );

        /*
         * Registra no servidor.
         */
        await registerDownload(
            nome,
            email
        );

        setLoading(false);

        /*
         * Faz o download.
         */
        downloadFile();

        setShowForm(false);
    }

    /*
     * Usuário já identificado.
     */
    async function handleSavedDownload() {

        if (loading) {
            return;
        }

        setLoading(true);

        /*
         * Incrementa contador.
         */
        const leadData =
            incrementUsage();

        if (leadData) {

            console.log(
                "Quantidade de usos:",
                leadData.usos
            );

            /*
             * No quinto uso (ou superior,
             * caso ainda não tenha sido exibido),
             * mostra o convite.
             */
            checkFreeInvite(leadData);
        }

        /*
         * Registra o uso no servidor.
         */
        await registerDownload(
            form.nome.trim(),
            form.email.trim()
        );

        setLoading(false);

        /*
         * Download continua normalmente.
         */
        downloadFile();
    }

    /*
     * Clique inicial.
     */
    function handleButtonClick() {

        if (hasSavedData) {
            handleSavedDownload();
        } else {
            setShowForm(true);
        }
    }

    /*
     * Fecha convite do Free.
     */
    function handleCloseFreeInvite() {
        setShowFreeInvite(false);
    }

    /*
     * Usuário já identificado:
     * mostra somente botão de download.
     */
    if (!showForm) {

        return (
            <>

                <button
                    type="button"
                    className="button button--primary button--lg"
                    onClick={handleButtonClick}
                    disabled={loading}
                >
                    📥 {loading ? "Aguarde..." : label}
                </button>


                {/*
                 * Convite eConsult Free
                 *
                 * Será mostrado uma única vez
                 * quando atingir 5 usos.
                 */}
                {showFreeInvite && (

                    <div className="scale-free-invite">

                        <button
                            type="button"
                            className="scale-free-invite-close"
                            onClick={handleCloseFreeInvite}
                            aria-label="Fechar"
                        >
                            ×
                        </button>

                        <div className="scale-free-invite-icon">
                            🎉
                        </div>

                        <h3>
                            Você já conhece o eConsult Free?
                        </h3>

                        <p>
                            Você já utiliza nossas ferramentas
                            com frequência.
                        </p>

                        <p>
                            No <strong>eConsult Free</strong> você
                            pode organizar pessoas atendidas,
                            agenda, prontuário, financeiro e
                            acompanhamento clínico em um único
                            sistema.
                        </p>

                        <div className="scale-free-invite-actions">

                            <a
                                href="https://econsult.app.br/sistema-gratuito-para-psicologos"
                                className="button button--primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Conhecer o eConsult Free
                            </a>

                            <button
                                type="button"
                                className="button button--secondary"
                                onClick={handleCloseFreeInvite}
                            >
                                Agora não
                            </button>

                        </div>

                    </div>

                )}

            </>
        );
    }

    /*
     * Primeiro uso:
     * mostra formulário.
     */
    return (

        <div className="scale-download">

            <h3>
                Baixe gratuitamente
            </h3>

            <p>
                Informe seus dados abaixo para fazer
                o download deste instrumento.
            </p>

            <form onSubmit={handleDownload}>

                <div className="scale-download-field">

                    <label
                        htmlFor={`nome-${scale}`}
                    >
                        Nome completo
                    </label>

                    <input
                        id={`nome-${scale}`}
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        autoComplete="name"
                    />

                </div>

                <div className="scale-download-field">

                    <label
                        htmlFor={`email-${scale}`}
                    >
                        E-mail
                    </label>

                    <input
                        id={`email-${scale}`}
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        autoComplete="email"
                    />

                </div>

                {error && (

                    <div className="scale-download-error">
                        {error}
                    </div>

                )}

                <div className="scale-download-actions">

                    <button
                        type="submit"
                        className="button button--primary"
                        disabled={loading}
                    >
                        {loading ? "Aguarde..." : label}
                    </button>

                    <button
                        type="button"
                        className="button button--secondary"
                        onClick={() => setShowForm(false)}
                    >
                        Cancelar
                    </button>

                </div>

            </form>

            <small>
                Seus dados serão utilizados para
                registrar o acesso ao material.
            </small>

        </div>
    );
}