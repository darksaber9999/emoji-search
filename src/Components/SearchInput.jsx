function SearchInput(props) {
  const handleInputData = ({ target: { name, value } }) => {
    props.handleInputData(name, value);
  };

  return (
    <div className="emojiSearch">
      <label htmlFor="searchValue">
        <input
          type="text"
          id="searchValue"
          name="searchValue"
          value={props.value}
          onChange={handleInputData}
        />
      </label>
    </div>
  );
}

export default SearchInput;