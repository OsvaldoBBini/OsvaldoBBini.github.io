// import NavegateButton from "../../components/NavegateButton"
// import OtlineContainer from "../../components/OutlineContainer"
// import {Container, Grid, TextContainer} from "./styles"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react'
import { Container } from "./styles";

export default function AgileVsVelocity(): JSX.Element {

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })
  
  const opacity1 = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.05], [1, 5])

  const opacity2 = useTransform(scrollYProgress, [0.05, 0.1, 0.15], [0, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.1, 0.15], [1, 5])
  
  const opacity3 = useTransform(scrollYProgress, [0.15, 0.2, 0.25], [0, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.2, 0.25], [1, 5])
  
  const opacity4 = useTransform(scrollYProgress, [0.25, 0.30, 0.35], [0, 1, 0]);
  const scale4 = useTransform(scrollYProgress, [0.30, 0.35], [1, 5])

  return (

    <Container ref={targetRef} style={{position: "absolute"}}>
      <div>
        <motion.div
          style={{
            opacity: opacity1,
            scale: scale1,
            position: "fixed",
            top: '50%',
            left: '50%',
            x: '-50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
            <h2>Parabéns!! Você terminou o desafio!!</h2>
        </motion.div>
      </div>

      <div>
        <motion.div ref={targetRef}
            style={{
              opacity: opacity2,
              scale: scale2,
              width: '80%',
              position: 'fixed',
              top: '40%',
              left: '50%',
              x: '-50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
              <h2>Porém algo aconteceu no meio do caminho, o cliente mudou de ideia e quer servir doces.
                Além disso, ele resolveu também abrir de manhã e servir café da manhã e que pena,
                não tem nenhum desses alimentos na sua lista. O trabalho que você fez foi todo ralo abaixo.
              </h2>
          </motion.div>
      </div>
    
      <div>
        <motion.div ref={targetRef}
            style={{
              opacity: opacity3,
              scale: scale3,
              width: '80%',
              position: 'fixed',
              top: '40%',
              left: '50%',
              x: '-50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
              <h2>
                Imagine-se agora em um projeto grande que levaria dois anos, até mais para ser concluido e terminasse assim.
              </h2>
          </motion.div>
      </div>
    
      <div>
        <motion.div ref={targetRef}
            style={{
              opacity: opacity4,
              scale: scale4,
              width: '80%',
              position: 'fixed',
              top: '40%',
              left: '50%',
              x: '-50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'justify'
            }}
          >
              <h2>
                Com esse intuito as metodologias ágeis surgiram, graças ao mercado volátil permancer sem entregas rápidas e 
                sem contato com o cliente durante o desenvolvimento do projeto se tornou inviável para o seu sucesso.
                Assim existe uma diferença de simplismente ser veloz e ser agil em entregas:
              </h2>
          </motion.div>
      </div>
    </Container>
    
        /* <Grid>
          <TextContainer rowStart={1} rowEnd={1} columnStart={1} columnEnd={4}>
            <h2>Parabéns!! Você terminou o desafio!!</h2>
            <p>Porém algo aconteceu no meio do caminho, o cliente mudou de ideia e quer servir doces.
              Além disso, ele resolveu também abrir de manhã e servir café da manhã e que pena,
              não tem nenhum desses alimentos na sua lista. O trabalho que você fez foi todo ralo abaixo.
            </p>
          </TextContainer>

          <TextContainer rowStart={2} rowEnd={2} columnStart={1} columnEnd={4}>
            <h2>
              Imagine-se agora em um projeto grande que levaria dois anos, até mais para ser concluido e terminasse assim.
            </h2>
            <p>
              Com esse intuito as metodologias ágeis surgiram, graças ao mercado volátil permancer sem entregas rápidas e 
              sem contato com o cliente durante o desenvolvimento do projeto se tornou inviável para o seu sucesso.
              Assim existe uma diferença de simplismente ser veloz e ser agil em entregas:
            </p>
          </TextContainer>
          
          <TextContainer rowStart={3} rowEnd={3} columnStart={1} columnEnd={2}>
            <OtlineContainer>
              <h2>
                Veloz
              </h2>
              <p>
                Ser veloz muita vezes se relaciona com ser apenas o mais rápido a entregar algo, quanto mais rápido a entrega melhor, porém
                ai enfrentamos problemas pois só focamos no objetivo e corremos até ele sem olhar para os lados
              </p>
            </OtlineContainer>
          </TextContainer>
          
          <TextContainer rowStart={3} rowEnd={3} columnStart={3} columnEnd={4}>
            <OtlineContainer>
              <h2>
                Ágil
              </h2>
              <p>
                Ser ágil diferente de ser rápido já demonstra certa habilidade em lidar com barreiras pelo caminho, se adaptar 
                ao ambiente, moldando o caminho para reorganizar a rota até seu objetivo
              </p>
            </OtlineContainer>
          </TextContainer>

          <TextContainer rowStart={5} rowEnd={5} columnStart={4} columnEnd={1}>
            <NavegateButton text="Voltar" destiny="/reorderGame"/>
          </TextContainer>

        </Grid> */
    // </Container>
  )
}