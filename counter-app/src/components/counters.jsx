import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    return (
      <div className="mt-5 ml-5">
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h5 className="mt-2">#{counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
