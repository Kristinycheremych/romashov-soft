import React, { Component } from 'react';
import style from'./about-us.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class About extends Component {
    render() {
        var settings = {
            dots: true,
            // variableWidth: true,
            arrows: false,
            dotsClass: 'slick-dots',
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1070,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <section id='about'>
                    <div className={style.header_about}>
                        <h2>О нас</h2>
                        <p>Мы - команда разработчиков и дизайнеров, специализирующихся на мобильных приложениях и веб-сайтах. Наши профессиональные навыки воплощают в жизнь ваши идеи.</p>
                    </div>
                    <div className={style.container_carusel}>
                        <Slider {...settings}>
                            {carouselData.map((item) => (
                                <div className={style.container_carusel_item} key={item}>
                                    <div className={style.container_carusel_img}>
                                        <img src={item.imgPerson} alt='' />
                                    </div>
                                    <div >
                                        {/* <p>{item.name}</p> */}

                                    </div>
                                </div>

                            ))}
                        </Slider>

                    </div>

                </section>
            </>
        )
    }
}

const carouselData = [
    {
        jobTitle: 'Дизайн',
        imgPerson: './employees/borya.jpg',
        name: 'Борис',
    },
    {
        jobTitle: 'Дизайн',
        imgPerson: './employees/kristina.jpg',
        name: 'Борис',
    },
    {
        jobTitle: 'Дизайн',
        imgPerson:' ./employees/alina.jpg',
        name: 'Борис',
    },
    {
        jobTitle: 'Дизайн',
        imgPerson: './employees/roman.jpg',
        name: 'Борис',
    },
    {
        jobTitle: 'Дизайн',
        imgPerson: './employees/evgeniy.jpg',
        name: 'Борис',
    },
    {
        jobTitle: 'Дизайн',
        imgPerson: './employees/ilya.jpg',
        name: 'Борис',
    },
    {
        jobTitle: 'Дизайн',
        imgPerson:'./employees/jebchik.jpg',
        name: 'Борис',
    },
];

export default About