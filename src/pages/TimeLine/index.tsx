import NavegateButton from "../../components/NavegateButton"
import PopupContent from "../../components/PopupContent"
import { Container } from "./styles"

const texts = [
  {
    title: "1990",
    contentTitle: "Cascata em queda",
    content: `Na década de 90 os desenvolvedores começaram
              a notar que os ciclos de produção do método cascata (waterfall)
              não estavam suprindo as necessidades e expectativas dos cliente
              pela dificuldade de registrar feedbacks e alterações durant o ciclo
              de vida do projeto`,
    gridDirections: {
      columnStart: 5,
      columnEnd: 6,
      rowStart: 5,
      rowEnd: 6,
    }
  },
  {
    title: "1995",
    contentTitle: "Scrum",
    content: `Em 1995 o Scrum, foi criado por Ken Schwaber e Jeff Sutherland se estabelecendo
              como um dos primeiros métodos ágeis a serem criados e utilizados, o scrum se
              estabeleceu como um framework distinto ao metodo cascata considerando rodadas de revisão
              com os clientes e com os próprios desenvoldores para estabelecer melhorias aos sistemas`,
    gridDirections: {
      columnStart: 6,
      columnEnd: 7,
      rowStart: 5,
      rowEnd: 6,
    }
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
    gridDirections: {
      columnStart: 7,
      columnEnd: 8,
      rowStart: 5,
      rowEnd: 6,
    }
  },
  {
    title: "2009",
    contentTitle: "Kanban",
    content: `O framework Kanban é introduzido como uma abordagem
              ágil para gerenciamento de fluxo de trabalho. 
              Trata-se de um sistema visual que busca gerenciar o trabalho conforme ele se move pelo processo
              tendo uso em diversos setores, projetos e outras metodologias`,
    gridDirections: {
      columnStart: 8,
      columnEnd: 9,
      rowStart: 5,
      rowEnd: 6,
    }
  },
  {
    title: "2021",
    contentTitle: "Expansão Ágil",
    content: `O uso de práticas ágeis vem se espalhando para além do desenvolvimento de software
              ,sendo adotado em áreas como marketing, recursos humanos e gerenciamento de projetos`,
    gridDirections: {
      columnStart: 9,
      columnEnd: 10,
      rowStart: 5,
      rowEnd: 6,
    }
  },
]

export default function TimeLine(): JSX.Element {
  return (
    <Container>
        <h1 className="title">Marcos das metodologias ágeis:</h1>
        <p className="title-text">As metodologias ágeis surgiram como solução para tratar dos problemas gerados
          pelas mudanças rápidas e repentinas que os projetos enfrentvam,
          assim iniciou-se a busca por métodos alternativos a métodos como waterfall,
          estes métodos ágeis são recentes, assim alguns desses marcos apresentam-se a seguir</p>
        {texts.map((text) => 
          <PopupContent 
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