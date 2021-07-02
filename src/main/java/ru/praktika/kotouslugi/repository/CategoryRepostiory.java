package ru.praktika.kotouslugi.repository;

import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.model.CategoryEntity;

public interface CategoryRepostiory extends CrudRepository<CategoryEntity,Long> {
}
