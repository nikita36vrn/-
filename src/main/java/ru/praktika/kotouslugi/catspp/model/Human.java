package ru.praktika.kotouslugi.catspp.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Table(name="Human", uniqueConstraints = @UniqueConstraint(columnNames = {"PASSPORT_SERIES", "PASSPORT_NUMBER"}))
public class Human {
    @Id
    @GeneratedValue
    private int id;
    @NotNull
    private String Surname;
    @NotNull
    private String Name;
    private String Middlename;
    @NotNull
    private LocalDate Birthday;
    private String Place_Of_Residence;

    @NotNull
    @Length(min = 4, max = 4)
    private String Passport_series;

    @NotNull
    @Length(min = 6, max = 6)
    private String Passport_number;

    public Human(){}
    public Human(String Surname, String Name, String Middlename, LocalDate Birthday, String place_Of_Residence,
                 String Passport_series, String passport_number)
    {
        this.Surname = Surname;
        this.Name = Name;
        this.Middlename = Middlename;
        this.Birthday = Birthday;
        this.Place_Of_Residence = place_Of_Residence;
        this.Passport_series = Passport_series;
        this.Passport_number = passport_number;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSurname() {
        return Surname;
    }

    public void setSurname(String surname) {
        Surname = surname;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getMiddlename() {
        return Middlename;
    }

    public void setMiddlename(String middlename) {
        Middlename = middlename;
    }

    public LocalDate getBirthday() {
        return Birthday;
    }

    public void setBirthday(LocalDate birthday) {
        Birthday = birthday;
    }

    public String getPlace_Of_Residence() {
        return Place_Of_Residence;
    }

    public void setPlace_Of_Residence(String place_Of_Residence) {
        Place_Of_Residence = place_Of_Residence;
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
