package com.farodejandia.app.member;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public List<Member> getAllMembers() {
        return memberRepository.findAll();
    }

    public void addMember(Member member) {
        // TODO check if email exists
        memberRepository.save(member);
    }

    public void deleteMember(Long memberId) {
        // TODO check if member exists
        memberRepository.deleteById(memberId);
    }

    public Optional<Member> findMemberById(Long memberId) {
        // TODO check if member exists
        return memberRepository.findById(memberId);
    }

    public Member getMemberById(Long memberId) {
        return memberRepository.getById(memberId);
    }
}
