import zncLogo from '../../assets/img/work/znc-logo.png';
import zncSite from '../../assets/img/work/znc-website.png';
import oldPortfolio from '../../assets/img/work/old-portfolio.png';
import rails from '../../assets/img/work/rails.png';
import chess from '../../assets/img/work/ruby/chess.png';
import connectFour from '../../assets/img/work/ruby/connect_four.png';
import mastermind from '../../assets/img/work/ruby/mastermind.png';
import ruby from '../../assets/img/work/ruby/ruby.png';

export const railsPage = {
  rootPath: "rails",
  title: "Ruby on Rails",
  subtitle: "Freelance Full-Stack Web Development and Product Management",
  buttons: [
    {
      name: "Zuzek & Company",
      path: "znc"
    },
    {
      name: "Old Portfolio",
      path: "portfolio"
    },
    {
      name: "Pure Ruby",
      path: "ruby"
    }
  ]
}

export const railsProjects = {
  "znc":  {
    headline: "Zuzek & Company (ZNC) Website",
    links: [
      {
        link: "http://www.zuzekandco.com/",
        linkName: "Check out the live website"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'ZNC-Logo',
          file: zncLogo
        },
        headline: "Introduction",
        p:[
          "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
        ]
      },
      {
        image: {
          fileName: 'ZNC-Site',
          file: zncSite
        },
        headline: "Technology Used for this Project",
        p: [
          "Ruby on Rails, Postgres, ActionDispatch, Instagram API, Figaro, Heroku, Materialize-CSS, Sass, Ahoy Matey, Devise, Spree Commerce"
        ]
      }
    ]
  },
  "portfolio":  {
    headline: "My Previous Portfolio Site",
    links: [
      {
        link: "http://www.zuzekandco.com/",
        linkName: "Check out the live website"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'Rails-Logo',
          file: rails
        },
        headline: "Introduction",
        p:[
          "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
        ]
      },
      {
        image: {
          fileName: 'Rails-Portfolio',
          file: oldPortfolio
        },
        headline: "Technology Used for this Project",
        p:[
          "Ruby on Rails, Materailize-CSS, Heroku, Sass"
        ]
      }
    ]
  },
  "ruby":  {
    headline: "Pure Ruby Algorithms & Games",
    links: [
      {
        link: "https://github.com/davisk4rpi",
        linkName: "Checkout my GitHub profile to see some code"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'Ruby-Logo',
          file: ruby
        },
        headline: "Background",
        p:[
          "I began my journey to become a web developer with Python. But, by scouring the web for learning resources, I came across The Odin Project.",
          "At first, I merely switched to Ruby because of The Odin Project's fantastically deep and diverse coursework, but I quickly developed a fondness for the language. Ruby has been my general-purpose language of choice since."
        ]
      },
      {
        image: {
          fileName: 'Chess',
          file: chess
        },
        headline: "Chess",
        p:[
          "My most complex pure Ruby project is a command line version of Chess. This particular project demonstrates much of what I can do with pure Ruby.",
          "Object-Oriented Programing, Modularization of Code, Object Inheritance, Test-Driven Development, Serialization (For Saving Games), Recursion (Determining Check/Checkmate)"
        ]
      },
      {
        image: {
          fileName: 'Connect-Four',
          file: connectFour
        },
        headline: "Connect Four",
        p:[
          "Although it's simpler game than chess, Connect Four was another useful project. For this project, there was a focus on Test-Driven Development and Object-Oriented Programing. Both Chess and Connect Four allowed me to work with complex data structures to determine win conditions.",
        ]
      },
      {
        image: {
          fileName: 'Mastermind',
          file: mastermind
        },
        headline: "Mastermind",
        p:[
          "One of my simpler Ruby projects was to create a command line version of Mastermind. For this project, there was a focus on Object-Oriented Programming. I also created a weak AI to play with."
        ]
      }
    ]
  }
}
