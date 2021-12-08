import { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/serach.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchKey: "",
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }
  render() {
    const { monsters, searchKey } = this.state;
    const filteredArray = monsters.filter((monster) =>
      monster.name.firstname.toLowerCase().includes(searchKey.toLowerCase())
    );
    console.log(filteredArray);
    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <Search
          placeholder="Search Monster"
          onChangeEvent={(e) => {
            this.setState({ searchKey: e.target.value }, () =>
              console.log(this.state.searchKey)
            );
          }}
        ></Search>
        <CardList monsters={filteredArray}></CardList>
      </div>
    );
  }
}

export default App;
