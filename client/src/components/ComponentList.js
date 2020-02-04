import React from "react";
import { Link } from "react-router-dom";

const ComponentList = props => {
  return (
    <div>
      {props.components.map(component => {
        return (
          <div key={component._id}>
            <h3>
              <Link to={`/components/${component._id}`}>{component.name}</Link>
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default ComponentList;
