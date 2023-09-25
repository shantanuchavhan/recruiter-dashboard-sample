import React from 'react';

interface StudentInfoCardProps {
  Studentname: string;
  Location: string;
  University: string;
}

const StudentInfoCard: React.FC<StudentInfoCardProps> = ({ Studentname, Location, University }) => {
  return (
    <div className='StudentInfoCard  '>
      <div className='StudentSection-box lightShadow'></div>
      <div className='ProfileIcon'><h1>SC</h1></div>
      <div className='StudentInfoCard-Data'>
        <h2 className='font16'>{Studentname}</h2>
        <h4 className='font10'>{Location}</h4>
        <h3 className='font10'>{University}</h3>
        <h5 className='font8 color-blue'>#top_candidate #top_candidate</h5>
        <div className='flex gap8'>
          <h5 className='Highlight font8'>New York</h5>
          <h5 className='Highlight font8'>Marketing</h5>
          <h5 className='Highlight font8'>London</h5>
        </div>
      </div>
    </div>
  );
}

export default StudentInfoCard;
