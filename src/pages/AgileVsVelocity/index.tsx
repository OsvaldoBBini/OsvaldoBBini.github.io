import { useScroll, useTransform } from "framer-motion";
import { useRef } from 'react'
import { Container, ContainerInOut } from "./styles";
import OutlineContainer from "../../components/OutlineContainer";


export default function AgileVsVelocity(): JSX.Element {

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const opacity = [
    useTransform(scrollYProgress, [0, 0.05], [1, 0]),
    useTransform(scrollYProgress, [0.05, 0.1, 0.15], [0, 1, 0]),
    useTransform(scrollYProgress, [0.15, 0.2, 0.25], [0, 1, 0]),
    useTransform(scrollYProgress, [0.25, 0.30, 0.35], [0, 1, 0]),
    useTransform(scrollYProgress, [0.35, 0.40, 0.45], [0, 1, 0]),
    useTransform(scrollYProgress, [0.45, 0.50, 0.55], [0, 1, 0])
  ]

  const scale = [
    useTransform(scrollYProgress, [0, 0.05], [1, 5]),
    useTransform(scrollYProgress, [0.1, 0.15], [1, 5]),
    useTransform(scrollYProgress, [0.2, 0.25], [1, 5]),
    useTransform(scrollYProgress, [0.30, 0.35], [1, 5]),
    useTransform(scrollYProgress, [0.40, 0.45], [1, 5]),
    useTransform(scrollYProgress, [0.50, 0.55], [1, 5])
  ]

  return (

    <Container ref={targetRef}>

      <ContainerInOut style={{opacity: opacity[0], scale: scale[0], x: '-50%'}}>
        <OutlineContainer>
          <h2>Meus Parabéns!!! Você conseguiu ajudar o seu cliente a montar um menu para seu novo restaurante!!</h2>
        </OutlineContainer>
      </ContainerInOut>
     
      <ContainerInOut style={{opacity: opacity[1], scale: scale[1], x: '-50%'}}>
        <OutlineContainer>
          <h2>
            Porém algo aconteceu no meio do caminho e eu tenho uma péssima notícia para te dizer
            ,o cliente desistiu do seu menu pois ele mudou de ideia e quer servir doces e lanches para servir no café da manhã,
            e que pena, não tem nenhum desses alimentos na sua lista. O trabalho que você fez foi todo ralo abaixo.
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut style={{opacity: opacity[2], scale: scale[2], x: '-50%'}}>
        <OutlineContainer>
          <h2>
            Esse exemplo pode parecer bobo, porém e se aumentarmos a escala dele?? 
            Agora imagine-se em um projeto maior, com várias pessoas trabalhando nele,
            com diversas funcionalidades, consumindo vários recursos da empresa e
            que levaria dois anos, até mais para ser concluido.
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut style={{opacity: opacity[3], scale: scale[3], x: '-50%'}}>
        <OutlineContainer>
          <h2>
            Apenas uma palavra poderia resumir este projeto caso ele desse errado: PÂNICO
          </h2>
        </OutlineContainer>
      </ContainerInOut>

      <ContainerInOut style={{opacity: opacity[4], scale: scale[4], x: '-50%'}}>
        <OutlineContainer>
          <h2>
            Com esse intuito as metodologias ágeis surgiram, graças ao mercado volátil percebeu-se que permancer longe
            do cliente final durante a etapa de desenvolvimento era o segredo para fracassar projetos, e como estes projetos
            acabam por consumir muito recursos, a falha nunca é opção. Para lidar com isso então, surgiu os métodos ágeis
            onde estes se propuseram a servir de base para direcionar entregas mais acertivas e rápidas
          </h2>
        </OutlineContainer>
      </ContainerInOut>

      <ContainerInOut style={{opacity: opacity[5], scale: scale[5], x: '-50%'}}>
        <OutlineContainer>
          <h2>
            Mas não se engane pois existe diferença entre ser rápido e utilizar de métodos ágeis, e iremos demonstrar isto a seguir
          </h2>
        </OutlineContainer>
      </ContainerInOut>
    </Container>
  )
}