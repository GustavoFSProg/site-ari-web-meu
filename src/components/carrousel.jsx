import { Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import foto1 from '../assets/olhos-1.jpeg'
import foto2 from '../assets/olhos-2.jpeg'
import foto3 from '../assets/bastoes.jpeg'
import foto4 from '../assets/pincels.jpeg'
import styled from 'styled-components'

const ContainerSlider = styled.div`
  display: flex;
  max-height: 250px;
  margin-top: 1px;

  @media screen and (max-width: 800px) {
    /* height: -210px; */
  }
`

const Imagem = styled.img`
  display: flex;
  width: 100px;
  height: 590px;
  height: 720px;

  @media screen and (max-width: 800px) {
    width: 100px;
    height: 320px;
  }
`

class DemoCarousel extends Component {
  render() {
    return (
      <ContainerSlider>
        <Carousel
          showArrows
          showThumbs={false}
          autoPlay={true}
          transitionTime={800}
          infiniteLoop
          interval="4700"
          showIndicators={true}
        >
          <div>
            <Imagem src={foto4} />
            {/* <p className="legend">Legend 1</p> */}
          </div>
          <div style={{ marginTop: '-7px' }}>
            <Imagem src={foto2} />
            {/* <p className="legend">Legend 2</p> */}
          </div>
          <div style={{ marginLeft: '-17px' }}>
            <Imagem src={foto1} />
          </div>
          <div>
            <Imagem src={foto3} />
          </div>
        </Carousel>
      </ContainerSlider>
    )
  }
}

export default DemoCarousel
