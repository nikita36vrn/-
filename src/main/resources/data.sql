-- service
INSERT INTO service
values (0,
        'При рождении трех и более котят вы можете получить субсидии в виде пачки корма.',
        'Регистрация рождения котят!');
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
        'Еще нет ветеринарного паспорта? Тогда создайте заявку на получение прямо сейчас!',
        'Получение ветеринарного паспорта');
INSERT INTO service
values (7,
        'Предотврати болезнь котика. Запиши его на вакцинацию!',
        'Вакцинация');
INSERT INTO service
values (8,
        'Не можете отнести своего котика в ветеринарную клинику? Вызовите ветеринара на дом',
        'Запись на вызов ветеринара');
INSERT INTO service
values (9,
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
values (6, 1);
INSERT INTO service_category
values (7, 1);
INSERT INTO service_category
values (8, 1);
INSERT INTO service_category
values (9, 4);

CREATE TABLE otdels (
                    id_otdel INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                    name_otdel VARCHAR(50),
                    city_otdel VARCHAR(20),
                    city_id VARCHAR(10),
                    adr_otdel VARCHAR(20),
                    phone_otdel VARCHAR(20),
);

-- otdels
INSERT INTO otdels
values (1, 'Ветеринарная клиника № 3', 'Воронеж', 1, 'ул. Ленина д.45', '+(951)456-90-90');
INSERT INTO otdels
values (2, 'Ветеринарная клиника № 1', 'Воронеж', 1, 'ул. Революции д.92', '+7(951)456-75-28');
INSERT INTO otdels
values (3, 'Ветеринарная клиника № 5432', 'Москва', 2, 'ул. Большевиков д.45', '+7(951)456-90-90');
INSERT INTO otdels
values (4, 'Ветеринарная клиника № 2', 'Воронеж', 1, 'ул. Хользунова д.22', '+7(951)321-14-87');
INSERT INTO otdels
values (5, 'Ветеринарная клиника № 3', 'Москва', 2, 'ул. Арбат д.15', '+7(951)111-11-11');

CREATE TABLE cities_ot (
                        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                        name VARCHAR(50),
);

INSERT INTO cities_ot
values (1,'Воронеж');
INSERT INTO cities_ot
values (2,'Москва');
INSERT INTO cities_ot
values (3,'Санкт-Петербург');


--catalog
INSERT INTO catalog
values(0,'Pretty doge', 'https://i.imgur.com/yhvwDRJ.jpeg','Doge','кот');
INSERT INTO catalog
values(1,'Sad Pepe', 'https://avatars.mds.yandex.net/get-images-cbir/1750085/3XKhFO38GVy3g7tk8YYOow1409/ocr','Pepe','кошкодевочка');
INSERT INTO catalog
values(2,'Hot_wiskas','https://images-ext-1.discordapp.net/external/q9djok_uuVt1OJVrWnvqU7Z74sMgukE2jf5e-VMpMQY/https/cdnn21.img.ria.ru/images/155338/96/1553389692_0%3A39%3A900%3A939_1920x0_80_0_0_1481d5ca80b69f182d402e26cd0ed39c.jpg?width=670&height=670','Kiska','кошкодевочка')
