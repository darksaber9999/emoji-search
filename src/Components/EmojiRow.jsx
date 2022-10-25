function EmojiRow(props) {
  const { title, symbol, keywords } = props.emoji;

  const copyToClipboard = async (event) => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      console.log("API not available");
      return
    }
    const copiedEmoji = event.target.children[0].innerHTML;
    try {
      await navigator.clipboard.writeText(copiedEmoji)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  return (
    <div className="emojiRow" keywords={keywords} onClick={copyToClipboard}>
      <span>{symbol}</span>
      <span>{title}</span>
    </div>
  );
}

export default EmojiRow;