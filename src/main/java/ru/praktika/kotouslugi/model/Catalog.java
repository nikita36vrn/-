package ru.praktika.kotouslugi.model;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "catalog")
public class Catalog {
    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String description;
    private String image;
    private String sex;


    public Catalog() {
    }

   /* public Catalog(int id, String name, String description, String image){
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
    }*/

    public Catalog(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String img) {
        this.image = img;
    }


    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }
}
