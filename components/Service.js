import React from "react";

class Service extends React.Component {
  render() {
    let imageClass = "Service.svg";
    if (this.props.mode === "white")
    {
      imageClass = "White_" + imageClass;
    }

    if (this.props.mode === "hover")
    {
      imageClass = "BrightMode" + imageClass;
    }

    return (
      <a
        className={"ServiceIcon " + this.props.type}
        href={"/Service/" + this.props.type}
      >
        <img
          src={"/service_icon/" + this.props.type + imageClass}
          alt={this.props.type + " Service"}
        />
        {this.props.text}
      </a>
    );
  }
}

export default Service;
