import React, { forwardRef } from 'react'
import { ProjectData } from './Data';

const Project = forwardRef<HTMLDivElement>
((props, ref) => {
  return (
      <>
      <h1 ref={ref} className="projectTitle">PROJECT<div/> </h1>
      {ProjectData.map(item => {
        return(
          <div className='projectWrap'>
            <div className='imgWrap'>
              <p>{item.index}</p>
              <img src={process.env.PUBLIC_URL + `${item.img}`}/>
            </div>

            <div className='rightWrap'>
              <h1>{item.title}</h1>
              <b className='strong'>{item.description}</b>
              <p>
                {item.base}기반 <br />
                {item.skill}
              </p>
              <div className='btnWrap'>
                <a href={item.view} target="_blank" >
                  <b>view</b>
                </a>
                <a href={item.github} target="_blank" >
                  <b>Github</b>
                </a>
              </div>      
            </div>
          </div>
        )
      })}
      </>
  )
});

export default Project;