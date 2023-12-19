//используем express для сoздания простого веб-сервера, который работает на порту 3001

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//если наше приложение отправляет запрос get н аэтот маршрут мы отвечаем(используя res) нашими данными json


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

