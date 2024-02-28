import styled from 'styled-components'
import Drawer from '../drawer'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97vw;
  height: auto;
  font-size: 24px;
  /* background: #ffb066; */
  background: #ffca99;
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 25px;
  color: #803e00;
  /* position: fixed top; */

  @media screen and (max-width: 550px) {
    width: 92.2vw;
  }
`

const Blogger = styled.div`
  display: flex;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 850px) {
    width: 80%;
    margin-left: -90px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  width: 82%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Poppins;

  @media screen and (max-width: 850px) {
    width: 80%;
    margin-left: -29px;
  }
`

const Span = styled.div`
  display: flex;
  font-size: 28px;
  letter-spacing: 7px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 850px) {
    font-size: 18px;
    letter-spacing: 4px;
    width: 20rem;
  }
`

const Botao = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 850px) {
    margin-right: 40px;
  }
`

export default function Navbar() {
  return (
    <Container>
      <Blogger>
        <Botao>
          <Drawer />
        </Botao>
        <TitleContainer>
          <Span>Ariana Ribeiro</Span>
          <span
            style={{
              fontSize: '17px',
              letterSpacing: '3px',
              fontStyle: 'italic',
            }}
          >
            Estética
          </span>
        </TitleContainer>
      </Blogger>
    </Container>
  )
}
