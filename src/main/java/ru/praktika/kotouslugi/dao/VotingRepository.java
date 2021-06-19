package ru.praktika.kotouslugi.dao;

import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.model.PassportDataEntity;

public interface VotingRepository extends CrudRepository<PassportDataEntity, Long> {
}
