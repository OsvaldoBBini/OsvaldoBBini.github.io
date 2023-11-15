import ReorderList from "../../components/ReorderList"
import { Container, ButtonContainer, ListContainer, InstructionsContainer, GridIcons, MenuContainer, TextContainer } from "./styles"
import { Button } from "../../components/Button";
import {useState} from 'react'
import { IListItem } from "../../types/types";
import NavegateButton from "../../components/NavegateButton";

const allItems = [
  {icon: '🍟', name: 'Batata Frita' , id: 1, rowStart: 1, columnStart: 1},
  {icon: '🍕', name: 'Pizza' , id: 2, rowStart: 1, columnStart: 2},
  {icon: '🍔', name: 'Hamburger' , id: 3, rowStart: 1, columnStart: 3},
  {icon: '🥓', name: 'Bacon Frito' , id: 4, rowStart: 2, columnStart: 1},
  {icon: '🥞', name: 'Panquecas' , id: 5, rowStart: 2, columnStart: 2},
  {icon: '🍣', name: 'Sushi' , id: 6, rowStart: 2, columnStart: 3},
  {icon: '🍜', name: 'Massa' , id: 7, rowStart: 3, columnStart: 1},
  {icon: '🍱', name: 'Peixe Frito' , id: 8, rowStart: 3, columnStart: 2},
  {icon: '🥪', name: 'Sanduiche' , id: 9, rowStart: 3, columnStart: 3},
  {icon: '🍨', name: 'Sorvete' , id: 10, rowStart: 4, columnStart: 1},
  {icon: '🍩', name: 'Rosquinha' , id: 11, rowStart: 4, columnStart: 2},
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

  const disabledButton = selectedItens.length === 0

  return (
    <Container>

        <MenuContainer>
          <InstructionsContainer>
            <TextContainer>
              <h2>Na nossa primeira parada, para entendermos um pouco melhor do por quê as metodologias ágeis surgiram, vamos jogar um jogo!?</h2>
              
              <div>
                <h3>Precisamos ajudar um cliente a escolher produtos para abrir um restaurante e aqui estão os pedidos do cliente:</h3>
                <ul>
                  <li>O restaurante deve constar em seu cardápio a venda de fast food</li>
                  <li>O restaurante não deve vender sobremesas ou doces</li>
                  <li>O restaurante só funcionará a noite</li>
                  <li>A lista de produtos deve estar ordenada do mais caro a mais barato na opinião do profissional (você)</li>
                </ul>
              </div>

              <h2>Vamos começar!?</h2>
              
              <div>
                <strong>Obs:</strong>
                <ul>
                  <li>Para selecionar os alimentos basta clicar nos alimentos dentro da caixa de produtos</li>
                  <li>Para ordenar a lista basta arrastar os itens</li>
                  <li>Para você conseguir avançar pelo menos um item deve ser selecionado para fazer parte do cardápio</li>
                </ul>
              </div>
            </TextContainer>
            <NavegateButton text="Terminou!? Avançar..." destiny="/agilevsvelocity" disabled={disabledButton}/> 
          </InstructionsContainer>

          <ListContainer>

              <h2>Produtos</h2>
              <ul>
                <GridIcons>
                  {allItems.map((item) => 
                    <ButtonContainer
                    key={item.id}
                    rowStart={item.rowStart}
                    columnStart={item.columnStart}>
                      <Button onClick={() => handleWithItensSelection(item)}>
                          {item.icon} {item.name}
                      </Button>
                    </ButtonContainer>)}
                </GridIcons>
              </ul>

              <h2>Cardápio</h2>
              <ReorderList selectedItens={selectedItens} onRemoveItens={handleRemoveItens}/>
              
          </ListContainer>
        
        </MenuContainer>

    </Container>
  )
}