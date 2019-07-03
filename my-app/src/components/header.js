import React from 'react';

export class Header extends React.Component{

    state = {
        showNav : false
    }

    toggleNav = () => {
        this.setState({
            showNav : !this.state.showNav
        });
    }

    
    render(){
        const navVis = this.state.showNav ? 'show' : 'hide';

        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <span className="navbar-brand">React</span>
            <button className="navbar-toggler" type="button" onClick={this.toggleNav}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${navVis}`}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link">Components</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Component Code</a>
                    </li>
                </ul>
            </div>
        </nav>
      );
    }
}