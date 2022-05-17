import React, { Component } from 'react';

class Box extends Component {
    state = { 
        x: 1,
    }; 

    handleClickLeft = (step) => {
        // 需要使用setState函数修改x的值，才可以影响到render函数
        this.setState(
            {x : this.state.x - step}
        )
    }

    handleClickRight = () => {
        this.setState(
            {x : this.state.x + 1}
        )
    }

    render() { 
        return (
            <React.Fragment>
                <div style={
                    {
                        width:"50px",
                        height:"50px",
                        backgroundColor:"lightblue",
                        marginLeft:this.state.x //通过此属性来修改位置
                    }
                }>{this.state.x}</div>
                <button onClick={() => this.handleClickLeft(10)} className='btn btn-primary m-2'>left</button>
                <button onClick={this.handleClickRight} className='btn btn-danger m-2'>right</button>
                {/* 通过onClick绑定函数 */}
            </React.Fragment>
        );
    }
}
 
export default Box;
