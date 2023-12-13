import React from "react";

export default function Footer(props) {
    return (
        <footer className="footer">
            <a href={props.insta} target="_blank"><img src="./assets/instagram-icon.png" alt="" /></a>
            <a href={props.fb} target="_blank"><img src="./assets/facebook-icon.png" alt="" /></a>
            <a href={props.twitter} target="_blank"><img src="./assets/twitter-icon.png" alt="" /></a>
            <a href={props.github} target="_blank"><img src="./assets/github-icon.png" alt="" /></a>
        </footer>
    )
}