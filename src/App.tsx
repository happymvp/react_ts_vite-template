import { TypographyHeading } from "./components/Typography/TypographyHeading.tsx";
import { TypographyText } from "./components/Typography/TypographyText.tsx";

const App = () => {
  return (
    <>
      <TypographyHeading content="Typography 1" Tag="h1" />
      <TypographyHeading content="Typography 2" Tag="h2" />
      <TypographyHeading content="Typography 3" Tag="h3" />
      <TypographyHeading content="Typography 4" Tag="h4" />
      <TypographyHeading content="Typography 5" Tag="h5" />
      <TypographyHeading content="Typography 6" Tag="h6" />
      <br />
      <TypographyText content="Paragraph" size="S" Tag="p" />
      <TypographyText content="Paragraph" size="M" Tag="p" />
      <TypographyText content="Paragraph" size="L" Tag="p" />
      <br />
      <TypographyText content="Label" size="S" Tag="label" />
      <TypographyText content="Label" size="M" Tag="label" />
      <TypographyText content="Label" size="L" Tag="label" />
      <br />
      <TypographyText content="Legend" size="S" Tag="legend" />
      <TypographyText content="Legend" size="M" Tag="legend" />
      <TypographyText content="Legend" size="L" Tag="legend" />
      <br />
      <TypographyText content="Span" size="S" Tag="span" />
      <TypographyText content="Span" size="M" Tag="span" />
      <TypographyText content="Span" size="L" Tag="span" />
    </>
  );
};

export default App;
