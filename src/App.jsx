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

  getEmojiRowList = () => document.getElementsByClassName('emojiRow');

  checkForMaxRows = () => {
    const emojiRowList = this.getEmojiRowList();

    for (let id in emojiRowList) {
      if (id > 19) {
        emojiRowList[id].classList.add('invisible');
      }
    }
  }

  searchKeywords = (value) => {
    const emojiRowList = this.getEmojiRowList();
    let count = 0;

    for (let id in emojiRowList) {
      emojiRowList[id].classList.remove('invisible');

      ((emojiRowList[id].attributes.keywords.value.includes(value.toLowerCase()) ||
        emojiRowList[id].children[0].innerHTML.includes(value) ||
        emojiRowList[id].children[1].innerHTML.includes(value.toLowerCase())) &&
        count < 20) ?
        count++ :
        emojiRowList[id].classList.add('invisible');
    }
  }

  handleInputData = (name, value) => {
    this.setState((prevState) => ({
      [name]: value,
    }));
    this.searchKeywords(value);
  }

  componentDidMount() {
    this.checkForMaxRows();
  }

  render() {
    return (
      <div className="app">
        <Header />
        <SearchInput
          value={this.state.searchValue}
          handleInputData={this.handleInputData}
        />
        <EmojiResults emojiList={emojiList} />
      </div>
    );
  }
}

export default App;