// import NavegateButton from "../../components/NavegateButton"
import NavegateButton from "../../components/NavegateButton"
import PopupContent from "../../components/PopupContent"
import { Container, HeaderContainer, TimeLineContainer } from "./styles"

const texts = [
  {
    title: "1990",
    contentTitle: "Cascata em queda",
    content: `Na década de 90 desenvolvedores começaram
              a notar que os ciclos de produção do método cascata
              não estavam suprindo as necessidades e expectativas dos cliente`,
    gridDirections: {
      columnStart: 1,
      columnEnd: 1,
      rowStart: 2,
      rowEnd: 2,
    }
  },
  {
    title: "1995",
    contentTitle: "Scrum",
    content: `Em 1995 o Scrum, foi criado por Ken Schwaber e Jeff Sutherland se estabelecendo
              como um dos primeiros métodos ágeis a serem criados e utilizados`,
    gridDirections: {
      columnStart: 2,
      columnEnd: 2,
      rowStart: 5,
      rowEnd: 5,
    }
  },
  {
    title: "2001",
    contentTitle: "O Manifesto Ágil",
    content: `Em uma reunião realizada em Snowbird, Utah nos Estados Unidos,
              17 desenvolvedores de software criaram um documento definindo
              12 princípios para o desenvolvimento ágil estabelecendo bases
              para uma adoção mais generalizada`,
    gridDirections: {
      columnStart: 4,
      columnEnd: 4,
      rowStart: 3,
      rowEnd: 3,
    }
  },
  {
    title: "2009",
    contentTitle: "Kanban",
    content: `O framework Kanban é introduzido como uma abordagem
              ágil para gerenciamento de fluxo de trabalho`,
    gridDirections: {
      columnStart: 5,
      columnEnd: 5,
      rowStart: 6,
      rowEnd: 6,
    }
  },
  {
    title: "2010",
    contentTitle: "Scaled Agile Framework (SAFe)",
    content: `O framework é lançado como uma estrutura para implementar práticas ágeis em grande escala`,
    gridDirections: {
      columnStart: 6,
      columnEnd: 6,
      rowStart: 2,
      rowEnd: 2,
    }
  },
  {
    title: "2021",
    contentTitle: "Expansão Ágil",
    content: `O uso de práticas ágeis vem se espalhando para além do desenvolvimento de software
              ,sendo adotado em áreas como marketing, recursos humanos e gerenciamento de projetos`,
    gridDirections: {
      columnStart: 7,
      columnEnd: 7,
      rowStart: 5,
      rowEnd: 5,
    }
  },
]

export default function TimeLine(): JSX.Element {
  return (
    <Container>
      <HeaderContainer>
        <h1>Linha do tempo das metodologias ágeis:</h1>
        <p>As metodologias ágeis surgiram como solução para tratar dos problemas gerados pelas mudanças rápidas e repentinas que os projetos enfrentam, então, a fim de serem eficiente e cumprirem seus propósitos elas passaram po diversas mudanças desde sua origem</p>
      </HeaderContainer>
      <TimeLineContainer>
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
      </TimeLineContainer>
    </Container>
  )
}