package ru.praktika.kotouslugi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.praktika.kotouslugi.Sevice.RequisitionService;
import ru.praktika.kotouslugi.exception.ServiceException;
import ru.praktika.kotouslugi.model.Requisition;


import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/requsition")
public class RequsitionController {

    @Autowired
    private RequisitionService requisitionServise;

    @RequestMapping(value = "listRequisition", method = RequestMethod.POST,
            produces = "application/json")
    public List<Requisition> listRequisition() {
        return requisitionServise.listRequisition();
    }

    @RequestMapping(value = "createRequisition", method = RequestMethod.POST,
            produces = "application/json")
    public Integer createRequisition(@RequestBody Map<String, Object> request) {
        return requisitionServise.createRequisition(request);
    }

    @RequestMapping(value = "updateRequisition", method = RequestMethod.POST,
            produces = "application/json")
    public Boolean updateRequisition(@RequestBody Map<String, Object> request) throws ServiceException {
        return requisitionServise.updateRequisition(request);

    }
}