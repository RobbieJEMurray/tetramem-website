import React from 'react';
import '../styles/main_page.css';
import processor from '../content/generic_processor.jpg';
import computer from '../content/generic_computer.jpg';

class Home extends React.Component{
    render(){
        return(
            <div className="page">
                <div className="content topdiv">
                    <div className="row">
                        <div className="contentimg">
                            <img  src={processor}/>
                        </div>
                        <div className="textbox">
                            <h2>!placeholder text for later addition!</h2> 
                            <p className="text">According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.</p>
                            <div>
                                <a className="contentbutton"><b>Learn More</b></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="textbox">
                            <h2>!placeholder text for later addition!</h2>
                            <p className="text">What is my perfect crime? I break into Tiffany's at midnight. Do I go for the vault? No, I go for the chandelier. It's priceless. As I'm taking it down, a woman catches me. She tells me to stop. It's her father's business. She's Tiffany. I say no. We make love all night. In the morning, the cops come and I escape in one of their uniforms. I tell her to meet me in Mexico, but I go to Canada. I don't trust her.</p>
                            <div>
                                <a className="contentbutton"><b>Learn More</b></a>
                            </div>
                        </div>
                        <div className="contentimg">
                            <img src={computer} />
                        </div>
                    </div>
                </div>
                <div className="content bottomdiv">
                    <h2>News</h2>
                    <div className="newsrow">
                        <div className="newsbox">
                            <h3 className="text">News Site</h3>
                            <p className="text headline">Main News Headline</p>
                            <div>
                                <a className="contentbutton"><b>Learn More</b></a>
                            </div>
                        </div>
                        <div className="newsbox">
                            <h3 className="text">News Site</h3>
                            <p className="text headline">Main News Headline</p>
                            <div>
                                <a className="contentbutton"><b>Learn More</b></a>
                            </div>
                        </div>
                        <div className="newsbox">
                            <h3 className="text">News Site</h3>
                            <p className="text headline">Main News Headline</p>
                            <div>
                                <a className="contentbutton"><b>Learn More</b></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        );
    }
}

export default Home;