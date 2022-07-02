
import { BsGithub } from "react-icons/bs";
import { IoCall, IoMailOutline,IoLogoHtml5,IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { DiJqueryLogo, DiGit } from "react-icons/di";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";


export const AboutMeData = [
  {
      title: 'name',
      description: '이윤지'
  },
  {
      title: 'Birth',
      description: '1995. 06. 17'
  },
  {
      title: 'Phone',
      description: '010.4527.4851'
  },
  {
      title: 'Email',
      description: 'yoonzet703@gmail.com'
  },
  // {
  //     title: 'blog ',
  //     link: 'https://jaylee-log.tistory.com/'
  // },
  // {
  //     title: 'Github',
  //     link: 'https://github.com/yoonzet'
  // },
]

// interface IEdu{
//   title: string, 
//   date: string, 
//   description:string
// }
// export const EduData:Array<IEdu> = [
//   {
//       title: '한밭대학교 시각디자인학과 졸업',
//       date: '2014-2019',
//       description:'디자인 전문지식을 갖추고 있어 협업시 웹디자이너와의 원활한 소통을 할 수 있다는 장점을 가지고 있습니다. 또한 개발자로서 사용자들을 위해 더 나은 UI/UX를 고민하고 연구하겠습니다.',
//   },
//   {
//       title: 'SBS컴퓨터 아카데미 웹디자인과정 수료',
//       date: '2021.09-2022.03',
//       description:'HTML5, CSS3, JS의 기본지식의 초석을 다졌으며 피그마, 반응형디자인 UI의 마크업과 git의 사용법 등을 익혔습니다',
//   },
//   {
//       title: '노마드코더 바닐라JS 챌린지 22기',
//       date: '2022.03',
//       description:'최종 졸업생 307명 중에서 우수졸업생(19명)으로 선정되었습니다.',
//   },
// ]



export const SkillsData = [
  {
    icon:<IoLogoHtml5/>, 
    name:'HTML',
  },
  {
    icon:<IoLogoCss3/>,
    name:'CSS3',
  },
  {
    icon:<IoLogoJavascript/>,
    name:'JavaScrips',
  },
  {
    icon:<SiTypescript/>,
    name:'TypeScript',
  },
  {
    icon:<IoLogoReact/>,
    name:'React',
  },
  {
    icon:<SiStyledcomponents/>,
    name:'Styled-components',
  },
  {
    icon:<DiGit/>,
    name:'Git',
  },
  {
    icon:<BsGithub/>,
    name:'Github',
  },
]

export const ProjectData = [
  // {
  //   img: "/img/portfolio.png",
  //   title:'Portfolio',
  //   description:`React기반 포트폴리오사이트입니다.`,
  //   skill: '[React, TypeScript] react-scroll-motion, styled-component',
  //   view:'https://yoonzet.github.io/portfolio2022/',
  //   github:'https://github.com/yoonzet/portfolio2022',
  // },
  {
    index:'01',
    img: "/img/Mock01.jpg",
    title:'Cocktail Recipe',
    description:`API를 이용하여 칵테일DB를 통해 칵테일의 레시피 정보를 제공하는 웹사이트 입니다. 로그인, 검색기능, 찜하기 기능 등을 구현하였습니다.`,
    base:'#React',
    skill: " #Hooks(useState, useEffect) #Router #firebase #Recoil #styled-component #Framer-motion",
    view:'https://yoonzet.github.io/cocktailRecipe/',
    github:'https://github.com/yoonzet/cocktailRecipe',
  },
  {
    index:'02',
    img: "/img/Mock02.jpg",
    title:'My wish list',
    description:`위시리스트를 관리할 수 있는 웹사이트 입니다. 생성/추가/수정/삭제, 바로가기 기능, 총 금액을 합산 할 수 있는 기능을 넣어 제작하였습니다.`,
    base:'#React/TypeScript ',
    skill: ' #Hooks(useSate, useRef) #Recoil #styled-component',
    view:'https://yoonzet.github.io/mywishlist/',
    github:'https://github.com/yoonzet/mywishlist',
  },
  {
    index:'03',
    img: "/img/Mock03.jpg",
    title:'플래너앱',
    description:`날씨정보 제공, 날짜/시간 기능, todo-list, 캘린더, d-day등 기능을 갖춘 플래너 앱입니다.`,
    base:'#JavaScript ',
    skill: '현재위치, 기온, 날씨 API를 이용한 정보제공, 로컬스토리지 저장',
    view:'https://yoonzet.github.io/chromApp/',
    github:'https://github.com/yoonzet/chromApp',
  },
  {
    index:'04',
    img: "/img/Mock04.jpg",
    title:'크리스피크림도넛 리뉴얼',
    description:`크리스피도넛 웹사이트를 리디자인하여 반응형으로 제작하였습니다. SCSS를 사용하였으며 자연스러운 애니메이션 효과를 넣어 동적인 UI마크업을 작업했습니다.`,
    base:'#Html, scss, jQuery ',
    skill: ' #미디어쿼리  #키프레임 #jQuery라이브러리(슬릭슬라이드, 풀페이지, 스크롤매직)',
    view:'https://yoonzet.github.io/krispykreme_dounut/',
    github:'https://github.com/yoonzet/krispykreme_dounut',
  },
]

interface IContact{
  icon: any,
  link?: string,
  text?: string,
}
export const contactData:Array<IContact> =[
  {
    icon:<BsGithub />,
    link:'https://github.com/yoonzet',
  },
  {
    icon:'blog',
    link:'https://jaylee-log.tistory.com/',
  },
  {
    icon:<IoCall />,
    link:'tel:010-4527-4851',
    text:'010.4527.4851',
  },
  {
    icon:<IoMailOutline />,
    link:'mailto:yoonzet703@gmail.com',
    text:'yoonzet703@gmail.com',
  },
]
