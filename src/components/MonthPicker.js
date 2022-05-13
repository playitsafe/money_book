import React, { useState } from 'react';
import { range } from '../utility';

const MonthPicker = ({year, month}) => {

  const [selectedYear, setYear] = useState(year);
  const [selectedMonth, setMonth] = useState(month);
  const [isOpen, setIsOpen] = useState(false);
  const yearRange = range(8, -4).map(y => y + 2020);
  const monthRange = range(12, 1);
  
  return (
    <div className="dropdown">
      <h4>Select Month</h4>
      <button
        className="btn btn-lg btn-secondary dropdown-toggle"
        onClick={()=>{setIsOpen(!isOpen)}} >
        Year {selectedYear} / Month {selectedMonth}
      </button>
      {
        isOpen && 
        <div className="dropdown-menu" style={{display: 'block'}}>
          <div className="row">
            <div className="col border-right">
             {
               yearRange.map((item, index) => (
                 <a 
                  href="#" key={index} className={item == selectedYear ? 'dropdown-item active' : 'dropdown-item'}
                  onClick={()=>{setYear(item)}}>
                   Year {item}
                 </a>
               ))
             }
            </div>
           
            <div className="col">
              {
                monthRange.map((item, index) => (
                  <a
                    href="#" key={index} className="dropdown-item"
                    onClick={()=>{setIsOpen(false);setMonth(item)}}>
                   Month {item}
                 </a>
                ))
              }
            </div>
          </div>
        </div>
      }
    </div>
  );
}
 
export default MonthPicker;