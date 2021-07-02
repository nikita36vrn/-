package ru.praktika.kotouslugi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import ru.praktika.kotouslugi.model.KotoServiceEntity;

import java.util.Optional;

public interface KotoServiceRepository extends CrudRepository<KotoServiceEntity, Long> {

    @Query("from KotoServiceEntity kse.id = :id")
    KotoServiceEntity getKotoServiceById(@Param("id") Integer id);
}
