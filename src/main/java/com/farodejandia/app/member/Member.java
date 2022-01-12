package com.farodejandia.app.member;

import com.farodejandia.app.participant.Participant;
import com.farodejandia.app.payment.Payment;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity(name = "Member")
@Table(
        name = "member",
        uniqueConstraints = {
                @UniqueConstraint(
                        name = "member_email_unique",
                        columnNames = "email"
                ),
                @UniqueConstraint(
                        name = "member_id_document_unique",
                        columnNames = "id_document"
                )
        }
)
public class Member {

    @Id
    @SequenceGenerator(
            name = "member_sequence",
            sequenceName = "member_sequence",
            allocationSize = 1
    )
    @GeneratedValue (
            strategy = SEQUENCE,
            generator = "member_sequence"
    )
    @Column (
            name = "id",
            updatable = false
    )
    private Long id;

    @Column(
            name = "id_document",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String idDocument;

    @Column(
            name = "email",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String email;

    @Column(
            name = "name",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String name;

    @Column(
            name = "surname",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String surname;

    @Column(
            name = "phone",
            nullable = false,
            columnDefinition = "TEXT"
    )
    private String phone;

    @Column(
            name = "dob",
            nullable = false,
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE"
    )
    private LocalDateTime dob;

    @Column(
            name = "entry_date",
            nullable = false,
            columnDefinition = "TIMESTAMP WITHOUT TIME ZONE"
    )
    private LocalDateTime entryDate;

    @OneToMany(
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            mappedBy = "member" // Field in Payment class.
    )
    private final List<Payment> payments = new ArrayList<>();

    @OneToMany(
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE},
            mappedBy = "member" // Field in Participant class.
    )
    private final List<Participant> participants = new ArrayList<>();

    public Member(String idDocument,
                  String email,
                  String name,
                  String surname,
                  String phone,
                  LocalDateTime dob,
                  LocalDateTime entryDate){
        this.idDocument = idDocument;
        this.email = email;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.dob = dob;
        this.entryDate = entryDate;
    }

    public Member() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIdDocument() {
        return idDocument;
    }

    public void setIdDocument(String idDocument) {
        this.idDocument = idDocument;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public LocalDateTime getDob() {
        return dob;
    }

    public void setDob(LocalDateTime dob) {
        this.dob = dob;
    }

    public LocalDateTime getEntryDate() {
        return entryDate;
    }

    public void setEntryDate(LocalDateTime entryDate) {
        this.entryDate = entryDate;
    }

    public List<Participant> getParticipants() {
        return participants;
    }

    public void addParticipant(Participant participant) {
        if (!participants.contains(participant)) {
            participants.add(participant);
        }
    }

    public void removeParticipant(Participant participant) {
        participants.remove(participant);
    }

    public List<Payment> getPayments() {
        return payments;
    }

    public void addPayment(Payment payment) {
        if (!payments.contains(payment)) {
            payments.add(payment);
        }
    }

    public void removePayment(Payment payment) {
        payments.remove(payment);
    }

    @Override
    public String toString() {
        return "Member{" +
                "id=" + id +
                ", idDocument='" + idDocument + '\'' +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", phone='" + phone + '\'' +
                ", dob=" + dob +
                ", entryDate=" + entryDate +
                '}';
    }
}
