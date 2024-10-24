import React from 'react'
import '../Nav/Nav.css'
import headphone from '../../../asset/Image/icon-headphone.svg'
import { Link } from 'react-router-dom'
const nav = () => {
  return (
    <div>
    <hr />
     <div className="custContainer">
        <div className="row1 align-item-center">
          <div className="col-sm-2">
            <p className='navAllCat text-center'>Browse All Categories</p>
          </div>
          <div className="col-sm-6">
            <ul className='row1 menu'>
              <li className=''>Deals </li>
              <li className='DropDown '>Home
                  <ul className=''>
                    <li>
                      <Link to="/"  className='LinkColor'>Home </Link>
                    </li>
                    <li>Home 2</li>
                    <li>Home 3</li>
                    <li>Home 4</li>
                    <li>Home 5</li>
                    <li>Home 6</li>
                  </ul>
              </li>
              <li className=''>About </li>
              <li>Shop</li>
              <li className=''>Vendors </li>
              <li className=''>Mega menu</li>
              <li className=''>Blog </li>
              <li className=''>Pages </li>
              <li className=''>Contact</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <div className='d-flex'>
              <img src={headphone} alt="" />
              <div className='text-start navheadphone'>
                <p>1900 - 888</p>
                <p>24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='bottomhr'/>
    </div>
  )
}

export default nav