package com.farodejandia.app.participant;

import com.farodejandia.app.activity.Activity;
import com.farodejandia.app.member.Member;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity(name = "Participant")
@Table(name = "participant")
public class Participant {

    @EmbeddedId
    private ParticipantId participantId;

    @ManyToOne
    @MapsId("memberId")
    @JoinColumn(
            name = "member_id",
            foreignKey = @ForeignKey(name = "participant_member_id_fk")
    )
    private Member member;

    @ManyToOne
    @MapsId("activityId")
    @JoinColumn(
            name = "activity_id",
            foreignKey = @ForeignKey(name = "participant_activity_id_fk")
    )
    private Activity activity;

    @Column(
            name = "registration_date",
            nullable = false,
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE"
    )
    private LocalDateTime registrationDate;

    public Participant() {
    }

    public Participant(
            Member member,
            Activity activity,
            LocalDateTime registrationDate) {
        this.member = member;
        this.activity = activity;
        this.registrationDate = registrationDate;
        this.setParticipantId(new ParticipantId(member.getId(), activity.getId()));
    }

    public ParticipantId getParticipantId() {
        return participantId;
    }

    public void setParticipantId(ParticipantId participantId) {
        this.participantId = participantId;
    }

    public Member getMember() {
        return member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public LocalDateTime getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDateTime registrationDate) {
        this.registrationDate = registrationDate;
    }
}
