function EmojiRow(props) {
  const { title, symbol, keywords } = props.emoji;

  const copyToClipboard = async (event) => {
    if (!navigator.clipboard) {
      // Clipboard API not available
      console.log("API not available");
      return
    }
    const copiedEmoji =
      (event.target.id === 'row') ?
        event.target.children[0].innerHTML :
        (event.target.id === 'symbol') ?
          event.target.innerHTML :
          event.target.previousElementSibling.innerHTML;
    try {
      await navigator.clipboard.writeText(copiedEmoji)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  return (
    <div id="row" className="emojiRow" keywords={keywords} onClick={copyToClipboard}>
      <span id="symbol">{symbol}</span>
      <span id="text">{title}</span>
    </div>
  );
}

export default EmojiRow;