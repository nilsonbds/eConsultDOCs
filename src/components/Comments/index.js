import { useEffect, useState, useRef } from "react";
import axios from "axios";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/pt-br";
import { Filter } from 'bad-words'

export default function Comments({ postId }) {
    const filter = new Filter();
    const API_URL = "https://econsultapp.com";
    //const API_URL = "http://localhost:3000";
    const [clear, setClear] = useState(0);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const buttonDiv = useRef(null);
    const { siteConfig } = useDocusaurusContext();
    const googleClientId = siteConfig.customFields.GOOGLE_CLIENT_ID;
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");
    const [token, setToken] = useState(typeof window !== "undefined" ? localStorage.getItem("google_token") : null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [picture, setPicture] = useState(null);
    dayjs.extend(relativeTime);
    dayjs.locale("pt-br");

    function handleClear() {
        if (clear == 0) { setClear(1) } else { setClear(0) };
    }

    function GoogleLoginButton({ onSuccess }) {
        useEffect(() => {
            if (window.google && buttonDiv.current) {
                window.google.accounts.id.initialize({
                    client_id: googleClientId,
                    callback: onSuccess,
                });
                window.google.accounts.id.renderButton(buttonDiv.current, {
                    theme: "outline",   // outline | filled_blue | filled_black
                    size: "large",      // small | medium | large
                    shape: "rectangular", // rectangular | pill | circle | square
                    logo_alignment: "left", // left |
                    text: "continue_with",  // "signin_with" ou "continue_with"
                });
            }
        }, []);
        return <div ref={buttonDiv}></div>;
    }

    function decodeJwt(token) {
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            return payload;
        } catch (e) {
            return null;
        }
    }

    function isTokenExpired(token) {
        const payload = decodeJwt(token);
        if (!payload) return true;

        const now = Math.floor(Date.now() / 1000); // tempo atual em segundos
        return payload.exp < now;
    }

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    async function toBase64FromUrl(imageUrl) {
        const response = await fetch(imageUrl);
        const blob = await response.blob();

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob); // gera base64 (data:image/jpeg;base64,...)
        });
    };

    // Enviar comentário
    const handleSubmit = async () => {
        if (!isValidEmail(email.trim())) {
            setError("⚠️ Informe um e-mail válido!");
            return
        }
        if (!name.trim() || !email.trim()) {
            setError("⚠️ Informe seu nome e e-mail para comentar!");
            return;
        }
        if (filter.isProfane(content)) {
            setError("🚫 Seu comentário contém palavras inadequadas!");
            return;
        }
        setError(""); // limpa erro antes de enviar
        let pictureBase64 = null;
        if (picture) {
            pictureBase64 = await toBase64FromUrl(picture);
        }
        const url = API_URL + '/blog/comments';
        await axios.post(url, { name: name, email: email, picture: null, content: content, postId: postId }, { headers: { Authorization: `Bearer ${token}` } })
            .then(function (response) {
                setComments(response.data);
                setContent("");
                setSuccess("✅ Comentário enviado com sucesso!");
                handleClear();
                setTimeout(() => {
                    setSuccess("");
                }, 3000);
            })
            .catch(function (error) {
                // handle error
                console.error("Erro ao enviar comentário", error);
            });
    }

    useEffect(() => {
        if (token && isTokenExpired(token)) {
            localStorage.removeItem("google_token");
            setToken(null);
        }
    }, [token]);

    // Carregar comentários ao montar
    useEffect(() => {
        const url = API_URL + "/blog/comments?postId=" + postId;
        axios.get(url)
            .then((response) => setComments(response.data))
            .catch((error) => console.error("Erro ao carregar comentários", error));
    }, [postId, clear]);

    useEffect(() => {
        setName(token ? JSON.parse(atob(token.split(".")[1])).name : "");
        setEmail(token ? JSON.parse(atob(token.split(".")[1])).email : "");
    }, [token]);

    return (<>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center", width: "70%" }}>
                <p id="cta-econsult-title" style={{
                    fontSize: "1.5rem",
                    lineHeight: "1.5rem",
                    marginBottom: "20px"
                }}>
                    Crie sua conta no eConsult e transforme sua rotina clínica!
                </p>
                <a
                    href="https://econsult.app.br/multidisciplinar"
                    target="_blank"
                    role="button"
                    aria-label="Criar conta grátis no eConsult"
                    style={{
                        display: "inline-block",
                        backgroundColor: "darkcyan",
                        color: "white",
                        fontWeight: "700",
                        textDecoration: "none",
                        padding: "12px 24px",
                        borderRadius: "999px",
                        fontSize: "18px",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                        transition: "all 0.2s ease",
                        width: "100%",
                        textAlign: "center"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.18)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.15)";
                    }}
                >
                    Criar conta grátis
                </a>
            </div>
        </div>
        <hr />
        <div style={{ marginTop: "2rem" }}>
            <h3>Comentários</h3>
            <div className="container">
                <div className="row" style={{ margin: "0px", padding: "0px 10px", rowGap: "10px", }}>
                    <div className="col col--12" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                        <GoogleLoginButton onSuccess={(response) => {
                            const token = response.credential;
                            localStorage.setItem("google_token", token);
                            setToken(token);
                            const payload = JSON.parse(atob(token.split(".")[1]));
                            setName(payload.name);
                            setEmail(payload.email);
                            setPicture(payload.picture);
                        }} />
                    </div>
                    <div className="col col--12" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                        <input
                            type="text"
                            id="nome"
                            className="form-control"
                            placeholder="Digite seu nome"
                            disabled={!!token}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                borderRadius: "3px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "100%",
                            }}
                        />
                    </div>
                    <div className="col col--12" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                        <input
                            type="email"
                            id="email"
                            disabled={!!token}
                            className="form-control"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                borderRadius: "3px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "100%",
                            }}
                        />
                    </div>
                    <div className="col col--12" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Escreva seu comentário..."
                            rows="3"
                            style={{
                                padding: "10px",
                                margin: "0px",
                                borderRadius: "3px",
                                border: "1px solid #ccc",
                                fontSize: "1rem",
                                width: "100%",
                            }}
                        />
                    </div>
                    <div className="col col--6" style={{ paddingLeft: "5px", paddingRight: "5px" }}>
                        <button
                            onClick={handleSubmit}
                            disabled={!name.trim() || !email.trim() || !content.trim()}
                            style={{
                                borderRadius: "3px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "100%",
                                cursor: "pointer",
                            }}
                        >
                            Enviar
                        </button>
                        {error && (
                            <div style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
                                {error}
                            </div>
                        )}
                        {success && (
                            <div style={{ color: "green", fontSize: "0.9rem", marginTop: "5px" }}>
                                {success}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "2rem", padding: "0px 30px", rowGap: "10px", }}>
                {
                    comments
                        .filter((c) => c.content && c.content.trim() !== "")
                        .map((c) => (
                            <div
                                key={c.id}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: "10px",
                                    borderBottom: "1px solid #ddd",
                                    marginBottom: "1rem",
                                    paddingBottom: "0.5rem",
                                }}
                            >
                                {/* Avatar */}
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        minWidth: "40px",
                                        minWeight: "40px",
                                        borderRadius: "50%",
                                        backgroundColor: "#01483fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "0.9rem",
                                        color: "#fff",
                                    }}
                                >
                                    {c.name ? c.name.charAt(0).toUpperCase() + c.name.charAt(1).toUpperCase() : "?"}
                                </div>

                                {/*
                                    {c.picture ? (
                                        <img
                                            src={c.picture}
                                            alt={c.name}
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    ) : (
                                        <div
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "50%",
                                                backgroundColor: "#ccc",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.9rem",
                                                color: "#fff",
                                            }}
                                        >
                                            {c.name ? c.name.charAt(0).toUpperCase() : "?"}
                                        </div>
                                    )}
                                */}

                                {/* Texto */}
                                <div>
                                    <p style={{ margin: 0, wordBreak: "break-word" }}>
                                        <strong>{c.name}</strong> <br />
                                        {c.content}
                                    </p>
                                    <small style={{ color: "#555" }}>
                                        {dayjs(c.created_at).fromNow()}
                                    </small>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    </>
    );
}
