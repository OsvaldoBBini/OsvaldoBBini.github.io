import { useState } from "react";
import { Container, TextTitle,TextContent } from "./style";

interface IPopupContent {
  title: string,
  contentTitle: string,
  content: string,
  gridDirections: {
    columnStart: number,
    columnEnd: number,
    rowStart: number,
    rowEnd: number,
  }
}

export default function PopupContent({title, contentTitle, content, gridDirections}: IPopupContent): JSX.Element {
  
  const [opacity, setOpacity] = useState<number>(0);

  return (
    <Container griddirections={gridDirections}>
      <TextTitle 
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}>
        <h1>{title}</h1>
      </TextTitle>
      <TextContent opacity={opacity}>
        <h1>{contentTitle}</h1>
        <p>{content}</p>
      </TextContent>
    </Container>
  )
}