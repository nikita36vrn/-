package ru.praktika.kotouslugi.dao;

import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.model.Catalog;

public interface CatalogRepository extends CrudRepository<Catalog, Integer> {
}
