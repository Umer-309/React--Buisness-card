import React from "react";

export default function Information(props) {
    return (
        <section className="info">
            <h1 className="info--title">{props.name}</h1>
            <p className="info--job">{props.job}</p>
            <a href={props.src} className="info--visit">Visit my Website</a>
            <div className="info--btn-group">
                <a href={props.email} className="info--email">
                    <img className="info--logo" src="../public/mail.png" />Email Us</a>
                <a href={props.linkedIn} className="info--social">
                    <img className="info--logo" src="../public/linkedin.png" />LinkedIn</a>
            </div>
        </section>
    )
}