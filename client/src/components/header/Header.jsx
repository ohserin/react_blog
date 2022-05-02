import React from "react";
import "./header.css";

export default function Header() {
    return (
        <header id="header">
            <h1 className="logo">
                <a href="/">
                    REACT <em>blog</em>
                </a>
            </h1>
            <nav className="menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/login">LOGIN</a>
                    </li>
                    <li>
                        <a href="/join">JOIN</a>
                    </li>
                    <li>
                        <a href="/view">POST</a>
                    </li>
                    <li>
                        <a href="/write">WRITE</a>
                    </li>
                </ul>
            </nav>
            <div className="member">
                <span className="ir_so">회원 정보 영역</span>
                <a href="/myPage">
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="me"
                    />
                </a>
                <span>ㅇㅇ님 반갑습니다</span>
            </div>
        </header>
    );
}
