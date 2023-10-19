import React from "react";

export default function Footer(props) {
    return (
        <footer className="footer">
            <a href={props.insta} target="_blank"><img src="../public/instagram-icon.png" alt="" /></a>
            <a href={props.fb} target="_blank"><img src="../public/facebook-icon.png" alt="" /></a>
            <a href={props.twitter} target="_blank"><img src="../public/twitter-icon.png" alt="" /></a>
            <a href={props.github} target="_blank"><img src="../public/github-icon.png" alt="" /></a>
        </footer>
    )
}