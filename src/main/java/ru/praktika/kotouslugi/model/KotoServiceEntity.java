package ru.praktika.kotouslugi.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="service")


public class KotoServiceEntity {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private String descriprion;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "service_category",
            joinColumns = @JoinColumn(name = "category_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name= "service_id", referencedColumnName = "id")
    )

    private List<CategoryEntity> categories;


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

    public String getDescriprion() {
        return descriprion;
    }

    public void setDescriprion(String descriprion) {
        this.descriprion = descriprion;
    }

    public KotoServiceEntity() {
    }

    public List<CategoryEntity> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoryEntity> categories) {
        this.categories = categories;
    }
}
