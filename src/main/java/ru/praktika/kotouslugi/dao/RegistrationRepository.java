package ru.praktika.kotouslugi.dao;

import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.model.CatRegistration;

public interface RegistrationRepository extends CrudRepository<CatRegistration, Integer> {
}
