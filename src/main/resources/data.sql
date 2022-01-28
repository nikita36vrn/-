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
        'Оформление Документов',
        'Документы на все случаи жизни');


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
values (4, 'ВетПаспорт');

-- service_to_category
INSERT INTO service_category
values (0, 0);
INSERT INTO service_category
values (1, 1);
INSERT INTO service_category
values (2, 2);
INSERT INTO service_category
values (3, 2);
INSERT INTO service_category
values (4, 2);
INSERT INTO service_category
values (5, 3);
INSERT INTO service_category
values (6, 4);

-- CAT_INFO
CREATE TABLE CAT_INFO
(
    NAME VARCHAR(50) NOT NULL,
    DATE DATE NOT NULL,
    GENDER CHAR NOT NULL,
    BREED VARCHAR(50) NOT NULL,
    COLOR_EYE VARCHAR(50) NOT NULL,
    TEXT VARCHAR(500),
    PHOTO VARBINARY(MAX) NOT NULL,
    OWNER VARCHAR(100) NOT NULL,
)
;
-- DOCUMENTS
CREATE TABLE DOCUMENTS
(
    NAME VARCHAR(100) NOT NULL,
    DATE DATE NOT NULL,
    DOC LONGBLOB NOT NULL,
    SEND_DOC LONGBLOB,
    DATE_LOAD DATE NOT NULL,
)
;
-- PEDIGREE
CREATE TABLE PEDIGREE
(
    NUMBER INTEGER NOT NULL,
    CLUB VARCHAR(100) NOT NULL,
    DOC LONGBLOB NOT NULL,
    ACCOUNT INTEGER NOT NULL,
    PENALTIES INTEGER NOT NULL,
    DOC_1 LONGBLOB NOT NULL,
    DOC_2 LONGBLOB NOT NULL,
)
;
-- BUY_CAT
CREATE TABLE BUY_CAT
(
    NURSERY_NAME VARCHAR(100) NOT NULL,
    NUMBER_CARD INTEGER(100) NOT NULL,
    DOC_TRADING LONGBLOB NOT NULL,
    PASPORT_COPY LONGBLOB NOT NULL,
)
;
-- TRAVEL_CAT
CREATE TABLE TRAVEL_CAT
(
    NUMBER_CHIP INTEGER,
    DOC LONGBLOB NOT NULL,
    DATE_TIME DATETIME,
    PKVP VARCHAR,
    CERTIFICATE VARCHAR(500),
    RECEIVED_CERTIFICATE LONGBLOB NOT NULL,
    DATE DATE NOT NULL,
)
;