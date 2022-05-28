import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit tracker</span>
                <span className="navar-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default Navbar;