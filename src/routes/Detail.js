import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Detail = ({ toDo, onBtnClick }) => {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <button onClick={onBtnClick}>DEL</button>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  // console.log(id);

  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(parseInt(id))),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
