import React, { Component} from 'react';

class Solution extends Component {
    state = { 
        solutions: [
            {key: 0, number: 1164, title: "加工零件1", views: 2930},
            {key: 1, number: 1165, title: "加工零件2", views: 2931},
            {key: 2, number: 1166, title: "加工零件3", views: 2932},
            {key: 3, number: 1167, title: "加工零件4", views: 2933},
            {key: 4, number: 1168, title: "加工零件5", views: 2934},
            {key: 5, number: 1169, title: "加工零件6", views: 2935},
            {key: 6, number: 1170, title: "加工零件7", views: 2936},
            {key: 7, number: 1171, title: "加工零件8", views: 2937},
        ]
    };

    //添加元素
    handleDelete = (s) => {
        const solutions = this.state.solutions.filter(solution => solution !== s);
        // filter实现遍历所有元素，留下符合要求的元素，即对不符合要求的元素进行删除
        this.setState({
            solutions : solutions
        });
    }

    //删除元素
    handleAdd = () => {
        const solutions = [...this.state.solutions,{
            key: this.state.solutions.length+1, number: 1111, title: "xxxxx", views: 1111
        }];
        this.setState({
            solutions:solutions
        })
    }

    render() { 
        if(this.state.solutions.length === 0)
        {
            return <p>没有题解了</p>
        }
            
        return(
            <div>

                <div>
                    <button onClick={() => this.handleAdd()} className='btn btn-success'>add</button>
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>标题</th>
                            <th>阅读</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.solutions.map(solutions => (
                                <tr key={solutions.key}>
                                    <td>{solutions.number}</td>
                                    <td>{solutions.title}</td>
                                    <td>{solutions.views}</td>
                                    <td><button onClick={() => this.handleDelete(solutions)} className='btn btn-danger'>删除</button></td>
                                    {/* 这里handleDelete传入的参数为solutions */}
                                </tr>
                            )
                        )
                        }
                    </tbody>
                </table>
            </div>
            
        );
    }
}
 
export default Solution;