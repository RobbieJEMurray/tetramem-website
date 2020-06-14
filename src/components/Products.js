import React from 'react';
import '../styles/main_page.css';
import making from '../content/generic_manufacturing.jpg';

const center = "space-around"

class Products extends React.Component{
    render(){
        return(
            <div className="page">
                <div className="content topdiv">
                    <div className="row">
                        <div className="contentimg">
                            <img  src={making}/>
                        </div>
                        <div className="textbox" style={{justifyContent:center}}>
                            <h2>About Our Products</h2> 
                            <p className="text">Need Information about Technology being produced, no need to describe products, will be described in personal product overview.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="content bottomdiv">
                    <div className="productbox">
                        <h2>Product Name</h2>
                        <p>Product Overview</p>
                        <div className="row">
                            <div className="keyfeature">
                                <h3>Key Feature</h3>
                                <p>Feature Description</p>
                            </div>
                            <div className="keyfeature">
                                <h3>Key Feature</h3>
                                <p>Feature Description</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="keyfeature">
                                <h3>Key Feature</h3>
                                <p>Feature Description</p>
                            </div>
                            <div className="keyfeature">
                                <h3>Key Feature</h3>
                                <p>Feature Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Products