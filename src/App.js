import React from 'react';
import logo from './logo.svg';
import ViewTab from 'components/ViewTab';
import PriceList from 'components/PriceList';
import MonthPicker from 'components/MonthPicker';
import TotalSum from 'components/TotalSum';
import { LIST_VIEW, CHART_VIEW } from './utility';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    id: 1,
    title: "Travel to Shanghai",
    price: 200,
    date: "2019-11-15",
    category: {
      id: "1",
      name: "Travel",
      type: "outcome",
      iconName: "ios-plane"
    }
  },
  {
    id: 2,
    title: "Travel to Shanghai",
    price: 101,
    date: "2020-01-15",
    category: {
      id: "1",
      name: "Travel",
      type: "outcome",
      iconName: "ios-plane"
    }
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="row justify-content-between align-items-center">
        <div className="col-4">
          <MonthPicker year={2020} month={6} />
        </div>
        <div className="col-4">
          <TotalSum />
        </div>
      </div>
      <ViewTab
        onTabChange={(view)=>{console.log(view)}}
        activeTab={CHART_VIEW} />
      <PriceList
        items={items}
        onModifyItem={(item)=>{console.warn('Edit:' + item.title)}}
        onDeleteItem={(item)=>{console.warn('Delete' + item.title)}} />
    </div>
  );
}

export default App;
