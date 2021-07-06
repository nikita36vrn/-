package ru.praktika.kotouslugi.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.praktika.kotouslugi.model.CategoryEntity;
import ru.praktika.kotouslugi.model.KotoServiceEntity;
import ru.praktika.kotouslugi.service.KotoService;

import java.util.List;

@RestController
@RequestMapping("/api")

public class ProductServiceController {

    @Autowired
    private KotoService kotoService;

    @RequestMapping(value = "hello", method = RequestMethod.POST, produces = "application/json")
    public String hello() {
        return "hello world";
    }
    @RequestMapping(value = "listService", method = RequestMethod.POST, produces = "application/json")
    public List<KotoServiceEntity> listService() {
        return kotoService.listService();
    }

    @RequestMapping(value = "listCategories", method = RequestMethod.POST, produces = "application/json")
    public List<CategoryEntity> listCategories(){
        return kotoService.listCategories();
    }

    @RequestMapping(value = "getServiceById", method = RequestMethod.POST, produces = "application/json")
    public KotoServiceEntity getKotoServiceById(@RequestBody String id) {
        return kotoService.getKotoServiceById(id);
    }
}
