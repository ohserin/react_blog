import React from "react";
import "./view.css";

export default function View() {
    return (
        <section id="blog-type" class="center">
            <div className="blog__label">
                <h3 className="section__title">제목입니다</h3>
                <div>
                    <span className="author">사용자</span>
                    <span className="date">2022-02-22</span>
                    <br />
                    <span className="modify">수정</span>
                    <span className="delete">삭제</span>
                </div>
            </div>
            <div className="container">
                <div className="blog__layout">
                    <div className="blog__left">
                        <h4>ddd</h4>
                    </div>
                    <div className="blog__right">
                        <div className="ad">dd</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
