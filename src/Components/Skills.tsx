import React, { forwardRef } from 'react'
import { SkillsData } from './Data';

const Skills = forwardRef<HTMLDivElement>
((props, ref) => {
  return(
    <div className="skills" ref={ref}>
    <h1>Skills</h1>
    <ul>
        {SkillsData.map(item => {
            return(
                  <li>
                    <h3>{item.icon}</h3>
                    <p>{item.name}</p>                      
                  </li>
              )
            })}
    </ul>
  </div>          

  )
});

export default Skills;