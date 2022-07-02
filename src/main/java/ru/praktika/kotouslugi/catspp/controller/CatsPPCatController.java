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
@Api("Для переписи котоселения")
public class CatsPPCatController extends BaseController{

    @Autowired
    private CatsPPCatService catsPPCatService;

    @RequestMapping(value = "cat", method = RequestMethod.POST, produces = "application/json")
    @ApiOperation(value = "Создать кота",
    notes = "Создать кота",
    response = BaseResponse.class,
    tags = {"Cats++", "Коты"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<Integer> createCat(@ApiParam(name = "request", value = "Тело запроса", required = true) @RequestBody Map<String, Object> request){

        return wrapper((s)-> catsPPCatService.createCat(request));
    }

    @RequestMapping(value = "cat", method = RequestMethod.GET, produces = "application/json")
    @ApiOperation(value = "Получит всех котов",
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
}
