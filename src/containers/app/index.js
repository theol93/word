import React from "react";
import Router from "../../routes";
import { connect } from "react-redux";
import { getWords } from "../../actions/api/index";

function App(props) {
  const { api, setWords } = props;
  return (
    <div>
      <Router
          api={api}
          setWords={setWords}
      />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    api: store.api,
    wordsIsFetching: store.wordsIsFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWords: () => dispatch(getWords()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
