import React from "react"

const ExampleComponent = ({show}) => {
  const componentClasses = ['example-component'];
  if (show) { componentClasses.push('show'); }
  
  return (
    <div className={componentClasses.join(' ')}>
      {this.props.children}
    </div>
  );
};

ExampleComponent.propTypes = {
  show: React.PropTypes.bool.isRequired
};

export default ExampleComponent;