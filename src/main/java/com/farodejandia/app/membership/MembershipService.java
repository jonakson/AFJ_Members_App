package com.farodejandia.app.membership;

import org.springframework.stereotype.Service;

@Service
public class MembershipService {

    private final MembershipRepository membershipRepository;

    public MembershipService(MembershipRepository membershipRepository) {
        this.membershipRepository = membershipRepository;
    }

    public void addMembership(Membership membership) {
        // TODO check if email exists
        membershipRepository.save(membership);
    }

    public void deleteMembership(Long membershipId) {
        // TODO check if member exists
        membershipRepository.deleteById(membershipId);
    }
}
