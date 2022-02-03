package ru.praktika.kotouslugi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.dao.CatalogRepository;
import ru.praktika.kotouslugi.dao.RequisitionRepository;
import ru.praktika.kotouslugi.exception.ServiceException;
import ru.praktika.kotouslugi.model.Catalog;
import ru.praktika.kotouslugi.model.Field;
import ru.praktika.kotouslugi.model.Requisition;
import ru.praktika.kotouslugi.model.enums.RequisitionStatus;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service
public class CatsService {

    @Autowired
    private CatalogRepository catalogRepository;

    public List<Catalog> listRequisition() {
        List<Catalog> result = new LinkedList<>();
        Iterable<Catalog> catalogs = catalogRepository.findAll();
        catalogs.forEach(result::add);
        return result;
    }

    public int createCats(Map<String, Object> request) {

        Catalog catalog = new Catalog();
        request.forEach((s, o) -> {
            switch (s) {

                /*case "id":
                    catalog.setId(Integer.parseInt(o.toString()));
                    break;*/

                case "name":
                    catalog.setName(o.toString());
                    break;
                case "description":
                    catalog.setDescription(o.toString());
                    break;
                case "image":
                    catalog.setImage(o.toString());
                    break;
                case "sex":
                    catalog.setSex(o.toString());
            }
        });

        Catalog save = catalogRepository.save(catalog);
        return save.getId();
    }

    /*public Boolean updateCats(Map<String, Object> request) throws ServiceException {
        String id = String.valueOf(request.get("id"));
        if (id == null || id.isEmpty() || id.equals("null"))
            throw new ServiceException("Не указан id заявки");
        Integer idRequisite = Integer.parseInt(id);
        Requisition requisition = requisitionRepository.findById(idRequisite).orElse(null);
        if (requisition == null)
            throw new ServiceException("Указанная заявка не найдена: " + idRequisite);

        request.forEach((s, o) -> {
            switch (s) {
                case "name":
                    requisition.setName(o.toString());
                    break;
                case "status":
                    requisition.setStatus(RequisitionStatus.valueOf(o.toString().toUpperCase()));
                    break;
                case "fields":
                    requisition.getFields().clear();
                    ((Map<String, Object>) o).forEach((s1, o1) -> {
                        Field field = new Field(s1, o1.toString());
                        requisition.getFields().add(field);
                    });
                    break;
            }
        });
        requisitionRepository.save(requisition);

        return true;
    }*/
}
