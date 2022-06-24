import React from 'react'
import { ProjectData } from './Data';

function Project() {
  return (
      <>
      {ProjectData.map(item => {
        return(
          <div className='projectWrap'>
            <div className='imgWrap'>
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
}

export default Project;