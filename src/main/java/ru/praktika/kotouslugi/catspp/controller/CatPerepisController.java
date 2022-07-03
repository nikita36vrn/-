package ru.praktika.kotouslugi.catspp.controller;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.praktika.kotouslugi.catspp.dao.CatPerepisRepository;
import ru.praktika.kotouslugi.catspp.model.CatPerepis;
import ru.praktika.kotouslugi.catspp.service.CatPerepisService;
import ru.praktika.kotouslugi.catspp.util.CatStatistic;
import ru.praktika.kotouslugi.controller.BaseController;
import ru.praktika.kotouslugi.model.response.BaseResponse;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/perepis")
public class CatPerepisController extends BaseController {

    @Autowired
    private CatPerepisService catPerepisService;


    @RequestMapping(value = "", method = RequestMethod.POST, produces = "application/json")
    @ApiOperation(value = "Переписать кота",
            notes = "Переписать кота",
            response = BaseResponse.class,
            tags = {"Cats++", "Перепись"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<Integer> createCat(@ApiParam(name = "request", value = "Тело запроса", required = true)
                                               @RequestBody Map<String, Object> request)
    {
        return wrapper((s)->catPerepisService.createCat(request));
    }

    @RequestMapping(value = "", method = RequestMethod.PUT, produces = "application/json")
    @ApiOperation(value = "Обновать данные в переписи кота",
            notes = "Переписать кота",
            response = BaseResponse.class,
            tags = {"Cats++", "Перепись"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<CatPerepis> updateCat(@ApiParam(name = "request", value = "Тело запроса", required = true)
                                              @RequestBody Map<String, Object> request)
    {
        return wrapper((s)->catPerepisService.updateCat(request));
    }

    @RequestMapping(value = "statistic", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(value = "Переписать кота",
            notes = "Переписать кота",
            response = BaseResponse.class,
            tags = {"Cats++", "Перепись"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<Map<String, List<Map<String, Object>>>> getStatistic()
    {
        return wrapper((s)->catPerepisService.getStatistic());
    }
}



/*
 *
 *      1) При обновлении кота в CatsPPCats. данные в переписи не обновятся
 *      2) Сделать статистику по параметрам
 *
 */