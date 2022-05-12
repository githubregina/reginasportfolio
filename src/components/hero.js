import React, { useState } from "react"
import Sound from "../assets/audios/joyu.mp3"

const Hero = () => {
  const [audio] = useState(typeof Audio !== "undefined" && new Audio(Sound))

  const au_play_pause = () => {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  }

  return (
    <div className="hero-section">
      <div className="container hero-content">
        <h1>HELLO WORLD</h1>
        <p className="lead">
          My name is Jo-yu &nbsp;
          <i
            className="bi bi-play-circle-fill text-white"
            style={{ fontSize: "1.275rem" }}
            onClick={() => au_play_pause()}
            role="button"
            aria-hidden="true"
          ></i>
        </p>
        <p>
          Call me <span className="highlighter">Regina</span> if you find it
          easier.
        </p>
        <p>
          I am a self-taught programmer, I have started this journey and dived
          into the World of Coding in 2021.
        </p>
      </div>
    </div>
  )
}

export default Hero
