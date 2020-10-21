import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delData(index) {
      dispatch({
        type: "del",
        index: index,
      });
    },
  };
};

class List extends Component {
  state = {};
  dele = (index) => () => {
    this.props.delData(index);
  };
  render() {
    return (
      <Fragment>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>
                {item}
                <button onClick={this.dele(index)}>删除</button>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
