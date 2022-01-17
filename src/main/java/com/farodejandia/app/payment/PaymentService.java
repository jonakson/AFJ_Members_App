package com.farodejandia.app.payment;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentService {

    private final PaymentRepository paymentRepository;


    public PaymentService(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;

    }

    public List<Payment> getAllPayments() {
        return (List<Payment>) paymentRepository.findAll();
    }

    public void addPayment (Payment payment) {
        paymentRepository.save(payment);
    }

    public void deletePayment(PaymentId paymentId) {
        paymentRepository.deleteById(paymentId);
    }
}
