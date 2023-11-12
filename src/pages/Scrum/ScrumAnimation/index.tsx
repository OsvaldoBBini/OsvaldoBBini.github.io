import { motion } from "framer-motion"
import { Container } from "./styles"

export default function ScrumAnimation(): JSX.Element {
  return (
      <Container>
        <h2 
          style={{gridColumnStart: 1,
                  gridColumnEnd: 3,
                  gridRowStart: 1,
                  gridRowEnd: 2,
                  textAlign: 'center'}}>
          Backlog
        </h2>
        
        <h2 
          style={{gridColumnStart: 4,
                  gridColumnEnd: 6,
                  gridRowStart: 1,
                  gridRowEnd: 2,
                  textAlign: 'center'}}>
          Sprint Backlog
        </h2>
        
        <h2 
          style={{gridColumnStart: 7,
                  gridColumnEnd: 9,
                  gridRowStart: 1,
                  gridRowEnd: 2,
                  textAlign: 'center'}}>
          Sprint
        </h2>
        
        <h2 
          style={{gridColumnStart: 10,
                  gridColumnEnd: 12,
                  gridRowStart: 1,
                  gridRowEnd: 2,
                  textAlign: 'center'}}>
          Incremento ao Produto
        </h2>

        <motion.div 
          style={{gridColumnStart: 1, gridRowStart: 2}}
          animate={{ 
            x: [0, 300, 300, 300, 600, 600, 650, 650, 900],
            y: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            rotate: [0, 0, 0, 0, 0, 0, 180, 180, 180, 180],
            borderRadius: ["0%", "0%", "0%", "0%", "0%", "0%", "50%", "50%", "50%", "50%"]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
        <motion.div style={{gridColumnStart: 2, gridRowStart: 2}} />

        <motion.div 
          style={{gridColumnStart: 1, gridRowStart: 3}}
          animate={{ 
            x: [0, 300, 300, 300, 300, 300, 300, 300, 300],
            y: [0, 0, 96, 96, 96, 96, 96, 96, 96]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />
        <motion.div style={{gridColumnStart: 2, gridRowStart: 3}} />
        <motion.div style={{gridColumnStart: 1, gridRowStart: 4}} />

        <motion.div 
          style={{gridColumnStart: 2, gridRowStart: 4}}
          animate={{ 
            x: [0, 205, 205, 205, 205, 205, 205, 205, 205],
            y: [0, 0, -95, -95, -95, -95, -95, -95, -95]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
        />

      </Container>

  )
} 