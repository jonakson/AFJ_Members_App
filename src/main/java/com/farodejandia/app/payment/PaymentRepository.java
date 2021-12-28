package com.farodejandia.app.payment;

import org.springframework.data.repository.CrudRepository;

public interface PaymentRepository extends CrudRepository <Payment, PaymentId> {
}
