import React from 'react';
import { store } from '../index.js';
import BrainHead from '../icons8-head-with-brain-64.png'

export const Navigation = ({ displaySignUpModalAction, displayLogInModalAction, signOut, loggedIn, isMobile, displayMobileMenuAction, name }) => {
    return (
        <div>
            <nav className="
                w-100 flex flex-row justify-between items-center ph3 pv3 bg-light-gray
                flex-column-ns
                flex-column-m 
                flex-row-l"
            >
                <div className="">
                    <div className="flex items-center">
                        <a className="w-100 flex no-underline" href="#" title="Home">
                            <div className="dib w3 h3">
                                <img src={BrainHead}></img>
                            </div>
                        </a>
                        <h1 
                            className="flex f5 f4-ns f3-m f2-l pl1 ma0"
                        >Applied Machine Learning APIS</h1>
                    </div>
                </div>
                {
                    isMobile ?
                    <div
                        onClick={() => displayMobileMenuAction()}
                    >
                        <svg className="w2 h2 flex items-center pa0 ma0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                    </div>
                    : ''
                }
                {
                    isMobile ? ''
                    : 
                    <div 
                    className="w-100 h2 mt3 flex items-center justify-center tc
                    justify-end-l
                    ">
                        <input className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" type="text" placeholder="Search for APIS"></input>
                        <div className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="apilist"><a href="#apilist" className="no-underline dark-gray">API List</a></div>
                        <div className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="articles"><a href="#articles" className="no-underline dark-gray">Articles</a></div>
                        <div className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="tutorials"><a href="#tutorials" className="no-underline dark-gray">Tutorials</a></div>
                    {
                        loggedIn ? 
                        <div className="flex flex-row items-center">
                            <div className="link dim dark-gray f6 f5-l dib pointer" 
                                onClick={signOut}
                            >Sign Out</div>
                            <div className="flex self-end pl3">Welcome {name}</div>
                        </div>
                        :
                        <div className="flex">
                            <div
                            className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="Log in"
                                onClick={displayLogInModalAction}
                            >Log in</div>
                            <div className="link dim dark-gray f6 f5-l dib pointer" title="Sign up"
                                onClick={displaySignUpModalAction}
                            >Sign Up</div>
                        </div>
                    }
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navigation;