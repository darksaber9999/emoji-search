import React from "react";
import EmojiRow from "./EmojiRow";

function EmojiResults(props) {
  const getEmojiList = (emojis) => {
    let list = [];
    for (let emojiId in emojis) {
      list.push(<EmojiRow key={emojiId} emoji={emojis[emojiId]} />);
    }
    return list;
  }

  return (
    <div className="emojiResults">
      {getEmojiList(props.emojiList)}
    </div>
  );
}

export default EmojiResults;