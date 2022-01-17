package com.farodejandia.app.membership;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MembershipService {

    private final MembershipRepository membershipRepository;

    public MembershipService(MembershipRepository membershipRepository) {
        this.membershipRepository = membershipRepository;
    }

    public void addMembership(Membership membership) {
        membershipRepository.save(membership);
    }

    public void deleteMembership(Long membershipId) {
        membershipRepository.deleteById(membershipId);
    }

    public List<Membership> getAllMemberships() {
        return membershipRepository.findAll();
    }

    public Optional<Membership> findMembershipById(Long membershipId) {
        return membershipRepository.findById(membershipId);
    }

    public Membership getMembershipById(Long membershipId) {
        return membershipRepository.getById(membershipId);
    }
}