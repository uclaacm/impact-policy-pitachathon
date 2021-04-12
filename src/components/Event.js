import React from "react";
import styled from "styled-components";

const Time = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 32px;
    color: #7300CD;
    padding-bottom: 1vh;
`;

const Description = styled("div")`
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    display: flex;
    align-items: flex-start;
    padding-left: 3em;
`;

const AllContainer = styled("div")`
    display:flex;
    flex-direction: column;
    padding-top: 2vh;
    padding-bottom: 2vh;
`;

export default class Event extends React.Component {
    render() {
        return (
            <AllContainer>
                <Time>{this.props.time}</Time>
                <Description>{this.props.description}</Description>
            </AllContainer>
        )
    }
}
