import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Web extends Component {
    state = {
        webs: [
            {id: 1, title: "HTML"},
            {id: 2, title: "CSS"},
            {id: 3, title: "JavaScript"},
            {id: 4, title: "拳皇"},
            {id: 5, title: "React"},
        ],
    };
    render() { 
        return (
            <React.Fragment>
                <h1>Web</h1>
                <hr />
                <div>
                    {this.state.webs.map(web => (
                        <div key={web.id}>
                            <Link to={`/web/content?chapter=${web.id}`}>{web.id + ". " + web.title}</Link>
                            {/* 使用URL传递参数chapter */}
                        </div>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Web;