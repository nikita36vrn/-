package ru.praktika.kotouslugi.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "confirm")
public class VotingConfirmEntity {

    @Id
    @GeneratedValue
    private Long id;
    private Long userId;
    private Long passportId;
    private Long phoneId;
    private Long addressId;
    private Boolean userConfirmed;
    private Boolean confirmProcessingOfPersonalData;

    public VotingConfirmEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getPassportId() {
        return passportId;
    }

    public void setPassportId(Long passportId) {
        this.passportId = passportId;
    }

    public Long getPhoneId() {
        return phoneId;
    }

    public void setPhoneId(Long phoneId) {
        this.phoneId = phoneId;
    }

    public Long getAddressId() {
        return addressId;
    }

    public void setAddressId(Long addressId) {
        this.addressId = addressId;
    }

    public Boolean getUserConfirmed() {
        return userConfirmed;
    }

    public void setUserConfirmed(Boolean userConfirmed) {
        this.userConfirmed = userConfirmed;
    }

    public Boolean getConfirmProcessingOfPersonalData() {
        return confirmProcessingOfPersonalData;
    }

    public void setConfirmProcessingOfPersonalData(Boolean confirmProcessingOfPersonalData) {
        this.confirmProcessingOfPersonalData = confirmProcessingOfPersonalData;
    }
}
