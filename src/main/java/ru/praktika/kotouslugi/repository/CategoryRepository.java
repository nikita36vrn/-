package ru.praktika.kotouslugi.repository;

import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.model.CategoryEntity;

public interface CategoryRepository  extends CrudRepository<CategoryEntity, Long> {
}
