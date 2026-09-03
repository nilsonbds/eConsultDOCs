import React, { useState } from "react";
import axios from "axios";

export default function ScaleDownload({
    file,
    scale,
    label = "Baixar escala em PDF",
}) {

    const [form, setForm] = useState({
        nome: "",
        email: "",
    });

    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleDownload(e) {
        e.preventDefault();

        setError("");

        if (!form.nome.trim()) {
            setError("Informe seu nome completo.");
            return;
        }

        if (!form.email.trim()) {
            setError("Informe seu e-mail.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(form.email)) {
            setError("Informe um e-mail válido.");
            return;
        }

        setLoading(true);

        try {
            await axios.post(
                "https://econsultapp.com/usescale",
                {
                    nome: form.nome.trim(),
                    email: form.email.trim(),
                    escala: "Download de " + scale,
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
            // Eu manteria o download mesmo se a API estiver indisponível.
            console.error("Erro ao registrar scale-lead:", error);
        }

        setLoading(false);

        // Inicia o download
        const link = document.createElement("a");
        link.href = file;
        link.download = "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setShowForm(false);
    }

    if (!showForm) {
        return (
            <button
                type="button"
                className="button button--primary button--lg"
                onClick={() => setShowForm(true)}
            >
                📥 {label}
            </button>
        );
    }

    return (
        <div className="scale-download">
            <h3>Baixe gratuitamente</h3>

            <p>
                Informe seus dados abaixo para fazer o download deste instrumento.
            </p>

            <form onSubmit={handleDownload}>
                <div className="scale-download-field">
                    <label htmlFor={`nome-${scale}`}>
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
                    <label htmlFor={`email-${scale}`}>
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
                        {loading ? "Aguarde..." : "Baixar PDF"}
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
                Seus dados serão utilizados para registrar o acesso ao material.
            </small>
        </div>
    );
}