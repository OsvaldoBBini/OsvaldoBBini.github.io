import ReorderList from "../../components/ReorderList"
import { Container, ButtonContainer, ListContainer, InstructionsContainer, GridIcons, MenuContainer, TextContainer } from "./styles"
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
    const alreadyHasItem = selectedItens.includes(item);
    alreadyHasItem && handleRemoveItens(item.id)
    setSelectedItens((prevItem) => [...prevItem, item])
  }

  const handleRemoveItens = (itemId: number) => {
    setSelectedItens(selectedItens.filter((items) => items.id !== itemId))
  }

  return (
    <Container>

        <MenuContainer>
          <InstructionsContainer>
            <TextContainer>
              <h2>Na nossa primeira parada, para entendermos um pouco melhor do por quê as metodologias ágeis surgiram, vamos jogar um jogo!?</h2>
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
                <li>Para selecionar os alimentos basta clicar nos alimentos a direita</li>
                <li>Para ordenar a lista basta arrastar os itens</li>
              </ul>
              <NavegateButton text="Terminou!? Avançar..." destiny="/agilevsvelocity"/> 
            </TextContainer>
          </InstructionsContainer>

          <ListContainer>
              <h2>Cardápio</h2>
              <ReorderList selectedItens={selectedItens} onRemoveItens={handleRemoveItens}/>
          </ListContainer>
        
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