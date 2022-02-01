package ru.praktika.kotouslugi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.praktika.kotouslugi.exception.ServiceException;
import ru.praktika.kotouslugi.model.Catalog;
import ru.praktika.kotouslugi.model.Category;
import ru.praktika.kotouslugi.model.KotoServiceEntity;
import ru.praktika.kotouslugi.model.response.BaseResponse;
import ru.praktika.kotouslugi.request.RequestId;
import ru.praktika.kotouslugi.service.KotoLog;
import ru.praktika.kotouslugi.service.KotoService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductServiceController extends BaseController {

    @Autowired
    private KotoService kotoService;
    @Autowired
    private KotoLog kotoLog;

    @RequestMapping(value = "hello", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<String> hello() {
        return wrapper((s) -> "hello test!!");
    }

    @RequestMapping(value = "testException", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<String> testException() {
        return wrapper((s) -> {
            throw new ServiceException("test exception!");
        });
    }

    @RequestMapping(value = "listService", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<List<KotoServiceEntity>> listService() {
        return wrapper((s) -> kotoService.listServices());
    }

    @RequestMapping(value = "getServiceById", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<KotoServiceEntity> getServiceById(@RequestBody RequestId request) {
        return wrapper((s) -> kotoService.getServiceById(request));
    }

    @RequestMapping(value = "listCategories", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<List<Category>> listCategories() {
        return wrapper((s) -> kotoService.listCategories());
    }

    @RequestMapping(value = "listCats", method = RequestMethod.POST, produces = "application/json")
    public BaseResponse<List<Catalog>> listCats() {
        return wrapper((s) -> kotoLog.listServices());
    }

}
