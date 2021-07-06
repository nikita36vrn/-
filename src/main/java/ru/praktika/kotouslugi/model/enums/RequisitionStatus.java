package ru.praktika.kotouslugi.model.enums;

public enum RequisitionStatus {
    DRAFT("черновик"),
    FILED("подача"),
    UNDER_CONSIDERATION("на расмотрении"),
    ACCEPTED("принята");

    private String message;

    RequisitionStatus(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

}
