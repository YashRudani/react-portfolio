import zncLogo from '../../assets/img/work/znc-logo.png';
import zncSite from '../../assets/img/work/znc-website.png';
import oldPortfolio from '../../assets/img/work/old-portfolio.png';
import rails from '../../assets/img/work/rails.png';
import chess from '../../assets/img/work/ruby/chess.png';
import connectFour from '../../assets/img/work/ruby/connect_four.png';
import mastermind from '../../assets/img/work/ruby/mastermind.png';
import ruby from '../../assets/img/work/ruby/ruby.png';

export const railsPage = {
  title: "Ruby on Rails",
  subtitle: "Freelance Full-Stack Web Development and Product Management",
  buttons: [
    {
      name: "Zuzek & Company",
      path: "/rails/znc"
    },
    {
      name: "Old Portfolio",
      path: "/rails/portfolio"
    },
    {
      name: "Pure Ruby",
      path: "/rails/ruby"
    }
  ]
}

export const railsProjects = {
  znc:  {
    headline: "Zuzek & Company (ZNC) Website",
    link: "http://www.zuzekandco.com/",
    sections: [
      {
        image: {
          fileName: 'ZNC-Logo',
          file: zncLogo
        },
        headline: "Introduction",
        p: "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
      },
      {
        image: {
          fileName: 'ZNC-Site',
          file: zncSite
        },
        headline: "Technology Used for this Project",
        p: "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
      }
    ]
  },
  portfolio:  {
    headline: "My Previous Portfolio Site",
    link: "http://www.zuzekandco.com/",
    sections: [
      {
        image: {
          fileName: 'Rails-Logo',
          file: rails
        },
        headline: "Introduction",
        p: "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
      },
      {
        image: {
          fileName: 'Rails-Portfolio',
          file: oldPortfolio
        },
        headline: "Technology Used for this Project",
        p: "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
      }
    ]
  },
  ruby:  {
    headline: "Pure Ruby Algorithms & Games",
    link: "http://www.zuzekandco.com/",
    sections: [
      {
        image: {
          fileName: 'Ruby-Logo',
          file: ruby
        },
        headline: "Background",
        p: "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
      },
      {
        image: {
          fileName: 'Chess',
          file: chess
        },
        headline: "Chess",
        p: "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
      },
      {
        image: {
          fileName: 'Connect-Four',
          file: connectFour
        },
        headline: "Connect Four",
        p: "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
      },
      {
        image: {
          fileName: 'Mastermind',
          file: mastermind
        },
        headline: "Mastermind",
        p: "In February 2017 I was contacted by the founders of Zuzek & Company and asked to build them a website. Since then I have built them a company website from the ground up. I took on the role of Lead Developer and Product Manager and continue to support this project. As the product owner, I have been involved any every step of the build process: Design, Content Writing, Back-End & Front-End Development, Testing, and Project Management."
      }
    ]
  }
}
