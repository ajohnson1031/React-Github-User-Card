import React from "react";

class SearchForm extends React.Component {
  constructor({ thisState, resetState }) {
    super();

    this.resetState = resetState;

    this.state = {
      searchTerm: "",
      error: "",
      userName: thisState.userName,
      userData: thisState.userData
    };
  }

  handleClick = e => {
    e.preventDefault();
    console.log("Search Term: ", this.state.searchTerm);
    if (
      this.state.searchTerm === "" ||
      this.state.searchTerm === undefined ||
      !this.state.searchTerm
    ) {
      this.setState({
        searchTerm: "",
        error: "Please enter a GitHub Handle...",
        userName: this.state.userName,
        userData: this.state.userData
      });

      return;
    } else {
      this.setState({
        searchTerm: this.state.searchTerm,
        error: "",
        userName: this.state.searchTerm,
        userData: ""
      });
    }

    this.resetState(this.state.searchTerm, "");
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: "",
      userName: this.state.userName,
      userData: this.state.userData
    });
  };

  render() {
    return (
      <form>
        {" "}
        <input
          type="text"
          name="searchTerm"
          placeholder="Enter user GitHub handle to search..."
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleClick}>
          SEARCH
        </button>
        {this.state.error && <div className="err">{this.state.error}</div>}
      </form>
    );
  }
}

export default SearchForm;
