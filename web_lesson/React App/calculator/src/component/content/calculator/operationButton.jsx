import React, { Component } from 'react';
import { connect } from 'react-redux';
import ACTIONS from '../../../redux/actions';


class OperationButton extends Component {
    state = {  } 
    render() { 
        return (
            <button
                onClick={() => {
                    this.props.choose_operation(this.props.operation);
                }}
            >
                {this.props.operation}
            </button>
        );
    }
}

const mapDispatchToProps = {
    choose_operation: operation => {
        return {
            type: ACTIONS.CHOOST_OPERATION,
            operation: operation,
        }
    }
}

export default connect(null, mapDispatchToProps)(OperationButton);
