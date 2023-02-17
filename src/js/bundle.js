import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
// import { ScrollSmoother } from "gsap/ScrollSmoother"; // в базовой версии недоступен из пакета и подключается отдельно
import LazyLoad from "vanilla-lazyload";

'use strict';

const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});

document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if(!ScrollTrigger.isTouch){
        // Smooth scroll
        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.5,
            effects: true // для указания отдельным блокам скорости:
            // data-speed - скорость, относительно единицы (1)
            // data0lag - задержка, относительно единицы (1)
        });

        gsap.fromTo('.layer__header', {opacity: 1}, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.layer__header', // эл-т триггера (тот эд-т, который появляется в поле зрения и будут происходить следующие события:)
                start: '-200', // начинаем анимацию, когда эл-т находится в центре
                end: '100', // где эл-т находится, когда совершили действие
                scrub: true // возвращаем предыдущее значение (когда листаем обратно, то эл-т снова появится)
            }
        });

        gsap.fromTo('.main-article__content', {opacity: 0}, {
            opacity: 1,
            scrollTrigger: {
                trigger: '.main-article__content', // эл-т триггера (тот эд-т, который появляется в поле зрения и будут происходить следующие события:)
                start: '-850', // начинаем анимацию, когда эл-т находится в центре
                end: '-300', // где эл-т находится, когда совершили действие
                scrub: true // возвращаем предыдущее значение (когда листаем обратно, то эл-т снова появится)
            }
        });
    }

});