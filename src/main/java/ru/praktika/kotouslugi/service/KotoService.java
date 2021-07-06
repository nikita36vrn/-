package ru.praktika.kotouslugi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import ru.praktika.kotouslugi.model.KotoCategoryEntity;
import ru.praktika.kotouslugi.model.KotoServiceEntity;
import ru.praktika.kotouslugi.repository.KotoCategoryRepository;
import ru.praktika.kotouslugi.repository.KotoServiceRepository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class KotoService {


    private final KotoServiceRepository kotoServiceRepository;
    private final KotoCategoryRepository kotoCategoryRepository;

    @Autowired
    public KotoService(KotoServiceRepository kotoServiceRepository, KotoCategoryRepository kotoCategoryRepository) {
        this.kotoServiceRepository = kotoServiceRepository;
        this.kotoCategoryRepository = kotoCategoryRepository;
    }

    public List<KotoServiceEntity> listService(){
        return kotoServiceRepository.findAll().stream().collect(Collectors.toList());
    }

    public List<KotoCategoryEntity> listCategory() {
        return kotoCategoryRepository.findAll().stream().collect(Collectors.toList());
    }

    public KotoServiceEntity kotoServiceEntityById(@RequestBody Integer id){
        if (kotoServiceRepository.findById(Long.valueOf(id)).get() != null) {
            return kotoServiceRepository.findById(Long.valueOf(id)).get();
        }
        return null;
    }
}
