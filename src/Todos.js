import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const x = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const date = new Date();
const date1 = new Intl.DateTimeFormat('en-US', x);

class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            targetDate: ''
        }
    }

    createTodo() {

    }
    render() {
        return(
            <form onSubmit={this.createTodo}>
                <Table dark>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Finished?</th>
                            <th>Utils </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    <input type="text" name="description" className="form-control" value={this.state.description || ''} onChange={this.handleChange}/>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="text" name="targetDate" className="form-control" value={this.state.targetDate || ''} onChange={this.handleChange}/>
                                </label>
                            </td>
                            <td />
                            <td>
                                <button className={"btn btn-secondary mr-1"} type={"submit"}>Create</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </form>
        )
    }
}

/*const btnStyle = {
    background: '#808080',
    color: 'rgb(255,255,255)',
    border: 'solid black'
};*/

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
};

export default Todos;
