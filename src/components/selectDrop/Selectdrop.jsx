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
          </ul>
        </div>
      </div>
      }
      </div>
    </div>
  )
}

export default Selectdrop
