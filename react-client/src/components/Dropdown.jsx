import React from "react";
import SearchResult from "./SearchResult.jsx";
import axios from "axios";
// dropdown component
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      width: "",
      diameter: "",
      height: "",
      products: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handelevent(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    axios
      .post("/tyrebox/", { type: this.state.type, width: this.state.width,diameter: this.state.diameter, height:this.state.height})
      .then((data) => {
        this.setState({
          products: data.data,
        });
      
  
        if (this.state.product === []) {
          return <h4>this product not in the stock</h4>;
        } else {
          return <SearchResult product={this.state.products} />;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="dropdownbtn">
        <h1 id="seachtitle"> Search for your favorite tyre </h1>
        <select
          name="type"
          onChange={this.handelevent.bind(this)}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue>Select Tyre Type (BRAND)</option>
          <option>Amine</option>
          <option>GoodYear</option>
          <option>Bridgestone</option>
        </select>
        <select
          name="width"
          onChange={this.handelevent.bind(this)}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue>Select Width</option>
          <option>195</option>
          <option>200</option>
          <option>205</option>
          <option>175</option>
        </select>
        <select
          name="diameter"
          onChange={this.handelevent.bind(this)}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue>Select Diameter</option>
          <option>55</option>
          <option>60</option>
          <option>58</option>
          <option>75</option>
        </select>
        <select
          name="height"
          onChange={this.handelevent.bind(this)}
          className="form-select"
          aria-label="Default select example"
        >
          <option defaultValue>Select Height</option>
          <option>15</option>
          <option>16</option>
          <option>18</option>
          <option>19</option>
        </select>

        <button
          id="buttonsearch"
          type="button"
          onClick={this.handleClick}
          className="btn btn-dark"
        >
          Search
        </button>
      </div>
    );
  }
}

export default Dropdown;
