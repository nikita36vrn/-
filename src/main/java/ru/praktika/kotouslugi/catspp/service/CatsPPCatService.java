package ru.praktika.kotouslugi.catspp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.catspp.dao.CatsPPCatRepository;
import ru.praktika.kotouslugi.catspp.model.CatsPPCat;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


/*
 *      Cat Service by Cats++
 */
@Service
public class CatsPPCatService {

    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");
    @Autowired
    private CatsPPCatRepository catsPPCatRepository;

    public int createCat(Map<String, Object> request) {
        CatsPPCat catsPPCat = new CatsPPCat();
        request.forEach((p, v)->{           //parameter, value
            switch (p){
                case "name":
                    catsPPCat.setName(v.toString());
                    break;
                case "registration":
                    catsPPCat.setRegistration(v.toString());
                    break;
                case "breed":
                    catsPPCat.setBreed(v.toString());
                    break;
                case "birthday":
                    catsPPCat.setBirthday(LocalDate.parse(v.toString(), formatter));
                    break;
                case "kidsCount":
                    catsPPCat.setKidsCount(Integer.parseInt(v.toString()));
                    break;
                case "gender":
                    catsPPCat.setGender(v.toString());
                    break;
            }
        });
        return catsPPCatRepository.save(catsPPCat).getId();
    }

    public List<CatsPPCat> getCatList()
    {
        List<CatsPPCat> result = new ArrayList<>();
        Iterable<CatsPPCat> cats = catsPPCatRepository.findAll();
        cats.forEach(result::add);
        return result;
    }
}
