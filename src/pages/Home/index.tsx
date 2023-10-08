import fahor from '../../assets/images/fahor.png'
import AnchorButton from '../../components/AnchorButton'

import { ComponentsContainer, Container, HomeTitleContainer, ImageContainer} from './styles'

export default function Home(): JSX.Element {
  return (
    <Container>
      <ComponentsContainer>
        <HomeTitleContainer>
          <h1>AgileFahor</h1>
          <p>Sua jornada no mundo ágil começa aqui!!!</p>
          <AnchorButton text={'Inicar Jornada...'}/>
        </HomeTitleContainer>
        <ImageContainer>
          <img src={fahor} alt='logo fahor'/>
        </ImageContainer>
      </ComponentsContainer>
    </Container>
  )
}