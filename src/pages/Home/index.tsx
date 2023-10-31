import { motion } from 'framer-motion'
import fahor from '../../assets/images/fahor.png'
import NavegateButton from '../../components/NavegateButton'

import { ComponentsContainer, Container, HomeTitleContainer, ImageContainer} from './styles'

const homeTitleContainerVariant = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 }
}

const imageContainerVariant = {
  hidden: { opacity: 0, y: -75 },
  visible: { opacity: 1, y: 0 }
}

export default function Home(): JSX.Element {
  return (
    <Container>
      <ComponentsContainer>

        <HomeTitleContainer 
          as={motion.div} 
          variants={homeTitleContainerVariant}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.6, delay: 0.25}}>
          <h1>AgileFahor</h1>
          <p>Sua jornada no mundo ágil começa aqui!!!</p>
          <NavegateButton text={'Inicar Jornada...'} destiny='/reorderGame'/>
        </HomeTitleContainer>

        <ImageContainer 
          as={motion.img}  
          variants={imageContainerVariant}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.6, delay: 0.25}}
          src={fahor}
          alt='logo fahor' />
      </ComponentsContainer>
    </Container>
  )
}