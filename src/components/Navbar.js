import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import impactLogo from "../assets/impact-logo.svg";

const Container = styled("div")`
    display: flex;
    width: 85%;
    height: 100%;
    flex-direction: right;
    padding-top: 5vh;
    justify-content: center;
    align-items: center;
    padding-left: 10vh;
    padding-right: 10vh;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-size: 18px;
  font-family: 'Open Sans';
  text-decoration: none;
  transition: 0.25s all ease;
  color: black;
  font-weight: 500;
  padding-right: 30px;
  &:hover {
    font-size: 22px;
  }
`;
const DummyFiller = styled("div")`
  margin-left: auto;
`;

const LinkBox = styled("div")`
  display: flex;
  align-items: center;
`;

const RightLinkBox = styled(LinkBox)`
  display: flex;
  justify-self: flex-end;
`;

const RegisterButton = styled("button")`
    background-color: #61FFD9;
    font-family: 'Open Sans';
    text-decoration: none;
    border: none;
    box-shadow: 3px 2.5px 2.5px grey; /*feel free to change lol*/
    border-radius: 1vh;
    padding: 1vh 2vh;
    text-align: center;
    display: inline-block;
    font-size: 18px;
    transition: 0.25s all ease;
    &:hover{
        cursor: pointer; 
        padding: 1.25vh 2.5vh;
        font-size: 22px;
    }
`;

export default class Navbar extends React.Component {
    render() {
        return (
            <Container>
                <LinkBox>
                    <Link to="/"><img src={impactLogo} alt="" /></Link>
                </LinkBox>
                <DummyFiller />
                <RightLinkBox>
                    <StyledLink to="/schedule">Schedule</StyledLink>
                </RightLinkBox>
                <RightLinkBox>
                    <StyledLink to="/resources">Resources</StyledLink>
                </RightLinkBox>
                <RightLinkBox>
                    <StyledLink to="/profiles">Profiles</StyledLink>
                </RightLinkBox>
                <RightLinkBox>
                    <StyledLink to="/FAQ">FAQ</StyledLink>
                </RightLinkBox>
                <RightLinkBox>
                    <a href="https://forms.gle/Z5tZjdgthH64q9V98" class="button">
                        <RegisterButton>
                            Register
                        </RegisterButton>
                    </a>
                </RightLinkBox>
            </Container >
        )
    }
}