package ru.praktika.kotouslugi.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import ru.praktika.kotouslugi.model.Catalog;

public interface KotoLogRepository extends CrudRepository<Catalog, Long> {

    @Query("from Catalog kse where kse.id = :id")
    Catalog findByServiceId(@Param("id") Integer id);
}

