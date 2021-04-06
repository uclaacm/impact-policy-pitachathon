import React from "react";
import styled from "styled-components";
import { css } from "@emotion/css";

const Name = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 24;
    display: flex;
    align-items: flex-start;
`;

const Description = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 16;
`;

const HorizontalContainer = styled("div")`
display: flex;
flex-direction: row;
align-items: center;
`
const VerticalContainer = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 7vh;
`

const AllContainer = styled("div")`
    display: flex;
    padding-top: 3vh;
    padding-bottom: 3vh;
`;

export default class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <AllContainer>
                <HorizontalContainer>
                    <div>
                        <img
                            src={this.props.pic}
                            className={css`
                      border-radius: 50%;
                      height: 16vh;
                      width: 16vh;
                    `} />
                    </div>
                    <VerticalContainer>
                        <Name>{this.props.name}</Name>
                        <Description>{this.props.description}</Description>
                    </VerticalContainer>
                </HorizontalContainer>
            </AllContainer>
        )
    }
}

