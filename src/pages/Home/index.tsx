import fahor from '../../assets/images/fahor.png'
import NavegateButton from '../../components/NavegateButton'

import { ComponentsContainer, Container, HomeTitleContainer, ImageContainer} from './styles'


export default function Home(): JSX.Element {
  return (
    <Container>
      <ComponentsContainer>
        <HomeTitleContainer>
          <h1>AgileFahor</h1>
          <p>Sua jornada no mundo ágil começa aqui!!!</p>
          <NavegateButton text={'Inicar Jornada...'} destiny='/timeline'/>
        </HomeTitleContainer>
        <ImageContainer>
          <img src={fahor} alt='logo fahor'/>
        </ImageContainer>
      </ComponentsContainer>
    </Container>
  )
}