import React, { Component } from 'react';

export default class WorkDetailsPatents extends Component {
  render() {
    const { project } = this.props;
    return (
      <section id={this.props.name}>
        <h5>{project.headline}</h5>
        <h6>I have been fortunate to have worked with some amazing engineers on these projects.</h6>
        <div className="row">
          <hr />
          <div className="col s12 m10 offset-m1">
            <h5>US9314976 B2</h5>
            <a  href="https://patents.google.com/patent/US9314976B2/en"
                target="_blank"
                rel="noopener noreferrer"
                className="work-link">
              See the Patent on Google Patents
            </a>
            <p><em>Systems and methods for compacting a charge of composite material</em></p>
            <p>
              <strong>Abstract:</strong> Systems and methods for compacting a charge of composite material. These systems and methods may utilize a vacuum compaction device to compact the charge of composite material on a supporting surface. The vacuum compaction device may be reusable and may be configured to define an enclosed volume when positioned on the supporting surface and may include a barrier structure and a sealing structure that is configured to form a fluid seal when compressed between the supporting surface and the barrier structure. The vacuum compaction device also may include a vacuum distribution manifold that is in fluid communication with and configured to selectively apply a vacuum to the enclosed volume. Application of the vacuum to the enclosed volume may decrease a pressure within the enclosed volume and transition the vacuum compaction device from an undeformed configuration to a deformed configuration, thereby compacting the charge of composite material on the supporting surface.
            </p>
            <h5>US9685306 B2</h5>
            <a  href=""
                target="_blank"
                rel="noopener noreferrer"
                className="work-link">
              See the Patent on Google Patents
            </a>
            <p><em>Ventilation systems for use with a plasma treatment system</em></p>
            <p>
              <strong>Abstract:</strong> A gas containment apparatus for use with an end effector including at least one plasma head includes at least one enclosing structure coupled to the end effector. The enclosing structure is configured to capture a gas produced by the at least one plasma head. The gas containment apparatus also includes a duct coupled to the at least one enclosing structure and configured to channel the gas from within the enclosing structure.
            </p>
            <h5>US9663247 B2</h5>
            <a  href=""
                target="_blank"
                rel="noopener noreferrer"
                className="work-link">
              See the Patent on Google Patents
            </a>
            <p><em>Systems, methods, and vacuum chucks for transferring flexible elongate bodies</em></p>
            <p>
              <strong>Abstract:</strong> Systems, methods, and vacuum chucks for transferring flexible elongate bodies are disclosed herein. The vacuum chucks include an elongate rigid support, a vertically oriented vacuum surface, a vacuum manifold, and a skirt seal. The systems include an elongate horizontal support structure, a transfer structure, a plurality of vertical linkages, which are operatively attached to the elongate horizontal support structure, and a plurality of vacuum chucks. Each of the plurality of vacuum chucks is operatively attached to a respective one of the plurality of vertical linkages. The methods include suspending an elongate horizontal support structure with a transfer structure, aligning each of a plurality of vacuum chucks with a respective portion of a vertical surface of a flexible elongate body, selectively actuating each of the plurality of vacuum chucks to retain the respective portion of the vertical surface of the flexible elongate body, and lifting the flexible elongate body.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
