package com.farodejandia.app.payment;

import com.farodejandia.app.member.MemberService;
import com.farodejandia.app.membership.MembershipService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/payments")
public class PaymentController {

    private final PaymentService paymentService;
    private final MemberService memberService;
    private final MembershipService membershipService;

    public PaymentController(PaymentService paymentService, MemberService memberService, MembershipService membershipService) {
        this.paymentService = paymentService;
        this.memberService = memberService;
        this.membershipService = membershipService;
    }

    @GetMapping
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @PostMapping
    public void addPayment(@RequestBody Payment payment) {
        paymentService.addPayment(new Payment(
                memberService.getMemberById(payment.getPaymentId().getMemberId()),
                membershipService.getMembershipById(payment.getPaymentId().getMembershipId()),
                payment.getPaymentDate())
        );
    }

    @DeleteMapping(path = "{paymentId}")
    public void deletePayment(@PathVariable("paymentId") PaymentId paymentId) {
        paymentService.deletePayment(paymentId);
    }
}
