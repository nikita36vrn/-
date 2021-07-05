package ru.praktika.kotouslugi.model;


import ru.praktika.kotouslugi.model.enums.RequisitionStatus;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="Requisition")
public class Requisition {

    @Id
    @GeneratedValue
    private int id;
    private String name;
    private RequisitionStatus status;
    private int serviceID;

    @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    private List<Field> fields;


    public Requisition() {
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

    public RequisitionStatus getStatus() {
        return status;
    }

    public void setStatus(RequisitionStatus status) {
        this.status = status;
    }

    public int getServiceID() {
        return serviceID;
    }

    public void setServiceID(int serviceID) {
        this.serviceID = serviceID;
    }

    public List<Field> getFields() {
        return fields;
    }

    public void setFields(List<Field> fields) {
        this.fields = fields;
    }

    public Requisition(String name, RequisitionStatus status, int serviceID) {
        this.name = name;
        this.status = status;
        this.serviceID = serviceID;

    }
}
