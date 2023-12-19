import React from 'react';
import { Link } from "react-scroll";
import style from './footer.module.css';
import instagram from './images-footer/footer_instagram.svg';
import telegram from './images-footer/footer_telegram.svg';
import vk from './images-footer/footer_vk.svg';

const Footer = () => {
    return (
        <>
            <footer>
                <div className={style.footer_container}>
                    <nav className={style.menu_footer}>
                        <ul>
                            <li>
                                <Link smooth spy to="about">
                                    О нас
                                </Link>
                            </li>
                            <li>
                                <Link smooth spy to="services">
                                    Услуги
                                </Link>
                            </li>
                            <li>
                                <Link smooth spy to="contacts">
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link smooth spy to="questions">
                                    Частые вопросы
                                </Link>
                            </li>
                            <li>
                                <Link smooth spy to="reviews">
                                    Отзывы
                                </Link>
                            </li>
                        </ul>

                        <div className={style.social}>
                            <a href='https://vk.com/' target='_blank' rel="noreferrer">
                                <img src={vk} alt=''/>
                            </a>
                            <a href='https://telegram.org/?1&ysclid=lpx2ewlfdr615575302' target='_blank' rel="noreferrer">
                                <img src={telegram} alt=''/>
                            </a>
                            <a href='https://t.me/s/instagram' target='_blank' rel="noreferrer">
                                <img src={instagram} alt=''/>
                            </a>
                        </div>
                        <div className={style.footer_information}>
                            <p>г. Волгодонск, пер. Кубанский, д. 16</p>
                            <p>borrom.volgodonsk@yandex.ru</p>
                            <p>+7 (918) 540 75 51</p>
                        </div>
                        <div className={style.copyright}>
                            <p>© “Ромашов Софт”, 2023</p>
                        </div>
                    </nav>

                </div>
            </footer>
        </>
    )
}

export default Footer