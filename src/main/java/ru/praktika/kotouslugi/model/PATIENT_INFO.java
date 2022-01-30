package ru.praktika.kotouslugi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "field")
public class PATIENT_INFO implements Serializable {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String age;
    private String Breed;
    private String Gender;
    private String value;

    public PATIENT_INFO() {
    }

    public PATIENT_INFO(String name,String age,String Breed,String Gender,String value) {
        this.name = name;
        this.age = age;
        this.Breed = Breed;
        this.Gender = Gender;
        this.value = value;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getBreed() {
        return Breed;
    }

    public void setBreed(String Breed) {
        this.Breed = Breed;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String Gender) {
        this.Gender = Gender;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

//    public Requisition getRequisition() {
//        return requisition;
//    }
//
//    public void setRequisition(Requisition requisition) {
//        this.requisition = requisition;
//    }
}
