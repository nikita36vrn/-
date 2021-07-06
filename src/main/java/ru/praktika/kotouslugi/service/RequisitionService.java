package ru.praktika.kotouslugi.service;

import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.model.Field;
import ru.praktika.kotouslugi.model.Requisition;
import ru.praktika.kotouslugi.model.enums.RequisitionStatus;
import ru.praktika.kotouslugi.repository.RequisitionRepository;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class RequisitionService {

    private final RequisitionRepository requisitionRepository;

    @Autowired
    public RequisitionService(RequisitionRepository requisitionRepository) {
        this.requisitionRepository = requisitionRepository;
    }

    public List<Requisition> listRequisition() {
        return requisitionRepository.findAll().stream().collect(Collectors.toList());
    }

    public Long createRequisition(Map<String, Object> request) {

        Requisition requisition = new Requisition("Заявление", RequisitionStatus.DRAFT, 1);
        request.forEach((s, o) -> {
            switch (s){
                case "name":
                    requisition.setName(o.toString());
                    break;
                case "status":
                    RequisitionStatus status = RequisitionStatus.valueOf(o.toString().toUpperCase());
                    requisition.setStatus(status);
                    break;
                case "fields":
                    ((Map<String, Object>)o).forEach((s1, o1) -> {
                        Field field = new Field(s1, o1.toString());
                        requisition.getFields().add(field);
                    });
                    break;
                case "serviceId":
                    requisition.setServiceId((Integer) o);
                    break;

            }
        });

        Requisition save = requisitionRepository.save(requisition);
        return save.getId();
    }

    public Boolean uppdateRequisition(Map<String, Object> request) {
        String id = String.valueOf(request.get("id"));
        if (id == null || id.isEmpty() || id.equals("null")) {
            return false;
        }


        Requisition requisition = requisitionRepository.findById(Long.parseLong(id)).orElse(null);
        if (requisition == null) {
            return false;
        }
        request.forEach((s, o) -> {
            switch (s) {
                case "name":
                    requisition.setName(o.toString());
                    break;
                case "status":
                    RequisitionStatus status = RequisitionStatus.valueOf(o.toString().toUpperCase());
                    requisition.setStatus(status);
                    break;
                case "fields":
                    ((Map<String, Object>) o).forEach((s1, o1) -> {
                        Field field = new Field(s1, o1.toString());
                        requisition.getFields().add(field);
                    });
                    break;
                case "serviceId":
                    requisition.setServiceId((Integer) o);
                    break;

            }
        });

        Requisition save = requisitionRepository.save(requisition);
        return true;
    }
}

