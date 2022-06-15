import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, FadeOut, } from "react-scroll-motion";
import styled, {keyframes} from "styled-components";
import './App.css';
import { AboutMeData, contactData, SkillsData } from "./Components/Data";
import Project from "./Components/Project";


// ---------- Styled-Project -----------

const ProjectWrap = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2.5rem;
  padding: 40px 10%;

  @media screen and (max-width:1500px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    padding: 0 20%;
  }
  @media screen and (max-width:600px) {
    padding: 0 10%;
  }
`
// const PjTitle = styled(Title)`
//   margin-top: 150px;
// `



// ---------- Styled-Contact -----------
const ContactWrap = styled.div`
  /* width: 50vw; */
  height: 400px;
  /* background-color: #999; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  `
  const CircleWrap = styled.div`
  display: flex;
  justify-content:center;
  align-items: center; 
`
const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #666;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 20px;
  margin: 0 15px;
  transition: 0.3s;
  color: #fff;
  &:hover{
    background-color: #A691F2;
  }
  ${CircleWrap}:hover &{
    background-color: #A691F2;
  }
`

const Span = styled.span`
  font-size: 18px;
  display: none;
  color: #fff;

  ${CircleWrap}:hover &{
    display: block;
  }
  
`
const Footer = styled.div`
  /* height: 100vh; */
  position: relative;
  bottom: 0;
  margin-bottom: 3%;
  text-align: center;
  font-size: 12px;
  color: #fff;
`


// ---------- COMPONENT -----------


function App() {
  return (
    <>  
    <ScrollContainer>
      <ScrollPage page={0}>
          <div className="introWrap">
            <Animator animation={batch(ZoomOut(1, 100))}>
              <h1 className="keep">KEEP GOING</h1>
              <p>멈추지 않고 나아가는 사람이 되겠습니다.</p>
            </Animator>
          </div>
      </ScrollPage>

      <ScrollPage page={1}>
        <div className="aboutMe">
       <Animator animation={batch(ZoomIn())}>
        <h1 className='title'>ABOUT ME</h1>
      </Animator>           
         {/* <Animator animation={batch(MoveIn(0, 1000))}> */}
          <h1> 안녕하세요. 이윤지 입니다. </h1>
          <p className="introduce">
            한 번 시작한 일은 끝을 맺어야 한다는 생각으로 <strong> 해결이 될 때까지 몰입하는 편입니다. </strong>이러한 끈기로 문제해결 과정에서 새로운 지식 습득과 성취감을 느끼며 성장할 수 있었습니다. 또한 저는 디자인을 전공하였기 때문에 <strong>UI/UX에도 관심이 많습니다.</strong> 인터렉티브한 모션 구현에도 욕심을 가지고 있으며 시도해보는 것을 좋아합니다. 사용자와 제일 가까이 마주해야 하는 분야이기 때문에 저의 감각은 분명 도움이 되리라 생각합니다.
          </p>
         {/* </Animator> */}
         <Animator animation={batch(Fade(), MoveIn(0, 1000))}>
         <div className="imgCircle">
         <img src={process.env.PUBLIC_URL + "/img/emoji.jpeg"} alt="" />
      </div>
      {AboutMeData.map(item => {
              return(
                  <ul>
                    <li>
                      <strong>{item.title}</strong>
                      <p>{item.description}</p> 
                    </li>
                  </ul>
                )
                })}
      <div className="btn">
        <a href="https://jaylee-log.tistory.com/"><p>blog</p></a>
        <a href="https://github.com/yoonzet"><p>Github</p></a>
      </div>
         </Animator> 
        </div>
      </ScrollPage>      
     
      <div className="skills">
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
   </ScrollContainer>
        <h1 className="projectTitle">PROJECT</h1>
        <div className="projectWrap">
          <Project/>
        </div>
        <div className="footer">&copy;2022 Portfolio <br /> yoonzet703@gmail.com / Lee yoonji</div>
   </>
  );
}

export default App;
