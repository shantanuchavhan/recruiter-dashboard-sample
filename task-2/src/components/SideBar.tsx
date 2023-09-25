import React from 'react'
import SideBarTop from './SideBarComponents/SideBarTop'
import SideBarBottom from './SideBarComponents/SideBarBottom'
import '../Styles/SideBar.css'
const SideBar = () => {
  return (
    <div className='SideBar'>
        <SideBarTop/>
        <SideBarBottom/>
      
    </div>
  )
}

export default SideBar
