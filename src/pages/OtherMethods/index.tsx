import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from 'react'
import { Container} from "./styles";
import { ContainerInOut } from "../../components/ContainerInOut";
import OutlineContainer from "../../components/OutlineContainer";
import NavegateButton from "../../components/NavegateButton";

export default function OtherMethods(): JSX.Element {

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

  return (

    <Container ref={targetRef}>

      <p className="instructions">
        Para avançar arraste para baixo {'-->'}
      </p>

      <ContainerInOut as={motion.div} style={{opacity: opacity[0]}}>
        <OutlineContainer>
          <h2>
            Porém, antes de avançarmos devemos entender dois conceitos importantes o de MÉTODO e o de FRAMEWORK, como comentamos o SCRUM se enquadra como um framework mas o que é isso?
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[1]}}>
        <OutlineContainer>
          <h2>
            Os Frameworks são estruturas onde há o uso e combinação de divérsas conceitos, técnicas e métodos o que torna esta estrutura em algo totalmente adaptável. Já um método é um conjunto de procedimentos planejados e organizados, assim podemos ter diversos métodos em um framework se combinando para gerar algo mais otimizado e direcionado para a solução de algum problema determinado. Sabendo disso podemos partir então para outras métodos e frameworks ágeis
          </h2>
        </OutlineContainer>
      </ContainerInOut>

      <ContainerInOut as={motion.div} style={{opacity: opacity[2]}}>
        <OutlineContainer>
          <h2>
            Começaremos pelo Extreme Programming (XP), este método foi criado em 1996 e tem como objetivo entregas no momento em que o cliente precisa, focando em utilizar um sistema de equipe um pouco diferente, o sistema de PAIR PROGRAMMING ou programação em pares. Além disso assim como o SCRUM ele se basea valores,porém os valores do método são: simplicidade, feedback, comunicação, e coragem.
          </h2>
        </OutlineContainer>
      </ContainerInOut>
     
      <ContainerInOut as={motion.div} style={{opacity: opacity[3]}}>
        <OutlineContainer>
          <h2>
            Saindo do método XP entramos agora no método SMART, este é utilizado para a geração de objetivos de forma inteligente buscando que esses objetivos sejam específicos(S), mensuráveis(M), alcançáveis(A),realistas(R), delimitados(T) trazendo consigo a um aumento da eficiência e produtividade de equipes e de pessoas, este método é usado pelo scrum para a delimitação de suas atividades do backlog.
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[4]}}>
        <OutlineContainer>
          <h2>
            Podemos falar também do KANBAN o qual é uma das metodologias ágeis pensadas para otimizar a execução de tarefas ele aposta no controle visual para o acompanhamento dos processos através de um quadro, virtual ou físico, onde cada tarefa é disposta e representada por um cartão que vai avançando em colunas, de acordo com três ou mais classificaçõe, sendo as mais comuns: Tarefas a serem feitas,
            tarefas em andamento e tarefas finalizadas, assim, com o KANBAN torna-se fácil acompanhar o desenvolvimento de projetos.
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[5]}}>
        <OutlineContainer>
          <h2>
            Possuimos também frameworks maiores como O Scaled Agile Framework que foi desenvolvido em 2011 para ajudar as equipes de desenvolvimento de software a colocar produtos no mercado mais rapidamente.
            Com base em uma combinação de princípios ágeis e enxutos, ele apela para uma estreita colaboração e alinhamento entre as equipes e visa centralizar a tomada de decisões. Além disso, oferece várias opções de configuração dependendo do tamanho do time de desenvolvedores. permite que as organizações visualizem o “quadro geral”, mapeando funções, responsabilidades e atividades necessárias para o desenvolvimento de software. 
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[6]}}>
        <OutlineContainer>
          <h2>
            Porém não existem só esses métodos e frameworks, existem outros diversos métodos e cada um possui suas particularidades e maneiras efetivas de serem implementados porém todos entram em cena para realizar melhores entregas para clientes sejam estas entregas serviços, softwares ou até mesmo produtos como carros (é o LEAN também se classifica como um método ágil), sempre visando alterações do mercado e mudança de exigência dos cosumidores finais
          </h2>
        </OutlineContainer>
      </ContainerInOut>
      
      <ContainerInOut as={motion.div} style={{opacity: opacity[7]}}>
        <OutlineContainer>
          <h2>
            Com isso chegamos ao final da nossa breve jornado pelo mundo ágil, este que é incrivelmente amplo e que se encontra sempre em expansão através de novos métodos e frameworks mas sempre buscando algo em comum, equipes movidas por um propósito, entregar valor em cada pedacinho de trabalho realizado
          </h2>
        </OutlineContainer>
      </ContainerInOut>


      <ContainerInOut style={{opacity: opacity[8]}}>
        <OutlineContainer>
          <h2>Muito obrigado por embarcar nesta jornada com nós!!! Até Breve</h2>
        </OutlineContainer>

        <NavegateButton text="Voltar para o início..." destiny="/"/>
      
      </ContainerInOut>

    </Container>
  )
}