package ru.praktika.kotouslugi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.praktika.kotouslugi.model.KotoServiceEntity;
import ru.praktika.kotouslugi.model.Requisition;
import ru.praktika.kotouslugi.service.KotoService;
import ru.praktika.kotouslugi.service.RequisitionService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/reauisition")
public class RequisitionController {
    @Autowired
    private RequisitionService requisitionService;

    @RequestMapping(value = "listRequisition", method = RequestMethod.POST, produces = "application/json")
    public List<Requisition> listRequisition(){
        return requisitionService.listRequisition();
    }

    @RequestMapping(value = "createRequisition", method = RequestMethod.POST, produces = "application/json")
    public Long createRequisition(@RequestBody Map<String, Object> request){
        return requisitionService.createRequisition(request);
    }
    @RequestMapping(value = "updateRequisition", method = RequestMethod.POST, produces = "application/json")
    public Boolean updateRequisition(@RequestBody Map<String, Object> request){
        return requisitionService.uppdateRequisition(request);
    }
}
