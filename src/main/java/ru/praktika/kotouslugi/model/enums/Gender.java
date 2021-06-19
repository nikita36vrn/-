package ru.praktika.kotouslugi.model.enums;

public enum Gender {
    Male(0L, "Мужской"),
    Female(1L, "Женский");

    private Long code;
    private String gender;

    Gender(Long code, String gender) {
        this.code = code;
        this.gender = gender;
    }

    public Long getCode() {
        return code;
    }

    public void setCode(Long code) {
        this.code = code;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
}
