import React, { Component } from 'react'

import "./Glasses.css";

export default class Glasses extends Component {
  render() {
    return (
      <div className='container-fluid py-5 text-center glass-bg'>
        <h1>TRY GLASSES APP ONLINE</h1>

        {/* model */}
        <div className='row m-5'>
          <div className='col-6'>
            <img className='glass_model model_left' src="./img/model.jpg" alt="" />
          </div>
          {/* <div className='col-6'>
          </div> */}
          <div className='col-6'>
            <img className='glass_model model_right' src="./img/model.jpg" alt="" />
          </div>
        </div>

        {/* glasses */}
        <div className='container py-5'>
          <div className='row m-5 item_bg'>
            {/* list of glasses */}
            <div className='col-2'>
              <img className='glass_item' src="./img/g1.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g2.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g1.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g2.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g1.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g2.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g1.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g2.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g1.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g2.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g1.jpg" alt="" />
            </div>
            <div className='col-2'>
              <img className='glass_item' src="./img/g2.jpg" alt="" />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
