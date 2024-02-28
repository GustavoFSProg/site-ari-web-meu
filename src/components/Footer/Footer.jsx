import styled from 'styled-components'
import logo from '../../assets/logo.jpeg'
import whats from '../../assets/whats.png'
import insta from '../../assets/insta.png'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  /* background: black; */
  background: #44403c;
  margin-top: 900px;
  margin-bottom: -150px;
  padding-top: 29px;
  padding-bottom: 69px;
  color: white;

  @media screen and (max-width: 850px) {
    width: 100%;
    margin-top: 1200px;
  }
`
const WhatsContainer = styled.div`
  display: flex;
  widows: 100px;
`
const TitleContainer = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background: green; */
  /* margin-left: -40px; */
  padding-top: 11px;
  padding-bottom: 11px;

  @media screen and (max-width: 850px) {
    /* width: 100%; */
    /* margin-left: -10px; */
  }
`

const Span = styled.div`
  display: flex;
  font-size: 16px;
  /* letter-spacing: 10px; */
  justify-content: center;
  align-items: center;
  font-weight: none;

  @media screen and (max-width: 850px) {
    font-size: 13px;
  }
`

const SocialNet = styled.div`
  display: flex;
  font-size: 16px;
  /* letter-spacing: 10px; */
  justify-content: center;
  align-items: center;
  font-weight: none;
  width: 100rem;
  height: 5rem;
  margin-top: 40px;
`

const ImagemLogo = styled.img`
  width: 280px;
  margin-top: 60px;
  margin-bottom: 40px;
  border-radius: 15px;
`

const Address = styled.div`
  display: flex;
  font-size: 18px;
  /* letter-spacing: 10px; */
  justify-content: center;
  align-items: center;
  font-weight: none;

  @media screen and (max-width: 850px) {
    font-size: 18px;
  }
`

const SpanDiv = styled.span`
  font-size: 18px;
  font-style: italic;
  margin-top: 6px;
`

const ContainerAll = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  margin-top: 50px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    height: 7rem;
    margin-top: 35px;
  }
`

const ImagemWhats = styled.img`
  display: flex;
  width: 44px;
  height: 44px;
  margin-top: -1px;
  margin-left: 14px;

  @media screen and (max-width: 800px) {
    width: 59px;
    height: 59px;
  }
`

const ImagemInsta = styled.img`
  display: flex;
  width: 41px;
  height: 41px;

  @media screen and (max-width: 800px) {
    width: 55px;
    height: 55px;
  }
`

export default function Footer() {
  return (
    <Container>
      <TitleContainer>
        <ImagemLogo src={logo} alt="logo" />

        {/* <Span>email@gmail.com</Span> */}
        <span
          style={{
            fontSize: '24px',
            fontStyle: 'italic',
            marginTop: '6px',
            fontFamily: 'Noto Serif',
          }}
        >
          Ariana d'Oliveira Ribeiro
        </span>
        <SocialNet>
          <p>
            {' '}
            <WhatsContainer>
              <a href="https://www.instagram.com/ariana_o_ribeiro/">
                <ImagemInsta src={insta} alt="instagram" />
              </a>
            </WhatsContainer>
          </p>
          <p>
            {' '}
            <WhatsContainer>
              <a href="https://wa.me/558588999512">
                <ImagemWhats src={whats} alt="whatsapp" />
              </a>
            </WhatsContainer>
          </p>
        </SocialNet>
        <ContainerAll>
          <SpanDiv>Fone: 85 889-99512</SpanDiv>
          <Address>Rua Fulano da Fulana 666.</Address>
          <Address>fulano@gmail.com.</Address>
        </ContainerAll>
      </TitleContainer>
    </Container>
  )
}
