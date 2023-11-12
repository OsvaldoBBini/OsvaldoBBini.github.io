import OutlineContainer from "../../../components/OutlineContainer"
import { PrinciplesContainer } from "../styles"
import pillar from '../../../assets/images/pillar.png'

export default function Principles(): JSX.Element {
  return (
    <>
      <OutlineContainer>
        <h2>O scrum funciona em cima de 3 princípios:</h2>
      </OutlineContainer>

      <PrinciplesContainer>
        <div className='pillar-content'>
          <h2>Transparência</h2>
          <p>
            As equipes trabalham em um ambiente no qual todos têm consciência dos desafios que os outros podem estar enfrentando. Conversas regulares entre os membros da equipe multifuncional e os responsáveis pelo projeto evitam falhas de comunicação e gargalos de informações.
          </p>
          <img src={pillar} alt='Pillar'/>
        </div>
        
        <div className='pillar-content'>
          <h2>Reflexão</h2>
          <p>
            Incorporam-se os pontos de reflexão frequentes ao framework para permitir que os membros da equipe revisem o próprio progresso. Os gerentes de projeto usam os insights dessas reuniões de revisão para fazer estimativas e planejar o futuro. Consequentemente, os projetos podem ser executados com mais eficiência, dentro do orçamento e dentro do prazo.
          </p>
          <img src={pillar} alt='Pillar'/>
        </div>
        
        <div className='pillar-content'>
          <h2>Adaptação</h2>
          <p>
            Os membros da equipe podem redefinir a prioridade das tarefas conforme as mudanças nos requisitos do cliente. Eles decidem quais tarefas serão concluídas primeiro e quais serão revisitadas futuramente.
          </p>
          <img src={pillar} alt='Pillar'/>
        </div>
      </PrinciplesContainer>
    </>
  )
} 