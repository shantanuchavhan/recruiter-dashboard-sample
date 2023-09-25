import React from 'react'

const StudentSectionTop: React.FC = () => {
  return (
    <div className='StudentSectionTop'>
      <div className='flex gap16'>
        <div className="StudentSection-box"></div>
        <h4 className='color-blue'>300 Students</h4>
      </div>
      <div className='flex gap16 justifyBtwn'>
        <h3 className='color-blue'>Qualified</h3>
        <div className='Divider'></div>
        <h3 className='flex'>Task <h4  className='font10 Highlight-lite'>20</h4></h3>
        <div className='Divider'></div>
        <h3 className='flex'>Disqualified <h4  className='font10 Highlight-lite'>20</h4></h3>
      </div>
    </div>
  )
}

export default StudentSectionTop
