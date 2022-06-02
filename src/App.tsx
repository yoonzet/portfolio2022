import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, ZoomOut, FadeOut, } from "react-scroll-motion";
import styled, {keyframes} from "styled-components";
import './App.css';
import { AboutMeData, contactData, SkillsData } from "./Components/Data";
import Project from "./Components/Project";





// ----------Styled-First Pg-----------

const KeepAni = keyframes`
   0% {
    /* letter-spacing: 1em; */
    /* -webkit-transform: translateZ(400px);
            transform: translateZ(400px); */
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
  background: linear-gradient(45deg, rgba(145,128,213,1) 0%, rgba(223,214,255,1) 100%);
  @media screen and (max-width:600px) {
    background:#191919;
  }
  
`
const Keep = styled.h1`
  font-size: 140px;
  color: #191919;
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  text-align: center;
  animation: ${KeepAni} 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  @media screen and (max-width:600px) {
    font-size: 50px;
    color: #A691F2;
  }
  `
const FirstP = styled.p`
  color: #191919;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width:600px) {
    color: #A691F2;
  }
`

// --------- Styled-About me ---------
const Title = styled.h1`
    color: #eee;
    font-size: 60px;
    text-align: center;
    font-family: 'Poppins', sans-serif;   
`
const AbTitle = styled(Title)`
    margin-top: 300px;
    @media screen and (max-width:600px) {
      font-size: 30px;
      margin-top: 100px;
  }
`
const AboutMeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background-color: #333; */
`
const IntroTitle = styled.h2`
  font-size: 50px;
  line-height: 80px;
 @media screen and (max-width:600px) {
   font-size: 30px;
   line-height: 50px;

  }
`
const AboutMe = styled.p`
    width: 50vw;
    max-width: 800px;
    color: #eee;
    font-size: 22px;
    white-space: nowrap;
    @media screen and (max-width:600px) {
      width: 85vw;
      font-size: 16px;
      line-height: 27px;

  }
`
const Img = styled.img`
  width: 300px;
  height: 100%;
  margin: 5%;
  @media screen and (max-width:800px) {
    width:200px;
  }
  @media screen and (max-height:700px) {
    display: none;
  }
`

// ---------- Styled-Skills & Tools -----------
const SkillsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
const SkillH2 = styled.h2`
  text-align: center;
  color: #fff;
  margin-top: 100px;
`
const SkillDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 40px ;
`
const SkillIcons = styled.h1`
  display: flex;
  color: #fff;
  text-align: center;
  font-size: 50px;
  transition: 0.3s;
  &:hover{
    transform: scale(110%);
  }
`
const SkillP = styled.p`
  color: #fff;
  text-align: center;
`
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
const PjTitle = styled(Title)`
  margin-top: 150px;
`



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
          <FirstPgWrap>
            <Animator animation={batch(ZoomOut(1, 100))}>
              <Keep>KEEP GOING</Keep>
              <FirstP>멈추지 않는 개발자가 되겠습니다.</FirstP>
            </Animator>
          </FirstPgWrap>
      </ScrollPage>

      <ScrollPage page={1}>
        <AboutMeWrap>
       <Animator animation={batch(ZoomIn())}>
        <AbTitle>ABOUT ME</AbTitle>
      </Animator>           
         <Animator animation={batch(MoveIn(0, 1000))}>
          <AboutMe>
            <IntroTitle> 안녕하세요 <br />
            프론트엔드 개발자를 꿈꾸는 <br/>
            이윤지 입니다. </IntroTitle>
            UX/UI에 관심이 많고 이를 위해 다양한 시도를 해보는것을 좋아합니다.<br />
            사용자에게 최고의 편의성과 즐거운 경험을 이끌어 주는 개발자가 되고싶습니다.
          </AboutMe>
         </Animator>
         <Animator animation={batch(Fade(), MoveIn(0, 1000))}>
          <Img src={process.env.PUBLIC_URL + "/img/emoj.png"} alt="" />
         </Animator> 
        </AboutMeWrap>
      </ScrollPage>      
     
        <SkillH2>SKILLS & TOOLS</SkillH2>
        
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
        <PjTitle>PROJECT</PjTitle>
        <ProjectWrap>
          <Project/>
        </ProjectWrap>

          {/* <Title>CONTACT</Title> */}
        <ContactWrap>
            {contactData.map(item => {
              return(
                <a href={item.link}>
                    <CircleWrap>
                      <Circle>{item.icon}</Circle>
                      <Span>{item.text}</Span>
                    </CircleWrap>
                  </a>
              )
            })} 

        </ContactWrap>
        <Footer>&copy;2022 Portfolio <br /> yoonzet703@gmail.com / Lee yoonji</Footer>
   </>
  );
}

export default App;