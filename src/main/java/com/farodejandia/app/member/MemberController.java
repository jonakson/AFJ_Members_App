package com.farodejandia.app.member;

import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "api/v1/members")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    @GetMapping(path = "{memberId}")
    public Optional<Member> findMemberById(@PathVariable("memberId") Long memberId) {
        return memberService.findMemberById(memberId);
    }

    @PostMapping
    public void addMember(@RequestBody Member member) {
        memberService.addMember(member);
    }

    @DeleteMapping(path = "{memberId}")
    public void deleteMember(@PathVariable("memberId") Long memberId) {
        memberService.deleteMember(memberId);
    }

}
