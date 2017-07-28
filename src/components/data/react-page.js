import reactLogo from '../../assets/img/react-logo.svg';
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
          fileName: 'React-Logo',
          file: reactLogo
        },
        headline: "Introduction",
        p:[
          "For this site I wanted to demonstrate my ability to work with React.JS. If you look at the code on GitHub, you can see that I utilized many modern coding techniques. I have kept the code lean by implementing a reusable components. This has also helped keep design consistency throughout the site. I use javascript ojects to store the content for these work pages. I have even employed static routing to allow for server-side-rendering of the pages."
        ]
      },
      {
        image: {
          fileName: 'znc-site',
          file: zncSite
        },
        headline: "Technology Used for this Project",
        p:[
          "Balsamiq, React, Create React App, Heroku, React Router V4, Materialize-css, Sass, Webpack"
        ]
      }
    ]
  },
  "gifs":  {
    headline: "Gif Finder",
    links: [
      {
        link: "https://davis-gifs.herokuapp.com/",
        linkName: "Check out the live app on Heroku"
      },
      {
        link: "https://github.com/davisk4rpi/gif-generator",
        linkName: "Check out the code on GitHub"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'znc-logo',
          file: reactLogo
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
