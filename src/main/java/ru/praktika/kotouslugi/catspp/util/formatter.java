package ru.praktika.kotouslugi.catspp.util;

import java.time.format.DateTimeFormatter;

public class formatter {
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
    public static DateTimeFormatter getFormatter(){return formatter;}
}
