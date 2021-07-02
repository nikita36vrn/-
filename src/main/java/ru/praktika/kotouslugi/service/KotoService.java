package ru.praktika.kotouslugi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.model.CategoryEntity;
import ru.praktika.kotouslugi.model.KotoServiceEntity;
import ru.praktika.kotouslugi.repository.CategoryRepository;
import ru.praktika.kotouslugi.repository.KotoServiceRepository;

import java.util.LinkedList;
import java.util.List;

@Service
public class KotoService {

    @Autowired
    private KotoServiceRepository kotoServiceRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    public List<KotoServiceEntity> listService() {
        List<KotoServiceEntity> result = new LinkedList<>();
        Iterable<KotoServiceEntity> all = kotoServiceRepository.findAll();
        all.forEach(result::add);
        return result;

    }

    public List<CategoryEntity> listCategories() {
        List<CategoryEntity> result = new LinkedList<>();
        Iterable<CategoryEntity> all = categoryRepository.findAll();
        all.forEach(result::add);
        return result;
    }

    public KotoServiceEntity getKotoServiceById(String id) {
        KotoServiceEntity result = null;
        KotoServiceEntity serviceEntity = kotoServiceRepository.getKotoServiceById(Integer.valueOf(id));
        if (serviceEntity !=null) {
            result = serviceEntity;
        }
        return result;
    }
}
