import React from "react";
import styled from "styled-components";
import { css } from "@emotion/css";

const Name = styled("div")`
    font-family: 'Westwood Sans';
    font-size: 32px;
    display: flex;
    align-items: flex-start;
    padding-bottom: 2vh;
    color: #7300CD;
`;

const Description = styled("div")`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
`;

const HorizontalContainer = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    text-align: left;
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
    max-width: 75%;
    justify-content: center;
    align-items: center;
`;

export default class ProfileCard extends React.Component {
    render() {
        return (
            <AllContainer>
                <HorizontalContainer>
                    <div>
                        <img
                            src={this.props.pic}
                            alt=""
                            className={css`
                      border-radius: 50%;
                      height: 25vh;
                      width: 25vh;
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

