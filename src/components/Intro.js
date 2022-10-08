import React from 'react'
import "../styles/Intro.css"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import EmailRoundedIcon from "@material-ui/icons/EmailRounded"
import FadeInSection from "./FadeInSection"

function Intro() {
  return (
    <div id="intro">
    <Typist avgTypingDelay={120}>
      <span className="intro-title">
        {"hi, "}
        <span className="intro-name">{"Nithin"}</span>
        {" here."}
      </span>
    </Typist>
    <FadeInSection>
      <div className="intro-subtitle">I create stuff sometimes.</div>
      <div className="intro-desc">
        I'm a software engineer based in Kochi, India. I have great
        interest in full-stack development, web3, blockchain, options trading 
        and everything in between.
      </div>
      <a
        href="mailto:nithin.xavier.336@gmail.com"
        className="intro-contact"
      >
        <EmailRoundedIcon></EmailRoundedIcon>
        {"  " + "Say hi!"}
      </a>
    </FadeInSection>
  </div>
  )
}

export default Intro