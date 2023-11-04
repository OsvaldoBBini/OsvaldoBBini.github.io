import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react'
import { Ball, Container, AnimationContainer, Target, Wall } from "./styles";
import { ContainerInOut } from "../../components/ContainerInOut";
import OutlineContainer from "../../components/OutlineContainer";
import NavegateButton from "../../components/NavegateButton";


export default function AgileVsVelocity(): JSX.Element {

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const opacity = [
    useTransform(scrollYProgress, [0, 0.15], [1, 0]),
    useTransform(scrollYProgress, [0.15, 0.20, 0.25], [0, 1, 0]),
    useTransform(scrollYProgress, [0.25, 0.30, 0.35], [0, 1, 0]),
    useTransform(scrollYProgress, [0.35, 0.40, 0.45], [0, 1, 0]),
    useTransform(scrollYProgress, [0.45, 0.50, 0.55], [0, 1, 0]),
    useTransform(scrollYProgress, [0.55, 0.60, 0.65], [0, 1, 0]),
    useTransform(scrollYProgress, [0.65, 0.70, 0.75], [0, 1, 0]),
    useTransform(scrollYProgress, [0.75, 0.80, 0.85], [0, 1, 0]),
    useTransform(scrollYProgress, [0.85, 0.90], [0, 1]),
  ]

  const scale = [
    useTransform(scrollYProgress, [0, 0.15], [1, 5]),
    useTransform(scrollYProgress, [0.2, 0.25], [1, 5]),
    useTransform(scrollYProgress, [0.3, 0.35], [1, 5]),
    useTransform(scrollYProgress, [0.4, 0.45], [1, 5]),
    useTransform(scrollYProgress, [0.5, 0.55], [1, 5]),
    useTransform(scrollYProgress, [0.6, 0.65], [1, 5]),
    useTransform(scrollYProgress, [0.7, 0.75], [1, 5]),
    useTransform(scrollYProgress, [0.8, 0.85], [1, 5]),
    useTransform(scrollYProgress, [0.9, 0.95], [1, 5]),
  ]

  return (

    <Container ref={targetRef}>

      <ContainerInOut as={motion.div} style={{opacity: opacity[0], scale: scale[0]}}>
        <OutlineContainer>
          <h2>Meus Parabéns!!! Você conseguiu ajudar o seu cliente a montar um cardápio para seu novo restaurante!!</h2>
        </OutlineContainer>
      </ContainerInOut>
     
      <ContainerInOut as={motion.div} style={{opacity: opacity[1], scale: scale[1]}}>
        <OutlineContainer>
          <h2>
            Porém algo aconteceu no meio do caminho e eu tenho uma péssima notícia para te dizer, o cliente desistiu do seu cardápio pois ele mudou de ideia e quer servir doces e lanches para servir no café da manhã,
            e que pena, não tem nenhum desses alimentos na sua lista. O trabalho que você fez foi todo ralo abaixo
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[2], scale: scale[2]}}>
        <OutlineContainer>
          <h2>
            Esse exemplo pode parecer bobo, porém e se aumentarmos a escala dele?? 
            Agora imagine-se em um projeto maior, com várias pessoas trabalhando nele,
            com diversas funcionalidades, consumindo vários recursos da empresa e
            que levaria dois anos, até mais para ser concluido
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[3], scale: scale[3]}}>
        <OutlineContainer>
          <h2>
            Apenas uma palavra poderia resumir este projeto caso ele desse errado: PÂNICO
          </h2>
        </OutlineContainer>
      </ContainerInOut>

      <ContainerInOut as={motion.div} style={{opacity: opacity[4], scale: scale[4]}}>
        <OutlineContainer>
          <h2>
            Com esse intuito as metodologias ágeis surgiram, graças ao mercado volátil percebeu-se que permancer longe
            do cliente final durante a etapa de desenvolvimento era o segredo para fracassar projetos, e como estes projetos
            acabam por consumir muito recursos, a falha nunca é opção. Para lidar com isso então, surgiu os métodos ágeis
            onde estes se propuseram a servir de base para direcionar entregas mais acertivas e rápidas
          </h2>
        </OutlineContainer>
      </ContainerInOut>

      <ContainerInOut as={motion.div} style={{opacity: opacity[5], scale: scale[5]}}>
        <OutlineContainer>
          <h2>
            Mas não se engane pois existe diferença entre ser rápido e utilizar de métodos ágeis
          </h2>
        </OutlineContainer>
      </ContainerInOut>

      <ContainerInOut style={{opacity: opacity[6], scale: scale[6]}}>
        <OutlineContainer>
          <AnimationContainer>
            <h2>Quando falamos de velocidade estamos nos referindo a algo que seja extremamente veloz, mas se algo acontecer em seu caminho ele se torna incapaz de mudar sua trajetória</h2>

            <div>  
              <Ball
                as={motion.div}
                style={{height: '3rem', width: '3rem'}}
                animate={{
                  x: [50, 400, 400, 50],
                  y: [150, 150, 150, 150],
                }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />

              <Wall
                as={motion.div}
                style={{height: '8rem', width: '2rem'}}
                animate={{
                  x: [430, 430],
                  y: [65, 65],
                }}

              />
              
              <Target
                as={motion.div} 
                style={{height: '4rem', width: '4rem'}}
                animate={{
                  x: [480, 480],
                  y: [-32, -32],
                }}
              >
                X
              </Target>
            </div>
          </AnimationContainer>
        </OutlineContainer>
      </ContainerInOut>


      <ContainerInOut style={{opacity: opacity[7], scale: scale[7]}}>
        <OutlineContainer>
          <AnimationContainer>
            <h2>Já quando falamos de agilidade estamos nos referindo a capacidade de se adaptar a mudanças do ambiente impostas por situações que podemos e não podemos controlar, modificando nosso caminho para atingir o objetivo, isso nem sempre é rápido porém se torna mais assertivo</h2>
            <div>
              <Ball 
              as={motion.div}
              style={{
                width: '3rem',
                height: '3rem',
              }}
              
              animate={{
                x: [50, 200, 200, 400, 400, 400, 400, 200, 200, 50],
                y: [50, 50, 200, 200, 100, 100, 200, 200, 50, 50]
              }}

              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              >
              </Ball>

              <Wall
                as={motion.div}
                style={{height: '8rem', width: '2rem'}}
                animate={{
                  x: [250, 250],
                  y: [0, 0],
                }}
              />

              <Target 
                as={motion.div}
                style={{height: '4rem', width: '4rem'}}
                animate={{
                  x: [395, 395],
                  y: [-80, -80],
                }}
              >
                X
              </Target>

            </div>
            </AnimationContainer>
        </OutlineContainer>
      </ContainerInOut>

      <ContainerInOut style={{opacity: opacity[8]}}>

        <OutlineContainer>
          <h2>Então para orientar desenvolvedores do mundo todo, 17 pessoas da área de desenvolvimento de software se uniram e criaram os mandamentos do mundo ágil a fim de buscar esta agilidade para novos projetos</h2>
        </OutlineContainer>

        <NavegateButton text="Bora conferir!? ..." destiny="/agilemanifest"/>
      
      </ContainerInOut>

    </Container>
  )
}