import React from "react";
import {connect} from "react-redux";
import ddiarylogo from "./logo-white.png";
import styled from "styled-components";

export const AppHeader = (props) => {
    const renderAuthStatus = () => {
        switch(props.auth) {
            case null:
                return "Loading";
            case false: 
                return <a title="Login with Google" href="auth/google">Login with Google</a>;
            default: return <a href="/api/logout">Logout</a>;
        }
            
    }
    return (
        <header className={props.className}>
            <h1>
                <a href={props.auth ? "/diary" : "/"} title="DDiary">
                    <img src={ddiarylogo} alt="" />
                    <span>DDiary</span>
                </a>
            </h1>
            <div>
                {renderAuthStatus() }
            </div>
            
        </header>
    );
};


const styledAppHeader = styled(AppHeader)`
    min-height: 5em;
    display: flex;
    justify-content: space-between;
    align-content: stretch;
    background-color: ${props => props.theme.secondaryColor};
    h1 {
        margin-left: 1em;
        display: flex;
        align-items: center;
    }
    span {
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; width: 1px; 
        margin: -1px; padding: 0; border: 0; 
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        a { 
            padding: 0 1em;
            display: flex;
            align-items: center;
            height: 100%;
            text-decoration: none;
            font-size: 1.5em;
            font-weight: bolder;
            color: ${props => props.theme.primaryColor};
            transition: .4s;
            padding-right: .5em;
            :hover,
            :focus {
                background-color: ${props => props.theme.fourthColor};
                color: ${props => props.theme.secondaryColor};
            }
        }
    }
`;

function mapStateToProps({auth}) {
    return {auth};
};

export default connect(mapStateToProps)(styledAppHeader);