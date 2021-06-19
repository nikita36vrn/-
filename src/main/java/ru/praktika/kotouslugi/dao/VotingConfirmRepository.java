package ru.praktika.kotouslugi.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import ru.praktika.kotouslugi.model.VotingConfirmEntity;

public interface VotingConfirmRepository extends CrudRepository<VotingConfirmEntity, Long> {

    VotingConfirmEntity findByUserId(@Param("user_id") Long userId);
}
