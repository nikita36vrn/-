package ru.praktika.kotouslugi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.praktika.kotouslugi.model.PassportDataEntity;
import ru.praktika.kotouslugi.service.VotingService;

import java.util.Map;

@RestController
@RequestMapping("/api/voting")
public class VotingController {

    @Autowired
    private VotingService votingService;

    @RequestMapping(value = "getVoting", method = RequestMethod.GET, produces = "application/json")
    public Boolean getVoting() {
        return votingService.getVoting();
    }

    @RequestMapping(value = "getPassportData", method = RequestMethod.GET, produces = "application/json")
    public PassportDataEntity getPassportData(@RequestParam Long id) {
        return votingService.getPassportData(id);
    }

    @RequestMapping(value = "getPhone", method = RequestMethod.GET, produces = "application/json")
    public String getPhone(@RequestParam Long id) {
        return votingService.getPhone(id);
    }

    @RequestMapping(value = "getAddress", method = RequestMethod.GET, produces = "application/json")
    public String getAddress(@RequestParam Long id) {
        return votingService.getAddress(id);
    }

    @RequestMapping(value = "confirm", method = RequestMethod.POST, produces = "application/json")
    public Boolean confirm(@RequestBody Map<String, Object> request) {
        return votingService.confirm(request);
    }
}
