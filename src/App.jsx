import './App.css'
import Header from './components/Navbar/Header'
import Navbar from './components/Navbar/Navbar'
import styled from 'styled-components'
import aparelhos from '../src/assets/aparelhos.jpg'
import whats from '../src/assets/whats.png'
import Ari from '../src/assets/Ari.jpeg'
// import sombras from '../src/assets/sombras-2.jpg'
import DemoCarousel from './components/carrousel'
import Footer from './components/Footer/Footer'

const ContainerTextFoto = styled.div`
  display: flex;
  width: 100%;
  color: black;
  height: auto;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 1800px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    margin-top: 2500px;
  }
`

const Imagem = styled.img`
  display: flex;
  width: 58px;
  height: 58px;
  background: transparent;
  @media screen and (max-width: 800px) {
    width: 55px;
    height: 55px;
    margin-top: -270px;
  }
`

const WhatsContainer = styled.div`
  position: fixed;
  top: 800px;
  right: -100px;
  z-index: 100;
  width: 200px;

  @media screen and (max-width: 800px) {
    margin-bottom: 420px;
    margin-right: -5px;
  }
`

const ContainerTextFigura = styled.div`
  display: flex;
  width: 100%;
  color: black;
  height: auto;
  /* background: #6c6560; */
  background-image: linear-gradient(to right, #514c48 17%, #7a726c, #aba5a0);

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* margin-top: 1085px; */
  margin-top: 180px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    margin-top: 120px;
    margin-bottom: 580px;
    background-image: linear-gradient(to bottom, #5f5954 20%, #7a726c, #aba6a0);
  }
`

const Text = styled.p`
  text-align: justify;
  color: #434343;
  @media screen and (max-width: 850px) {
  }
`

const TextDois = styled.p`
  text-align: justify;
  color: white;
  margin-top: 30px;
  text-indent: 20px;
  /* width: 70px; */
  @media screen and (max-width: 850px) {
    /* margin-top: 10px; */
  }
`

const AvatarImage = styled.img`
  width: 380px;
  border-radius: 25px;

  @media screen and (max-width: 850px) {
    width: 270px;
    margin-top: 50px;
  }
`

const AvatarImageDois = styled.img`
  width: 380px;
  border-radius: 25px;
  margin-top: 30px;

  @media screen and (max-width: 850px) {
    width: 190px;
    margin-top: 50px;
  }
`

const Wrapper = styled.div`
  width: 42%;
  font-size: 20px;
  color: #434343;
  font-family: Montserrat 400;
  margin-top: -155px;

  @media screen and (max-width: 850px) {
    width: 82%;
    font-size: 18px;
  }
`

const WrapperTextoDois = styled.div`
  width: 42%;
  font-size: 20px;
  color: #434343;
  font-family: Montserrat 400;
  margin-top: 10px;
  /* background: #56514c; */
  padding-top: 230px;
  padding-bottom: 155px;
  height: auto;

  @media screen and (max-width: 850px) {
    width: 82%;
    font-size: 18px;
  }
`
const H1 = styled.h1`
  @media screen and (max-width: 850px) {
    font-size: 33px;
  }
`

const H2 = styled.h1`
  margin-top: -120px;
  color: white;
  @media screen and (max-width: 850px) {
    font-size: 33px;
    margin-top: -184px;
  }
`

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100vw',
          overflowX: 'hidden',
          height: '100vh',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Header />
        <DemoCarousel />
        {/* <Imagem>
        <P>
          <span style={{ fontWeight: 'bold', fontFamily: 'Poppins' }}>Ariana Ribeiro</span>
        </P>
      </Imagem> */}
        <div
          style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#4d2500',
            paddingBottom: '650px',
          }}
        >
          <br />

          <ContainerTextFoto>
            <Wrapper>
              <H1>SOBRE NÓS</H1>
              <Text>
                Isso é um texto Fictício, apenas um exemplo para o testar no Layout. Futuramente
                será susbstituído por um texto correto com algumas informações passadas pelo
                cliente.
                <br />
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
              </Text>
            </Wrapper>

            <WhatsContainer>
              <a href="https://wa.me/558588999512">
                <Imagem src={whats} alt="whatsapp" />
              </a>
            </WhatsContainer>

            <div>
              <AvatarImage src={Ari} alt="avatar" />
            </div>
          </ContainerTextFoto>

          <ContainerTextFigura>
            <div>
              <AvatarImageDois src={aparelhos} alt="avatar" />
            </div>
            <WrapperTextoDois>
              <H2>NOSSOS SERVIÇOS</H2>
              <TextDois>
                Isso é um texto Fictício, apenas um exemplo para o testar no Layout. Futuramente
                será susbstituído por um texto correto com algumas informações passadas pelo
                cliente. Seria um texto listando os serviços oferecidos.
                <br />
                <p style={{ textIndent: '20px' }}>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using
                  'Content here, content here', making it look like readable English. Many desktop
                  publishing packages and web page editors now use Lorem Ipsum as their default
                  model text, and a
                </p>
              </TextDois>
            </WrapperTextoDois>
          </ContainerTextFigura>
        </div>
        <br />
        <Footer />
      </div>
    </>
  )
}

export default App
