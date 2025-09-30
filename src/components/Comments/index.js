import { useEffect, useState } from "react";
import axios from "axios";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// URL da sua API (ajuste se backend estiver em outra porta/domínio)
const API_URL = "https://econsultapp.com";

export default function Comments({ postId }) {
    const { siteConfig } = useDocusaurusContext();
    const googleClientId = siteConfig.customFields.GOOGLE_CLIENT_ID;
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");
    const [token, setToken] = useState(localStorage.getItem("google_token"));
    const [user, setUser] = useState(null);
    const [allowEmails, setAllowEmails] = useState(true);

    // Carregar comentários ao montar
    useEffect(() => {
        const url = API_URL + '/blog/comments?postId=' + postId;
        axios.get(url)
            .then(function (response) {
                setComments(response.data);
            })
            .catch(function (error) {
                // handle error
                console.error("Erro ao carregar comentários", error);
            });
    }, []);

    // Login com Google
    const handleGoogleLogin = () => {
        if (typeof window !== "undefined" && window.google) {
            window.google.accounts.id.initialize({
                client_id: googleClientId,
                callback: async (response) => {
                    const token = response.credential;
                    localStorage.setItem("google_token", token);
                    setToken(token);

                    const payload = JSON.parse(atob(token.split(".")[1]));
                    setUser({
                        name: payload.name,
                        email: payload.email,
                        picture: payload.picture,
                    });
                },
            });

            window.google.accounts.id.prompt();
        } else {
            console.error("Google Identity Services SDK não carregado ainda");
        }
    };

    // Logout
    const handleLogout = () => {
        localStorage.removeItem("google_token");
        setToken(null);
        setUser(null);
    };

    // Enviar comentário
    const handleSubmit = async () => {
        if (!token) return alert("Faça login para comentar");

        try {
            const res = await axios.post(
                `${API_URL}/blog/comments`,
                { post_id: postId, content },
                { headers: { Authorization: `Bearer ${token}` } }
            );

            setComments([res.data, ...comments]);
            setContent("");
        } catch (err) {
            console.error("Erro ao enviar comentário", err);
        }
    };

    // Atualizar preferência de e-mail
    const handleEmailPreference = async (checked) => {
        if (!token) return;
        try {
            await axios.post(
                `${API_URL}/blog/users/email-preference`,
                { allow_emails: checked },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setAllowEmails(checked);
        } catch (err) {
            console.error("Erro ao atualizar preferência de email", err);
        }
    };

    return (
        <div style={{ marginTop: "2rem" }}>
            <h3>Comentários</h3>

            {!token ? (
                <button onClick={handleGoogleLogin}>Login com Google</button>
            ) : (
                <div style={{ marginBottom: "1rem" }}>
                    <img
                        src={user?.picture}
                        alt={user?.name}
                        style={{ width: "40px", borderRadius: "50%" }}
                    />
                    <span style={{ marginLeft: "0.5rem" }}>{user?.name}</span>
                    <button onClick={handleLogout} style={{ marginLeft: "1rem" }}>
                        Sair
                    </button>
                </div>
            )}

            {token && (
                <>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Escreva seu comentário..."
                        rows="3"
                        style={{ width: "100%", marginBottom: "0.5rem" }}
                    />
                    <button onClick={handleSubmit}>Enviar</button>

                    <div style={{ marginTop: "1rem" }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={allowEmails}
                                onChange={(e) => handleEmailPreference(e.target.checked)}
                            />
                            Quero receber novidades por e-mail
                        </label>
                    </div>
                </>
            )}

            <div style={{ marginTop: "2rem" }}>
                {comments.map((c) => (
                    <div
                        key={c.id}
                        style={{
                            borderBottom: "1px solid #ddd",
                            marginBottom: "1rem",
                            paddingBottom: "0.5rem",
                        }}
                    >
                        <p>
                            <strong>{c.name}</strong> <br />
                            {c.content}
                        </p>
                        <small>{new Date(c.created_at).toLocaleString()}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}
