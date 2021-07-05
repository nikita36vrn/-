package ru.praktika.kotouslugi.repository;

import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.model.Requisition;

public interface RequisitionRepository extends CrudRepository<Requisition, Long> {
}
