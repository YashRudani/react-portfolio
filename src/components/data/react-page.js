import reactLogo from '../../assets/img/work/react-logo.svg';
import balsamiq from '../../assets/img/work/balsamiq.png';
import gifMobile from '../../assets/img/work/gif-mobile.png';
import reduxLogo from '../../assets/img/work/redux-logo.png';

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
          fileName: 'Balsamiq',
          file: balsamiq
        },
        headline: "Technology Used for this Project",
        p:[
          "Balsamiq, React, ES6, Create React App, Heroku, React Router V4, Materialize-css, Sass, Webpack"
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
          fileName: 'Gif-Finder-Mobile',
          file: gifMobile
        },
        headline: "Introduction",
        p:[
          "To demonstrate my proficiency with Redux and handling Asynchronous JavaScript (AJAX) requests, I decided to build this toy app. Using the app, you can search for a new gif in realtime using the search bar at the top. Once you have decided on a search term, you can click the button at the button to fetch a new gif using that term. If you decided you want to see a gif from earlier you can use the back button to retrieve your history. Please have some fun playing around with it."
        ]
      },
      {
        image: {
          fileName: 'Redux-Logo',
          file: reduxLogo
        },
        headline: "Technology Used for this Project",
        p:[
          "React, Redux, React Router V4, ES6, GIHPY API, Axios, Redux-Thunk, Webpack, Heroku"
        ]
      }
    ]
  }
}
