import React, { Component } from 'react'
import { newsCatagory } from '../News'

class Header extends Component {
    state = {
        searchTerm: ''
    }

    handleChange = e => {
        this.setState({ searchTerm: e.target.value });
    }

    handleKeyPress = e => {
        // to do  letter implement 
    }
    render() {
        const { catagory } = this.props;
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{ fontWeight: "300" }}>
                    Block Buster News
                </h1>
                <input
                    type="search"
                    className='form-control'
                    placeholder='Type anything and Click Search '
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="my-3">
                    {newsCatagory &&
                        Object.keys(newsCatagory).map((item) => {
                            if (catagory === newsCatagory[item]) {
                                return (
                                    <button className='btn btn-sm btn-warning mr-2 mb-2'>
                                        {`#${newsCatagory[item]}`}
                                    </button>
                                );
                            }
                            return (
                                <button className='btn btn-sm btn-light mr-2 mb-2'>
                                    {`#${newsCatagory[item]}`}
                                </button>
                            )
                        })

                    }
                </div>
            </div>
        )
    }
}

export default Header;