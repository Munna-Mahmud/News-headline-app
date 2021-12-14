import React, { Component } from 'react'

 class Header extends Component {
     state = {
         searchTerm : ''
     }

     handleChange = e =>{
        //    to do implement letter  
     }

     handleKeyPress = e => {
        // to do  letter implement 
     }
    render() {
        return (
            <div className='my-4'>
                <h1 className='mb-4' style={{fontWeight:"300"}}>
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
            </div>
        )
    }
}

export default Header
npm