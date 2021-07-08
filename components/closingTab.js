import React from "react";

class PopUp extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        show: false
      }
      this.doSomething = this.doSomething.bind(this);
      this.toggleShow = this.toggleShow.bind(this);
      this.hide = this.hide.bind(this);
    }
  
    doSomething(e){
      e.preventDefault();
      console.log(e.target.innerHTML);
    }
  
    toggleShow(){
      this.setState({show: !this.state.show});
    }
  
    hide(e){
      if(e && e.relatedTarget){
        e.relatedTarget.click();
      }
      this.setState({show: false});
    }
    
    render(){
      return(
        <div className="dropdown">
          <button 
            className="btn btn-primary dropdown-toggle"
            type="button"
            onClick={this.toggleShow}
            onBlur={this.hide}
          >
  
          {"Dropdown Example"}
            
          <span className="caret"></span>
          </button>
          {
            this.state.show &&
          (
            <ul className="dropdown-menu" style={{display: 'block'}}>
            <li><a onClick={this.doSomething} href="#">HTML</a></li>
            <li><a onClick={this.doSomething} href="#">CSS</a></li>
            <li><a onClick={this.doSomething} href="#">JavaScript</a></li>
          </ul>
          )
          }
        </div>
      );
    }
  }

  export default PopUp;