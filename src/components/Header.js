import React from 'react';
import logo from '../content/tetramem.webp'
import '../styles/main_page.css';
import {motion, AnimatePresence} from 'framer-motion';

const variants = {
        open: {
            opacity:1,
            y:0,
        },
        closed: {
            opacity:0,
            y:"-100%",
        }
}


class Header extends React.Component{
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            currentScroll:0,
            isOpen:true
        }
    }



    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll);
    }

    handleScroll(event) {
        const scroll = window.scrollY;
        if (scroll<this.state.currentScroll) {
            this.setState({isOpen:true});
        }
        else if (scroll>this.state.currentScroll){
            this.setState({isOpen:false})
        }
        this.setState({currentScroll:scroll});
        console.log(this.state.currentScroll);
    }

    render(){
        return(
            <motion.div
            key="topbar"
            style= {{padding:0}}
            variants={variants}
            animate={this.state.isOpen ? "open":"closed"}
            transition={{type:"spring"}}
            >
                <div className="navbar">
                <div className ="topbar">
                    <a className="tetramem_banner" href="/">                            <img src={logo}></img>
                    </a>
                    <ul className= "button_div">
                    <li className = "button" id = "Home"><a href="/">Home</a></li>
                        <li className = "button" id = "About"><a href="/About">About</a></li>
                        <li className = "button" id = "Products" ><a href="/Products">Products</a></li>
                        <li className = "button" id = "Blog"><a href="/Blog">Blog</a></li>
                        <li className = "button" id = "Careers"><a href="/Careers">Careers</a></li>
                    </ul>
                </div>
            </div>
            </motion.div>
            
            
            
        );
    }
}

export default Header;