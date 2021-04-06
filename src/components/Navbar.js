import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import impactLogo from "../assets/logo.svg";

const Container = styled("div")`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: right;
    padding-left: 4vh;
`;

const StyledLink = styled(Link)`
  position: relative;
  font-size: 18px;
  font-family: "Open Sans";
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
  margin-right: auto;
`;

const LinkBox = styled("div")`
  display: flex;
  align-items: center;
  /* resize logo here */
`;

const RightLinkBox = styled(LinkBox)`
  display: flex;
  justify-self: flex-end;
`;

export default class Navbar extends React.Component {
    render() {
        return (
            <Container>
                <LinkBox>
                    {/* place logo here */}
                    {/* <Link to="/"><img src={impactLogo} /></Link> */}
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
                    <a href="https://forms.gle/Z5tZjdgthH64q9V98" class="button">Register</a>
                </RightLinkBox>
            </Container >
        )
    }
}