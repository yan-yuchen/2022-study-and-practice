import React, { Component } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

class WebContent extends Component {
    state = {
        searchParams: this.props.params[0],
        setSearchParams: this.props.params[1],
    };

    render() {
        return (
            <React.Fragment>
                <h1>Web - {this.state.searchParams.get('chapter')}</h1>
                {/* 使用函数取出chapter参数 */}
                <div>
                    内容
                </div>
                <hr />
                <Link to='/web'>返回</Link>
                {/* 返回按钮 */}
            </React.Fragment>
        );
    }
}

export default (props) => (
    <WebContent
        {...props}
        params={useSearchParams()}
    />
);
