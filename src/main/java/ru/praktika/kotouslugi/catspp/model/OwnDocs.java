package ru.praktika.kotouslugi.catspp.model;


import javax.persistence.*;

@Entity
@Table(name="HumanDocs")
public class OwnDocs {
    @Id
    @GeneratedValue
    private int id;
    @ManyToOne
    private Human Human;
    @OneToOne
    private CatsPPCat CatsPPCat;

    public OwnDocs(){}

    public OwnDocs(Human human, CatsPPCat catsPPCat) {
        this.setHuman(human);
        this.setCat(catsPPCat);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public ru.praktika.kotouslugi.catspp.model.Human getHuman() {
        return Human;
    }

    public void setHuman(ru.praktika.kotouslugi.catspp.model.Human human) {
        Human = human;
    }

    public CatsPPCat getCat() {
        return CatsPPCat;
    }

    public void setCat(CatsPPCat catsPPCat) {
        CatsPPCat = catsPPCat;
    }
}
