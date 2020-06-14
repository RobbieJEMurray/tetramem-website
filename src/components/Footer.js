import React from 'react';
import twitter from '../content/twitter.png'
import linkedin from '../content/linkedin.png'
import facebook from '../content/facebook.png'
import '../styles/main_page.css';

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <ul className="media_bar">
                    <li className= "mediabutton"><img src={twitter}/></li>
                    <li className= "mediabutton"><img src={linkedin}/></li>
                    <li className = "mediabutton"><img src={facebook}/></li>
                </ul>
            </div>
        );
    }
}

export default Footer;