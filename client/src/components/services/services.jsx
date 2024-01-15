import React from 'react';
import style from './services.module.css';
import phone from './images-services/services icon phone.svg';
import design from './images-services/services icon design.svg';
import technical from './images-services/services icon technical.svg';
import veb from './images-services/services icon web.svg';
import seo from './images-services/services icon seo.svg';


const Services = () => {
    return (
        <>
            <section id="services">
                <div className={style.header_services}>
                    <h2>Услуги</h2>
                    <p>Мы предлагаем широкий спектр услуг, включая разработку мобильных и веб-приложений, а также дизайн интерфейсов и техническую поддержку</p>
                </div>

                <div className={style.card_services}>

                    <div className={style.card_services_item}>
                        <div className={style.card_services_img}>
                            <img src={phone} alt=""/>
                        </div>
                        <div className={style.card_services_information}>
                            <h3>Мобильные приложения</h3>
                            <p>
                                Мы создаем мобильные приложения с учетом ваших потребностей и задач
                            </p>
                        </div>
                    </div>

                    <div className={style.card_services_item}>
                        <div className={style.card_services_img}>
                            <img src={design} alt=""/>
                        </div>
                        <div className={style.card_services_information}>
                            <h3>Дизайн интерфейса</h3>
                            <p>
                                Мы разрабатываем современные и привлекательные интерфейсы
                            </p>
                        </div>
                    </div>

                    <div className={style.card_services_item}>
                        <div className={style.card_services_img}>
                            <img src={technical} alt=""/>
                        </div>
                        <div className={style.card_services_information}>
                            <h3>Техническая поддержка</h3>
                            <p>
                                Предоставляем техническую поддержку для разработанного продукта
                            </p>
                        </div>
                    </div>
                    <div className={style.card_services_item}>
                        <div className={style.card_services_img}>
                            <img src={veb} alt=""/>
                        </div>
                        <div className={style.card_services_information}>
                            <h3>Web-разработка</h3>
                            <p>
                                Занимаемся созданием сайтов и веб-приложений для вашего бизнеса
                            </p>
                        </div>
                    </div>

                    <div className={style.card_services_item}>
                        <div className={style.card_services_img}>
                            <img src={seo} alt=""/>
                        </div>
                        <div className={style.card_services_information}>
                            <h3>SEO-оптимизация</h3>
                            <p>
                                Поможем повысить конверсию вашего мобильного приложения или сайта
                            </p>
                        </div>
                    </div>
                </div>


              
            </section>
        </>
    )
}

export default Services