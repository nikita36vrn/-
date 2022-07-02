package ru.praktika.kotouslugi.catspp.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="Vaccination")
public class Vaccination {
    @Id
    @GeneratedValue
    private int id;
    @NotNull
    @Length(min=11, max=11)
    private String Passport;
    private String Name_Vaccine;
    private String Status;

    public Vaccination(String Passport, String name_Vaccine, String status)
    {
        this.Passport = Passport;
        this.Name_Vaccine = name_Vaccine;
        this.Status = status;
    }


    public String getPassport() {
        return Passport;
    }

    public void setPassport(String passport) {
        Passport = passport;
    }

    public String getName_Vaccine() {
        return Name_Vaccine;
    }

    public void setName_Vaccine(String name_Vaccine) {
        Name_Vaccine = name_Vaccine;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String status) {
        Status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
