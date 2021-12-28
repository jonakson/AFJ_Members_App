package com.farodejandia.app.participant;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ParticipantId implements Serializable {

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "activity_id")
    private Long activityId;

    public ParticipantId() {
    }

    public ParticipantId(Long memberId, Long activityId) {
        this.memberId = memberId;
        this.activityId = activityId;
    }

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public Long getActivityId() {
        return activityId;
    }

    public void setActivityId(Long activityId) {
        this.activityId = activityId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ParticipantId that = (ParticipantId) o;
        return Objects.equals(memberId, that.memberId) && Objects.equals(activityId, that.activityId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(memberId, activityId);
    }
}
