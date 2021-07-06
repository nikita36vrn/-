package ru.praktika.kotouslugi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.praktika.kotouslugi.model.KotoServiceEntity;

import java.util.Optional;

public interface KotoServiceRepository extends JpaRepository<KotoServiceEntity, Long> {
}
