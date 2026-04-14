import React from 'react';
import OriginalFooter from '@theme-original/DocItem/Footer';

export default function FooterWrapper(props) {
    return (
        <>
            {/* Footer original do Docusaurus */}
            <OriginalFooter {...props} />

            {/* Bloco de CTA personalizado */}
            <div
                style={{
                    marginTop: '2.5rem',
                    padding: '2rem 1.5rem',
                    borderRadius: '16px',
                    background: '#ecebebff',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: 'darkcyan' }}>
                    Comece a organizar seu consultório hoje mesmo
                </h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', opacity: 0.95, color: 'gray' }}>
                    Crie sua conta gratuita no eConsult e dê o primeiro passo agora!
                </p>
                <a
                    href="https://econsult.app.br/psicologia"
                    style={{
                        display: 'inline-block',
                        backgroundColor: 'darkcyan',
                        color: 'white',
                        fontWeight: 'bold',
                        padding: '0.8rem 1.8rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        transition: 'all 0.2s ease-in-out',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#0c423cff')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = 'darkcyan')}
                >
                    🚀 TESTE GRÁTIS
                </a>
            </div>

            {/* Bloco secundário com link geral */}
            <div
                style={{
                    marginTop: '2rem',
                    paddingTop: '1rem',
                    textAlign: 'center',
                    fontSize: '0.95rem',
                    color: '#444',
                }}
            >
                💡 Gostou deste conteúdo? Explore também a{' '}
                <a href="/" style={{ color: '#0B57D0', fontWeight: 600 }}>
                    Central de Ajuda eConsult
                </a>{' '}
                e o{' '}
                <a href="/blog" style={{ color: '#0B57D0', fontWeight: 600 }}>
                    nosso Blog
                </a>.
            </div>
        </>
    );
}
