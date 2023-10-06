import styled from "styled-components";

export const AppSection = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media (max-width: 934px) {  
    flex-direction: column;
    padding: 10px 10px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 700px;
  min-width: 400px;
  height: 400px;
  @media (max-width: 934px) {
    flex-direction: row;
    max-height: 40px;
    min-width: 300px;
    flex-wrap: wrap;
    gap:30px;
    margin-bottom: 80px;
    margin-top: 40px;
  }
`

export const TimeList = styled.ul`
  list-style: none;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  min-width: 450px;
  min-height: 400px;
  max-height: 400px;
  border-radius: 10px;
  padding: 20px 20px;
  overflow-y: auto;
  @media (max-width: 505px) {
    min-width: 300px;
  }
  @media (max-width: 360px) {
    min-width: 200px;
    max-width: 200px;
  }
`

export const TimeListEl = styled.li`
  display: grid;
  grid-template-columns: 1fr 5fr;
  justify-content: space-around;
  &:not(:last-child) {
    border-bottom: 1px solid cornflowerblue;
  }
`
export const LogParagraph = styled.p`
  text-align: start;
  font-size: 20px;
`
export const NumberParagraph = styled.p`
  font-weight: bold;
  font-size: 20px;
`