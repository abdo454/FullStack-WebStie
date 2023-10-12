import React from "react";
import PropTypes from "prop-types"

class Info extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const title = this.props.title;
    const showTitle = true;
    return (
      <div>
        <h1>Management System</h1>
        <p>{showTitle ? title : ""}</p>
        <p>Insert new Student:</p>
      </div>
    );
  }
}
Info.defaultProps={
  title: "default"
};
Info.propTypes = {
  title: PropTypes.string,
};

export default Info;
