import uw from '../../assets/img/work/registrar/UW_logo.png';
import before from '../../assets/img/work/registrar/registrar-before.png';
import research from '../../assets/img/work/registrar/research-overview.png';
import steven from '../../assets/img/work/registrar/steven-student.png';
import paper from '../../assets/img/work/registrar/paper-prototype.png';
import mid from '../../assets/img/work/registrar/mid-fidelity-prototype.png';
import result from '../../assets/img/work/registrar/final-prototype.png';

import laudSocial from '../../assets/img/work/laud_social/laud_social_logo.png';
import planning from '../../assets/img/work/laud_social/planning.png';
import findings from '../../assets/img/work/laud_social/findings.png';
import testing from '../../assets/img/work/laud_social/testing.png';
import analyzingResults from '../../assets/img/work/laud_social/analyzing-results.png';


export const usabilityPage = {
  rootPath: "usability",
  title: "User-Centered Design",
  subtitle: "Usability Testing & Design from the University of Washington",
  buttons: [
    {
      name: "Laud Social",
      path: "laud_social"
    },
    {
      name: "Office of the Registrar",
      path: "registrar"
    }
  ],
  projects: [
    {
      headline: "Laud Social - Usability Studies"

    },
    {
      headline: "Office of the Registrar - Re-Design"
    }
  ]
}

export const usabilityProjects = {
  "registrar":  {
    headline: "Office of the Registrar Website Redesign",
    links: [
      {
        link: "http://davisk4rpi.github.io/uw_registrar/index.html",
        linkName: "Check out our prototype, hosted by GitHub"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'UW-Logo',
          file: uw
        },
        headline: "Background",
        p:[
          "*Since the prototype is limited, I suggest pretending that you are a student looking for their Dean's Letter or an instructor trying to change a student's grade. According to Google Analytics and our surveys, these were the most common user needs.",
          "For my User-Centered Web Design course at the University of Washington, I was assigned a team and we were asked to find websites with poor usability, contact the key stakeholders, and redesign the site. For this project, my primary role was as a developer/designer, but since it was a school project, I was involved with every step of the project. This was my first ever project utilizing HTML/CSS.",
          "We delivered our final prototype to the Office of the Registrar at the completion of the class. Due to time constraints we were unable to completely build the new website. Since the completion of this project, the Registrar has implemented a new website design which includes some of our recommendations."
        ]
      },
      {
        image: {
          fileName: 'Before-Image',
          file: before
        },
        headline: "A Look at the Original Website",
        p:[
          "The original Office of the Registrar’s website was outdated and poorly managed. As seen in the above pictures the design was inconsistent from page to page. Non obvious and technical language was in use all over the site. There was too much information all over that could be found more easily on other university websites."
         ]
      },
      {
        image: {
          fileName: 'Research-Overview',
          file: research
        },
        headline: "User Research",
        p:[
          "After studying the Google Analytics for the existing site, we looked at other top universities' registrar websites to identify existing best practices. We then developed a survey to be completed by current user's of the website. We also interviewed several user's from each of our intended user groups. For both the surveys and interviews, we were careful to not include any leading questions in order to get the least biased responses. Interestingly, our desired users were unfamiliar the Office of the Registrar and didn't even realize that they had been using the site already."
         ]
      },
      {
        image: {
          fileName: 'Persona Example',
          file: steven
        },
        headline: "Generating Personas",
        p:[
          "All of the information we collected was used to create personas.",
          "We created 3 personas to simply categorize 90%+ of our users. Based on our research we applied appropriate quantitative and qualitative metrics to each group. These 3 Personas (Student, International Student, and Faculty/Staff), were heavily relied upon during the design and prototyping phases."
        ]
      },
      {
        image: {
          fileName: 'Paper-Prototype-Image',
          file: paper
        },
        headline: "Design/Paper Prototyping",
        p:[
          "With the bulk of our research completed, we hosted a card sorting exercise and designed our site's architecture. After we drafted the general architecture, we sketched dozens of potential designs. From those sketches we extracted the best parts and created a few paper prototypes. These low fidelity prototypes were field tested and we were ready to move on to our first digital prototype."
        ]
      },
      {
        image: {
          fileName: 'Mid-Fidelity-Image',
          file: mid
        },
        headline: "Initial Digital Prototyping",
        p:[
          "Using Axure we created mid fidelity wire-frame with what we learned from the paper prototypes. This prototype was then user tested for a set of common scenarios and tasks. Several major usability issues were addressed after testing and much of the design made it into the team's final deliverable."
        ]
      },
      {
        image: {
          fileName: 'Result-Image',
          file: result
        },
        headline: "The Final Result, a High Fidelity HTML Protoype",
        p:[
          "As the lead developer for the project, I used HTLM/CSS and Bootstrap to create our final project deliverable. I created enough of the website to perform testing for our main use cases and to act as a template for the completion of the website.",
          'Some key improvements from the original site are: Designed a more aesthetically pleasing interface; Reduced the top level navigation to eliminate information overload; Use of actionable and simple language to avoid confusion due to misunderstanding of terminology; Highlighted the mostimportant tasks for each user in their respective "How Do I" sections.'
        ]
      }
    ]
  },
  "laudSocial":  {
    headline: "Laud Social Usability Studies",
    links: [
      {
        link: "http://www.laudsocial.com/",
        linkName: "Check out our Laud Social's Website"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'Laud-Social-Logo',
          file: laudSocial
        },
        headline: "Background",
        p:[
          "**Disclaimer - Laud Social has gone through some drastic changes since this project's completion.",
          "For my Usability Studies course at the University of Washington I was tasked with designing and moderating a usability study for a local business. We were instructed to contact the business owners and work with them throughout the process. At the end of the course we were to submit our findings and provide recommendations. My team chose Laud Social.",
          "Laud Social is a social media marketing tool for small business owners or any social media managers. The iPhone app relies on complimentary businesses to collaborate and cross promote each other. The app caters to both the casual social media manager as well as the professional marketer that manages multiple brands simultaneously. Check out their website for more information.",
          "At the end of the course, we presented our results to the key stakeholders and submitted a formal report. We made a several suggested improvements which were included in the next version. The app is still in beta testing, but you can request a demo from their website."
        ]
      },
      {
        image: {
          fileName: 'Planning',
          file: planning
        },
        headline: "Meeting With Stakeholders and Designing the Tests",
        p:[
          "To kickoff the project we scheduled a meeting with the co-founders to learn more about their product and goals. They told us about their target users and we were given the opportunity to try the app.",
          "After trying the app we designed our testing protocol. We created several scenarios each with a series of tasks to be performed. We also created a screening survey to help find our participants. In the end we tested 3 user groups: novice, intermediate, and expert social media managers."
        ]
      },
      {
        image: {
          fileName: 'Testing',
          file: testing
        },
        headline: "Performing the Tests",
        p:[
          "For our testing, we used a private room with a casual atmosphere. We used a GoPro to record our testing and also to live stream the testing to our stakeholders in another room. During the testing we alternated roles as moderator and note taker."
        ]
      },
      {
        image: {
          fileName: 'Analyzing-Results',
          file: analyzingResults
        },
        headline: "Analyzing the Results",
        p:[
          "After testing was complete we reviewed our notes and watched the recordings, extracting all the useful information. We used several different methods of organizing the data to find commonality and identify the major issues."
        ]
      },
      {
        image: {
          fileName: 'Findings',
          file: findings
        },
        headline: "Results",
        p:[
          "Since the app was still in its infancy, some of the biggest issues could be attributed to buggy programming and not the design. There were, however, issues with some of the feature interactions resulting in incomplete tasks during testing. Also, some terminology refinement was necessary as some of the participants were unfamiliar with the labeling of features."
        ]
      }
    ]
  }
}
