import React, { Component } from 'react';
import './App.css';
// import Demo from './Demo';
// import Header from './components/header';
// import Product from './components/product';
// import FirstProject from './components/FirstProject';
// import DemoForm from './form/DemoForm';
import Project2 from './project2/Project2';
// import demo from './training/demo';

class App extends Component {
    render() {
        // return (
        //     <div className="App">
        //         <Header />
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        //                     <Product />
        //                 </div>
        //                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        //                     <Product />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // );
        return (
            // <FirstProject />
            // <DemoForm />
            <Project2 /> 
            // <DemoRedux /> 
        )
    }
}

export default App;
