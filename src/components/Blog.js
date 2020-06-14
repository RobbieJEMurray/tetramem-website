import React from 'react';
import '../styles/main_page.css';

const heading = "left";

class Blog extends React.Component{
    render(){
        return(
            <div className="page">
                <div className="content topdiv bottomdiv">
                    <div className="blogHeading">
                        <h1>Blog Posts</h1>
                    </div>
                    <div className="postrow">
                        <a className="post" href="">
                            <p>Post Date</p>
                            <div>
                                <h3>Headline</h3>
                                <p>Overview</p>
                            </div>
                        </a>
                    </div>
                    <div className="postrow">
                        <a className="post" href="">
                            <p>Post Date</p>
                            <div>
                                <h3>Headline</h3>
                                <p>Overview</p>
                            </div>
                        </a>
                    </div>
                    <div className="postrow">
                        <a className="post" href="">
                            <p>Post Date</p>
                            <div>
                                <h3>Headline</h3>
                                <p>Overview</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Blog;