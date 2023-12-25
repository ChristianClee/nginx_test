import React from 'react';
import {Outlet} from 'react-router-dom'
import{Link} from 'react-router-dom'
import style from './Layout.module.css'

function Layout() {
  return (
    <div className="App">
      <div className={style.row}> 
        <Link className={style.link} to='/'>one counter</Link>
        <Link className={style.link} to='/counter_2'>two counter</Link>
      </div>
      <Outlet/>
    </div>
  );
}
export default Layout;