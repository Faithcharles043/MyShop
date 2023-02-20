import React from "react";

function Search({ inputVal, onInchange }) {
  return (
    <div>
      <form class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={inputVal}
          onChange={onInchange}
        />
      </form>
    </div>
  );
}

export default Search;
