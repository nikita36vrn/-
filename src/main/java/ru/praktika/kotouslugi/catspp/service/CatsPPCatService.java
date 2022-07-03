package ru.praktika.kotouslugi.catspp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.catspp.controller.CatsPPCatController;
import ru.praktika.kotouslugi.catspp.dao.CatsPPCatRepository;
import ru.praktika.kotouslugi.catspp.model.CatsPPCat;
import ru.praktika.kotouslugi.catspp.util.formatter;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;


/*
 *      Cat Service by Cats++
 */
@Service
public class CatsPPCatService {

    @Autowired
    private CatsPPCatRepository catsPPCatRepository;

    public int createCat(Map<String, Object> request) {
        CatsPPCat catsPPCat = new CatsPPCat();
        request.forEach((k, v)->{           //key, value
            switch (k){
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
                    catsPPCat.setBirthday(LocalDate.parse(v.toString(), formatter.getFormatter()));
                    break;
                case "kidsCount":
                    catsPPCat.setKidsCount(Integer.parseInt(v.toString()));
                    break;
                case "gender":
                    catsPPCat.setGender(v.toString());
                    break;
                case "familyStatus":
                    catsPPCat.setFamilyStatus(v.toString());
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

    public CatsPPCat getCat(int id)
    {
        Optional<CatsPPCat> cat = catsPPCatRepository.findById(id);
        if (cat.isPresent())
        {
            return cat.get();
        }
        return new CatsPPCat();
    }

    public void deleteCat(int id)
    {
        Optional<CatsPPCat> cat = catsPPCatRepository.findById(id);
        if (cat.isPresent()){
            catsPPCatRepository.delete(cat.get());
        }
    }

    public CatsPPCat updateCat(Map<String, Object> request)
    {
        Optional<CatsPPCat> cat = catsPPCatRepository.findById(Integer.parseInt(request.get("id").toString()));
        if (cat.isPresent())
        {
            CatsPPCat catsPPCat = cat.get();
            request.forEach((k, v)->{           //parameter, value
                switch (k){
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
                        catsPPCat.setBirthday(LocalDate.parse(v.toString(), formatter.getFormatter()));
                        break;
                    case "kidsCount":
                        catsPPCat.setKidsCount(Integer.parseInt(v.toString()));
                        break;
                    case "gender":
                        catsPPCat.setGender(v.toString());
                        break;
                    case "familyStatus":
                        catsPPCat.setFamilyStatus(v.toString());
                        break;
                }
            });
            return catsPPCatRepository.save(catsPPCat);
        }
        return new CatsPPCat();
    }
}
