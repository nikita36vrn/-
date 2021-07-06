package ru.praktika.kotouslugi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.praktika.kotouslugi.model.KotoCategoryEntity;
import ru.praktika.kotouslugi.model.KotoServiceEntity;
import ru.praktika.kotouslugi.service.KotoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProductServiceController {

    @Autowired
    private KotoService kotoService;

    @RequestMapping(value = "listService", method = RequestMethod.POST, produces = "application/json")
    public List<KotoServiceEntity> listService(){
        return kotoService.listService();
    }

    @RequestMapping(value = "listCategory", method = RequestMethod.POST, produces = "application/json")
    public List<KotoCategoryEntity> listCategory(){
        return kotoService.listCategory();
    }

    @RequestMapping(value = "getServiceById", method = RequestMethod.POST, produces = "application/json")
    public KotoServiceEntity kotoServiceEntity(Integer id){
        return kotoService.kotoServiceEntityById(id);
    }

}
