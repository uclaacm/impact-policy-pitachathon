import React from "react";
import styled from "styled-components";
import img1 from "../assets/under_constr.png";

const Disclaimer = styled("div")`
    margin-top: 10vh;
    font-size: 35px;
    font-family: 'Westwood Sans';
    margin-bottom: 5vh;
`;

export default class ComingSoon extends React.Component {
    render(){
        return(
            <div>
            <Disclaimer>This page is coming soon!</Disclaimer>
            <img src={img1} width="20%" height="20%" alt="under construction logo"/>
            </div>
        )
    }
}