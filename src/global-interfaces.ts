export interface RouteInterface {
  path: string;
  name: string;
  icon: string;
  showinSidebar:boolean;
  component: any;
  layout: string;
}

export interface LogoInterface {
  outterLink?: string;
  innerLink: string;
  imgAlt: string;
  imgSrc: string;
}

