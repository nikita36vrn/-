package ru.praktika.kotouslugi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.dao.KotoLogRepository;
import ru.praktika.kotouslugi.model.Catalog;
import ru.praktika.kotouslugi.model.Category;
import ru.praktika.kotouslugi.request.RequestId;

import java.util.LinkedList;
import java.util.List;

@Service
public class KotoLog {

    @Autowired
    private KotoLogRepository kotoLogRepository;
    //@Autowired
    //private CategoryRepository categoryRepository;

    /**
     * Получение списка всех сервисов
     *
     * @return - список сервисов
     */
    public List<Catalog> listServices() {
        List<Catalog> entityList = new LinkedList<>();
        Iterable<Catalog> serviceEntities = kotoLogRepository.findAll();
        serviceEntities.forEach(entityList::add);
        return entityList;
    }

    /**
     * Получение сервиса по его id
     *
     * @param request - запрос с id сервиса
     * @return искомый сервис
     */
    public Catalog getServiceById(RequestId request) {
        Catalog result = null;
        Catalog serviceEntity = kotoLogRepository.findByServiceId(request.getId());
        if (serviceEntity != null)
            result = serviceEntity;
        return result;
    }

    /**
     * получение списка категорий
     *
     * @return список категорий

    public List<Category> listCategories() {
        List<Category> result = new LinkedList<>();
        Iterable<Category> categories = categoryRepository.findAll();
        categories.forEach(result::add);
        return result;
    }*/
}
