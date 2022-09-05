import { useState } from "react";

const Searcher = ({ pokemons }) => {
  const [filterList, setFilterList] = useState(pokemons);

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setFilterList(pokemons);
      return;
    }

    const filteredList = pokemons.filter(
      (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );

    setFilterList(filteredList);
  };

  return (
    <div className="App">
      <div>
        Search: <input name="query" type="text" onChange={handleInputChange} />
      </div>
      {filterList.map((item, i) => (
        <div key={i}>{item}</div>
      ))}
    </div>
  );
};

export default Searcher;
