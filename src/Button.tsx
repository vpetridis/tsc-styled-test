import { useState } from "react"
import styled from "styled-components"

type ButtonProps = {
  text: string
}

const StyledButton = styled.button`
  background: red;
`
const Button = ({ text }: ButtonProps) => {
  const [clicked, setClicked] = useState(true)

  return (
    <StyledButton onClick={() => setClicked(!clicked)}>
      {text}
    </StyledButton>
  )
}

export default Button
