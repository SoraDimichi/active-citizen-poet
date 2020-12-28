# Добротворение (бэкенд)

Портал для создания анонимных гражданских инициатив.

## Технологии

* body-parser
* cors
* express
* formik
* mongoose

## Запуск проекта

>Для работы проекта необходимо установить mongodb по ссылке
>https://www.mongodb.com/try/download/community?jmp=docs

0) Необходимо запустить Compass
1) Необходимо создать базу citizendb
2) В базе создать коллекцию events и импортировать events.json из папки db 
3) В базе создать коллекцию verses и импортировать verses.json из папки db
   
_Автоматически созданную коллекцию citizendb можно удалить_

`npm run dev` — запускает сервер с hot-reload на 3000 порту

