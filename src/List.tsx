import React from "react";

const List = () => {
  return <div></div>;
};

class Row extends React.Component {
  state = {
    checked: false,
  };

  checkIt = () => {
    // this.props.callback(this.props.index, !this.props.checked);
    // return;
  };
  render() {
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={this.props.checked}
            onChange={this.checkIt}
          />
        </td>
        <td>{this.props.obj.foo}</td>
      </tr>
    );
  }
}

class Table extends React.Component {
  state = {
    rowState: [],
    checkAll: false,
  };

  checkRow = (id, value) => {
    this.state.rowState[id] = value;
    if (this.state.checkAll) {
      this.state.checkAll = !this.state.checkAll;
    }
    this.setState({
      rowState: this.state.rowState,
      checkAll: this.state.checkAll,
    });
  };

  checkAll = () => {
    var rowState = [];
    var checkState = !this.state.checkAll;
    for (var i = 0; i < this.state.rowState.length; i++) {
      rowState[i] = checkState;
    }

    this.state.checkAll = checkState;

    this.setState({
      rowState: rowState,
      checkAll: this.state.checkAll,
    });
  };
  render() {
    var self = this;

    var rows = _.map(this.props.rows, function (row, index) {
      return (
        <Row
          obj={row}
          index={index}
          key={row.id}
          checked={self.state.rowState[index]}
          callback={self.checkRow}
        />
      );
    });
    return (
      <div className="table-holder container">
        <input
          type="checkbox"
          checked={this.state.checkAll}
          onChange={this.checkAll}
        />
        <table className="table">{rows}</table>
      </div>
    );
  }
}

export { Table, List };
