import React, { useState } from 'react';
import style from './navbar.module.css';
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    // Это синхронизирует ваше состояние с открытием/закрытием меню
    // с помощью средств по умолчанию, например, щелчка по крестику, нажатия клавиши ESC и т.д.
    const handleStateChange = state => {
        setNav(state)
    }

    // Это можно использовать для закрытия меню, например, когда пользователь нажимает на пункт меню
    const closeMenu = () => {
        setNav(false)
    }
    return (
        <>
            <header className={style.header}>
                <div className={style.container}>
                    <div className={style.box}>

                        <div className={style.logo_image} onClick={state => handleStateChange(state)}>
                            <Link activeClass="active" smooth spy to="main" >
                                Logo
                            </Link>
                        </div>
                        <ul
                            className={
                                nav ? [style.menu, style.active].join(' ') : [style.menu]
                            }
                        >
                            <li>
                                <Link activeClass={style.actives} smooth spy to="services"  onClick={() => {
                                    closeMenu()}}>
                                    Услуги
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={style.actives} smooth spy to="prices"  onClick={() => {
                                    closeMenu()}}>
                                    Стоимость работ
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={style.actives} smooth spy to="contacts" onClick={() => {
                                    closeMenu()}}>
                                    Контакты
                                </Link>
                            </li>
                            <li>
                                <Link activeClass={style.actives} smooth spy to="accordion" onClick={() => {
                                    closeMenu()}}>
                                    Частые вопросы
                                </Link>
                            </li>
                            {/* <li>
                                <Link activeClass={style.actives} smooth spy to="reviews" onClick={() => {
                                    closeMenu()}}>
                                    Отзывы
                                </Link>
                            </li> */}
                        </ul>

                        <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                        </div>

                    </div>

                </div>

            </header>
        </>
    );
};

export default Navbar;