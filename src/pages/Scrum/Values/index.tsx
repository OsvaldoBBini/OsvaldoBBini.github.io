import OutlineContainer from "../../../components/OutlineContainer"
import { PrinciplesContainer } from "../styles"
import pillar from '../../../assets/images/pillar.png'

export default function Values(): JSX.Element {
  return (
    <>
      <OutlineContainer>
        <h2>Além disso o scrum trabalho com 5 valores fundamentais:</h2>
      </OutlineContainer>

      <PrinciplesContainer>
        <div className='pillar-content'>
          <h2>Compromisso</h2>
          <p>
            Os membros da equipe Scrum se comprometem com tarefas e objetivos baseados em tempo e se dedicam a melhorar continuamente para encontrar a melhor solução.
          </p>
          <img src={pillar} alt='Pillar'/>
        </div>
        
        <div className='pillar-content'>
          <h2>Coragem</h2>
          <p>
            As equipes Scrum demonstram coragem ao fazer perguntas abertas e desafiadoras. Elas têm discussões honestas e transparentes para chegar à melhor solução.
          </p>
          <img src={pillar} alt='Pillar'/>
        </div>
        
        <div className='pillar-content'>
          <h2>Foco</h2>
          <p>
            Durante um período determinado, os membros da equipe trabalharão com base em um product backlog de tarefas. O foco estará nas tarefas selecionadas para fornecer resultados dentro de um prazo limitado.
          </p>
          <img src={pillar} alt='Pillar'/>
        </div>
        
        <div className='pillar-content'>
          <h2>Abertura</h2>
          <p>
            Os membros da equipe Scrum são receptivos a novas ideias e oportunidades que corroborem com o aprendizado individual e a qualidade geral do projeto.
          </p>
          <img src={pillar} alt='Pillar'/>
        </div>

        <div className='pillar-content'>
          <h2>Respeito</h2>
          <p>
            Os membros da equipe respeitam os gerentes de projeto, os outros membros e o processo Scrum. Essa cultura de respeito cria um espírito de colaboração e cooperação mútua na equipe.
          </p>
          <img src={pillar} alt='Pillar'/>
        </div>
      </PrinciplesContainer>
    </>
  )
}