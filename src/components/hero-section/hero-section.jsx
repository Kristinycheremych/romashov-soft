import React, { Component } from 'react';
import style from './hero-section.module.css';
import { Link } from "react-scroll";

export class Main extends Component {


  render() {
    return (
      <>
        <div id="main" className={style.hero_section}>
          <div className={style.container_title}>
            <h1>Это заголовок сайта</h1>
            <p>Это текст, призывающий нажать на кнопку и нанять нашу команду
              для разработки мобильного приложения для вашего бизнеса</p>
            <div>
              <Link smooth spy to="contacts" >
                <button className={style.hero_section_button} type='submit'>
                  Заказать работу
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Main