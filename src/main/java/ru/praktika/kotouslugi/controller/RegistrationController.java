package ru.praktika.kotouslugi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.praktika.kotouslugi.model.enums.response.BaseResponse;
import ru.praktika.kotouslugi.service.RegistrationService;
import ru.praktika.kotouslugi.model.CatRegistration;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cat_registration")

public class RegistrationController extends BaseController {

    @Autowired
    private RegistrationService registrationService;

    @RequestMapping(value = "listRegistration", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<List<CatRegistration>> listRegistration() {
        return wrapper((s) -> registrationService.listRegistration());
    }
    @RequestMapping(value = "createRegistration", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<Integer> createRegistration(@RequestBody Map<String, Object> request) {
        return wrapper((s) -> registrationService.createRegistration(request));
    }
  /*  @RequestMapping(value = "updateRegistration", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<Boolean> updateRegistration(@RequestBody Map<String, Object> request) {
        return wrapper((s) -> registrationService.updateRegistration(request));
    }*/
}
