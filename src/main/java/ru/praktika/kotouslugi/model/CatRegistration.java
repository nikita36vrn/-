package ru.praktika.kotouslugi.model;

import javax.persistence.*;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = "cat_registration")
public class CatRegistration implements Serializable {
    @Id
    @GeneratedValue
    private int id;
    private String a_name_cat;
    private String b_poroda;
    private int c_age;
    private String d_MC;
    @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    private List<CatRegistration> catRegistrations;

    public CatRegistration(String a_name_cat, String b_poroda, String d_MC, Integer c_age ) {
        this.a_name_cat = a_name_cat;
        this.b_poroda = b_poroda;
        this.d_MC = d_MC;
        this.c_age = c_age;
        this.catRegistrations = new LinkedList<>();;
    }

    public CatRegistration(String s1, String s) {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }


    public String getA_name_cat() {
        return a_name_cat;
    }

    public void setA_name_cat(String a_name_cat) {
        this.a_name_cat = a_name_cat;
    }

    public String getB_poroda() {
        return b_poroda;
    }

    public void setB_poroda(String b_poroda) {
        this.b_poroda = b_poroda;
    }

    public int getC_age() {
        return c_age;
    }

    public void setC_age(int c_age) {
        this.c_age = c_age;
    }

    public String getD_MC() {
        return d_MC;
    }

    public void setD_MC(String d_MC) {
        this.d_MC = d_MC;
    }

    public List<CatRegistration> getCatRegistrations() {
        return catRegistrations;
    }

    public void setCatRegistrations(List<CatRegistration> catRegistrations) {
        this.catRegistrations = catRegistrations;
    }
}
