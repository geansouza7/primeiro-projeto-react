import styled from "styled-components";
import Background from "./assets/background.svg"


export const Container = styled.body`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`;
export const Image = styled.img`
margin-top: 11px;
width: 342px;
height: 354px;
flex-shrink: 0;
`;
export const ContainerItens = styled.div`
padding: 50px 36px;
display: flex;
flex-direction: column;
`;

export const H1 = styled.h1`
color: #FFF;
text-align: center;
font-size: 28px;
font-style: normal;
margin-bottom: 76px;


`;
export const InputLabel = styled.p`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: #EEE;
margin-left: 18px;

`;
export const Input = styled.input`
width: 342px;
height: 58px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
padding: 19px 139px 18px 15px;
margin-bottom: 42px;
border: none;
font-size: 18px;

`;
export const Button = styled.button`

width: 342px;
height: 68px;
background: #D93856;
font-size: 17px;

color: #FFF;
cursor: pointer;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.5;
}
`;


export const Burger = styled.li`
width: 342px;
height: 120px;
margin-top:20px;
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
 
    
p {
display: inline-block;
margin-top:10px;
color: #FFF;
font-size: 18px;
font-style: normal;
font-weight: 300;
line-height: normal;
margin-left: 27px;

}
button {
    background: none;
    border: none;
    margin-top: 15px;
    cursor: pointer;
  margin-left: 303px;
}
`

