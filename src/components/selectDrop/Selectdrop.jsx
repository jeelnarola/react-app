import React, { useState } from 'react'
import '../selectDrop/selectDrop.css'
const Selectdrop = (props) => {
  const [isOpenSelect,setisOpenSelect] = useState(false)
  const [selectIndex,setselectIndex] = useState(0)
  const [selectItem,setselectItem] = useState('All Catgories')
  const openSelect =() =>{
    setisOpenSelect(!isOpenSelect)
  }

  const closeSelect = (index,name) =>{
    setselectIndex(index)
    setselectItem(name)
    setisOpenSelect(false)
  }
  console.log(props.data[0])
  return (
    <div >
      <div className='selectDropWrapper position-relative'>
      <div className='openSelect cursor' onClick={openSelect}>{selectItem}</div>
      {
        isOpenSelect == true &&
      <div className="selectDropmenu">
        <div className="searchField">
          <input type="text" />
          <ul className='searchResult cursor'>
          {
              props.data.map((item,index)=>{
                return(
                  <li onClick={()=>closeSelect(index,item)}>{item}</li>
                )
              })
          }
            {/* <li onClick={()=>closeSelect(0,'All Catgories')}>All Catgories</li>
            <li onClick={()=>closeSelect(1,'Milks and Dairies')}>Milks and Dairies</li>
            <li onClick={()=>closeSelect(2,'Clothing & beauty')}>Clothing & beauty</li>
            <li onClick={()=>closeSelect(3,'Pet Foods & Toy')}>Pet Foods & Toy</li>
            <li onClick={()=>closeSelect(4,'Baking material')}>Baking material</li>
            <li onClick={()=>closeSelect(5,'Fresh Fruit')}>Fresh Fruit</li>
            <li onClick={()=>closeSelect(6,'Wines & Drinks')}>Wines & Drinks</li>
            <li onClick={()=>closeSelect(7,'Fresh Seafood')}>Fresh Seafood</li>
            <li onClick={()=>closeSelect(8,'Fast food')}>Fast food</li>
            <li onClick={()=>closeSelect(9,'Vegetables')}>Vegetables</li>
            <li onClick={()=>closeSelect(10,'Bread and Juice')}>Bread and Juice</li>
            <li onClick={()=>closeSelect(11,'Milks and Dairies')}>Milks and Dairies</li>
            <li onClick={()=>closeSelect(12,'Clothing & beauty')}>Clothing & beauty</li>
            <li onClick={()=>closeSelect(13,'Wines & Drinks')}>Wines & Drinks</li>
            <li onClick={()=>closeSelect(14,'Fresh Seafood')}>Fresh Seafood</li> */}
          </ul>
        </div>
      </div>
      }
      </div>
    </div>
  )
}

export default Selectdrop
