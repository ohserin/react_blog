import React from "react";
import "./footer.css";

export default function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <h2 className="ir_so">푸터 바로가기 메뉴</h2>
                <div className="footer-menu">
                    <div>
                        <h3>레이아웃 영역</h3>
                        <ul>
                            <li>
                                <a href="/">레이아웃 유형01</a>
                            </li>
                            <li>
                                <a href="/">레이아웃 유형02</a>
                            </li>
                            <li>
                                <a href="/">레이아웃 유형03</a>
                            </li>
                            <li>
                                <a href="/">레이아웃 유형04</a>
                            </li>
                            <li>
                                <a href="/">레이아웃 유형05</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>메뉴 영역</h3>
                        <ul>
                            <li>
                                <a href="/">메뉴 유형01</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>메인 영역</h3>
                        <ul>
                            <li>
                                <a href="/">이미지 유형01</a>
                            </li>
                            <li>
                                <a href="/">동영상 유형02</a>
                            </li>
                            <li>
                                <a href="/">슬라이드 유형03</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>게시판 영역</h3>
                        <ul>
                            <li>
                                <a href="/">게시판</a>
                            </li>
                            <li>
                                <a href="/">게시판 수정하기</a>
                            </li>
                            <li>
                                <a href="/">게시판 보기</a>
                            </li>
                            <li>
                                <a href="/">게시판 쓰기</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>푸터 영역</h3>
                        <ul>
                            <li>
                                <a href="/">컨택트 유형01</a>
                            </li>
                            <li>
                                <a href="/">푸터 유형02</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>사이트</h3>
                        <ul>
                            <li>
                                <a href="/">웹표준 사이트</a>
                            </li>
                            <li>
                                <a href="/">반응형 사이트</a>
                            </li>
                            <li>
                                <a href="/">패럴랙스 사이트</a>
                            </li>
                            <li>
                                <a href="/">포트폴리오 사이트</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <address className="footer-rights">© 2022 ohserin. All rights reserved.</address>
            </div>
        </footer>
    );
}
