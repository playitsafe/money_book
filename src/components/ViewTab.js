import React from 'react';
//import { Container, InputGroup, FormControl } from 'react-bootstrap';
import Ionicon from 'react-ionicons';
import { LIST_VIEW, CHART_VIEW } from '../utility';

const generateLinkClass = (activeTab, viewType) => {
  return activeTab == viewType ? 'nav-link active' : 'nav-link'
}

const ViewTab = ({ activeTab, onTabChange }) => {

  return (
    <ul className="nav nav-tabs nav-fill">
      <li className="nav-item">
        <a
          className={generateLinkClass(activeTab, LIST_VIEW)} href="#"
          onClick={()=>{onTabChange(LIST_VIEW)}}
          >
          <Ionicon
            className="rounded-circle mr-2" fontSize="30px"
            color={'#007bff'}
            icon='ios-list-box' />
          List View
        </a>
      </li>
      <li className="nav-item">
        <a
          className={generateLinkClass(activeTab, CHART_VIEW)} href="#"
          onClick={()=>{onTabChange(CHART_VIEW)}}
          >
          <Ionicon
            className="rounded-circle mr-2" fontSize="30px"
            color={'#007bff'}
            icon='ios-pie' />
          Chart View
        </a>
        
      </li>
    </ul>

  );
  
};

export default ViewTab;