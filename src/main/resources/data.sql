-- service
INSERT INTO service
values (0,
        'При рождении трех и более котят вы можете получить субсидии в виде пачки корма.',
        'Регистрация рождения котят');
INSERT INTO service
values (1,
        'Подходи ответственно к здоровью питомца. Здоровый кот - мало хлопот.',
        'Запись на приём к ветеринару');
INSERT INTO service
values (2,
        'Уже забыли как выглядит чистый кот. Тогда мы идём к вам.',
        'Помыть кота');
INSERT INTO service
values (3,
        'Оформи заявление на получение корбки уже сегодня',
        'Социальная помощь котосемьям');
INSERT INTO service
values (4,
        'То лапы ломит, то хвост отваливается? Пора на заслуженный отдых',
        'Пенсионный котофонд');
INSERT INTO service
values (5,
        'Зарегистрируй имущество и спи спокойно',
        'Оформление лотка в котореестр');
INSERT INTO service
values (6,
        'Зарегистрируйся на HOTCATS и будь счастлив',
        'HotCats');


-- category
INSERT INTO category
values (0, 'Семья и дети');
INSERT INTO category
values (1, 'Медицина');
INSERT INTO category
values (2, 'Социальные услуги');
INSERT INTO category
values (3, 'Недвижимость');
INSERT INTO category
values (4, 'Знакомства');

-- service_to_category
INSERT INTO service_category
values (0, 0);
INSERT INTO service_category
values (1, 1);
INSERT INTO service_category
values (2, 1);
INSERT INTO service_category
values (3, 2);
INSERT INTO service_category
values (4, 2);
INSERT INTO service_category
values (5, 3);
INSERT INTO service_category
values (6, 4);

--catalog

INSERT INTO catalog
values(0,'Pretty doge', 'https://i.imgur.com/yhvwDRJ.jpeg','Doge','кот');
INSERT INTO catalog
values(1,'Sad Pepe', 'https://avatars.mds.yandex.net/get-images-cbir/1750085/3XKhFO38GVy3g7tk8YYOow1409/ocr','Pepe','кошкодевочка');
INSERT INTO catalog
values(2,'Hot_wiskas','https://images-ext-1.discordapp.net/external/q9djok_uuVt1OJVrWnvqU7Z74sMgukE2jf5e-VMpMQY/https/cdnn21.img.ria.ru/images/155338/96/1553389692_0%3A39%3A900%3A939_1920x0_80_0_0_1481d5ca80b69f182d402e26cd0ed39c.jpg?width=670&height=670','Kiska','кошкодевочка')