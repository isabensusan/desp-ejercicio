import React, { Component } from 'react';
import logoSvg from '../../../resources/images/logo.svg';

class Tabs extends React.Component {
    constructor(props) {
      super();
      this.state = {
        active: 0
      }
    }
    
    select = (i) => {
      let _this = this;
      return function() {
        _this.setState({
          active: i
        });
      }
    }
    
    renderTabs = () => {
      return React.Children.map(this.props.children, (item, i) => {
        if (i%2 === 0) {
          let active = this.state.active === i ? 'active' : '';
          return (
            <li className={`${active} tab-item`}>
                <a onClick={this.select(i)} className='tab'>{item}</a>
            </li>    
            )        
        }
      });
    }
    
    renderContent() {
      return React.Children.map(this.props.children, (item, i) => {
        if (i-1 === this.state.active) {
          return <div className='content'>{item}</div>;
        } else {
          return;
        }
      });
    }
    
    render() {
      return (
        <div className="tabs">
            <div className="tab-nav">
                <img className='logo' src={logoSvg}></img>
                {this.renderTabs()}
            </div>
            {this.renderContent()}
        </div>
      );
    }
  }

  export default Tabs;