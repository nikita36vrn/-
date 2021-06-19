package ru.praktika.kotouslugi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.dao.ContactsRepository;
import ru.praktika.kotouslugi.dao.VotingConfirmRepository;
import ru.praktika.kotouslugi.dao.VotingRepository;
import ru.praktika.kotouslugi.model.ContactsEntity;
import ru.praktika.kotouslugi.model.PassportDataEntity;
import ru.praktika.kotouslugi.model.VotingConfirmEntity;

import java.util.Map;
import java.util.Random;

@Service
public class VotingService {

    @Autowired
    private VotingRepository votingRepository;

    @Autowired
    private ContactsRepository contactsRepository;

    @Autowired
    private VotingConfirmRepository votingConfirmRepository;


    /**
     * Получение паспортных данных
     *
     * @param id - идентификатор записи о паспортных данных
     * @return - список сервисов
     */
    public PassportDataEntity getPassportData(Long id) {
        return votingRepository.findById(id).orElse(null);
    }

    /**
     * получение номера телефона
     *
     * @param id - идентификатор записи контакнтых данных
     * @return номер телефона
     */
    public String getPhone(Long id) {
        ContactsEntity contactsEntity = contactsRepository.findById(id).orElse(null);
        if (contactsEntity != null) {
            return contactsEntity.getPhone();
        }
        return null;
    }

    /**
     * получение адреса регистрации по месту жительства
     *
     * @param id - идентификатор записи контакнтых данных
     * @return адреса регистрации
     */
    public String getAddress(Long id) {
        ContactsEntity contactsEntity = contactsRepository.findById(id).orElse(null);
        if (contactsEntity != null) {
            return contactsEntity.getAddress();
        }
        return null;
    }

    public Boolean confirm(Map<String, Object> request) {

        //todo идентификатор пользоватлея
        Long userId = 0L;
        VotingConfirmEntity confirmEntity = votingConfirmRepository.findByUserId(userId);
        if (confirmEntity == null) {
            confirmEntity = new VotingConfirmEntity();
            confirmEntity.setUserId(userId);
        }
        VotingConfirmEntity finalConfirmEntity = confirmEntity;
        request.forEach((s, o) -> {
            switch (s) {
                case "passport":
                    finalConfirmEntity.setPassportId(Long.parseLong(o.toString()));
                    break;
                case "phone":
                    finalConfirmEntity.setPhoneId(Long.parseLong(o.toString()));
                    break;
                case "address":
                    finalConfirmEntity.setAddressId(Long.parseLong(o.toString()));
                    break;
                case "userConfirm":
                    finalConfirmEntity.setUserConfirmed(Boolean.parseBoolean(o.toString()));
                    break;
                case "confirmProcessingOfPersonalData":
                    finalConfirmEntity.setConfirmProcessingOfPersonalData(Boolean.parseBoolean(o.toString()));
                    break;
            }
        });
        votingConfirmRepository.save(finalConfirmEntity);

        return null;
    }

    public Boolean getVoting() {
        //todo идентификатор пользоватлея
        Long userId = 0L;
        VotingConfirmEntity confirmEntity = votingConfirmRepository.findByUserId(userId);
        if (confirmEntity == null) {
            Random random = new Random();
            return random.nextBoolean();
        }
        return (confirmEntity.getPassportId() != null
                && confirmEntity.getPhoneId() != null
                && confirmEntity.getAddressId() != null
                && confirmEntity.getUserConfirmed() != null
                && confirmEntity.getConfirmProcessingOfPersonalData() != null
        );
    }
}
