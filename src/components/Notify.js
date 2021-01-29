import React, { Component } from "react";
import { connect } from "react-redux";

import { AlertContainer, Alert } from "react-bs-notifier";

import { actHidenNoti } from "../actions";

class Notify extends Component {
  handleOnDismis = () => {
    this.props.hideNotify();
  };
  render() {
    let { style, title, content, isShow } = this.props.items;
    if (isShow === false) return null;
    return (
      <AlertContainer position="top-right">
        <Alert
          type={style}
          headline={title}
          timeout={2000}
          onDismiss={this.handleOnDismis}
        >
          {content}
        </Alert>
      </AlertContainer>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    items: state.notify,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    hideNotify: () => {
      dispatch(actHidenNoti());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notify);
