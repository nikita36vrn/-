package ru.praktika.kotouslugi.model.enums;

public enum RequisitionStatus {

    DRAFT("черновик"),
    FIELD("подача"),
    UNDER_CONSIDERATION("на рассмотрении"),
    ACCEPT("Принята");

    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    RequisitionStatus(String message) {
        this.message = message;
    }
}
