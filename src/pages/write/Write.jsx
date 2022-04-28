import React from "react";
import "./write.css";

export default function Write() {
    return (
        <section id="blog-type" class="section center">
            <div class="container">
                <h3 class="section__title">게시글 작성하기</h3>
                <p class="section__desc">나무와 관련된 블로그를 작성해주세요!</p>
                <div class="blog__inner">
                    <div class="blog__write">
                        <form action="/" name="blogWrite" method="post" enctype="multipart/form-data">
                            <fieldset>
                                <legend class="ir_so">블로그 게시글 작성 영역</legend>
                                <div>
                                    <label for="blogCate">카테고리</label>
                                    <select name="blogCate" id="blogCate">
                                        <option value="javascript">javascript</option>
                                        <option value="jquery">jquery</option>
                                        <option value="html">html</option>
                                        <option value="css">css</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="blogTitle">제목</label>
                                    <input
                                        type="text"
                                        name="blogTitle"
                                        id="blogTitle"
                                        placeholder="제목을 입력해주세요!"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="blogContents">내용</label>
                                    <textarea
                                        name="blogContents"
                                        id="blogContents"
                                        rows="15"
                                        placeholder="내용을 입력해주세요!"
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <label for="blogFile">파일</label>
                                    <input
                                        type="file"
                                        name="blogFile"
                                        id="blogFile"
                                        accept=".jpg, .jpeg, .png, .gif"
                                        placeholder="사진을 넣어주세요! 사진은 JPG, PNG 타입만 넣을 수 있습니다."
                                    />
                                </div>
                                <button type="submit" value="저장하기">
                                    저장하기
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
