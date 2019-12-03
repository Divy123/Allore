import React from "react";
import { Link } from "react-router-dom";
import "./Batch.css";
import ProfilePicSvg from "../../assets/img/misc/profile_pic_svg.svg";

const AlumnusCard = props => {
  return (
    <span title={props.title}>
      <img
        src={props.imgSrc ? props.imgSrc : ProfilePicSvg}
        className="batch-alumnus-profile-pic"
        title={props.name}
        alt={props.name}
      />
      <p className="center">
        <Link
          to={`/profile/${props.college_email.replace("@iiitl.ac.in", "")}`}
        >
          {props.name}
        </Link>
      </p>
    </span>
  );
};

export default AlumnusCard;
