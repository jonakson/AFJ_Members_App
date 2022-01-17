package com.farodejandia.app;

import com.farodejandia.app.activity.Activity;
import com.farodejandia.app.activity.ActivityRepository;
import com.farodejandia.app.member.Member;
import com.farodejandia.app.member.MemberRepository;
import com.farodejandia.app.membership.Membership;
import com.farodejandia.app.membership.MembershipRepository;
import com.farodejandia.app.participant.ParticipantRepository;
import com.farodejandia.app.payment.Payment;
import com.farodejandia.app.payment.PaymentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDateTime;


@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(
            MemberRepository memberRepository,
            MembershipRepository membershipRepository,
            ActivityRepository activityRepository,
            PaymentRepository paymentRepository,
            ParticipantRepository participantRepository) {

        return args -> {

            Member m1 = new Member(
                    "123456789L",
                    "jonas@gmail.com",
                    "Jonas",
                    "Matieh",
                    "666777888",
                    LocalDateTime.now(),
                    LocalDateTime.now()
            );
            Membership ms1 = new Membership(
                    "Sign-Up Membership",
                    "Fee payable once, at sign-up.",
                    0,
                    5.0
            );
            Activity a1 = new Activity(
                    "Visit Gran Canaria",
                    "Visit to Gran Canaria in a weekend",
                    LocalDateTime.now(),
                    25,
                    "Port of Morro Jable",
                    100.0

            );
            Payment p1 = new Payment(m1,ms1, LocalDateTime.now());

            memberRepository.save(m1);
            membershipRepository.save(ms1);
            activityRepository.save(a1);
            paymentRepository.save(p1);

        };
    }

}