import React from "react";

class Search extends React.Component {
  searchFunction() {}

  render() {
    let divClass = "search";

    if (this.props.mode === "dark") {
      divClass += " dark-Search";
    }

    return (
      <div className={divClass}>
        <input
          type="text"
          id="searchInput"
          onKeyUp={this.searchFunction}
          placeholder="Search..."
          title="Search Service"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  }
}
export default Search;
