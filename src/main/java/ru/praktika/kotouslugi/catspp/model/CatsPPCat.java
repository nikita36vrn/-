package ru.praktika.kotouslugi.catspp.model;

import net.bytebuddy.implementation.bind.annotation.Default;
import org.hibernate.annotations.ColumnDefault;
import ru.praktika.kotouslugi.catspp.enums.FamilyStatus;
import ru.praktika.kotouslugi.catspp.enums.Gender;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;

/*
 *      Cat class by Cats++
 */
@Entity
@Table(name="CatsPP_Cat")
public class CatsPPCat implements Serializable
{
    @Id
    @GeneratedValue
    private int id;
    @NotNull
    private String registration;
    @NotNull
    private String name;
    @NotNull
    private Gender gender;
    @NotNull
    private String breed;
    @NotNull
    private LocalDate birthday;
    @ColumnDefault("0")
    private int kidsCount;

    private FamilyStatus familyStatus;

    public CatsPPCat(){}
    public CatsPPCat(String name, String registration, String gender, String breed, LocalDate birthday, int kidsCount,
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
}
