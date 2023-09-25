import React from 'react';
import StudentInfoCard from './StudentInfoCard';

interface StudentProps {
  Studentname: string;
  Location: string;
  University: string;
}

const StudentSectionBottom: React.FC = () => {
  const studentProps: StudentProps[] = [
    {
      Studentname: 'Shantanu chavhan 1',
      Location: 'New York 1',
      University: 'XYZ University 1',
    },
    {
      Studentname: 'Shantanu chavhan 2',
      Location: 'New York 2',
      University: 'XYZ University 2',
    },
    {
      Studentname: 'Shantanu chavhan 3',
      Location: 'New York 3',
      University: 'XYZ University 3',
    },
    {
      Studentname: 'Shantanu chavhan 4',
      Location: 'New York 4',
      University: 'XYZ University 4',
    },
  ];

  return (
    <div className='StudentSectionBottom'>
      {studentProps.map((props, index) => (
        <StudentInfoCard key={index} {...props} />
      ))}
    </div>
  );
};

export default StudentSectionBottom;
