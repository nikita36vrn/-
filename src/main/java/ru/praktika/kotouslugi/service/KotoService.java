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
    private KotoServiceRepository KotoServiceRepository;

    @Autowired
    private CategoryRepository CategoryRepository;

    public List<KotoServiceEntity> listService() {
        List<KotoServiceEntity> result = new LinkedList<>();
        Iterable<KotoServiceEntity> all = KotoServiceRepository.findAll();
        all.forEach(result::add);
        return result;
    }

    public List<CategoryEntity> listCategories() {
        List<CategoryEntity> result = new LinkedList<>();
        Iterable<CategoryEntity> all = CategoryRepository.findAll();
        all.forEach(result::add);
        return result;
    }

    public KotoServiceEntity getServiceById(String id) {
        KotoServiceEntity result = null;
        KotoServiceEntity byId = KotoServiceRepository.getKotoServiceById(Integer.parseInt(id));
        if (byId !=null) {
            result = byId;
        }
        return result;
    }
}
