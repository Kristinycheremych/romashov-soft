/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import style from './questions.module.css';
import { useState } from 'react';
import crossClose from './images-questions/crossClose.svg';
import crossOpen from './images-questions/crossOpen.svg';


function Questions() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <>
            <section id="questions">
                <div className={style.header_questions}>
                    <h2>Частые вопросы</h2>
                    <p>Здесь мы попытаемся ответить на Ваши самые часто задаваемые вопросы</p>
                </div>

                <div className={style.wrapper}>
                    <div className={style.accordion}>
                        {data.map((item, i) => {
                            return (
                                <div className={style.item} key={i}>
                                    <div className={style.title} onClick={() => toggle(i)}>
                                        <p>{item.question}</p>
                                        <div>{selected === i ? <img src={crossClose} /> : <img src={crossOpen} />}</div>
                                    </div>
                                    <div className={selected === i ? 'content show' : 'content'}>
                                        {item.answer}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </section>
        </>
    )
}

const data = [
    {
        question: 'Сколько времени занимает разработка мобильного приложения?',
        answer: 'Время разработки может варьироваться в зависимости от сложности проекта. Мы всегда стремимся к эффективной и быстрой разработке, учитывая ваши потребности и сроки.',
    },
    {
        question: 'Какие технологии вы используете для создания мобильных приложений?',
        answer: 'Время разработки может варьироваться в зависимости от сложности проекта. Мы всегда стремимся к эффективной и быстрой разработке, учитывая ваши потребности и сроки.',
    },
    {
        question: 'Какие виды проектов вы реализовали ранее?',
        answer: 'Время разработки может варьироваться в зависимости от сложности проекта. Мы всегда стремимся к эффективной и быстрой разработке, учитывая ваши потребности и сроки.',
    },
    {
        question: 'Как происходит процесс сотрудничества с вашей командой?',
        answer: 'Время разработки может варьироваться в зависимости от сложности проекта. Мы всегда стремимся к эффективной и быстрой разработке, учитывая ваши потребности и сроки.',
    }
]



export default Questions


