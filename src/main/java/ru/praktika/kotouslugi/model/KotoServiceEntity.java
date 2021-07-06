package ru.praktika.kotouslugi.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "service")
public class KotoServiceEntity {

    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String description;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "service_category",
            joinColumns = @JoinColumn(name = "category_id",
                    referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "service_id",
                    referencedColumnName = "id")
    )
    private List<KotoCategoryEntity> categories;

    public List<KotoCategoryEntity> getCategories() {
        return categories;
    }

    public void setCategories(List<KotoCategoryEntity> categories) {
        this.categories = categories;
    }

    public KotoServiceEntity() {}

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

}

