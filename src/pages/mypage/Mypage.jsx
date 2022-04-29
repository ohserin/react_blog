import React from "react";
import "./myPage.css";

export default function MyPage() {
    return (
        <section className="join-type gray">
            <div className="member-form">
                <h3>회원 정보</h3>
                <div className="member-intro">
                    <div className="face">
                        <img src="https://source.unsplash.com/800x600/?mypage,water" alt="기본이미지" />
                    </div>
                </div>
                <div className="member-info">
                    <ul>
                        <li>
                            <strong>이메일</strong>
                            <span>dhtpfls321@naver.com</span>
                        </li>
                        <li>
                            <strong>닉네임</strong>
                            <span>닉네임</span>
                        </li>
                        <li>
                            <strong>이름</strong>
                            <span>오세린</span>
                        </li>
                        <li>
                            <strong>생일</strong>
                            <span>1998-02-02</span>
                        </li>
                        <li>
                            <strong>번호</strong>
                            <span>010-2222-2222</span>
                        </li>
                        <li>
                            <strong>성별</strong>
                            <span>성별</span>
                        </li>
                        <li>
                            <strong>사이트</strong>
                            <span>dhtpfls321@naver.com</span>
                        </li>
                    </ul>
                </div>

                <div className="member-btn">
                    <a href="/">수정하기</a>
                    <a href="/">탈퇴하기</a>
                </div>
            </div>
        </section>
    );
}
