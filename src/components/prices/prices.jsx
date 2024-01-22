import React from 'react'
import style from './prices.module.css';
import check from './images-prices/check.svg';

const Prices = () => {
    return (
        <>
            <section id='prices'>
                <div className={style.header_prices}>
                    <h2>Стоимость работ</h2>
                    <p>Выберите подходящее для Вас решение и мы поможем Вашему бизнесу!</p>
                </div>

                <div className={style.container_card_prices}>

                    <div className={style.card_prices_item}>
                        <div className={style.label_landing}>
                            <p>Дизайн лендинга</p>
                            <h4>от 14 000 ₽</h4>
                        </div>
                        <div className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Разработка дизайна “под ключ”</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Адаптивные версии</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Мы создаем мобильные</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Мы создаем мобильные</p>
                        </div>
                    </div>

                    <div className={style.card_prices_item}>
                        <div className={style.label_landing}>
                            <p>Дизайн лендинга</p>
                            <h4>от 14 000 ₽</h4>
                        </div>
                        <div className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Разработка дизайна “под ключ”</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Адаптивные версии</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Мы создаем мобильные</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Мы создаем мобильные</p>
                        </div>
                    </div>

                    <div className={style.card_prices_item}>
                        <div className={style.label_landing}>
                            <p>Дизайн лендинга</p>
                            <h4>от 14 000 ₽</h4>
                        </div>
                        <div className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Разработка дизайна “под ключ”</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Адаптивные версии</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Мы создаем мобильные</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Мы создаем мобильные</p>
                        </div>
                    </div>

                    <div className={style.card_prices_item}>
                        <div className={style.label_landing}>
                            <p>Дизайн лендинга</p>
                            <h4>от 14 000 ₽</h4>
                        </div>
                        <div className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Разработка дизайна “под ключ”</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Адаптивные версии</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Мы создаем мобильные</p>
                        </div>
                        <div  className={style.card_list_item}>
                            <img src={check} alt="" />
                            <p>Мы создаем мобильные</p>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Prices