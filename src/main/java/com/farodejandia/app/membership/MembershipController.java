package com.farodejandia.app.membership;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/memberships")
public class MembershipController {

    private final MembershipService membershipService;


    public MembershipController(MembershipService membershipService) {
        this.membershipService = membershipService;
    }

    @GetMapping
    public List<Membership> getAllMemberships() {
        return membershipService.getAllMemberships();
    }

    @GetMapping(path = "{membershipId}")
    public Optional<Membership> getMemberById(@PathVariable("membershipId") Long membershipId) {
        return membershipService.findMembershipById(membershipId);
    }

    @PostMapping
    public void addMembership(@RequestBody Membership membership) {
        membershipService.addMembership(membership);
    }

    @DeleteMapping(path = "{membershipId}")
    public void deleteMembership(@PathVariable("membershipId") Long membershipId) {
        membershipService.deleteMembership(membershipId);
    }
}
