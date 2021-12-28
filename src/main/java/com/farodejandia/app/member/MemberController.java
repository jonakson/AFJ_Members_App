package com.farodejandia.app.member;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/members")
public class MemberController {

    @GetMapping
    public List<Member> getAllMembers() {
        Member juanjo = new Member(
                "78532288F",
                "juanjo@farodejandia.com",
                "Juan José",
                "Viera Rodríguez",
                "666111000",
                LocalDateTime.now().minusYears(33L),
                LocalDateTime.now().minusYears(6L)
        );
        juanjo.setId(1L);
        Member jonatan = new Member(
                "78535249R",
                "jonatan@farodejandia.com",
                "Jonatan",
                "Calzado Diaz",
                "666777888",
                LocalDateTime.now().minusYears(33L).minusMonths(3L),
                LocalDateTime.now().minusYears(6L)
        );
        jonatan.setId(2L);

        return  Arrays.asList(juanjo, jonatan);
    }

}
