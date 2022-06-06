import React, { Component } from 'react';

class Box extends Component {

    render() { 
        return (
            <React.Fragment>
                {/* 通过this.props.children属性传递子节点 */}
                {this.props.children[0]}

                <div style={
                    {
                        width:"50px",
                        height:"50px",
                        backgroundColor:"lightblue",
                        marginLeft:this.props.box.x //通过此属性来修改位置
                    }
                }>{this.props.box.x}</div>

                {this.props.children[1]}

                <button onClick={this.props.onClickLeft} className='btn btn-primary m-2'>left</button>
                <button onClick={this.props.onClickRight} className='btn btn-danger m-2'>right</button>
                
                {/* 通过props可以访问父节点的函数 */}
                <button onClick={() => this.props.onDelete(this.props.box.id)} className='btn btn-danger m-2'>delete</button>
                {/* 通过onClick绑定函数 */}

            </React.Fragment>
        );
    }
}
 
export default Box;
