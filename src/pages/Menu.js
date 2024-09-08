import React from 'react'
import MenuItem from '../components/MenuItem'
import { MenuList } from '../helpers/MenuList'
import "../styles/Menu.css"
const Menu = () => {
  return (
    <div className='menu'>
        <h1 className="menuTitle">Menu</h1>
        <div className="menuList">
            {MenuList.map((item,key)=>{
                return (<MenuItem key={key} image={item.image} name={item.name} />)
            })}
        </div>
    </div>
  )
}

export default Menu