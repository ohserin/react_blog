import React from "react";
import "./join.css";

export default function Join() {
    return (
        <section className="blog__login">
            <div className="member__form">
                <h3>회원가입</h3>
                <form>
                    <fieldset>
                        <legend className="ir_so">회원가입 입력폼</legend>
                        <div className="join-box">
                            <div>
                                <label htmlFor="youName">이름</label>
                                <input type="text" id="youName" name="youName" placeholder="이름을 적어주세요!" />
                            </div>
                            <div>
                                <label htmlFor="youEmail">이메일</label>
                                <input type="email" id="youEmail" name="youEmail" placeholder="Sample@naver.com" />
                            </div>
                            <div>
                                <label htmlFor="youPass">비밀번호</label>
                                <input
                                    type="password"
                                    id="youPass"
                                    name="youPass"
                                    maxLength="20"
                                    placeholder="비밀번호를 적어주세요!"
                                />
                            </div>
                        </div>
                        <button id="joinBtn" className="join-submit" type="submit">
                            회원가입
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}
