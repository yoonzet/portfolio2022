import React from 'react'
import styled from "styled-components";
import { ProjectData } from "./Data";

const PjBox = styled.div`
  /* background-color: #3337; */
  border-radius: 10px;
  box-shadow: 0 1rem 2rem #1115;
  position: relative;
  overflow: hidden;
`
const PjImg = styled.img`
  width: 100%;
  transition: 0.3s;
&:hover{
}
`
const HoverWrap = styled.div`
  text-align: center;
  width: 110%;
  height: 100%;
  background-color: #7845BF;
  padding: 10%;
  box-sizing: border-box;
  position: absolute;
  left:50%;
  transform: translate(-50%, 0);
  opacity: 0;
  transition: 0.2s;
  ${PjBox}:hover &{
    opacity: 1;
      top:50%;
      transform: translate(-50%, -50%);
    }
`
const Dscr = styled.div`
    font-size: 18px;
`
const P = styled.p`
    line-height: 15px;
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
            
              {/* <P>{item.list1}</P>
              <P>{item.list2}</P>
              <P>{item.list3}</P>
              <P>{item.list4}</P> */}

              <Button><a href={item.view} target="_blank" >view</a></Button>
              <Button><a href={item.github} target="_blank" >Github</a></Button>
        
                         
          </HoverWrap>
          
          
          </PjBox>
        )
      })}
      </>
  )
}

export default Project;