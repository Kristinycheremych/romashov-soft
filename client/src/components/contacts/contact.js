import React, { Component } from 'react';
import style from './contact.module.css';
import axios from 'axios';
import contactEmail from './images-contact/contact_icons_email.svg';
import contactPhone from './images-contact/contact_icons_phone.svg';
import contactGeo from './images-contact/contact_icons_geo.svg';
import contactTime from './images-contact/contact_icons_time.svg';
import contactRight from './images-contact/contactRight.jpg';


const API_PATH = 'http://localhost:3001/posts';

export class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      email: '',
      message: ''
    }

  }


  handleFormSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        console.log(result)
        this.setState({
          sender: result.data
        })
      })
      .catch(error => this.setState({ error: error.message }));

    this.setState({
      firstname: '',
      email: '',
      message: ''
    })

  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {

    return (
      <>
        <section id="contacts">
          <div className={style.header_contacts}>
            <h2>Контакты</h2>
            <p>Оставьте Ваши данные и опишите проблему, и мы обязательно свяжемся с Вами в ближайщее время</p>
          </div>
          <div className={style.container_contacts}>
            <div className={style.form_box}>
              <form onSubmit={this.handleFormSubmit}>
                <label htmlFor='firstname'>Ваше имя</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Ромашов Борис"
                  value={this.state.firstname}
                  onChange={this.changeHandler}
                  required
                />

                <label htmlFor='email'>Электронная почта</label>
                <input
                  type="email"
                  id="email" name="email"
                  placeholder="yourmail@yandex.ru"
                  value={this.state.email}
                  onChange={this.changeHandler}
                  required
                />
                <label htmlFor='message'>Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Ваше сообщение"
                  onChange={this.changeHandler}
                  value={this.state.message}
                  required
                ></textarea>

                <button type="submit"></button>
              </form >

              <div className={style.sender}>
                {this.state.sender &&
                  <div>Спасибо, что связались с нами.</div>
                }
              </div>

            </div>

            <div className={style.contacts_right}>
              <div className={style.contacts_right_information}>
                <div>
                  <h2>Или же свяжитесь с нами самостоятельно</h2>
                  <div className={style.contacts_right_email}>
                    <img src={contactEmail} alt="" />
                    <p>borrom.volgodonsk@yandex.ru</p>
                  </div>
                  <div className={style.contacts_right_phone}>
                    <img src={contactPhone} alt='' />
                    <p>+7 (918) 540 75 51</p>
                  </div>
                </div>
                <div className="">
                  <h2>Наш офис</h2>
                  <div className={style.contacts_right_geo}>
                    <img src={contactGeo} alt="" />
                    <p>г. Волгодонск, пер. Кубаниский, д. 16</p>
                  </div>
                  <div className={style.contacts_right_time}>
                    <img src={contactTime} alt="" />
                    <p>с 8.30 до 16.30</p>
                  </div>
                </div>
              </div>
              <div className={style.contacts_right_img}>
                <img src={contactRight} alt="" />
              </div>
            </div>
          </div>
        </section >
      </>
    )
  }
}

export default ContactForm









