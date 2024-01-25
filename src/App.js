import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './components/hero-section/hero-section';
import Services from './components/services/services';
import Footer from './components/footer/footer';
import Contacts from './components/contacts/contact';
import Accordion from './components/questions/accordion';
import Prices from './components/prices/prices';

const data = [
  {
      question: 'Сколько времени занимает разработка мобильного приложения?',
      answer: 'Время разработки может варьироваться в зависимости от сложности проекта. Мы всегда стремимся к эффективной и быстрой разработке, учитывая ваши потребности и сроки.',
  },
  {
      question: 'Какие технологии вы используете для создания мобильных приложений?',
      answer: 'Мы работаем с современными технологиями и языками программирования, какими как Swift, Kotlin,React, Native и Flutter. Выбор технологии зависит от вашего проекта и целей.',
  },
  {
      question: 'Какие виды проектов вы реализовали ранее?',
      answer: 'Мы имеем опыт в создании разнообразных приложений, включая приложения для бизнеса, образования, здравоохранения и развлечений. Посмотрите наше фортфолио для примеров.',
  },
  {
      question: 'Как происходит процесс сотрудничества с вашей командой?',
      answer: 'Мы начинаем с внимательного прослушивания ваших требований и идей. Затем разрабатываем концепциюб дизайн и переходим к реализации. Мы включаем в каждый этап процесса, чтобы удовлетворить ваши потребности.',
  }
]

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main/>
        <Services />
        <Prices/>
        <Contacts/>
        <Accordion data={data}/>
        <Footer/>
      </>
    )
  }
}

export default App