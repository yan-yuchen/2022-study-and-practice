import React, { Component } from 'react';
import ACTIONS from '../../../redux/actions';
import { connect } from 'react-redux';


class DigitButton extends Component {
    state = {  };

    render() { 
        return (
            // 点击触发add_digit增加数字操作
            <button onClick={() => this.props.add_digit(this.props.digit)}> 
                {this.props.digit}
            </button>
        );
    }
}

// mapStateToProps：每次store中的状态更新后调用一次，用来更新组件中的值。
const mapDispatchToProps = {
    add_digit: digit => {
        return {
            type: ACTIONS.ADD_DIGIT,
            digit: digit,
        }
    }
}

// connect(mapStateToProps, mapDispatchToProps)函数：用来将store与组件关联起来
export default connect(null, mapDispatchToProps)(DigitButton);
