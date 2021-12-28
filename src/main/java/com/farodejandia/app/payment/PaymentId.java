package com.farodejandia.app.payment;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class PaymentId implements Serializable {

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "membership_id")
    private Long membershipId;

    public PaymentId() {
    }

    public PaymentId(Long memberId, Long membershipId) {
        this.memberId = memberId;
        this.membershipId = membershipId;
    }

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public Long getMembershipId() {
        return membershipId;
    }

    public void setMembershipId(Long membershipId) {
        this.membershipId = membershipId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PaymentId paymentId = (PaymentId) o;
        return Objects.equals(memberId, paymentId.memberId) && Objects.equals(membershipId, paymentId.membershipId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(memberId, membershipId);
    }
}
