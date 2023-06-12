const Search = ({ city, getCity, submitForm }) => {
    return (
      <form onSubmit={(e) => submitForm(e)}>
        <input
          value={city}
          onChange={(e) => getCity(e.target.value)}
          placeholder="search for the city..."
        />
      </form>
    );
  };
  export default Search;
  