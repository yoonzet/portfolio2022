import React from 'react'
import styled from "styled-components";
import { ProjectData } from './Data';

const PjBox = styled.div`
  box-shadow: 0 1rem 2rem #1115;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`
const PjImg = styled.img`
  width: 100%;
  height: 100%;
`
const HoverWrap = styled.div`
  width: 100%;
  height: 102%;
  background-color: #A691F2;
  text-align: center;
  position: absolute;
  top:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
  ${PjBox}:hover &{
    opacity: 1;
    transform: translate(0, -100%);
    }
`
const Title = styled.h2`
    @media screen and (max-width:800px) {
      font-size: 18px;
  }
`
const Dscr = styled.div`
    font-size: 18px;
    @media screen and (max-width:800px) {
      font-size: 15px;
      padding: 0 5%;
  }
`
const Button = styled.button`
    width: 100px;
    height: 30px;
    background-color: #282140;
    border-radius: 50px;
    margin: 30px 10px 0 0;
    &:hover{
      background-color: #7845BF;


    }
`

function Project() {
  return (
      <>
      {ProjectData.map(item => {
        return(
          <PjBox>
          <PjImg src={process.env.PUBLIC_URL + `${item.img}`} alt=""/>
          <HoverWrap>
            <Title>{item.title}</Title>
            <Dscr>{item.description}</Dscr>
            <div>
              <a href={item.view} target="_blank" ><Button>view</Button></a>
              <a href={item.github} target="_blank" ><Button>Github</Button></a>
            </div>
        
                         
          </HoverWrap>
          
          
          </PjBox>
        )
      })}
      </>
  )
}

export default Project;