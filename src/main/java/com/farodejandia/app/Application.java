package com.farodejandia.app;

import com.farodejandia.app.activity.Activity;
import com.farodejandia.app.activity.ActivityRepository;
import com.farodejandia.app.member.Member;
import com.farodejandia.app.member.MemberRepository;
import com.farodejandia.app.membership.Membership;
import com.farodejandia.app.membership.MembershipRepository;
import com.farodejandia.app.participant.Participant;
import com.farodejandia.app.participant.ParticipantRepository;
import com.farodejandia.app.payment.Payment;
import com.farodejandia.app.payment.PaymentRepository;
import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.concurrent.TimeUnit;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(
            MemberRepository memberRepository,
            ActivityRepository activityRepository,
            MembershipRepository membershipRepository,
            PaymentRepository paymentRepository,
            ParticipantRepository participantRepository) {
        return args -> {

            Member jonatan = new Member(
                    "78535249R",
                    "jonatan@farodejandia.com",
                    "Jonatan",
                    "Calzado Diaz",
                    "666777888",
                    LocalDateTime.now().minusYears(33L),
                    LocalDateTime.now().minusYears(6L)
            );

            Activity travel = new Activity(
                    "Travel to Lanzarote",
                    "Travel to Lanzarote to visit Timanfaya",
                    LocalDateTime.of(2022, 4, 28, 6, 30,0),
                    35,
                    "Port of Corralejo",
                    77.50
            );

            Membership newMemberMembership = new Membership(
                    "New Member Membership",
                    "New members membership, paid once.",
                    0,
                    5.0
            );
            Membership annualMembership = new Membership(
                    "Annual Membership",
                    "Membership paid annually.",
                    265,
                    30.0
            );

            Payment jonatanNew = new Payment(
                    jonatan,
                    newMemberMembership,
                    LocalDateTime.now());
            Payment jonatanAnnual2022 = new Payment(
                    jonatan,
                    annualMembership,
                    LocalDateTime.now());

            Participant jonatanTravel = new Participant(
                    jonatan,
                    travel,
                    LocalDateTime.now()
            );

            memberRepository.save(jonatan);
            activityRepository.save(travel);
            membershipRepository.save(newMemberMembership);
            membershipRepository.save(annualMembership);
            paymentRepository.save(jonatanNew);
            paymentRepository.save(jonatanAnnual2022);
            participantRepository.save(jonatanTravel);

        };
    }

    private void generateRandomMembers(MemberRepository memberRepository) {
        Faker faker = new Faker();
        for (int i=0; i<25; i++) {
            String idDocument = validIdGenerator(faker.number().randomNumber(8, true));
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
                    past(1, TimeUnit.DAYS)
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
            memberRepository.save(member);
        }
    }

    String validIdGenerator (Long number) {
        return number.toString() + ("TRWAGMYFPDXBNJZSQVHLCKE".charAt((int) (number%23)));
    }

}