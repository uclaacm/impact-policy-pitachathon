import React from "react";
import styled from "styled-components";
import Emoji from "./Emoji";

const Time = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 24;
    display: flex;
    align-items: flex-start;
    color: #7300CD;
`;

const Description = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 16;
`;

const AllContainer = styled("div")`
    display:flex;
    flex-direction: column;
    padding-top: 2vh;
    padding-bottom: 2vh;
`

export default class Event extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AllContainer>
                <Time><Emoji symbol="⭐️" />{' '}{this.props.time}</Time>
                <Description>{this.props.description}</Description>
            </AllContainer>
        )
    }
}