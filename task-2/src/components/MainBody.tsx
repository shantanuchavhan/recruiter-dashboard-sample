import React from 'react'
import '../Styles/MainBody.css'
import StudentSection from './MainBodyComponent/StudentSection'
import FilterSection from './MainBodyComponent/FilterSection'
const MainBody = () => {
  return (
    <div>
        <FilterSection/>
        <StudentSection/>
        
      
    </div>
  )
}

export default MainBody
