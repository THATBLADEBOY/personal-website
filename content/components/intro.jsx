/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import { Button } from "theme-ui";
import Typewriter from "typewriter-effect";

const Intro = () => {
  const [isContactButtonShowing, setContactButtonShowing] = React.useState(
    false
  )
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .start()
              .changeDelay(40)
              .typeString("hello")
              .typeString("!")
              .pauseFor(500)
              .deleteChars(1)
              .typeString(", my name is austin blade.")
              .pauseFor(1000)
              .typeString(" i like making software and designing things.")
              .pauseFor(1000)
              .callFunction(() => {
                setContactButtonShowing(true)
              })
          }}
        />
      </h1>
      {isContactButtonShowing ? (
        <div>
          <Button sx={{
            ":hover": { backgroundColor: "secondary" },
          }}
            onClick={() =>
              (document.location.href = "mailto:hello@austinblade.com")
            }
            href="mailto:hello@austinblade.com"
          >
            let's chat{"  "}
            <span role="img" aria-label="coffee">
              ☕️
            </span>
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default Intro
