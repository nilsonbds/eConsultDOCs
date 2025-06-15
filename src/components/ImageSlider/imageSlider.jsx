import React, { useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight, LuZoomIn, LuX } from "react-icons/lu";
import "./imageSlider.css";

function ImageSlider() {
    const [image, setImage] = useState(null);
    const [fade, setFade] = useState(false);

    const images = [
        { index: 0, src: "/img/prints/slider/000.png", alt: "Painel inicial" },
        { index: 1, src: "/img/prints/slider/001.png", alt: "Atendimentos" },
        { index: 2, src: "/img/prints/slider/002.png", alt: "Clientes e Grupos" },
        { index: 3, src: "/img/prints/slider/003.png", alt: "Resultados" },
        { index: 4, src: "/img/prints/slider/004.png", alt: "Alertas" },
        { index: 5, src: "/img/prints/slider/005.png", alt: "Consolidação Financeira" },
        { index: 6, src: "/img/prints/slider/006.png", alt: "Cadastro de Clientes e Grupos" },
        { index: 7, src: "/img/prints/slider/007.png", alt: "Análise de Score" },
    ];

    const scrollInterval = useRef(null);

    function startScroll(direction) {
        if (scrollInterval.current) return; // evita múltiplos
        scrollInterval.current = setInterval(() => {
            moveList(direction);
        }, 100);
    };

    function stopScroll() {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
    };

    function moveList(direction) {
        const content = document.querySelector('.image-container');
        const offset = 180;
        if (direction === 'before') {
            content.scrollBy({ left: -offset, behavior: 'smooth' });
        } else {
            content.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return <div className="image-slider">
        <div className="image-container">
            {
                images.map((e) => (
                    <>
                        <span className="image" key={e.index}>
                            <span className="zoom"><LuZoomIn onClick={() => { setImage(e) }} /></span>
                            <img src={e.src} alt={e.alt} />
                        </span>
                    </>
                ))
            }
        </div>
        {
            image && (
                <div className="image-zoom">
                    <span className="display-title">{image.alt}<LuX onClick={() => { setImage(null) }} /></span>
                    <div className="image-content">
                        <div className="event-close" onClick={() => setImage(null)} />
                        <div className="btn-set next" onClick={() => {
                            let i = image.index - 1;
                            if (i < 0) {
                                i = images.length - 1;
                            };
                            setFade(true);
                            setTimeout(() => {
                                setImage(images[i]);
                                setFade(false);
                            }, 200);
                        }}><LuChevronLeft /></div>
                        <img src={image.src} alt={image.alt} className={!fade ? 'in' : 'out'} />
                        <div className="btn-set prev" onClick={() => {
                            let i = image.index + 1;
                            if (i == images.length) {
                                i = 0;
                            };
                            setFade(true);
                            setTimeout(() => {
                                setImage(images[i]);
                                setFade(false);
                            }, 200);
                        }}><LuChevronRight /></div>
                    </div>
                </div>

            )
        }
        <div className="actions">
            <span
                className="btn next"
                aria-label="Anterior"
                onMouseDown={() => startScroll('before')}
                onMouseUp={stopScroll}
                onMouseLeave={stopScroll}
                onTouchStart={() => startScroll('before')}
                onTouchEnd={stopScroll}
            ><LuChevronLeft /></span>
            <span
                className="btn prev"
                aria-label="Posterior"
                onMouseDown={() => startScroll('after')}
                onMouseUp={stopScroll}
                onMouseLeave={stopScroll}
                onTouchStart={() => startScroll('after')}
                onTouchEnd={stopScroll}
            ><LuChevronRight /></span>
        </div>
    </div>
};

export default ImageSlider;