import React from 'react';

import {Header} from './header';

export class App extends React.Component {
  render() {
    return (        
        <section className="main-wrapper">
            <Header/>  
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Welcome to React Components</h1>
                    <p className="lead">UI Components created using ReactJS.</p>
                </div>
            </div>      
        </section>
    );
  }
}