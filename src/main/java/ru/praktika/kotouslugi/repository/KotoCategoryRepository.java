package ru.praktika.kotouslugi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.praktika.kotouslugi.model.KotoCategoryEntity;

public interface KotoCategoryRepository extends JpaRepository<KotoCategoryEntity, Long> {
}
