package ru.praktika.kotouslugi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.dao.RegistrationRepository;
import ru.praktika.kotouslugi.model.CatRegistration;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository registrationRepository;

    public List<CatRegistration> listRegistration() {
        List<CatRegistration> result = new LinkedList<>();
        Iterable<CatRegistration> registrations = registrationRepository.findAll();
        registrations.forEach(result::add);
        return result;
    }
    public int createRegistration(Map<String, Object> request) {
        String A_name_cat = (String) request.get("A_name_cat");
        String B_poroda = (String) request.get("B_poroda");
        Integer C_age = (Integer) request.get("c_age");
        String D_MC = (String) request.get("d_MC");
        CatRegistration catRegistration = new CatRegistration(A_name_cat,B_poroda,D_MC,C_age);
        request.forEach((s, o) -> {
            switch (s) {
                case "A_name_cat":
                    catRegistration.setA_name_cat(o.toString());
                    break;
                case "B_poroda":
                    catRegistration.setB_poroda(o.toString());
                    break;
                case "C_age":
                    catRegistration.setC_age((Integer) o);
                case "D_MC":
                    catRegistration.setD_MC(o.toString());
               case "catRegistrations":
                    ((Map<String, String>) o).forEach((s1, o1) -> {
                        CatRegistration registration = new CatRegistration(s1, o1.toString());
                        catRegistration.getCatRegistrations().add(registration); });

            }
        });

        CatRegistration save = registrationRepository.save(catRegistration);
        return save.getId();
    }

  /*  public Boolean updateRegistration(Map<String, Object> request) throws ServiceException {
        String id = String.valueOf(request.get("id"));
        if (id == null || id.isEmpty() || id.equals("null"))
            throw new ServiceException("Не указан id заявки");
        Integer idRequisite = Integer.parseInt(id);
        CatRegistration catRegistration = registrationRepository.findById(idRequisite).orElse(null);
        if (catRegistration == null)
            throw new ServiceException("Указанная заявка не найдена: " + idRequisite);

        request.forEach((s, o) -> {
            switch (s) {
                case "NameCat":
                    catRegistration.setNameCat(o.toString());
                    break;
                case "Poroda":
                    catRegistration.setPoroda(o.toString());
                    break;
                case "MC":
                    catRegistration.setMC(o.toString());
                    break;
                case "Age":
                    catRegistration.setAge((Integer) o);
                    break;
            }
        });
        registrationRepository.save(catRegistration);

        return true;
    }*/
}
