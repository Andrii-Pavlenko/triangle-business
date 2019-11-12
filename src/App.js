import React from 'react';
import { Icon } from 'semantic-ui-react'
import './App.css';

const text = <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
   Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus 
   et magnis dis parturient montes, nascetur</p>

function App() {
  return (
    <div className="container">
      <div className="container__left">
        <div className="container__left__upper">
          <div className="container__left__upper__header">
            <span className="first">LOREM</span>
            <span className="container__left__upper__header__second">IPSUM</span>
          </div>
          {text}
          <div className="container__left__upper__romb_rotator">
            <div className="container__left__upper__romb"></div>
            <div className="icon container__left__upper__icon__circle">
              <Icon name='dollar sign' className="container__left__upper__icon" />
            </div>    
          </div>
                
        </div>
        <div className="container__left__lower">
          <div className="container__left__lower__header">
            <span className="first">LOREM</span>
            <span className="container__left__lower__header__second">IPSUM</span>
          </div>
          {text}
          <div className="container__left__lower__romb_rotator">
            <div className="container__left__lower__romb"></div>
            <div className="container__left__lower__icon">
              <div className="container__left__lower__icon__first"></div>
              <div className="container__left__lower__icon__second"></div>
              <div className="container__left__lower__icon__third"></div>
            </div>
          </div>          
        </div>        
      </div>
      <div className="container__right">
        <div className="container__right__upper">
          <div className="container__right__upper__header">
            <span className="first">LOREM</span>
            <span className="container__right__upper__header__second">IPSUM</span>
          </div>
          {text}
          <div className="container__right__upper__romb_rotator">
            <div className="container__right__upper__romb"></div>  
            <Icon name='search' className="icon container__right__upper__icon" />
          </div>          
        </div>       
        <div className="container__right__lower">
          <div className="container__right__lower__header">
            <span className="first">LOREM</span>
            <span className="container__right__lower__header__second">IPSUM</span>
          </div>
          {text}
          <div className="container__right__lower__romb_rotator">
            <div className="container__right__lower__romb"></div>
            <Icon name='user' className="icon container__right__lower__icon" />
          </div>          
        </div>        
      </div>
    </div>
  );
}

export default App;
