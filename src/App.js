import styled from "styled-components";
import './App.css';

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
const P = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
`
const AboutMeWrap = styled.div`
    height: 100vh;
`
const Title = styled.h1`
    color: #eee;
    font-size: 60px;
`
const AboutMe = styled.p`
    width: 60vw;
    max-width: 800px;
    color: #eee;
    font-size: 18px;
`


function App() {
  return (
    <div>
      <FirstPgWrap>
        <Keep>KEEP GOING</Keep>
        <P>멈추지 않는 개발자가 되겠습니다.</P>
      </FirstPgWrap>
      <AboutMeWrap>
        <Title>ABOUT ME</Title>
        <AboutMe>
        안녕하세요 저는 프론트엔드 개발자를 꿈꾸는 이윤지 입니다. <br />

프론트엔드 개발의 매력에 빠지게 된 계기는 uxui 디자인을 배우기 위해 학원에서 웹디자인과정을 배우게된 후 였습니다. 저의 예상과 다르게 학원에선 디자인수업보단 기술(html, css, js) 위주의 수업을 배우게 되었지만 오히려 제 손끝에서 UI로 구현되는 모습을 보며 더욱 코딩의 매력을 느끼게 되었습니다. Javascript으로 생각보다 많은 기능을 동적으로 구현 할 수있다는 것을 알게된 후 좀 더 깊이 있게 배우고 싶어 강의들을 따로 찾아 듣기 시작했습니다. 배울수록 흥미를 느끼며 진로에 대한 노선은 자연스럽게 프론트엔드로 향하게 되었습니다. 현재는 React에 관심을 갖고 공부를 하고 있습니다. 앞으로도 빠르게 변화하는 시대에 발맞춰 멈추지 않고 저의 역량을 키워나가겠습니다.
        </AboutMe>
      </AboutMeWrap>
      
    </div>
  );
}

export default App;
