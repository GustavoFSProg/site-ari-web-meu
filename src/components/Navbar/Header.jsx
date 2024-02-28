import styled from 'styled-components'
import whats from '../../assets/whats.png'
import insta from '../../assets/insta.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: auto;
  flex-direction: column;

  background: #44403c;
  padding-top: 17px;
  padding-bottom: 17px;
  color: #803e00;
  /* margin-top: 30px; */

  @media screen and (max-width: 550px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`

const WhatsContainer = styled.div`
  display: flex;
  width: 50px;
`

// const Botao = styled.span`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-size: 16px;
//   width: 13rem;
//   height: auto;
//   border: 3px solid white;
//   /* border-radius: 10px; */
//   border-radius: 15px 15px 15px 15px;

//   border-style: double;

//   padding-top: 9px;
//   padding-bottom: 9px;

//   @media screen and (max-width: 850px) {
//     /* margin-right: 40px; */
//   }
// `

const ImagemInsta = styled.img`
  display: flex;
  width: 42px;
  height: 42px;

  @media screen and (max-width: 800px) {
    width: 39px;
    height: 39px;
  }
`

const ImagemWhats = styled.img`
  display: flex;
  width: 45px;
  height: 45px;
  margin-top: -1px;
  margin-left: 30px;
  /* align-items: right; */

  @media screen and (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
`

const ContainerFotos = styled.div`
  display: flex;
  width: 70px;
  height: auto;
  flex-direction: row;
  /* background: green; */
  /* margin-top: 20px; */
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 58px;

  @media screen and (max-width: 800px) {
    margin-left: 42px;
  }
`

export default function Header() {
  return (
    <Container>
      {/* <Botao>
        <a style={{ textDecoration: 'none', color: 'white' }} href="https://wa.me/558588999512">
          Entre em contato
        </a>
      </Botao> */}
      <ContainerFotos>
        <WhatsContainer>
          <a href="https://www.instagram.com/ariana_o_ribeiro/">
            <ImagemInsta src={insta} alt="instagram" />
          </a>
        </WhatsContainer>
        <WhatsContainer>
          <a href="https://wa.me/558588999512">
            <ImagemWhats src={whats} alt="whatsapp" />
          </a>
        </WhatsContainer>
      </ContainerFotos>
    </Container>
  )
}
