import React from "react"; //rcf
import "./post.css";

export default function Post() {
    return (
        <article className="post">
            <figure className="post__header" aria-hidden="true">
                <img src="https://source.unsplash.com/800x580/?blog,water" alt="img" />
            </figure>
            <div className="post__body">
                <span className="post__cate">javascript</span>
                <div className="post__title">포스트 제목입니다.</div>
                <div className="post__desc">내용 부분</div>
                <div className="post__info">
                    <span className="author">오세린</span>
                    <span className="date">2022-04-03</span>
                </div>
            </div>
        </article>
    );
}
