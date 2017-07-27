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
    return _.map(project.sections, section => {
      return (
        <div className="row flex-center" key={section.image.fileName}>
          <div className="col s8 offset-s2 m4">
            <img src={section.image.file} alt="ZNC-Logo" className="work-img" onClick={() => this.pickLightbox(section.image.fileName)}/>
          </div>
          <div className="col s12 m8">
            <h6>{section.headline}</h6>
            <p>{section.p}</p>
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
