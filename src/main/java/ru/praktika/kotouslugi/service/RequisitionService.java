package ru.praktika.kotouslugi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.dao.RequisitionRepository;
import ru.praktika.kotouslugi.exception.ServiceException;
import ru.praktika.kotouslugi.model.Field;
import ru.praktika.kotouslugi.model.Requisition;
import ru.praktika.kotouslugi.model.enums.RequisitionStatus;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service
public class RequisitionService {

    @Autowired
    private RequisitionRepository requisitionRepository;

    public List<Requisition> listRequisition() {
        List<Requisition> result = new LinkedList<>();
        Iterable<Requisition> requisitions = requisitionRepository.findAll();
        requisitions.forEach(result::add);
        return result;
    }

    /**
     * Список правильных ветеринаров
     */
    private LinkedList doctorNames = new LinkedList() {{
        add("Иванов");
        add("Петров");
        add("Сидоров");
    }};

    public int createRequisition(Map<String, Object> request) throws ServiceException {
        Requisition requisition = new Requisition("Заявление", RequisitionStatus.DRAFT, 1);
        for (Map.Entry<String, Object> e : request.entrySet()) {
            switch (e.getKey()) {
                case "name":
                    requisition.setName(e.getValue().toString());
                    break;
                case "status":
                    RequisitionStatus status = RequisitionStatus.valueOf(e.getValue().toString().toUpperCase());
                    requisition.setStatus(status);
                    break;
                case "fields":
                    populateFields(requisition, e.getValue());
                    break;
                case "serviceId":
                    requisition.setServiceId((Integer) e.getValue());
                    break;
            }
        }

        Requisition save = requisitionRepository.save(requisition);
        return save.getId();
    }

    public Boolean updateRequisition(Map<String, Object> request) throws ServiceException {
        String id = String.valueOf(request.get("id"));
        if (id == null || id.isEmpty() || id.equals("null"))
            throw new ServiceException("Не указан id заявки");
        Integer idRequisite = Integer.parseInt(id);
        Requisition requisition = requisitionRepository.findById(idRequisite).orElse(null);
        if (requisition == null)
            throw new ServiceException("Указанная заявка не найдена: " + idRequisite);

        for (Map.Entry<String, Object> e : request.entrySet()) {
            switch (e.getKey()) {
                case "name":
                    requisition.setName(e.getValue().toString());
                    break;
                case "status":
                    requisition.setStatus(RequisitionStatus.valueOf(e.getValue().toString().toUpperCase()));
                    break;
                case "fields":
                    requisition.getFields().clear();
                    populateFields(requisition, e.getValue());
                    break;
            }
        }
        requisitionRepository.save(requisition);

        return true;
    }

    /**
     * Заполнение полей заявки переданными значениями
     *
     * @param requisition - заявление
     * @param fields      - значения полей
     * @throws ServiceException - исключения при работе сервиса
     */
    private void populateFields(Requisition requisition, Object fields) throws ServiceException {
        Map<String, Object> map = (Map<String, Object>) fields;
        for (Map.Entry<String, Object> entry : map.entrySet()) {
            String s1 = entry.getKey();
            Object o1 = entry.getValue();
            Field field;
            if (s1.equals("doctorName")) {
                if (doctorNames.contains(o1.toString()))
                    field = new Field(s1, o1.toString());
                else
                    field = null;
            } else
                field = new Field(s1, o1.toString());
            if (field == null) {
                throw new ServiceException("Выберите одного из правильных врачей: " + doctorNames);
            }
            requisition.getFields().add(field);
        }
    }
}
