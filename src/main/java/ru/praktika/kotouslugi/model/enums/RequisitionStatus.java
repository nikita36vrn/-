package ru.praktika.kotouslugi.model.enums;

public enum RequisitionStatus {
    DRAFT("Черновик"),
    FILED("Подача"),
    UNDER_CONSIDERATION("на рассмотрении"),
    ACCEPTED("Принята");

    private String message;

    RequisitionStatus(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
