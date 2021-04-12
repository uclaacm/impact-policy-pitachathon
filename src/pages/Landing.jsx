import React from "react";
import styled from "styled-components";
import banner from "../assets/banner.svg";

const AllContainer = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10vh;
    width: 100%;
`;

const Caption = styled("div")`
    padding-top: 10vh;
    font-family: 'Westwood Sans';
    font-size: 16px;
    width: 75%;
`

export default class Landing extends React.Component {
    render() {
        return (
            <AllContainer>
                <img src={banner} alt="" width="80%"/>
                <Caption>
                    ACM Impact is an initiative at ACM, the largest computer science club at UCLA, that facilitates programs, events, and conversations around socially responsible technology and tech policy. In this policy pitch competition, students will work in teams to present their legislative proposals regarding data privacy, sustainable technology, and more.
                </Caption>
            </AllContainer>
        )
    }
}
