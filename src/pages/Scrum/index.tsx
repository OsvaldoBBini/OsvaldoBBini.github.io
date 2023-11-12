import { useRef } from 'react'
import { useScroll, motion, useTransform } from 'framer-motion'
import { Container, Grid } from './styles'
import { ContainerInOut } from '../../components/ContainerInOut'
import OutlineContainer from '../../components/OutlineContainer'
import Principles from './Principles'
import Values from './Values'
import ScrumAnimation from './ScrumAnimation'
import NavegateButton from '../../components/NavegateButton'

export default function Scrum(): JSX.Element {

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

  const opacityProcess = [
    useTransform(scrollYProgress, [0.45, 0.5, 0.90, 0.95], [0, 1, 1, 0]),
  ]

  return (
    <Container ref={targetRef}>

      <p className="instructions">
        Para avançar arraste para baixo {'-->'}
      </p>

    <ContainerInOut as={motion.div} style={{opacity: opacity[0]}}>
        <OutlineContainer>
          <h2>
            Entramos agora no Scrum. Ele é um framework de gerenciamento que as equipes usam para se auto-organizar e trabalhar em direção a um objetivo em comum. A estrutura descreve um conjunto de reuniões, ferramentas e funções para uma entrega eficiente de projetos.
          </h2>
        </OutlineContainer>
    </ContainerInOut>

    <ContainerInOut as={motion.div} style={{opacity: opacity[1]}}>
      <Principles/>
    </ContainerInOut>

    <ContainerInOut as={motion.div} style={{opacity: opacity[2]}}>
      <Values/>
    </ContainerInOut>

    <ContainerInOut as={motion.div} style={{opacity: opacity[3]}}>
        <OutlineContainer>
          <h2>
            Então com os princípios e os valores definidos as equipes e times de desenvolvimento se auto-organizam
            buscando entregar valor pro cliente e para isso são definidos os artefatos onde cada um possue uma função
            específica dentro do scrum contento seus eventos associados, vamos entende-lós como cada um funciona a seguir...
          </h2>
        </OutlineContainer>
    </ContainerInOut>
    
    <ContainerInOut as={motion.div} style={{opacity: opacityProcess[0]}}>

      <Grid>
        
        <OutlineContainer style={{opacity: opacity[4], gridColumnStart: 1, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            Começaremos pelo BACKLOG que é uma lista dinâmica de recursos, requisitos, melhorias e correções que devem ser concluídos para que o projeto seja bem-sucedido. Em essência, é a lista de tarefas da equipe.
          </p>
        </OutlineContainer>

        <OutlineContainer style={{opacity: opacity[4], gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            Quem mantem essa lista atualizada e a organiza, defindindo seu conteúdo é o PO ou PRODUCT OWNER, ele tem como função
            garantir que a equipe de desenvolvimento forneça o máximo de valor aos negócios através do entendimento e priorização das necessidades
            dinâmicas dos usuários finais e clientes
          </p>
        </OutlineContainer>
        
        <OutlineContainer style={{opacity: opacity[5], gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            O SPRINT BACKLOG é a lista de itens a serem concluídos pela equipe de desenvolvimento no ciclo atual do Sprint. Antes de cada Sprint, a equipe escolhe em quais itens do product backlog trabalhará.
          </p>
        </OutlineContainer>

        <OutlineContainer style={{opacity: opacity[5], gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            Temos então junto a ele o SPRINT que é o período de tempo real em que a equipe Scrum trabalhará em conjunto para concluir um incremento para o projeto
          </p>
        </OutlineContainer>

        <OutlineContainer style={{opacity: opacity[5], gridColumnStart: 3, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            Para orientar a equipe nesse período de tempo temos então o SCRUM MASTER que é responsávei por orientar, planejar os recursos necessários, promover trreinamentos para equipe, comunicar-se com times externos para solucionar possíveis desafios e conduzir eventos de sprint e reuniões 
          </p>
        </OutlineContainer>
        
        <OutlineContainer style={{opacity: opacity[6], gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            Os eventos ocorrem para organizar o time scrum, esse que se estrutura em uma equipe multidisciplinar, e deixar todos a par do projeto em sua totalidade, esses eventos são coduzidos como dito anteriormente pelo SCRUM MASTER
          </p>
        </OutlineContainer>

        <OutlineContainer style={{opacity: opacity[6], gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            O primeiro é o planejamento do sprint onde a equipe estima o trabalho a ser concluído no próximo SPRINT e onde também definisse metas para estas atividades
          </p>
        </OutlineContainer>

        <OutlineContainer style={{opacity: opacity[6], gridColumnStart: 3, gridColumnEnd: 4, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            O segundo é SCRUM DIÁRIO que é uma reunião rápida, geralmente em pé,onde todos os membros do time informará onde estão com suas atividades e dificuldades encontradas.
          </p>
        </OutlineContainer>
        
        <OutlineContainer style={{opacity: opacity[6], gridColumnStart: 4, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            E ao final do SPRINT realizam-se dois a REVISÃO e a RETROSPECTIVA, a revisão é onde as atividades concluidas são apresentadas as partes interessadas e na retrospectiva o time documenta e discute o que deve ser melhorado para o próximo SPRINT
          </p>
        </OutlineContainer>
        
        <OutlineContainer style={{opacity: opacity[7], gridColumnStart: 1, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            E Finalizamos então com o INCREMENTO AO PRODUTO. O incremento é um passo em direção a uma meta ou visão. É o produto final utilizável de um Sprint. As equipes podem adotar diferentes métodos para determinar e demonstrar suas metas de Sprint. Apesar da flexibilidade, a meta fundamental do Sprint, o que a equipe deseja alcançar no Sprint atual, não pode ser afetada
          </p>
        </OutlineContainer>
        
        <OutlineContainer style={{opacity: opacity[8], gridColumnStart: 1, gridColumnEnd: 5, gridRowStart: 1, gridRowEnd: 1}}>
          <p>
            Recapitulando, então temos um Framework que através de um Product Owner que detem a visão do produto gera atividades necessárias para atingirmos o sucesso do projeto, com isso o Scrum Master entra em cena e junto à equipe define metas e objetivos mais curtos com entregas, os SPRINTS, e para que essas metas sejam alcançadas ele realiza eventos para organizar e entender o andamento das atividades a fim de mitigar erros e conflitos para que ao final o incremento seja entregue com sucesso trazendo e garantindo valor a entrega 
          </p>
        </OutlineContainer>
      </Grid>
      <ScrumAnimation/>
    </ContainerInOut>

    <ContainerInOut as={motion.div} style={{opacity: opacity[9]}}>
        <OutlineContainer>
          <h2>
            Porém dentro do universo ágil não existem apenas o SCRUM, existem diferentes frameworks e métodos que até mesmo o SCRUM faz uso e utiliza em seus eventos de planejamento, então pq não darmos uma olhadinha neles?
          </h2>
        </OutlineContainer>
          <NavegateButton text="Conferir..." destiny="/"/>
      </ContainerInOut>

    </Container>
  )
}