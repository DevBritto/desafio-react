import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 69px;
background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.25)' :' #D93856'}; 
color: #ffffff;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
cursor: pointer;
position: ${props => props.isBack ? 'absolute; top: 820px': ''};   
`