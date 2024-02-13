//  icons
import {
  FiFacebook,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { FaLinkedin } from "react-icons/fa";

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Shoes from './assets/shoes.png'
import Ecom from './assets/ecom.png'
import Port from './assets/port.png'
import Food from './assets/food.png'
import Heade from './assets/heade.png'
// import Project1 from './assets/img/projects/p1.webp';
// import Project2 from './assets/img/projects/p2.webp';
// import Project3 from './assets/img/projects/p3.webp';
// import Project4 from './assets/img/projects/p4.webp';
// import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import Rano from './assets/Svra.jpg'
// import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
// import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiFacebook />,
    href: 'https://www.instagram.com/prince_of_rathore_7773/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/prince_of_rathore_7773/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/bipinsinhrathod',
  },
  {
    icon: <FaLinkedin/>,
    href: 'https://www.linkedin.com/in/bipinsinh-rathore-1b7a89195/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: 'https://www.freelancer.in/u/bipinsinh',
  },
  {
    img: UpworkBrandIcon,
    href: 'https://www.upwork.com/freelancers/~011709508b2ae95738#',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Shoes,
    name: 'Your Shoes.',
    category: 'web development',
  },
  {
    id: '2',
    image: Ecom,
    name: 'Shopiii.',
    category: 'web development',
  },
  {
    id: '3',
    image: Port,
    name: 'My Portfolio',
    category: 'UI/UX design',
  },
  {
    id: '4',
    image: Food,
    name: 'Food Wale',
    category: 'web development',
  },
  {
    id: '5',
    image: Heade,
    name: 'HeadPhones',
    category: 'UI/UX design',
  },
  {
    id: '6',
    image: Project6,
    name: 'project name 6',
    category: 'web development',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'As a web designer, I combine creativity with technical expertise to transform concepts into stunning, user-friendly interfaces.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Web development is the art and science of creating dynamic and interactive websites and web applications that serve various purposes and cater to diverse audiences.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Branding is more than just a logo or a tagline; its the essence of your business identity.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Search Engine Optimization (SEO) is the process of enhancing a websites visibility and ranking on search engine results pages (SERPs) to drive organic, targeted traffic.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: Rano,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg:TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: Rano,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at :- bipinsinhrathod2710@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Gota, Ahmedabad',
    description: 'Serving clients worldwide',
  },
];
