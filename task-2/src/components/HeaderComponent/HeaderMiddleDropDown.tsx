
import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';

interface HeaderMiddleDropDownProps {}

const HeaderMiddleDropDown: React.FC<HeaderMiddleDropDownProps> = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleMenuClick = (e: { key: React.Key }) => {
    setSelectedOption(e.key.toString());
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="Option 1">Option 1</Menu.Item>
      <Menu.Item key="Option 2">Option 2</Menu.Item>
      <Menu.Item key="Option 3">Option 3</Menu.Item>
      <Menu.Item key="Option 3">Option 3</Menu.Item>
      <Menu.Item key="Option 3">Option 3</Menu.Item>
      <Menu.Item key="Option 3">Option 3</Menu.Item>
    </Menu>
      
  );

  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <div className="HeaderMiddle lightShadow flex">
        <h3 className="color-blue">{selectedOption || 'Opportunity Browsing'}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </Dropdown>
  );
};

export default HeaderMiddleDropDown;
