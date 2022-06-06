import React, { Component } from 'react';
import NavBar from './navbar';
import Boxes from './boxes';

class App extends Component {
    state = { 
        boxes:[
            {id: 1,x: 1},
            {id: 2,x: 2},
            {id: 3,x: 3},
            {id: 4,x: 4},
        ]
    }

    // 需要使用setState函数修改x的值，才可以影响到render函数
    // ...可以在函数调用/数组构造时，将数组表达式或者string在语法层面展开；还可以在构造字面量对象时将对象表达式按照key-value的方式展开
    handleClickLeft = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x -- ;
        this.setState({boxes});
    }

    handleClickRight = (box) => {
        const boxes = [...this.state.boxes];
        const k = boxes.indexOf(box);
        boxes[k] = {...boxes[k]};
        boxes[k].x ++ ;
        this.setState({boxes});
    }


    handleDelete = (boxId) => {
        const boxes = this.state.boxes.filter(
            b => b.id !== boxId
        );
        this.setState({boxes});
    }

    handleReset = () => {
        const boxes = this.state.boxes.map(b => {
            return {
                id: b.id,
                x: 0,
            }
        });
        this.setState({boxes});
    }

    render() { 
        return (
            <React.Fragment>
                <NavBar boxesCount={this.state.boxes.filter(b => b.x !== 0).length} />
                <div className='container'>
                    <Boxes
                        boxes={this.state.boxes}
                        onReset={this.handleReset}
                        onClickLeft={this.handleClickLeft}
                        onClickRight={this.handleClickRight}
                        onDelete={this.handleDelete}
                    />
                </div>
            </React.Fragment>

        );
    }
}
 
export default App;