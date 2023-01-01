import React, { Component } from 'react'

export default class ProductList extends Component {

  renderGlassesList = () => {
    return this.props.glassesList.map((glasses) => {
      return  <div key={glasses.id} className="col-sm-6 col-md-4 col-lg-3 col-xl-2" onClick={() => {
        this.props.userChooseGlasses(glasses);
      }}>
                <img className="glass_item" src={`./img/g${glasses.id}.jpg`} alt="" />
              </div>
    });
  }


  render() {
    return (
      <div className="container py-5">
        <div className="row m-5 item_bg">
          {/* list of glasses */}
          {this.renderGlassesList()}
        </div>
      </div>
    )
  }
}
