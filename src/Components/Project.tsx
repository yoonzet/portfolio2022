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
  background-color: #7845BF;
  text-align: center;
  position: absolute;
  top:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
  ${PjBox}:hover &{
    opacity: 1;
    transform: translate(0, -100%);
    }
`
const Dscr = styled.div`
    font-size: 18px;
`
const Button = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 50px;
    background-color: #282140;
    margin: 30px 5px;
    &:hover{
      background-color: #A691F2;

    }
`

function Project() {
  return (
      <>
      {ProjectData.map(item => {
        return(
          <PjBox>
          <PjImg src={item.img} alt=""/>
          <HoverWrap>
            <h2>{item.title}</h2>
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