import React, { Component } from 'react';
import Box from './box';

class Boxes extends Component {

    render() { 
        return (
            <React.Fragment>

                <button
                    onClick={this.props.onReset}
                    style={{marginBottom: "15px"}}
                    className='btn btn-info'
                >Reset</button>

                {/* map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。 */}
                {this.props.boxes.map(box => ( 
                    <Box 
                        key={box.id}
                        box={box}
                        onDelete={this.props.onDelete}
                        onClickLeft={() => this.props.onClickLeft(box)}
                        onClickRight={() => this.props.onClickRight(box)}
                    >
                        <h3>Box:</h3>
                        <p>#{box.id}</p>
                    </Box>
                ))}
            </React.Fragment>

        );
    }
}
 
export default Boxes;