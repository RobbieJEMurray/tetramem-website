import React from 'react';
import '../styles/main_page.css';
import Placeholder from '../content/placeholder-1-e1533569576673-960x960.png'

const height ="300px";

class About extends React.Component{
    render() {
        return(
            <div className="page">
                <div className="content topdiv bottomdiv">
                <h1 className="heading">About Us</h1>
                    <div className="row">
                        <div className="contentimg" style={{maxHeight:height}}>
                            <img src={Placeholder}/>
                        </div>
                        <div className="textbox">
                            <p className="text">About Us paragraph</p>
                            <p className="text">About Us paragraph2</p>
                        </div>
                    </div>
                </div>
                <div className="content bottomdiv">
                    <h2 className="heading">Our Founders</h2>
                    <div className="newsrow">
                        <div className="newsbox">
                            <h2>Name</h2>
                                <div className="contentimg" style={{maxHeight:height}}>
                                <img src={Placeholder}/>
                                </div>
                                <p>About</p>
                        </div>
                        <div className="newsbox">
                            <h2>Name</h2>
                                <div className="contentimg" style={{maxHeight:height}}>
                                <img src={Placeholder}/>
                                </div>
                                <p>About</p>
                        </div>
                        <div className="newsbox">
                            <h2>Name</h2>
                                <div className="contentimg" style={{maxHeight:height}}>
                                <img src={Placeholder}/>
                                </div>
                                <p>About</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;