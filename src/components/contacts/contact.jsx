import React from 'react'
import style from './contact.module.css';
import contactEmail from './images-contact/contact email.svg';
import contactPhone from './images-contact/contact phone.svg';
import telegram from './images-contact/contact telegram_icon.svg';
import vk from './images-contact/contact vk_icon.svg';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseDB from "./firebase";
import { Formik } from 'formik'
import * as yup from 'yup'


function ContactsForm() {

  const validationsSchema = yup.object().shape({
    firstname: yup.string().typeError('Должно быть строкой').required('Введите имя и фамилию'),
    email: yup.string().email('Введите верный email').required('Введите электронную почту'),
    phone: yup.string().required('Введите номер телефона'),
    agreement: yup.boolean().required("Обязательно").oneOf([true], 'Требуется согласие')
  })

  return (
    <>

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
              <Formik

                initialValues={{
                  firstname: '',
                  email: '',
                  phone: '',
                  agreement: false
                }}
                validateOnBlur
                onSubmit={(values, { resetForm }) => {
                  toast.success("Сообщение успешно отправлено");

                  firebaseDB.child("user").push({
                    values
                  })
                    .catch((error) => {
                      alert(error.message)
                    })
                  resetForm();
                }}
                validationSchema={validationsSchema}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
                  <div>

                    <p>
                      <label htmlFor='firstname'>Ваше имя</label><br />
                      <input
                        type="text"
                        name='firstname'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstname} placeholder="Ромашов Борис"
                      />
                    </p>
                    {touched.firstname && errors.firstname && <p className={style.error}>{errors.firstname}</p>}

                    <p>
                      <label htmlFor='email'>Электронная почта</label><br />
                      <input
                        type="email"
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} placeholder="yourmail@yandex.ru"
                      />
                    </p>
                    {touched.email && errors.email && <p className={style.error}>{errors.email}</p>}

                    <p>
                      <label htmlFor='phone'>Номер телефона</label><br />
                      <input
                        type="text"
                        name='phone'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        placeholder="+7 (918) 540 75 51"
                      />
                    </p>

                    {touched.phone && errors.phone && <p className={style.error}>{errors.phone}</p>}
                    <div className={style.checkbox}>
                      <label htmlFor='agreement'>
                        <input
                          type="checkbox"
                          name='agreement'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.agreement}
                          checked={values.agreement}
                        />
                        Я принимаю соглашение сайта об обработке <a href='https://store.bezlimit.ru/files/%D0%A1%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D0%B5%20%D1%81%20%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%BE%D0%B9%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf?ysclid=lri1x4jcjy502783038'>персональных данных</a>.
                      </label>
                    </div>

                    {touched.agreement && errors.agreement && <p className={style.error}>{errors.agreement}</p>}

                    <button className={style.contatct_button}
                      disabled={!isValid && !dirty}
                      onClick={handleSubmit}
                      type="submit"
                    >Отправить</button>

                  </div>
                )}
              </Formik>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default ContactsForm









