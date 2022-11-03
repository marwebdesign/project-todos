import styled from 'styled-components'

export const Outerwrapper = styled.section`
  background-color: #FCF8E8;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InnerWrapper = styled.section`
  width: 50%;
  background-color: #94B49F;
  border-radius: 20px;
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
  `

// White: #FCF8E8
// Green: #94B49F
// Lightpurple: #ECB390
// Darkpurple: #DF7861

// font-family: 'Montserrat', sans-serif;
// font-family: 'Rochester', cursive;
// font-family: 'Sacramento', cursive;