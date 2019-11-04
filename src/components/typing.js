import React from "react";
import Slide from "react-reveal/Slide";

class SlideExample extends React.Component {
  render() {
    return (
      <div>
        <Slide left>
          {this.props.children}
        </Slide>
      </div>
    );
  }
}

export default SlideExample