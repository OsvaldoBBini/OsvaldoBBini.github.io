import { useEffect, useState } from "react"
import NavegateButton from "../../components/NavegateButton"
import PopupContent from "../../components/PopupContent"
import { Container } from "./styles"

interface ITexts{
  title: string,
  contentTitle: string,
  content: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
} 

const texts = [
  {
    title: "1990",
    contentTitle: "Cascata em queda",
    content: `Na década de 90 os desenvolvedores começaram
              a notar que os ciclos de produção do método cascata (waterfall)
              não estavam suprindo as necessidades e expectativas dos cliente
              pela dificuldade de registrar feedbacks e alterações durante o ciclo
              de vida do projeto`,
  },
  {
    title: "1995",
    contentTitle: "Scrum",
    content: `Em 1995 o Scrum, foi criado por Ken Schwaber e Jeff Sutherland se estabelecendo
              como um dos primeiros métodos ágeis a serem criados e utilizados, o scrum se
              estabeleceu como um framework distinto ao metodo cascata considerando rodadas de revisão
              com os clientes e com os próprios desenvolvedores para estabelecer melhorias aos sistemas`,
  },
  {
    title: "2001",
    contentTitle: "O Manifesto Ágil",
    content: `Em uma reunião realizada em Snowbird, Utah nos Estados Unidos,
              17 desenvolvedores de software criaram um documento definindo
              12 princípios para o desenvolvimento ágil, este manifesto permea
              todos os métodos e construções ágeis, trazendo para os desenvolvedores
              as diretrizes e os pontos mais importantes ao desenvolverem novos produtos
              visando a entrega de valor real aos seus clientes`,
  },
  {
    title: "2009",
    contentTitle: "Kanban",
    content: `O framework Kanban é introduzido como uma abordagem
              ágil para gerenciamento de fluxo de trabalho. 
              Trata-se de um sistema visual que busca gerenciar o trabalho conforme ele se move pelo processo
              tendo uso em diversos setores, projetos e outras metodologias`,
  },
  {
    title: "2021",
    contentTitle: "Expansão Ágil",
    content: `O uso de práticas ágeis vem se espalhando para além do desenvolvimento de software
              ,sendo adotado em áreas como marketing, recursos humanos e gerenciamento de projetos`,
  },
]

export default function TimeLine(): JSX.Element {


  const [renderTexts, setRenderTexts] = useState<ITexts[]>([])

  useEffect(() => {
    const animatedTexts = texts.map((text: ITexts, index) => {
      text.gridDirections = {
        columStart: index + 5,
        columnEnd: index + 6
      }
      text.time = `${texts.length/(index + 6)}s` 
      return text
    })
    setRenderTexts(animatedTexts)
  },[])


  return (
    <Container>
        <h1 className="title">Marcos das metodologias ágeis:</h1>
        <p className="title-text">As metodologias ágeis surgiram como solução para tratar problemas gerados
          pelas mudanças rápidas e repentinas que os projetos enfrentavam,
          assim iniciou-se a busca por métodos alternativos a métodos como waterfall,
          estes métodos ágeis são recentes, assim alguns desses marcos apresentam-se a seguir</p>
        {renderTexts.map((text) => 
          <PopupContent 
            time={text.time}
            title={text.title} 
            contentTitle={text.contentTitle}
            content={text.content}
            gridDirections={text.gridDirections}/>
        )}
        <div className="back">
          <NavegateButton text="Voltar" destiny="/"/>
        </div>
        <div className="foward">
          <NavegateButton text="Avançar" destiny="/"/>
        </div>
    </Container>
  )
}