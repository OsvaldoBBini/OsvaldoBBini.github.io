import { ContainerInOut } from "../../components/ContainerInOut";
import NavegateButton from "../../components/NavegateButton";
import { Container, Light } from "./styles";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react'

export default function AgileManifest(): JSX.Element {

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
    useTransform(scrollYProgress, [0.85, 0.90,0.95], [0, 1, 0]),
    useTransform(scrollYProgress, [0.95, 1], [0, 1]),
  ]

  const opacityLight = useTransform(scrollYProgress, [0.15,0.3,1], [0,1,1])

  return (
    <Container ref={targetRef}>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[0]}}>
        <h2>Estamos vagando, perdidos neste universo de planejamento, onde tudo tende ao fracasso, então eis que....</h2>
      </ContainerInOut>

      <ContainerInOut as={motion.div} style={{opacity: opacity[1], left: '60%'}}>
        <h1>LUZ</h1>
      </ContainerInOut>

      <ContainerInOut as={motion.div} style={{opacity: opacity[2], left: '60%', width: '60%'}}>
        <h2>
          Em fevereiro de 2001, 17 pessoas se reuniram e criaram o que seria os 12 mandamentos ágeis, ou as doze diretrizes que
          regem todo o desenvolvimento ágil em sua maneira mais pura
        </h2>
      </ContainerInOut>

      <ContainerInOut as={motion.div} style={{opacity: opacity[3], left: '60%', width: '60%'}}>
          <h2>
            1. Nossa maior prioridade é satisfazer o cliente através da entrega contínua e adiantada de software com valor agregado
          </h2>
          <h2>
            2. Mudanças nos requisitos são bem-vindas, mesmo tardiamente no desenvolvimento. Processos ágeis tiram vantagem das
            mudanças visando vantagem competitiva para o cliente
          </h2>
      </ContainerInOut>
     
      <ContainerInOut as={motion.div} style={{opacity: opacity[4], left: '60%', width: '60%'}}>
          <h2>
            3. Entregar frequentemente software funcionando, de poucas semanas a poucos meses, com preferência à menor escala de tempo
          </h2>
          <h2>
            4. Pessoas de negócio e desenvolvedores devem trabalhar diariamente em conjunto por todo o projeto.
          </h2>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[5], left: '60%', width: '60%'}}>
          <h2>
            5. Construa projetos em torno de indivíduos motivados. Dê a eles o ambiente e o suporte necessário e confie neles para fazer o trabalho.
          </h2>
          <h2>
            6. O método mais eficiente e eficaz de transmitir informações para e entre uma equipe de desenvolvimento
            é através de conversa face a face
          </h2>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[6], left: '60%', width: '60%'}}>
          <h2>
            7. Software funcionando é a medida primária de progresso.
          </h2>
          <h2>
            8. Os processos ágeis promovem desenvolvimento sustentável. Os patrocinadores, desenvolvedores e usuários devem ser capazes de manter um ritmo constante indefinidamente.
          </h2>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[7], left: '60%', width: '60%'}}>
          <h2>
            9. Contínua atenção à excelência técnica e bom design aumenta a agilidade
          </h2>
          <h2>
            10. Simplicidade--a arte de maximizar a quantidade de trabalho não realizado--é essencial.
          </h2>
      </ContainerInOut>

      <ContainerInOut as={motion.div} style={{opacity: opacity[8], left: '60%', width: '60%'}}>
          <h2>
            11. As melhores arquiteturas, requisitos e designs emergem de equipes auto-organizáveis
          </h2>
          <h2>
            12. Em intervalos regulares, a equipe reflete sobre como se tornar mais eficaz e então refina e ajusta seu comportamento de acordo.
          </h2>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[9], left: '60%', width: '60%'}}>
          <h2>
            Estes pricípios foram a fonte pra diversos métodos ágeis, sendo um dos mais famosos e mais utilizados o SCRUM
          </h2>
          <h2>
            O que você acha de darmos uma olhada juntos no que é esse SCRUM??
          </h2>
          <NavegateButton text="Bora lá !?..." destiny="/"/>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacityLight}}>
        <Light/>
      </ContainerInOut>
    
    </Container>
  )

}