import React from "react"
import Information from "./Information"
import About from "./About"

export default function App() {

  return (
    <div className="layout">
      {/* <img className="layout--image" src="../public/buisnessCard--image.png"/> */}
      <Information 
      name="Umer Nisar"
      job="Frontend Developer"
      src="#"
      email="unisar309@gmail.com"
      linkedIn="https://www.linkedin.com/in/ume-ron-10050/"
      />
      <About />
      <div className="layout--footer"></div>
    </div>
  )
}
