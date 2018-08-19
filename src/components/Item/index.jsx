import React, { Component } from 'react';
import Section from '../Section'

class Item extends Component {

  constructor(props){
    super(props);
    this.state={
      style : 'Item close'
    }
   }

  handleClick = () => {
    const accItem = document.getElementsByClassName('Item');
    
    for (let i = 0; i < accItem.length; i++) {
      accItem[i].className = 'Item close';
    }

    if (this.state.style === 'Item close'){
      this.setState({style: 'Item open'})
    } else {
      this.setState({style: 'Item close'})
    }
  }

  render(){
    const { title, text } = this.props;
    return(
      <div className={this.state.style}>
        <div
          className="Heading" 
          onClick={this.handleClick}>{title}
        </div>
        <Section
          text={text}
        />
      </div>
    )
  }
}

export default Item;