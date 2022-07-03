package ru.praktika.kotouslugi.catspp.model;


import org.hibernate.validator.constraints.Length;
import org.springframework.data.jpa.repository.Query;
import ru.praktika.kotouslugi.catspp.enums.FamilyStatus;
import ru.praktika.kotouslugi.catspp.enums.Gender;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;


@Entity
@Table(name="CatPerepis", uniqueConstraints = @UniqueConstraint(columnNames = {"PASSPORT_SERIES", "PASSPORT_NUMBER"}))
public class CatPerepis {
    @Id
    @GeneratedValue
    private int id;
    private String registration;
    private String name;
    private Gender gender;
    private String breed;
    private LocalDate birthday;
    private int kidsCount;

    @NotNull
    @Length(min = 4, max = 4)
    private String Passport_series;
    @NotNull
    @Length(min = 6, max = 6)
    private String Passport_number;

    private FamilyStatus familyStatus;

    public CatPerepis(){}
    public CatPerepis(String name, String registration, String gender, String breed, LocalDate birthday, int kidsCount,
               String familyStatus)
    {
        this.name = name;
        this.registration = registration;
        this.gender = Gender.getGenderByString(gender);
        this.breed = breed;
        this.birthday = birthday;
        this.kidsCount = kidsCount;
        this.familyStatus = FamilyStatus.getFSByString(familyStatus);
    }

    public int getId(){
        return this.id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }


    public int getKidsCount() {
        return kidsCount;
    }

    public void setKidsCount(int kidsCount) {
        this.kidsCount = kidsCount;
    }



    public LocalDate getBirthday() {
        return birthday;
    }

    public void setBirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public String getRegistration() {
        return registration;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = Gender.getGenderByString(gender);
    }

    public FamilyStatus getFamilyStatus() {
        return familyStatus;
    }

    public void setFamilyStatus(String familyStatus) {
        this.familyStatus = FamilyStatus.getFSByString(familyStatus);
    }

    public String getPassport_series() {
        return Passport_series;
    }

    public void setPassport_series(String passport_series) {
        Passport_series = passport_series;
    }

    public String getPassport_number() {
        return Passport_number;
    }

    public void setPassport_number(String passport_number) {
        Passport_number = passport_number;
    }
}
