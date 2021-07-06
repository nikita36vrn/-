package ru.praktika.kotouslugi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.praktika.kotouslugi.model.Requisition;

public interface RequisitionRepository extends JpaRepository<Requisition, Long> {
}
