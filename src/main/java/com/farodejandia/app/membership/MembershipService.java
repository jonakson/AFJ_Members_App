package com.farodejandia.app.membership;

import org.springframework.stereotype.Service;

import java.util.List;

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
}
