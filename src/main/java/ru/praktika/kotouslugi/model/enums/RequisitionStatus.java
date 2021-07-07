package ru.praktika.kotouslugi.model.enums;

public enum RequisitionStatus {

    DRAFT("черновик"),
    FIELD("подача"),
    UNDER_CONSIDERATION("на рассмотрении"),
    ACCEPTED("принята");

    private String message;
    RequisitionStatus(String message) {
        this.setMessage(message);
    }


    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}


