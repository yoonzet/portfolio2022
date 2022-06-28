import { forwardRef } from "react";
import { AboutMeData } from "./Data";

const AboutMe = forwardRef<HTMLDivElement> ((props, ref) => {
    return(
    <div className="aboutMe" ref={ref}>
        <div className="introduceWrap">
            <div className="imgWrap">
                <img src={process.env.PUBLIC_URL + "/img/emoji.png"} alt="" />
            </div>
            <div className="txtWrap">
                <h1> 안녕하세요. 이윤지 입니다. </h1>
                <p className="introduce">
                    저는 한 번 시작한 일은 끝을 맺어야 한다는 생각으로 <strong> 해결이 될 때까지 몰입하는 편입니다. </strong>이러한 끈기로 문제해결 과정에서 새로운 지식 습득과 성취감을 느끼며 성장할 수 있었습니다. 또한 저는 디자인을 전공하였기 때문에 <strong>UI/UX에도 관심이 많습니다.</strong> 인터렉티브한 모션 구현에도 욕심을 가지고 있으며 시도해보는 것을 좋아합니다. 사용자와 제일 가까이 마주해야 하는 분야이기 때문에 저의 감각은 분명 도움이 되리라 생각합니다.
                </p>
            </div>            
        </div>     
        <div className="profileWrap">
             <div className="circle">
                <div className="circle-dotted"></div>
                {AboutMeData.map(item => {
                    return(
                        <ul>
                            <li><b>{item.title}</b></li>
                            <li>{item.description}</li>
                        </ul>
                    )
                })}
                <div className="btn">
                    <a href="https://jaylee-log.tistory.com/"><p>blog</p></a>
                    <a href="https://github.com/yoonzet"><p>Github</p></a>
                </div>
             </div>
        </div>       
    </div>
    )
    
   });

export default AboutMe;