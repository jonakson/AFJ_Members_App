package com.farodejandia.app.member;

import com.github.javafaker.Faker;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping(path = "api/v1/members")
public class MemberController {

    @GetMapping
    public List<Member> getAllMembers() {

        List<Member> generatedMembers = new ArrayList<>();
        Faker faker = new Faker();
        for (int i=0; i<50; i++) {
            Long number = faker.number().randomNumber(8, true);
            String idDocument = number.toString() + ("TRWAGMYFPDXBNJZSQVHLCKE".charAt((int) (number%23)));
            String name = faker.name().firstName();
            String lastName = faker.name().lastName();
            String email = String.format("%s.%s@farodejandia.com", name.toLowerCase(), lastName.toLowerCase());
            String phone = faker.phoneNumber().cellPhone();
            LocalDateTime dob = faker
                    .date()
                    .birthday()
                    .toInstant()
                    .atZone(ZoneId.systemDefault())
                    .toLocalDateTime();
            LocalDateTime entryDate = faker.
                    date().
                    past(2500, TimeUnit.DAYS)
                    .toInstant()
                    .atZone(ZoneId.systemDefault())
                    .toLocalDateTime();
            Member member = new Member(
                    idDocument,
                    email,
                    name,
                    lastName,
                    phone,
                    dob,
                    entryDate
            );
            member.setId((long) i);
            generatedMembers.add(member);
        }

        return  generatedMembers;
    }

}
