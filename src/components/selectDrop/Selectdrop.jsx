import React, { useState } from 'react'
import '../selectDrop/selectDrop.css'
const Selectdrop = (props) => {
  const [isOpenSelect,setisOpenSelect] = useState(false)
  const [selectIndex,setselectIndex] = useState(0)
  const [selectItem,setselectItem] = useState('All Catgories')
  const [categoryList,setcategoryList]=useState(props.data)
  const [categoryFind,setcategoryFind]=useState(props.data)
  const openSelect =() =>{
    setisOpenSelect(!isOpenSelect)
  }
  const closeSelect = (index,name) =>{
    setselectIndex(index)
    setselectItem(name)
    setisOpenSelect(false)
  }
  const categoryFilter=(e)=>{
    let keyword = e.target.value.toLowerCase()
    const list=categoryFind.filter((item)=>{
      return item.toLowerCase().includes(keyword)
    })
    const list2 = list.filter((item,index)=>list.indexOf(item)===index)
    setcategoryList(list2)
    
  }
  return (
    <div >
      <div className='selectDropWrapper position-relative'>
      <div className='openSelect cursor' onClick={openSelect}>{selectItem.length>15?selectItem.substring(0,15)+"..." : selectItem}</div>
      {
        isOpenSelect == true &&
      <div className="selectDropmenu">
        <div className="searchField">
          <input type="text" placeholder='Search....' onChange={categoryFilter}/>
          <ul className='searchResult cursor'>
          {
            categoryList.map((item,index)=>{
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
