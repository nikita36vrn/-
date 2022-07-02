package ru.praktika.kotouslugi.catspp.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;

@Entity
@Table(name="OldCatDocs", uniqueConstraints = @UniqueConstraint(columnNames = {"PASSPORT_SERIES", "PASSPORT_NUMBER"}))
public class OldCatDocs
{
    @Id
    @GeneratedValue
    private int id;

    @Length(min = 4, max = 4)
    private String Passport_series;

    @Length(min = 6, max = 6)
    private String Passport_number;

    private String Reason;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private CatsPPCat CatsPPCat;

    public OldCatDocs(){}

    public OldCatDocs(String series, String number, String reason, CatsPPCat CatsPPCat)
    {
        this.setPassport_number(number);
        this.setPassport_series(series);
        this.setReason(reason);
        this.setCat(CatsPPCat);
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

    public String getReason() {
        return Reason;
    }

    public void setReason(String reason) {
        Reason = reason;
    }

    public CatsPPCat getCat() {
        return CatsPPCat;
    }

    public void setCat(CatsPPCat catsPPCat) {
        CatsPPCat = catsPPCat;
    }
}
