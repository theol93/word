import React from "react";
import Router from "../../routes";
import { connect } from "react-redux";
import { getWords } from "../../actions/list/index";

function App(props) {
  const { list, setWords, wordsIsFetching } = props;
  return (
    <div>
      <Router
          list={list}
          setWords={setWords}
          wordsIsFetching={wordsIsFetching}
      />
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    list: store.list,
    wordsIsFetching: store.wordsIsFetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setWords: (word) => dispatch(getWords(word)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
