function EmojiRow(props) {
  const { title, symbol, keywords } = props.emoji;
  return (
    <div className="emojiRow" keywords={keywords}>
      <span>{symbol}</span>
      <span>{title}</span>
    </div>
  );
}

export default EmojiRow;