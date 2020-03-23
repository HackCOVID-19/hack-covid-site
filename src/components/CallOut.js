import React from "react"
import { colors } from "../utils/theme"

const CallOut = ({ children }) => {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "70%",
        background: colors.primary,
        color: "#fff",
        padding: "5px 10px",
        marginBottom: "20px",
      }}
    >
      {children}
    </span>
  )
}

export default CallOut
