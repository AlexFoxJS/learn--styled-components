import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";

// Theme
import { AppTheme } from "./theme";

// Components
import { Grid, Cell, Button, Counter } from "./components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ bgColor }) => (bgColor && bgColor) || "beige"};
  }
`;

const App = () => (
  <ThemeProvider theme={AppTheme}>
    <Grid columns={6} gap="10px">
      <GlobalStyle />
      <Cell middle>
        <Button>Button</Button>
      </Cell>
      <Cell middle>
        <Button ghost>Button</Button>
      </Cell>
      <Cell middle>
        <Button color="black" ghost>
          Button
        </Button>
      </Cell>
      <Cell middle>
        <Button small>Button</Button>
      </Cell>
      <Cell middle>
        <Button big>Button</Button>
      </Cell>
      <Cell middle>
        <Button pulse>Button</Button>
      </Cell>
      <Cell middle>
        <Counter />
      </Cell>
    </Grid>
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
