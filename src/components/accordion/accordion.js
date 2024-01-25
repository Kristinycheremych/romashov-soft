import React, { useState } from 'react'
import { AccordionItem } from './accordionItem'
import style from './accordion.module.css'

export const Accordion = ({ data }) => {

    const [openId, setId] = useState(null)

    return (
        <>
            <section id="accordion">
                <div className={style.header_questions}>
                    <h2>Частые вопросы</h2>
                    <p>Здесь мы попытаемся ответить на Ваши самые часто задаваемые вопросы</p>
                </div>

                <ul className={style.accordion}>
                    {data?.map((data, id) => {
                        return (
                            <AccordionItem
                                onClick={() => (id === openId ? setId(null) : setId(id))}
                                data={data}
                                isOpen={id === openId}
                                key={id} />
                        )
                    })}
                </ul>
            </section>

        </>
    )

}

export default Accordion

