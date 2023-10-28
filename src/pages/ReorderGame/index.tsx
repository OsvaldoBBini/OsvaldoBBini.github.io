import ReorderList from "../../components/ReorderList"
import { Container, ButtonContainer, ListContainer, TextContainer, GridIcons, MenuContainer } from "./styles"
import { Button } from "../../components/Button";
import {useState} from 'react'
import { IListItem } from "../../types/types";
import NavegateButton from "../../components/NavegateButton";

const allItems = [
  {icon: '🍟', name: 'Batata Frita' , id: 1, rowStart: 3, columnStart: 4},
  {icon: '🍕', name: 'Pizza' , id: 2, rowStart: 4, columnStart: 7},
  {icon: '🍔', name: 'Hamburger' , id: 3, rowStart: 5, columnStart: 3},
  {icon: '🥓', name: 'Bacon Frito' , id: 4, rowStart: 5, columnStart: 5},
  {icon: '🥞', name: 'Panquecas' , id: 5, rowStart: 8, columnStart: 9},
  {icon: '🍣', name: 'Sushi' , id: 6, rowStart: 6, columnStart: 9},
  {icon: '🍜', name: 'Massa' , id: 7, rowStart: 2, columnStart: 2},
  {icon: '🍱', name: 'Peixe Frito' , id: 8, rowStart: 2, columnStart: 8},
  {icon: '🥪', name: 'Sanduiche' , id: 9, rowStart: 7, columnStart: 3},
  {icon: '🍨', name: 'Sorvete' , id: 10, rowStart: 7, columnStart: 7},
  {icon: '🍩', name: 'Rosquinha' , id: 11, rowStart: 6, columnStart: 1},
];


export default function ReorderGame(): JSX.Element {

  const [selectedItens, setSelectedItens] = useState<IListItem[]>([])

  const handleWithItensSelection = (item: IListItem) => {
    setSelectedItens((prevIten) => [...prevIten, item])
  }

  const handleRemoveItens = (itemId: number) => {
    setSelectedItens(selectedItens.filter((itens) => itens.id !== itemId))
  }

  return (
    <Container>

        <MenuContainer>

          <TextContainer>
            <h2>Para entendermos um pouco melhor por que as metodologias ágeis surgiram vamos jogar um jogo!?</h2>
            <h3>Precisamos ajudar um cliente a escolher produtos para abrir um restaurante e aqui estão os pedidos do cliente:</h3>
            <ul>
              <li>O restaurante deve constar em seu cardápio a venda de fast food</li>
              <li>O restaurante não deve vender sobremesas ou doces</li>
              <li>O restaurante só funcionará a noite</li>
              <li>A lista de produtos deve estar ordenada do mais caro a mais barato na opinião do profissional (você)</li>
            </ul>
            <h2>Vamos começar!?</h2>
            <span>Obs:</span>
            <ul>
              <li>Para selecionar os alimentos basta clicar nos itens a direita</li>
              <li>Para ordenar a lista basta arrastar os itens</li>
            </ul>
          </TextContainer>

          <ListContainer>
              <ReorderList selectedItens={selectedItens} onRemoveItens={handleRemoveItens}/>
          </ListContainer>

          <NavegateButton text="Terminou!? Avançar..." destiny="/agilevsvelocity"/> 

        </MenuContainer>
        
        <GridIcons>
          {allItems.map((item) => 
          <ButtonContainer
            key={item.id}
            rowStart={item.rowStart}
            columnStart={item.columnStart}>
            <Button onClick={() => handleWithItensSelection(item)}>
                {item.icon}
            </Button>
          </ButtonContainer>)}
        </GridIcons>

    </Container>
  )
}