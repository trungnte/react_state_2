import React, { Component } from "react";

import "./Glasses.css";
import ProductList from "./ProductList";

export default class Glasses extends Component {

  glassesList = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./img/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./img/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./img/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./img/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./img/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./img/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./img/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./img/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ]

  state = {
      chosenGlasses: {"id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./img/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "}
  }

  userChooseGlasses = (glasses) => {
    console.log("userChooseGlasses: ", glasses);
    let newState = {
      chosenGlasses: glasses
    };
    this.setState(newState);
  }

  wearGlasses = (glasses) => {
    return <img src={glasses.url} className="position-absolute start-50 translate-middle-x vglasses__image" alt="" />
  }

  render() {
    return (
      <div className="container-fluid py-5 text-center glass-bg">
        <h1>TRY GLASSES APP ONLINE</h1>

        {/* model */}
        <div className="row m-5">
          <div className="col-6">
            <div className="card" style={{ width: "18rem" }}>
              <img src="./img/model.jpg" className="card-img-top position-relative" alt="..." />
              <img src="./img/v1.png" className="position-absolute start-50 translate-middle-x vglasses__image" alt="" />
            </div>
          </div>

          <div className="col-6">
          <div className="card" style={{ width: "18rem" }}>
              <img src="./img/model.jpg" className="card-img-top position-relative" alt="..." />
              {/* <img src="./img/v1.png" className="position-absolute start-50 translate-middle-x vglasses__image" alt="" /> */}
              {this.wearGlasses(this.state.chosenGlasses)}
            </div>
          </div>
        </div>

        {/* glasses */}
        <ProductList glassesList={this.glassesList} userChooseGlasses={this.userChooseGlasses} />
      
      </div>
    );
  }
}
