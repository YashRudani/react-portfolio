import zncLogo from '../../assets/img/work/znc-logo.png';
import zncSite from '../../assets/img/work/znc-website.png';

export const reactPage = {
  rootPath: "react",
  title: "React.JS",
  subtitle: "Front-End Development and Deployment of Lightweight Apps",
  buttons: [
    {
      name: "Portfolio",
      path: "portfolio"
    },
    {
      name: "Gif Search App",
      path: "gifs"
    }
  ]
}
export const reactProjects = {
  "portfolio":  {
    headline: "This Website!",
    links: [
      {
        link: "https://github.com/davisk4rpi/react-portfolio",
        linkName: "Check out the source code on GitHub"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'znc-logo',
          file: zncLogo
        },
        headline: "Introduction",
        p:[
          "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
        ]
      },
      {
        image: {
          fileName: 'znc-site',
          file: zncSite
        },
        headline: "Technology Used for this Project",
        p:[
          "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
        ]
      }
    ]
  },
  "gifs":  {
    headline: "Gif Finder",
    links: [
      {
        link: "http://www.zuzekandco.com/",
        linkName: "Check out the live website"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'znc-logo',
          file: zncLogo
        },
        headline: "Introduction",
        p:[
          "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
        ]
      },
      {
        image: {
          fileName: 'znc-site',
          file: zncSite
        },
        headline: "Technology Used for this Project",
        p:[
          "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
        ]
      }
    ]
  }
}
