import React from "react"
import Information from "./Information"
import About from "./About"
import Footer from "./Footer"
import Image from "./Image"

export default function App() {

  return (
    <div className="layout">
      <Image />
      <Information 
      name="Laura Smith"
      job="Frontend Developer"
      src="#"
      email="unisar309@gmail.com"
      linkedIn="https://www.linkedin.com/in/umer-nisar/"
      />
      <About />
      <Footer
      insta="https://www.instagram.com/ianonymous2/"
      fb="https://www.facebook.com/umeron003/"
      twitter="https://twitter.com/BCOnlineStudent"
      github="https://github.com/Umer-309"
       />
    </div>
  )
}
