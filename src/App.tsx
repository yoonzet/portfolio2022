import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, FadeOut, } from "react-scroll-motion";
import styled, {keyframes} from "styled-components";
import './App.css';
import { AboutMeData, contactData, EduData, SkillsData } from "./Components/Data";
import Project from "./Components/Project";


// ----------First Pg-----------

const bounce = keyframes`
   0% {
    letter-spacing: 1em;
    -webkit-transform: translateZ(400px);
            transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    opacity: 1;
  }
`
const FirstPgWrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #A691F2;
`
const Keep = styled.h1`
  font-size: 140px;
  /* text-shadow: -1px 0px #9DB9FF, 0px 1px #9DB9FF, 1px 0px #9DB9FF, 0px -1px #9DB9FF; */
  color: #B150F2;
  color: #222;
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  white-space: nowrap;
  animation: ${bounce} 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  
  `
const FirstP = styled.p`
  color: #222;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

// --------- About me ---------
const Title = styled.h1`
    color: #eee;
    font-size: 60px;
    text-align: center;
    font-family: 'Poppins', sans-serif;

`
const AbTitle = styled(Title)`
    margin-top: 300px;
`
const AboutMeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const IntroTitle = styled.h2`
`
const AboutMe = styled.p`
    width: 50vw;
    max-width: 800px;
    color: #eee;
    font-size: 18px;
    line-height: 30px;
`
const Img = styled.img`
  width: 300px;
  height: 100%;
  margin: 5%;
`
// education
const EducationWrap = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px;
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
// ---------- Project -----------
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
`
// ---------- Skills & Tools -----------
const SkillsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const SkillH2 = styled.h2`
  text-align: center;
  color: #fff;
`
const SkillDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 40px;
`
const SkillIcons = styled.h1`
  display: flex;
  color: #fff;
  text-align: center;
  font-size: 50px;
`
const SkillP = styled.p`
  color: #fff;
  text-align: center;
`


// ---------- Contact -----------
const ContactWrap = styled.div`
  width: 100%;
  height: 400px;
  /* background-color: #999; */
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 20%;
  box-sizing: border-box;
  `
const Circle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #7845BF;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 25px;
`
const LongCircle = styled.div`
  height: 45px;
  border-radius: 32px;
  border:1px solid #7845BF;
  display: flex;
  justify-content:center;
  align-items: center;
`
const Span = styled.span`
  padding: 0 40px ;
  font-size: 18px;
  display: none;

  ${LongCircle}:hover &{
    display: block;
  }
`



// ---------- component -----------


function App() {
  return (
    <>  
    <ScrollContainer>
      <ScrollPage page={0}>
          <FirstPgWrap>
            <Animator animation={batch(ZoomOut(1, 100))}>
              <Keep>KEEP GOING</Keep>
              <FirstP>멈추지 않는 개발자가 되겠습니다.</FirstP>
            </Animator>
          </FirstPgWrap>
      </ScrollPage>

      <ScrollPage page={1}>
       <Animator animation={batch(ZoomIn())}>
        <AbTitle>ABOUT ME</AbTitle>
      </Animator>      
        <AboutMeWrap>
         <Animator animation={batch(MoveIn(0, 1000))}>
          <AboutMe>
            <IntroTitle> 안녕하세요 저는 프론트엔드 개발자를 꿈꾸는 이윤지 입니다. </IntroTitle>
            {AboutMeData.text}
          </AboutMe>
         </Animator>
         <Animator animation={batch(Fade(), MoveIn(0, 1000))}>
          <Img src="/img/emoj.png" alt="" />
         </Animator>
        </AboutMeWrap>
      </ScrollPage>      
      
      <ScrollPage page={2}>
       <Animator animation={Fade()}>
          <EducationWrap>
            <EduH2>Education</EduH2>
            <EduUl>
              {EduData.map(item => {
                return(       
                  <EduLi>     
                    <Animator animation={MoveIn(50, -100)}>        
                      <EduTitle>{item.title}</EduTitle>
                      <EduDate>{item.date}</EduDate>
                     </Animator>  
                     <Animator animation={MoveIn(100, 80)}>      
                      <EduDcr>{item.description}</EduDcr>
                      </Animator>  
                  </EduLi> 
                )
              })}
            </EduUl>
          </EducationWrap>
        </Animator>
        <SkillH2>SKILLS & TOOLS</SkillH2>
        <Animator animation={batch(Fade())}>
        </Animator>
      </ScrollPage>          
        <SkillsWrap>
            {SkillsData.map(item => {
              return(
                <SkillDiv>
                 <SkillIcons>{item.icon}</SkillIcons>
                 <SkillP>{item.name}</SkillP>
                </SkillDiv>
                )
                })}
       </SkillsWrap>
   </ScrollContainer>
        <Title>PROJECT</Title>
        <ProjectWrap>
          <Project/>
        </ProjectWrap>

          {/* <Title>CONTACT</Title> */}
        <ContactWrap>
            {contactData.map(item => {
              return(
                <LongCircle>
                  <a href={item.link}><Circle> 
                  {item.icon}
                  </Circle>
                  </a>
                    <Span>{item.text}</Span>
                </LongCircle>
              )
            })} 

        </ContactWrap>
   
   </>
  );
}

export default App;
