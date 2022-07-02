package ru.praktika.kotouslugi.catspp.dao;

import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.catspp.model.CatDocs;

public interface CatDocsRepository extends CrudRepository<CatDocs, Integer> {
}
