package ru.praktika.kotouslugi.catspp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.praktika.kotouslugi.catspp.dao.CatDocsRepository;
import ru.praktika.kotouslugi.catspp.dao.CatsPPCatRepository;
import ru.praktika.kotouslugi.catspp.model.CatDocs;
import ru.praktika.kotouslugi.catspp.model.CatsPPCat;
import ru.praktika.kotouslugi.model.Cat;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class CatDocsService {
    @Autowired
    private CatDocsRepository catDocsRepository;
    @Autowired
    private CatsPPCatRepository catsPPCatRepository;

    public CatDocs createDocs(Map<String, Object> request)
    {
        Optional<CatsPPCat> cat = catsPPCatRepository.findById(Integer.parseInt(request.get("cat_id").toString()));
        if (cat.isPresent())
        {
            CatDocs docs = new CatDocs();
            request.forEach((k, v)->
            {
                switch (k) {
                    case "Passport_series":
                        docs.setPassport_series(v.toString());
                        break;
                    case "Passport_numbe":
                        docs.setPassport_number(v.toString());
                        break;
                    case "cat_id":
                        docs.setID_cat(cat.get());
                        break;
                }
            });
            return catDocsRepository.save(docs);
        }
        return new CatDocs();
    }

    public void deleteCatDocs(int id)
    {
        Optional<CatDocs> docs = catDocsRepository.findById(id);
        if (docs.isPresent())
        {
            catDocsRepository.delete(docs.get());
        }
    }

    public CatDocs updateDocs(Map<String, Object> request)
    {
        Optional<CatDocs> docs = catDocsRepository.findById(Integer.parseInt(request.get("id").toString()));
        if (docs.isPresent())
        {
            request.forEach((k, v)->
            {
                switch (k) {
                    case "Passport_series":
                        docs.get().setPassport_series(v.toString());
                        break;
                    case "Passport_numbe":
                        docs.get().setPassport_number(v.toString());
                        break;
                    case "cat_id":
                        Optional<CatsPPCat> cat = catsPPCatRepository.findById(Integer.parseInt(request.get("cat_id").toString()));
                        if (cat.isPresent()) {
                            docs.get().setID_cat(cat.get());
                        }
                        break;
                }
            });
            return catDocsRepository.save(docs.get());
        }
        return new CatDocs();
    }

    public List<CatDocs> getCatDocsList()
    {
        Iterable<CatDocs> catDocs = catDocsRepository.findAll();
        List<CatDocs> res = new ArrayList<>();
        catDocs.forEach(res::add);
        return res;
    }

    public List<CatDocs> getDoc(int id)
    {
        Optional<CatDocs> docs = catDocsRepository.findById(id);
        List<CatDocs> lDocs = new ArrayList<>();
        if (docs.isPresent())
        {
            lDocs.add(docs.get());
            return lDocs;
        }
        return lDocs;
    }
}
