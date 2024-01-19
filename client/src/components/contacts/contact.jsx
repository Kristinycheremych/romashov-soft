import React, { useState } from 'react'
import style from './contact.module.css';
import contactEmail from './images-contact/contact email.svg';
import contactPhone from './images-contact/contact phone.svg';
import telegram from './images-contact/contact telegram_icon.svg';
import vk from './images-contact/contact vk_icon.svg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "./firebase";


function ContactsForm() {

  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [agreement, setAgreement] = useState(false)

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }
  const handleAgreementChange = (e) => {
    setAgreement(e.target.checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`checked: ${agreement}`);

    // TODO: Разбить на каждую

    if (!firstname) {
      console.log("Пожалуйста, введите фамилию и имя!")
    }
    if (!email) {
      console.log("Пожалуйста, введите электронную почту!")
    }
    if (!phone) {
      console.log("Пожалуйста, введите номер телефона!")
    }
    if (!agreement) {
      console.log("Требуется соглашение")
    }
    else {
      toast.success("Сообщение успешно отправлено");
    }


    firebaseDB.child("user").push({
      firstname: firstname,
      email: email,
      phone: phone,
      agreement: agreement
    })
      .catch((error) => {
        alert(error.message)
      })

    setFirstname('')
    setEmail('')
    setPhone('')
    setAgreement('')
  };

  return (
    <>
      <div className={style.container_contact_subtract}>
        <span className={style.contact_subtract_top}></span>
      </div>
      <div className={style.bg_contact}>

        <section id="contacts">
          <div className={style.container_contacts}>
            <ToastContainer position="top-right" />

            {/* правая часть */}
            <div className={style.contacts_right}>
              <div className={style.contacts_right_information}>
                <h3>Свяжитесь с нами</h3>
                <p>
                  Или оставьте Ваши данные и мы обязательно свяжемся с Вами в ближайшее время
                </p>
                <div className={style.contacts_right_email}>
                  <img src={contactEmail} alt="" />
                  <p>borrom.volgodonsk@yandex.ru</p>
                </div>
                <div className={style.contacts_right_phone}>
                  <img src={contactPhone} alt='' />
                  <p>+7 (918) 540 75 51</p>
                </div>
                <div>
                  <img src={telegram} alt="" />
                  <img src={vk} alt="" />
                </div>
              </div>
            </div>

            {/* левая часть */}
            <div className={style.form_box}>
              <form onSubmit={handleSubmit}>
                <label htmlFor='firstname'>Ваше имя</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Ромашов Борис"
                  value={firstname}
                  onChange={handleFirstnameChange}
                  required
                />
                 <span className="error"></span>
                

                <label htmlFor='email'>Электронная почта</label>
                <input
                  type="email"
                  id="email" name="email"
                  placeholder="yourmail@yandex.ru"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                 <span className="error"></span>
                

                <label htmlFor='message'>Номер телефона</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7 (918) 540 75 51"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                />
                 <span className="error"></span>

                <div className={style.checkbox}>
                  <input className={style.pushbutton} type="checkbox"
                    checked={agreement}
                    onChange={handleAgreementChange}
                    required
                  />

                  <label> Я принимаю соглашение сайта об обработке <a href='https://store.bezlimit.ru/files/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D1%81%20%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf?ysclid=lri1x4jcjy502783038'>персональных данных</a>.</label>
                  <span className="error"></span>
                </div>

                <button type="submit" >Отправить</button>
              </form >

            </div>
          </div>
        </section >
      </div>
      <div className={style.container_contact_subtract}>
        <span className={style.contact_subtract_bottom}></span>
      </div>
    </>
  )
}

export default ContactsForm









