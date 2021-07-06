package ru.praktika.kotouslugi.model;

import ru.praktika.kotouslugi.model.enums.RequisitionStatus;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "requisition")
public class Requisition {
    private Long id;
    private String name;
    private RequisitionStatus status;
    private Integer serviceId;
    @OneToMany(fetch = FetchType.LAZY, cascade = {CascadeType.ALL})
    private List<Field> fields;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public Integer getServiceId() {
        return serviceId;
    }

    public void setServiceId(Integer serviceId) {
        this.serviceId = serviceId;
    }

    public Requisition(){

    }
    public Requisition(String name, RequisitionStatus status, Integer serviceId) {
        this.name = name;
        this.status = status;
        this.serviceId = serviceId;
    }
//    public Requisition(Long id, String name, RequisitionStatus status, Integer serviceId, List<Field> fields) {
//        this.id = id;
//        this.name = name;
//        this.status = status;
//        this.serviceId = serviceId;
//        this.fields = fields;
//    }

    public List<Field> getFields() {
        return fields;
    }

    public void setFields(List<Field> fields) {
        this.fields = fields;
    }


}
