package ru.praktika.kotouslugi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.model.CategoryEntity;
import ru.praktika.kotouslugi.model.KotoServiceEntity;
import ru.praktika.kotouslugi.repository.CategoryServiceRepository;
import ru.praktika.kotouslugi.repository.KotoServiceRepository;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

@Service
public class KotoService {

    @Autowired
    private KotoServiceRepository kotoServiceRepository;

    @Autowired
    private CategoryServiceRepository categoryServiceRepository;

    public List<KotoServiceEntity> listServices() {
        List<KotoServiceEntity> result = new LinkedList<>();
        Iterable<KotoServiceEntity> all = kotoServiceRepository.findAll();
        all.forEach(result::add);
        return result;
    }

    public List<CategoryEntity> listCategories() {
        List<CategoryEntity> result = new LinkedList<>();
        Iterable<CategoryEntity> all = categoryServiceRepository.findAll();
        all.forEach(result::add);
        return result;
    }

    public KotoServiceEntity getKotoServiceById(String id) {
        KotoServiceEntity result= null;
        KotoServiceEntity serviceEntity= kotoServiceRepository.getKotoServiceById(Integer.parseInt(id));
        if(serviceEntity!=null){
            result=serviceEntity;
        }
        return result;
    }
}
