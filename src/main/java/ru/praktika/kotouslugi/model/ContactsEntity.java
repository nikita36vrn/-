package ru.praktika.kotouslugi.model;

import javax.persistence.*;

@Entity
@Table(name = "contacts")
public class ContactsEntity {

    @Id
    @GeneratedValue
    private Long id;
    @Column(length = 15)
    private String phone;
    private String address;

    public ContactsEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
