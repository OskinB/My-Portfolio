import React from "react";
import "../App";

function Header(props) {
    return (
        <div>
            <nav>
                <h1>Ósk Björns</h1>
                <h2>Jr. Web Developer</h2>
                <ul>
                    <a href="index.html">
                        <li>Portfolio</li>
                    </a>
                    <a href="about-me.html">
                        <li>About Me</li>
                    </a>
                </ul>
            </nav>
        </div>
    );
}

export default Header;