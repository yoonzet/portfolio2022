import React from 'react'
import styled from "styled-components";
import { ProjectData } from "./ProjectData";

const PjBox = styled.div`
  border: 1px solid #fff;
  margin: 20px;
`
const PjImg = styled.img`
  width: 90%;
  margin: 5%;
`
const PjTxtWarp = styled.div`
 
`

function Project() {
  return (
      <>
    {ProjectData.map(item => {
        return(
          <PjBox>
          <PjImg src={item.img} alt=""/>
          <PjTxtWarp>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <ul>
              <li>{item.list1}</li>
              <li>{item.list2}</li>
              <li>{item.list3}</li>
              <li>{item.list4}</li>
            </ul>              
          </PjTxtWarp>
          
          
          </PjBox>
        )
      })}
      </>
  )
}

export default Project;