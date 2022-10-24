import React from "react";
import Header from "./Components/Header";
import SearchInput from "./Components/SearchInput";
import EmojiResults from "./Components/EmojiResults";

function App() {
  return (
    <div>
      <Header />
      <SearchInput />
      <EmojiResults />
    </div>
  );
}

export default App;