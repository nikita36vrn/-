package ru.praktika.kotouslugi.catspp.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="CatDocs", uniqueConstraints = @UniqueConstraint(columnNames = {"PASSPORT_SERIES", "PASSPORT_NUMBER"}))
public class CatDocs {
    @Id
    @GeneratedValue
    private int id;
    @NotNull
    @Length(min = 4, max = 4)
    private String Passport_series;
    @NotNull
    @Length(min = 6, max = 6)
    private String Passport_number;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private CatsPPCat CatsPPCat;

    public CatDocs(){}

    public CatDocs(String series, String number, CatsPPCat catsPPCat)
    {
        this.setPassport_series(series);
        this.setPassport_number(number);
        this.setID_cat(catsPPCat);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public CatsPPCat getCat() {
        return this.CatsPPCat;
    }

    public void setID_cat(CatsPPCat CatsPPCat) {
        this.CatsPPCat = CatsPPCat;
    }
}
