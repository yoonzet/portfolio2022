
import { BsGithub } from "react-icons/bs";
import { IoCall, IoMailOutline,IoLogoHtml5,IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { DiJqueryLogo, DiGit } from "react-icons/di";
import { SiStyledcomponents, SiTypescript } from "react-icons/si";


export const AboutMeData:{text: string} = {
  text:'손끝에서 부터 만들어지는 코드가 화면에 UI로 구현되는 모습을 보며 매력을 . Javascript으로 생각보다 많은 기능을 동적으로 구현할 수 있다는 것을 알게 된 후 좀 더 깊이 있게 배우고 싶어 강의들을 따로 찾아 듣기 시작했습니다. 배울수록 기능구현에 대한 성취감과 흥미를 느끼게 되었고 어느새 진로에 대한 노선은 자연스럽게 프론트엔드로 향하게 되었습니다. 현재는 React에 관심을 갖고 공부를 하고 있으며 다른 프레임 워크(vue 등)도 배울 계획을 갖고 있습니다.'
}

interface IEdu{
  title: string, 
  date: string, 
  description:string
}
export const EduData:Array<IEdu> = [
  {
      title: '한밭대학교 시각디자인학과 졸업',
      date: '2014-2019',
      description:'디자인 전문지식을 갖추고 있어 협업시 웹디자너와의 원활한 소통을 할 수 있다는 장점을 가지고 있습니다. 또한 개발자로서 사용자들을 위해 더 나은 UI/UX를 고민하고 연구하겠습니다.',
  },
  {
      title: 'SBS컴퓨터 아카데미 웹디자인과정 수료',
      date: '2021.09-2022.03',
      description:'HTML5, CSS3, JS의 기본지식의 초석을 다졌으며 피그마, 반응형디자인 UI의 마크업과 git의 사용법 등을 익혔습니다',
  },
  {
      title: '노마드코더 바닐라JS 챌린지 22기',
      date: '2022.03',
      description:'최종 졸업생 307명 중에서 우수졸업생(19명)으로 선정되었습니다.',
  },
]

interface ISkills{
  icon: any,
  name: string
}

export const SkillsData: Array<ISkills> = [
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
    icon:<DiJqueryLogo/>,
    name:'jQuery',
  },
  {
    icon:<IoLogoReact/>,
    name:'React',
  },
  {
    icon:<SiTypescript/>,
    name:'TypeScript',
  },
  {
    icon:<DiGit/>,
    name:'Git',
  },
  {
    icon:<BsGithub/>,
    name:'Github',
  },
  {
    icon:<SiStyledcomponents/>,
    name:'Styled-components',
  },
]

interface IProject{
  img: string,
  title: string,
  description: string,
  view: string,
  github: string 
}
export const ProjectData:Array<IProject> = [
  {
    img: "/img/portfolio.png",
    title:'Portfolio',
    description:`React기반 포트폴리오사이트입니다.`,
    view:'https://yoonzet.github.io/portfolio2022/',
    github:'https://github.com/yoonzet/portfolio2022',
  },
  {
    img: "/img/cocktail.png",
    title:'Cocktail Recipe',
    description:`API를 활용하여 다양한 칵테일레시피를 제공하는 React기반 반응형 웹사이트 입니다.`,
    view:'https://yoonzet.github.io/cocktailRecipe/',
    github:'https://github.com/yoonzet/cocktailRecipe',
  },
  {
    img: "/img/planer.png",
    title:'플래너앱',
    description:`JavaScript를 이용하여 만든 플래너앱입니다.`,
    view:'https://yoonzet.github.io/chromApp/',
    github:'https://github.com/yoonzet/chromApp',
  },
  {
    img: "/img/krispy.png",
    title:'크리스피크림도넛 리뉴얼',
    description:`크리스피크림도넛 웹사이트를 리뉴얼한 반응형 사이트 입니다.`,
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
