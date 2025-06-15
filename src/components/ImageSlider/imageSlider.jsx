import React, { useRef } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import "./imageSlider.css";

function ImageSlider() {
    const images = [
        { index: 0, src: "/img/prints/slider/000.png", alt: "" },
        { index: 1, src: "/img/prints/slider/001.png", alt: "" },
        { index: 2, src: "/img/prints/slider/002.png", alt: "" },
        { index: 3, src: "/img/prints/slider/003.png", alt: "" },
        { index: 4, src: "/img/prints/slider/004.png", alt: "" },
        { index: 5, src: "/img/prints/slider/005.png", alt: "" },
        { index: 6, src: "/img/prints/slider/006.png", alt: "" },
        { index: 7, src: "/img/prints/slider/007.png", alt: "" },
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
                    <span className="image" key={e.index}>
                        <img src={e.src} alt={e.alt} />
                    </span>
                ))
            }
        </div>
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