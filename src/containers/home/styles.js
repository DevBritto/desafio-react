import styled from "styled-components";

export const Tela = styled.div`
height: 100vh;
display: flex;
justify-content: center;
`

export const ContainerGlobal = styled.div`
margin-top: 30px;
width: 414px;
height: 896px;
display: flex;
flex-direction: column;
background:  rgba(10, 10, 16, 1);
;
`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const Image = styled.img`
width: 342px;
height: 354px;
margin-left: 36px;
margin-right: 36px;
margin-top: 11px;
`
export const Input = styled.input`
width: 342px;
height: 58px;
border-radius: 14px;
margin-bottom: 60px;
background:  rgba(255, 255, 255, 0.25);
color: #ffffff;
font-style: normal;
font-weight: 300;
font-size: 18px;
line-height: 21px;
outline: none;
padding-left: 15px;
`
export const Button = styled.button`
width: 342px;
height: 69px;
background: #D93856;
color: #ffffff;
font-style: normal;
font-weight: 900;
font-size: 17px;
line-height: 2px;
cursor: pointer;
`
export const Label = styled.label`
font-weight: 300;
font-size: 18px;
line-height: 21px;
position: relative;
right: 102px;
color: #eeeeee;

`
export const H1 = styled.h1`
margin-top: 30px;
margin-bottom: 80px;
color: #ffffff;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 33px;
`
export const User = styled.li`
color: red;
width: 342px;
height: 58px;
background: orange;
display: flex;
border-radius: 14px;
margin-bottom: 3px;
justify-content: space-around;
`