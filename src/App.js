import { useEffect, useState } from "react";
import styled from "styled-components";
import './App.css';
import Project from "./components/Project";
import { EduData } from "./components/EduData";

// ------First Pg-------
const FirstPgWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Keep = styled.h1`
  font-size: 140px;
  text-shadow: -1px 0px #9DB9FF, 0px 1px #9DB9FF, 1px 0px #9DB9FF, 0px -1px #9DB9FF;
  color: #111;
`
const FirstP = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
`

// ----- About me -----
const AboutMeWrap = styled.div`
  margin-left: 30%;
`
const Title = styled.h1`
    color: #eee;
    font-size: 60px;
    text-align: center;
`
const AboutMe = styled.p`
    width: 60vw;
    max-width: 800px;
    color: #eee;
    font-size: 18px;
`
// education
const EducationWrap = styled.div`
  color: white;
  display: flex;
  margin: 0 50% ;
  transform: translateX(50%);
  margin-top: 50px;
`
const EduH2 = styled.h2`
  margin-right: 30px;
`
const EduUl = styled.ul`
  border-left: 1px solid #fff;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
const EduLi = styled.li`
  list-style: none;
 `
const EduTitle = styled.h3`
  line-height: 2px;
`
const EduDate = styled.p`
  font-size: 14px;
  font-weight: bold;
`
const EduDcr = styled.p`
  width: 450px;
  font-size: 15px;
  line-height: 22px;
`
const ProjectWrap = styled.div`
  color: #fff;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  padding: 40px 20%;

`





function App() {
  const [position, setPosition] = useState(0);
  function onScroll(){
    setPosition(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener('scroll', onScroll); // 스크롤 될때마다 계속실행이되니
    return ()=>{ // 이벤트 제거하는 리턴문 작성. 
      window.addEventListener('scroll', onScroll);
    }
  },[])
  return (
    <div>
      <FirstPgWrap style={{opacity:(50/position),}}>
        <Keep>KEEP GOING</Keep>
        <FirstP>멈추지 않는 개발자가 되겠습니다.</FirstP>
      </FirstPgWrap>
      <Title>ABOUT ME</Title>
      <AboutMeWrap>
        <AboutMe>
        안녕하세요 저는 프론트엔드 개발자를 꿈꾸는 이윤지 입니다. <br />

프론트엔드 개발의 매력에 빠지게 된 계기는 uxui 디자인을 배우기 위해 학원에서 웹디자인과정을 배우게된 후 였습니다. 저의 예상과 다르게 학원에선 디자인수업보단 기술(html, css, js) 위주의 수업을 배우게 되었지만 오히려 제 손끝에서 UI로 구현되는 모습을 보며 더욱 코딩의 매력을 느끼게 되었습니다. Javascript으로 생각보다 많은 기능을 동적으로 구현 할 수있다는 것을 알게된 후 좀 더 깊이 있게 배우고 싶어 강의들을 따로 찾아 듣기 시작했습니다. 배울수록 흥미를 느끼며 진로에 대한 노선은 자연스럽게 프론트엔드로 향하게 되었습니다. 현재는 React에 관심을 갖고 공부를 하고 있습니다. 앞으로도 빠르게 변화하는 시대에 발맞춰 멈추지 않고 저의 역량을 키워나가겠습니다.
        </AboutMe>
      </AboutMeWrap>
      <EducationWrap>
        <EduH2>Education</EduH2>
        <EduUl>
          {EduData.map(item => {
            return(       
              <EduLi>                    
               <EduTitle>{item.title}</EduTitle>
               <EduDate>{item.date}</EduDate>
               <EduDcr>{item.description}</EduDcr>
              </EduLi> 
            )
          })}
        </EduUl>
      </EducationWrap>
      <Title>Project</Title>
      <ProjectWrap>
        <Project/>
      </ProjectWrap>

      
    </div>
  );
}

export default App;
