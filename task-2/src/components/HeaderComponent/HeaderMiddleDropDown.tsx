
import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';

interface HeaderMiddleDropDownProps {}

const HeaderMiddleDropDown: React.FC<HeaderMiddleDropDownProps> = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleMenuClick = (e: { key: React.Key }) => {
    setSelectedOption(e.key.toString());
  };

  const menu = (
    <Menu className='HeaderMiddleMenu' onClick={handleMenuClick}>
        <Menu.Item key="Applied">
            <div className='flex justifyBtwn'>
                <h3>Applied</h3>
                <h4>1500</h4> 
            </div>
       </Menu.Item>
        <Menu.Item key="Shortlisted">
            <div className='flex justifyBtwn'>
                <h3>Shortlisted</h3>
                <h4>500</h4> 
            </div>
       </Menu.Item>
        <Menu.Item key="Technical Interview">
            <div className='flex justifyBtwn'>
                <h3>Technical Interview</h3>
                <h4>1500</h4> 
            </div>
       </Menu.Item>
        <Menu.Item key="Oportunity Browsing">
            <div className='flex justifyBtwn'>
                <h3>Oportunity Browsing</h3>
                <h4>200</h4> 
            </div>
       </Menu.Item>
        <Menu.Item key="Applied">
            <div className='flex justifyBtwn'>
                <h3>Applied</h3>
                <h4>300</h4> 
            </div>
       </Menu.Item>
        <Menu.Item key="Video Interview 1">
            <div className='flex justifyBtwn'>
                <h3>Video Interview 1</h3>
                <h4>20</h4> 
            </div>
       </Menu.Item>
        <Menu.Item key="Video Interview 2">
            <div className='flex justifyBtwn'>
                <h3>Video Interview 2</h3>
                <h4>20</h4> 
            </div>
       </Menu.Item>
        <Menu.Item key="Video Interview 3">
            <div className='flex justifyBtwn'>
                <h3>Video Interview 3</h3>
                <h4>20</h4> 
            </div>
       </Menu.Item>
        <Menu.Item key="Offer">
            <div className='flex justifyBtwn'>
                <h3>Offer</h3>
                <h4>20</h4> 
            </div>
       </Menu.Item>
    
   
    </Menu>
      
  );

  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <div className="HeaderMiddle lightShadow flex">
        <h3 className="color-blue">{selectedOption || 'Opportunity Browsing'}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </Dropdown>
  );
};

export default HeaderMiddleDropDown;
