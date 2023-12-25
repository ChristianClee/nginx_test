import React, {useState} from 'react';
import style from './Counter_1.module.css'



function Counter_1() {
  const [count, setCount] = useState(0)
    function increase() {
      setCount(prew => prew += 1)
    }
    function reduce() {
      setCount(prew => prew -= 1)
    }
  return (
    <div className='container'>
        <div className='row mt-3'>
          <div className='col-3' >
            <button onClick={increase} style={{width: '100%'}} className="btn btn-outline-secondary">increase by one</button>
          </div>
        </div>
        <div className='row mt-3' >
          <div className='col-3' >
            <button onClick={reduce} style={{width: '100%'}} className="btn btn-outline-secondary">reduce by one</button>
          </div>
        </div>
        <div className='row mt-3'>
          <div className={['col-3', style.counter].join(' ') }>
            {count}
          </div>
        </div>
      </div>
  );
}
export default Counter_1;