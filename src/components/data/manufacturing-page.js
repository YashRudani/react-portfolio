import boeingLogo from '../../assets/img/work/boeing/boeing_logo.png';
import plane from '../../assets/img/work/boeing/plane-dwg.png';

export const manufacturingPage = {
  rootPath: "manufacturing",
  title: "Composites Manufactuing",
  subtitle: "Leading Edge Composite Fabrication Technology Development",
  buttons: [
    {
      name: "Python Experimentation",
      path: "python"
    },
    {
      name: "Composites",
      path: "composites"
    },
    {
      name: "Patents & Innovation",
      path: "patents"
    }
  ]
}

export const manufacturingProjects = {
  "python":  {
    headline: "Efficient Data Crunching with Python",
    links: [],
    sections: [
      {
        image: {
          fileName: 'Boeing-Logo',
          file: boeingLogo
        },
        headline: "Working Python into my work responsibilities",
        p:[
          "I began teaching myself Python to transition into web development. I quickly realized that I could take what I was learning and apply it to my day job. I began by automating data crunching tasks that previously I had to do 'by hand' in Excel. Soon I was coding everyday building apps to support my team's work.",
          "I designed and implemented python program eliminating 100s of hours of repetitive labor processing csv files. Built a GUI and froze the code as .exe to allow for use on all lab computers.",
          "I also designed and built a web based calculator for drill motor component parts. Used HTML/CSS and Javascript/jQuery UI to create a simple and clear interface for shop use."
        ]
      }
    ]
  },
  "composites":  {
    headline: "My Previous Portfolio Site",
    links: [
      {
        link: "http://www.boeing.com/",
        linkName: "www.boeing.com"
      }
    ],
    sections: [
      {
        image: {
          fileName: 'boeing-logo',
          file: boeingLogo
        },
        headline: "Program Management",
        p:[
          "Managed a team of 8 engineers and technicians developing a robotic extrusion process. Coordinated with multiple teams and the key stakeholders to set proper milestones to ultimately prove technology readiness for production.",
          "Lead Lab Optimization Team to develop and institute lean practices such as using visual controls to reduce overhead associated with consumable material resupply. Also implemented user friendly procedures for clean-as-you-go resulting in better lab space utilization and nearly eliminating lab maintenance overhead.",
          "Managed a team of 6 senior engineers on a $16M full scale manufacturing demonstration which we completed on time despite starting a month later than expected and late additions of new features by the customer."
        ]
      },
      {
        image: {
          fileName: 'Plane-Diagram',
          file: plane
        },
        headline: "Manufacturing Design",
        p:[
          "Designed and developed new technologies that resulted in 6 submissions to the US Patent Office (1 awarded 5 pending) and 7 Boeing invention awards.",
          "Designed processes and equipment spanning multiple technology domains from material handling and manipulation to robotics and additive manufacturing.",
          "Used Solidworks to design dozens of 3D printed parts to be used on production equipment and various research projects."
        ]
      }
    ]
  },
  "patents":  {
    headline: "Granted United States Patents",
  }
}
