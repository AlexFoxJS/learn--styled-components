import React from "react";

import { CounterWrapper } from "./styled";
import { Button, Paragraph, Grid, Cell } from "..";

export class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <CounterWrapper>
        <Grid columns={1} rows={2}>
          <Cell center>
            <Paragraph>{this.state.count}</Paragraph>
          </Cell>
          <Cell middle>
            <Grid columns={2}>
              <Cell middle>
                <Button onClick={this.increment}>+</Button>
              </Cell>
              <Cell middle>
                <Button onClick={this.decrement}>-</Button>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </CounterWrapper>
    );
  }
}
