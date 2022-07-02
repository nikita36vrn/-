package ru.praktika.kotouslugi.catspp.enums;

public enum FamilyStatus {
    M("Женат"),         //Married
    NM("Не женат"),           //Not Married
    U("Неизвестно");         //Unknown

    private final String value;
    FamilyStatus(String value)
    {
        this.value = value;
    }

    public String getValue(){return this.value;}

    public static FamilyStatus getFSByString(String familyStatus)
    {
        switch (familyStatus)
        {
            case "Женат":
                return M;
            case "Не женат":
                return NM;
            default:
                return U;
        }
    }
}
