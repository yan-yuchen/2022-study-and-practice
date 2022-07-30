import React, { Component } from 'react';
import Base from './base';


class Calculator extends Component {
    state = {  } 
    render() { 
        return (
             <Base>
                <div className="calculator">
                    <div className="output">
                        <div className="last-output">123 *</div>
                        <div className="current-output">9696969696</div>
                    </div>
                    <button className='button-ac'>AC</button>
                    <button>Del</button>
                    <button>/</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>*</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>0</button>
                    <button>.</button>
                    <button className='button-equal'>=</button>
                </div>
             </Base>
        );
    }
}
 
export default Calculator;
