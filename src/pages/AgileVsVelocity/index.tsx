import NavegateButton from "../../components/NavegateButton"
import OtlineContainer from "../../components/OutlineContainer"
import {Container, Grid, TextContainer} from "./styles"

export default function AgileVsVelocity(): JSX.Element {


  return (
    <Container>
        <Grid>
          <TextContainer rowStart={1} rowEnd={1} columnStart={1} columnEnd={4}>
            <h2>Parabéns!! Você terminou o desafio!!</h2>
            <p>Porém algo aconteceu no meio do caminho, o cliente mudou de ideia e quer servir doces.
              Além disso, ele resolveu também abrir de manhã e servir café da manhã e que pena,
              não tem nenhum desses alimentos na sua lista. O trabalho que você fez foi todo ralo abaixo.
            </p>
          </TextContainer>

          <TextContainer rowStart={2} rowEnd={2} columnStart={1} columnEnd={4}>
            <h2>
              Imagine-se agora em um projeto grande que levaria dois anos, até mais para ser concluido e terminasse assim.
            </h2>
            <p>
              Com esse intuito as metodologias ágeis surgiram, graças ao mercado volátil permancer sem entregas rápidas e 
              sem contato com o cliente durante o desenvolvimento do projeto se tornou inviável para o seu sucesso.
              Assim existe uma diferença de simplismente ser veloz e ser agil em entregas:
            </p>
          </TextContainer>
          
          <TextContainer rowStart={3} rowEnd={3} columnStart={1} columnEnd={2}>
            <OtlineContainer>
              <h2>
                Veloz
              </h2>
              <p>
                Ser veloz muita vezes se relaciona com ser apenas o mais rápido a entregar algo, quanto mais rápido a entrega melhor, porém
                ai enfrentamos problemas pois só focamos no objetivo e corremos até ele sem olhar para os lados
              </p>
            </OtlineContainer>
          </TextContainer>
          
          <TextContainer rowStart={3} rowEnd={3} columnStart={3} columnEnd={4}>
            <OtlineContainer>
              <h2>
                Ágil
              </h2>
              <p>
                Ser ágil diferente de ser rápido já demonstra certa habilidade em lidar com barreiras pelo caminho, se adaptar 
                ao ambiente, moldando o caminho para reorganizar a rota até seu objetivo
              </p>
            </OtlineContainer>
          </TextContainer>

          <TextContainer rowStart={5} rowEnd={5} columnStart={4} columnEnd={1}>
            <NavegateButton text="Voltar" destiny="/reorderGame"/>
          </TextContainer>

        </Grid>
    </Container>
  )
}