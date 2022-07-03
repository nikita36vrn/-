package ru.praktika.kotouslugi.catspp.util;

public class CatStatistic {
    private String field;
    private Long count;

    public CatStatistic(String field, Long count)
    {
        this.setField(field);
        this.setCount(count);
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
