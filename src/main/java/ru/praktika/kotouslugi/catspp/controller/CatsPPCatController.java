package ru.praktika.kotouslugi.catspp.controller;

import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.praktika.kotouslugi.catspp.model.CatsPPCat;
import ru.praktika.kotouslugi.catspp.service.CatsPPCatService;
import ru.praktika.kotouslugi.controller.BaseController;
import ru.praktika.kotouslugi.model.response.BaseResponse;

import java.util.List;
import java.util.Map;

/*
 *  Cat Controller by Cats++
 */
@RestController
@RequestMapping("/api")
@Api("Для добавления пушистых эксплуататоров")
public class CatsPPCatController extends BaseController{

    @Autowired
    private CatsPPCatService catsPPCatService;

    @RequestMapping(value = "cats", method = RequestMethod.POST, produces = "application/json")
    @ApiOperation(value = "Создать кота",
    notes = "Создать кота",
    response = BaseResponse.class,
    tags = {"Cats++", "Коты"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<Integer> createCat(@ApiParam(name = "request", value = "Тело запроса", required = true)
                                               @RequestBody Map<String, Object> request){

        return wrapper((s)-> catsPPCatService.createCat(request));
    }

    @RequestMapping(value = "cats", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(value = "Получить всех котов",
    response = BaseResponse.class,
    tags = {"Cats++", "Коты"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<List<CatsPPCat>> getCats()
    {
        return wrapper((s)-> catsPPCatService.getCatList());
    }

    @RequestMapping(value = "cat", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(value = "Получить кота по ID",
            response = BaseResponse.class,
            tags = {"Cats++", "Коты"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<CatsPPCat> getCat(@RequestParam (name = "id") Object id)
    {
        return wrapper((s)-> catsPPCatService.getCat(Integer.parseInt(id.toString())));
    }

    @RequestMapping(value = "cat", method = RequestMethod.DELETE, produces = "application/json")
    @ApiOperation(value = "Удалить кота",
    response = BaseResponse.class,
    tags = {"Cats++", "Коты"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public void deleteCat(@ApiParam (value = "Тело запроса", name = "request", required = true) @RequestBody Map<String, Object> request)
    {
        catsPPCatService.deleteCat(Integer.parseInt(request.get("id").toString()));
    }

    @RequestMapping(value = "cat", method = RequestMethod.PUT, produces = "application/json")
    @ApiOperation(value = "Удалить кота",
            response = BaseResponse.class,
            tags = {"Cats++", "Коты"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<CatsPPCat> updateCat(@ApiParam (value = "Тело запроса", name = "request", required = true)
                                   @RequestBody Map<String, Object> request)
    {
        return wrapper((s)->catsPPCatService.updateCat(request));
    }

}
