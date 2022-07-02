package ru.praktika.kotouslugi.catspp.controller;


import io.swagger.annotations.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.praktika.kotouslugi.catspp.model.CatDocs;
import ru.praktika.kotouslugi.catspp.service.CatDocsService;
import ru.praktika.kotouslugi.controller.BaseController;
import ru.praktika.kotouslugi.model.response.BaseResponse;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/cat/docs")
@Api("Пушистым эксплуататорам нужны документы")
public class CatDocsController extends BaseController {
    @Autowired
    private CatDocsService catDocsService;

    @PostMapping
    @ApiOperation(value = "Добавить документы",
            response = BaseResponse.class,
            tags = {"Cats++", "Коты"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<CatDocs> createDocs(@ApiParam(name="request", value = "Тело запроса", required = true)
                                            @RequestBody Map<String, Object> request)
    {
        return wrapper((s)->catDocsService.createDocs(request));
    }

    @GetMapping
    @ApiOperation(value = "Получить список всех документы",
            response = BaseResponse.class,
            tags = {"Cats++", "Коты"})
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = BaseResponse.class),
            @ApiResponse(code = 401, message = "Не авторизованный пользователь"),
            @ApiResponse(code = 500, message = "Внутренняя ошибка") })
    public BaseResponse<List<CatDocs>> getAllDocs(@RequestParam(name = "id", required = false)Optional<Integer> id)
    {
        if (!id.isPresent()) {
            return wrapper((s) -> catDocsService.getCatDocsList());         //to fix
        }
        else {
            return wrapper((s)->catDocsService.getDoc(id.get()));
        }
    }

}
