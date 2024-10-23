import React, { useState } from 'react'
import '../Header/header.css'
import Selectdrop from '../selectDrop/Selectdrop'
import Logo from '../../asset/Image/logo.svg'
import Compare from '../../asset/Image/icon-compare.svg'
import heart from '../../asset/Image/icon-heart.svg'
import cart from '../../asset/Image/icon-cart.svg'
import user from '../../asset/Image/icon-user.svg'
const Header = () => {
  const [catgories,setcatgories]=useState([
    'All Catgories',
    'Milks and Dairies',
    'Clothing & beauty',
    'Pet Foods & Toy',
    'Baking material',
    'Fresh Fruit',
    'Wines & Drinks',
    'Fresh Seafood',
    'Fast food',
    'Vegetables',
    'Bread and Juice',
    'Milks and Dairies',
    'Clothing & beauty',
    'Wines & Drinks',
    'Fresh Seafood'
  ])

  const [isOpenAccount,setisOpenAccount]=useState(false)
  let account=['a','b']
  const isOpenAcount=()=>{
   setisOpenAccount(!isOpenAccount)
  }
  return (
    <div>
    <header>
    <div className="custContainer">
      <div className="row1 align-item-center">
        <div className="col-sm-2">
          <img src={Logo} alt="Loding..." srcset="" />
        </div>
        
        <div className="col-sm-5">
          <div className="headerSearch d-flex">
            <div className="selectDrop position-relative"> 
                <Selectdrop data={catgories}/>
            </div>
            <div className="search">
              <input type="text" placeholder='Search For item...'/>
            </div>
          </div>
         </div>
              <ul className="list list-inline mb-0 headerTabs">
                <li className='list-inline-item'>
                  <span>
                    <img src={Compare} alt="" />
                    <span className='badge bg-success'>3</span>
                    <span className='listname'>Compare</span>
                    </span>
                </li>
                <li className='list-inline-item'>
                  <span>
                    <img src={heart} alt="" />
                    <span className='badge bg-success'>3</span>
                    <span className='listname'>Wishlist</span>
                    </span>
                </li>
                <li className='list-inline-item'>
                  <span>
                    <img src={cart} alt="" />
                    <span className='badge bg-success'>3</span>
                    <span className='listname'>Cart</span>
                    </span>
                </li>
                <li className='list-inline-item'>
                  <span>
                    <img src={user} alt="" />
                    <span className='listname p-0 m-0' onClick={isOpenAcount}>Account</span>
                    {
                      isOpenAccount==true && 
                      <ul className='AcountDropdown'>
                        <li>My Account</li>
                        <li>Order Tracking</li>
                        <li>My Voucher</li>
                        <li>My Wishlist</li>
                        <li>Setting</li>
                        <li>Sign out</li>
                      </ul>
                    }
                    </span>
                </li>
              </ul>
      </div>
    </div>
    </header>
    </div>
  )
}

export default Header
