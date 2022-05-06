
import { BsGithub } from "react-icons/bs";
import { IoCall, IoMailOutline,IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { DiJqueryLogo, DiGit } from "react-icons/di";
import { SiStyledcomponents } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";


export const AboutMeData:{text: string} = {
  text:'프론트엔드 개발의 매력에 빠지게 된 계기는 uxui 디자인을 배우기 위해 학원에서 웹디자인과정을 배우게된 후 였습니다. 저의 예상과 다르게 학원에선 디자인수업보단 기술(html, css, js) 위주의 수업을 배우게 되었지만 오히려 제 손끝에서 UI로 구현되는 모습을 보며 더욱 코딩의 매력을 느끼게 되었습니다. Javascript으로 생각보다 많은 기능을 동적으로 구현 할 수있다는 것을 알게된 후 좀 더 깊이 있게 배우고 싶어 강의들을 따로 찾아 듣기 시작했습니다. 배울수록 흥미를 느끼게 되었고 어느새 진로에 대한 노선은 자연스럽게 프론트엔드로 향하게 되었습니다. 현재는 React에 관심을 갖고 공부를 하고 있습니다. 앞으로도 빠르게 변화하는 시대에 발맞춰 멈추지 않고 저의 역량을 키워나가겠습니다.'
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
      description:'그래픽 툴을 잘 다루며, 디자인 전문지식을 갖추고 있어 협업시 웹디자너와의 원활한 소통을 할 수 있다는 장점을 가지고 있습니다. 또한 개발자로서 더 나은 UI를 위해 고민하고 연구하겠습니다.',
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
    icon:<AiFillHtml5/>,
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
    img: "/img/cocktail.png",
    title:' ',
    description:`React를 사용하여 만든 웹사이트입니다.`,
    view:'https://yoonzet.github.io/cocktailRecipe/',
    github:'https://github.com/yoonzet/cocktailRecipe',
  },
  {
    img: "/img/cocktail.png",
    title:'Cocktail Recipe',
    description:`API를 활용하여 다양한 칵테일레시피를 제공하는 반응형 웹사이트 입니다.`,
    view:'https://yoonzet.github.io/cocktailRecipe/',
    github:'https://github.com/yoonzet/cocktailRecipe',
  },
  {
    img: "/img/cocktail.png",
    title:'플래너앱',
    description:`JavaScript를 이용하여 만든 플래너앱입니다.`,
    view:'https://yoonzet.github.io/cocktailRecipe/',
    github:'https://github.com/yoonzet/cocktailRecipe',
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
    icon:'B',
    link:'https://jaylee-log.tistory.com/',
  },
  {
    icon:<IoCall />,
    link:'tel:010-4527-4851',
    text:'010-4527-4851',
  },
  {
    icon:<IoMailOutline />,
    text:'yoonzet703@gmail.com',
  },
]