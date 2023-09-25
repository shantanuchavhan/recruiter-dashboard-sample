import React from 'react'
import '../Styles/MainBody.css'
import StudentSection from './MainBodyComponent/StudentSection'
import FilterSection from './MainBodyComponent/FilterSection'
const MainBody: React.FC = () => {
  return (
    <div className='MainBody'>
       
        <div className='MainBodyleft'>
        <FilterSection />
        </div>
        <div className='MainBodyright'>
        <StudentSection />
        </div>
       
        
      
    </div>
  )
}

export default MainBody
