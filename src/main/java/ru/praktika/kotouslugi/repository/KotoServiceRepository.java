package ru.praktika.kotouslugi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import ru.praktika.kotouslugi.model.KotoServiceEntity;

public interface KotoServiceRepository extends CrudRepository<KotoServiceEntity, Long> {

    @Query("from KotoServiceEntity kse where kse.id = :id")
    KotoServiceEntity getKotoServiceById(@Param("id") Integer id);

}
