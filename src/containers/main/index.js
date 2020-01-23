import React, { Component } from "react";
import './index.css';
import { connect} from 'react-redux'
import{
    addStuff,
    subtractStuff,
    multiplyStuff,
    divideStuff

} from '../../actions'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {     
            num1:0,
            num2:0,
            num3:0,
            num4:0,
            num5:0,
            num6:0,
            num7:0,
            num8:0,
        };
      }
    
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }


    add(){
        this.props.addStuff(this.state.num1,this.state.num2)
    }
    subtract(){
        this.props.subtractStuff(this.state.num3,this.state.num4)
    }
    multiply(){
        this.props.multiplyStuff(this.state.num5,this.state.num6)
    }
    divide(){
        this.props.divideStuff(this.state.num7,this.state.num8)
    }

  render() {

      return (
        <div className = "main">
            <div className = "sub">
                <input 
                    type="number" 
                    value={this.state.num1} 
                    name="num1"
                    onChange={(e)=>{this.onChange(e)}}
                />
                <label className="symbol">+</label>
                <input 
                    type="number" 
                    value={this.state.num2} 
                    name="num2"
                    onChange={(e)=>{this.onChange(e)}}
                />
                <input 
                    type="submit"
                    value="="
                    onClick={()=>{this.add()}}
                />
                <label className="symbol">{this.props.sum}</label>
            </div>
            <div className = "sub">
                <input 
                    type="number" 
                    value={this.state.num3} 
                    name="num3"
                    onChange={(e)=>{this.onChange(e)}}
                />
                <label className="symbol">-</label>
                <input 
                    type="number" 
                    value={this.state.num4} 
                    name="num4"
                    onChange={(e)=>{this.onChange(e)}}
                />
                <input 
                    type="submit"
                    value="="
                    onClick={()=>{this.subtract()}}
                />
                <label className="symbol">{this.props.difference}</label>
            </div>
            <div className = "sub">
                <input 
                    type="number" 
                    value={this.state.num5} 
                    name="num5"
                    onChange={(e)=>{this.onChange(e)}}
                />
                <label className="symbol">x</label>
                <input 
                    type="number" 
                    value={this.state.num6} 
                    name="num6"
                    onChange={(e)=>{this.onChange(e)}}
                />   
                <input 
                    type="submit"
                    value="="
                    onClick={()=>{this.multiply()}}
                />
                <label className="symbol">{this.props.product}</label>
            </div>
            <div className = "sub">
                <input 
                    type="number" 
                    value={this.state.num7} 
                    name="num7"
                    onChange={(e)=>{this.onChange(e)}}
                />
                <label className="symbol">/</label>
                <input 
                    type="number" 
                    value={this.state.num8} 
                    name="num8"
                    onChange={(e)=>{this.onChange(e)}}
                />   
                <input 
                    type="submit"
                    value="="
                    onClick={()=>{this.divide()}}
                />
                <label className="symbol">{this.props.quotient}</label>
            </div>

        </div>
      );
    

  }
}

const mapStateToProps = state => {
  return{
    sum: state.calc_data.sum,
    difference: state.calc_data.difference,
    product: state.calc_data.product,
    quotient: state.calc_data.quotient
  };
}

const mapDispatchToProps = dispatch => {
  return{
    addStuff: (a, b) => dispatch(addStuff(a, b)),
    subtractStuff: (a, b) => dispatch(subtractStuff(a, b)),
    multiplyStuff: (a, b) => dispatch(multiplyStuff(a, b)),
    divideStuff: (a, b) => dispatch(divideStuff(a, b)),
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);