import React, { useRef } from 'react';
import { ReactComponent as CrossOpen } from './images-questions/crossOpen.svg';
import style from './accordion.module.css'

export const AccordionItem = ({ data, onClick, isOpen }) => {

    const itemRef = useRef(null)

    return (
        <>
            <div className={style.wrapper}>
                <li className={style.accordion_item}>
                    <button className={style.accordion_header} onClick={() => onClick()}>
                    <CrossOpen className={`accordion_arrow ${isOpen ? "active" : ""}`} />
                        {data.question}

                        <div className={style.accordion_collapse}
                            style={isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }}>

                            <div className={style.accordion_body} ref={itemRef}>
                                {data.answer}
                            </div>
                        </div>

                    </button>
                </li>
            </div>
        </>
    )
}
