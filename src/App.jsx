import React from "react";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import EmojiResults from "./Components/EmojiResults";
import emojiList from "./emojiList.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
    };
  }

  handleInputData = (name, value) => {
    this.setState((prevState) => ({
      [name]: value,
    }))
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchInput value={this.state.searchValue} handleInputData={this.handleInputData} />
        <EmojiResults emojiList={emojiList} />
      </div>
    );
  }
}

export default App;