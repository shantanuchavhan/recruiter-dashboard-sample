import React from 'react'
import StudentSectionBottom from './StudentSectionBottom'
import StudentSectionTop from './StudentSectionTop'
const StudentSection: React.FC= () => {
  return (
    <div>
        <div className='StudentSection'>
        <StudentSectionTop/>
     
        </div>
         <StudentSectionBottom/>
    </div>
    
  )
}

export default StudentSection
