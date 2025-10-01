import { useEffect, useState, useRef } from "react";
import axios from "axios";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { SiGooglechrome } from "react-icons/si";


// URL da sua API (ajuste se backend estiver em outra porta/domínio)
const API_URL = "https://econsultapp.com";

export default function Comments({ postId }) {
    const buttonDiv = useRef(null);
    const { siteConfig } = useDocusaurusContext();
    const googleClientId = siteConfig.customFields.GOOGLE_CLIENT_ID;
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState("");
    const [token, setToken] = useState(localStorage.getItem("google_token"));
    const [user, setUser] = useState({name: '', email: ''});
    const [allowEmails, setAllowEmails] = useState(true);

    function GoogleLoginButton({ onSuccess }) {
        const buttonDiv = useRef(null);

        useEffect(() => {
            if (window.google && buttonDiv.current) {
                window.google.accounts.id.initialize({
                    client_id: "<SEU_CLIENT_ID>.apps.googleusercontent.com",
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
        if (!user.name.trim() || !user.email.trim()) {
            alert('Informe seu nome e email!');
            return
        }

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

            <div className="container">
                <div className="row" style={{ margin: 0, padding: 0, rowGap: "10px", }}>
                    <div className="col col--12" style={{paddingLeft: "5px",paddingRight: "5px"}}>
                        <input
                            type="text"
                            id="nome"
                            className="form-control shadow--lw"
                            placeholder="Digite seu nome"
                            style={{
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "100%",
                            }}
                        />
                    </div>

                    <div className="col col--12" style={{paddingLeft: "5px",paddingRight: "5px"}}>
                        <input
                            type="email"
                            id="email"
                            className="form-control shadow--lw"
                            placeholder="Digite seu e-mail"
                            style={{
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "100%",
                            }}
                        />
                    </div>

                    <div className="col col--12" style={{paddingLeft: "5px",paddingRight: "5px"}}>
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            placeholder="Escreva seu comentário..."
                            rows="3"
                            style={{
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "100%",
                            }}
                        />
                    </div>

                    <div className="col col--6" style={{paddingLeft: "5px",paddingRight: "5px"}}>
                        <GoogleLoginButton onSuccess={(response) => {
                            const token = response.credential;
                            localStorage.setItem("google_token", token);
                            setToken(token);
                            const payload = JSON.parse(atob(token.split(".")[1]));
                            setUser({
                                name: payload.name,
                                email: payload.email,
                                picture: payload.picture,
                            });
                        }} />
                    </div>

                    <div className="col col--6" style={{ textAlign: "right", paddingLeft: "5px",paddingRight: "5px" }}>
                        <button
                            onClick={handleSubmit}
                            style={{
                                borderRadius: "8px",
                                border: "1px solid #ccc",
                                padding: "10px",
                                fontSize: "1rem",
                                width: "100%",
                            }}
                        >
                            Enviar
                        </button>
                    </div>


                </div>
            </div>

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
