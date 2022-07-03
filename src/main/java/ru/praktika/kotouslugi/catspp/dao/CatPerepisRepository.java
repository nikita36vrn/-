package ru.praktika.kotouslugi.catspp.dao;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import ru.praktika.kotouslugi.catspp.model.CatPerepis;
import ru.praktika.kotouslugi.catspp.util.CatStatistic;

import java.util.List;
import java.util.Map;

public interface CatPerepisRepository extends CrudRepository<CatPerepis, Integer> {
    @Query(value = "SELECT " +
            "  Cat_Perepis.name as name, COUNT(Cat_Perepis.name) as count from " +
            " Cat_Perepis GROUP BY " +
            "Cat_Perepis.name", nativeQuery = true)
    List<Map<String, Object>> countName();

    @Query(value = "SELECT gender as gender, COUNT(gender) as count from Cat_Perepis GROUP BY gender",
            nativeQuery = true)
    List<Map<String, Object>> countGender();

    @Query(value = "SELECT breed as breed, COUNT(breed) as count from Cat_Perepis GROUP BY breed",
            nativeQuery = true)
    List<Map<String, Object>> countBreed();

    @Query(value = "SELECT kids_Count as kids, COUNT(kids_Count) as count from Cat_Perepis GROUP BY kids_Count",
            nativeQuery = true)
    List<Map<String, Object>> countKids();

    @Query(value = "SELECT family_Status as familyStatus, COUNT(family_Status) as count from Cat_Perepis GROUP BY family_Status",
            nativeQuery = true)
    List<Map<String, Object>> countFamilyStatus();
}
