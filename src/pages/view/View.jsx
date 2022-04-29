import React from "react";
import SinglePost from "../../components/singlePost/SinglePost";
import Side from "../../components/side/Side";

export default function View() {
    return (
        <main id="main" className="col2">
            <SinglePost />
            <Side />
        </main>
    );
}
