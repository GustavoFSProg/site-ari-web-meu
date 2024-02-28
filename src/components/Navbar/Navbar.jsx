import styled from 'styled-components'
import Drawer from '../drawer'
import logo from '../../assets/logo.jpeg'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 97vw;
  height: auto;
  font-size: 24px;
  /* background: #ffb066; */
  background: #56514c;
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 25px;
  color: #803e00;
  /* position: fixed top; */

  @media screen and (max-width: 550px) {
    /* width: 92.2vw; */
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
  width: 48%;
  justify-content: flex-end;
  align-items: flex-end;
  /* flex-direction: column; */
  font-family: Poppins;

  @media screen and (max-width: 850px) {
    display: none;
  }
`

const Span = styled.div`
  display: flex;
  font-size: 18px;
  /* letter-spacing: 7px; */
  justify-content: center;
  align-items: center;
  color: white;
  width: auto;
  padding-right: 40px;

  @media screen and (max-width: 850px) {
    font-size: 18px;
    letter-spacing: 4px;
    width: 20rem;
  }
`

const Botao = styled.span`
  display: none;
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  /* margin-right: 40px; */
  @media screen and (max-width: 850px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`

const Imagem = styled.img`
  width: 230px;
  height: 150px;
  border-radius: 15px;
  margin-left: 20px;
  margin-top: 10px;

  @media screen and (max-width: 850px) {
    margin-left: 122px;
    width: 100px;
    /* width: 130px; */
    height: 70px;
    /* height: 80px; */
  }
`

export default function Navbar() {
  return (
    <Container>
      <Blogger>
        <Botao>
          <Drawer />
        </Botao>
        <Imagem src={logo} alt="logo" />
        <TitleContainer>
          <Span>Home</Span>
          <Span>Sobre Nós</Span>
          <Span>Nossos Serviçõs</Span>
        </TitleContainer>
      </Blogger>
    </Container>
  )
}
