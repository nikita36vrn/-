package ru.praktika.kotouslugi.catspp.service;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.catspp.dao.CatPerepisRepository;
import ru.praktika.kotouslugi.catspp.model.CatPerepis;
import ru.praktika.kotouslugi.catspp.model.CatsPPCat;
import ru.praktika.kotouslugi.catspp.util.CatStatistic;
import ru.praktika.kotouslugi.catspp.util.formatter;
import ru.praktika.kotouslugi.model.Cat;

import java.time.LocalDate;
import java.util.*;

@Service
public class CatPerepisService {
    @Autowired
    private CatPerepisRepository catPerepisRepository;


    public int createCat(Map<String, Object> request) {
        CatPerepis cat = new CatPerepis();
        request.forEach((k, v) -> {           //parameter, value
            switch (k) {
                case "name":
                    cat.setName(v.toString());
                    break;
                case "registration":
                    cat.setRegistration(v.toString());
                    break;
                case "breed":
                    cat.setBreed(v.toString());
                    break;
                case "birthday":
                    cat.setBirthday(LocalDate.parse(v.toString(), formatter.getFormatter()));
                    break;
                case "kidsCount":
                    cat.setKidsCount(Integer.parseInt(v.toString()));
                    break;
                case "gender":
                    cat.setGender(v.toString());
                    break;
                case "familyStatus":
                    cat.setFamilyStatus(v.toString());
                    break;
                case "Passport_series":
                    cat.setPassport_series(v.toString());
                    break;
                case "Passport_number":
                    cat.setPassport_number(v.toString());
                    break;
            }
        });
        return catPerepisRepository.save(cat).getId();
    }

    public CatPerepis updateCat(Map<String, Object> request)
    {
        Optional<CatPerepis> cat = catPerepisRepository.findById(Integer.parseInt(request.get("id").toString()));
        if (cat.isPresent())
        {
            CatPerepis catsPerepis = cat.get();
            request.forEach((k, v)->{
                switch (k){
                    case "name":
                        catsPerepis.setName(v.toString());
                        break;
                    case "registration":
                        catsPerepis.setRegistration(v.toString());
                        break;
                    case "breed":
                        catsPerepis.setBreed(v.toString());
                        break;
                    case "birthday":
                        catsPerepis.setBirthday(LocalDate.parse(v.toString(), formatter.getFormatter()));
                        break;
                    case "kidsCount":
                        catsPerepis.setKidsCount(Integer.parseInt(v.toString()));
                        break;
                    case "gender":
                        catsPerepis.setGender(v.toString());
                        break;
                    case "familyStatus":
                        catsPerepis.setFamilyStatus(v.toString());
                        break;
                    case "Passport_series":
                        catsPerepis.setPassport_series(v.toString());
                        break;
                    case "Passport_number":
                        catsPerepis.setPassport_number(v.toString());
                        break;
                }
            });
            return catPerepisRepository.save(catsPerepis);
        }
        return new CatPerepis();
    }

    public Map<String, List<Map<String, Object>>> getStatistic()
    {
        Map<String, List<Map<String, Object>>> statistic = new HashMap<>();
        statistic.put("name", catPerepisRepository.countName());
        statistic.put("gender", catPerepisRepository.countGender());
        statistic.put("breed", catPerepisRepository.countBreed());
        statistic.put("kidsCount", catPerepisRepository.countKids());
        statistic.put("familyStatus", catPerepisRepository.countFamilyStatus());
        return statistic;
    }
}
