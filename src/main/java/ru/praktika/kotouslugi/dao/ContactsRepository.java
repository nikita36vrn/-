package ru.praktika.kotouslugi.dao;

import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.model.ContactsEntity;

public interface ContactsRepository extends CrudRepository<ContactsEntity, Long> {
}
