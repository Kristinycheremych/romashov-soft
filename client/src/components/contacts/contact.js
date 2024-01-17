import React, { useState } from 'react'
import style from './contact.module.css';
import contactEmail from './images-contact/contact email.svg';
import contactPhone from './images-contact/contact phone.svg';
import telegram from './images-contact/contact telegram_icon.svg';
import vk from './images-contact/contact vk_icon.svg';
import firebaseDB from "./firebase";


function ContactsForm() {

  const [firstname, setFirstname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const [response, setResponse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firebaseDB.child("user").push({
      firstname: firstname,
      email: email,
      phone: phone
    })
      .then((response) => {
        setResponse(response);
      })
      // .then(() => {
      //   alert("Сообщение успешно отправлено")
      // })
      .catch((error) => {
        alert(error.message)
      })
    setFirstname('')
    setEmail('')
    setPhone('')
  };

  return (
    <>
      <div className={style.container_contact_subtract}>
        <span className={style.contact_subtract_top}></span>
      </div>
      <div className={style.bg_contact}>

        <section id="contacts">
          <div className={style.container_contacts}>

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
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                />

                <label htmlFor='email'>Электронная почта</label>
                <input
                  type="email"
                  id="email" name="email"
                  placeholder="yourmail@yandex.ru"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label htmlFor='message'>Номер телефона</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7 (918) 540 75 51"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                ></input>

                <input
                  type="checkbox"
                  id="checkbox"
                  defaultChecked={false}
                  
                />

                <label htmlFor="checkbox">Я принимаю соглашение сайта об обработке персональных данных</label>
                
                <br></br>

                <button type="submit"></button>
              </form >

              {/* <div className='sender'>
                {this.state.sender &&
                  <div>Спасибо, что связались с нами.</div>
                }
              </div> */}

              <div className={style.message}>
                {response && (
                  <p>
                    Данные успешно отправлены
                  </p>
                )}
              </div>

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









