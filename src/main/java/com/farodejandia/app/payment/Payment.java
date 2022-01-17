package com.farodejandia.app.payment;

import com.farodejandia.app.member.Member;
import com.farodejandia.app.membership.Membership;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "Payment")
@Table(name = "payment")
public class Payment {

    @EmbeddedId
    private PaymentId paymentId;

    @ManyToOne
    @MapsId("memberId")
    @JoinColumn(
            name = "member_id",
            foreignKey = @ForeignKey(name = "payment_member_id_fk")
    )
    @JsonIgnore
    private Member member;

    @ManyToOne
    @MapsId("membershipId")
    @JoinColumn(
            name = "membership_id",
            foreignKey = @ForeignKey(name = "payment_membership_id_fk")
    )
    @JsonIgnore
    private Membership membership;

    @Column(
            name = "payment_date_time",
            nullable = false,
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE"
    )
    private LocalDateTime paymentDate;

    public Payment() {
    }

    public Payment(Member member, Membership membership, LocalDateTime paymentDate) {
        this.member = member;
        this.membership = membership;
        this.paymentDate = paymentDate;
        this.setPaymentId(new PaymentId(member.getId(), membership.getId()));
    }

    public PaymentId getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(PaymentId paymentId) {
        this.paymentId = paymentId;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public Membership getMembership() {
        return membership;
    }

    public void setMembership(Membership membership) {
        this.membership = membership;
    }

    public LocalDateTime getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(LocalDateTime registrationDate) {
        this.paymentDate = registrationDate;
    }
}
