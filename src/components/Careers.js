import React from 'react';
import '../styles/main_page.css';

class Careers extends React.Component{
    render(){
        return(
            <div className="page">
                <div className="content topdiv bottomdiv">
                    <div className="career_head">
                        <h1 className="heading">Make processor cooler and make machine warmer</h1>
                        <h3 className="subheading">Small paragraph about company mission</h3>
                    </div>
                    <div className="careerrow">
                        <div className="careerHead">
                            <h3 className="positionsheader">Positions</h3>
                        </div>
                        
                        <div className="careersTable">
                            <div className="career">
                                <a><h3>Careers</h3></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Careers;