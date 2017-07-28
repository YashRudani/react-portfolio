import _ from 'lodash';
import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

export default class WorkDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      currentImg: ''
    };
  }

  pickLightbox(img) {
    this.setState({
      isOpen: true,
      currentImg: img
    })
  }

  renderSections(project) {
    let count = 0;
    return _.map(project.sections, section => {
      let paragraphs = _.map(section.p, p => {
        count += 1;
        return (<p key={count}>{p}</p>);
      });
      return (
        <div className="row flex-center" key={section.image.fileName}>
          <div className="col s8 offset-s2 m4">
            <img src={section.image.file} id={section.image.fileName} alt={section.image.fileName} className="work-img" onClick={() => this.pickLightbox(section.image.fileName)}/>
          </div>
          <div className="col s12 m8">
            <h5>{section.headline}</h5>
            {paragraphs}
          </div>
        </div>
      );
    });
  }

  render() {
    const { project } = this.props;
    let images = {}
    _.mapValues(project.sections, section => {
      images[section.image.fileName] = section.image.file;
    });
    let { isOpen, currentImg } = this.state;
    return (
      <section id={this.props.name}>
        <h5>{project.headline}</h5>
        <a  href={project.link}
            target="_blank"
            rel="noopener noreferrer">
          {project.link}
        </a>
        {this.renderSections(project)}
        {isOpen &&
          <Lightbox
            mainSrc={images[currentImg]}
            onCloseRequest={() => this.setState({ isOpen: false })}/>
          }
      </section>
    );
  }
}
