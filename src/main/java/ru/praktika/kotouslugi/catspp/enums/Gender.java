package ru.praktika.kotouslugi.catspp.enums;

public enum Gender {
    M("Мужской"),
    W("Женский"),
    E("Другое");

    Gender(String value){
        this.value = value;
    }

    private final String value;

    public String getValue(){
        return this.value;
    }

    public static Gender getGenderByString(String oneLetterGender)
    {
        switch (oneLetterGender)
        {
            case ("М"): {
                return M;

            }
            case ("Ж"): {
                return W;
            }
            default: {
                return E;
            }
        }
    }
}
