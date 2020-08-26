import React, { Component } from "react";
import DjangoImg from "../img/language/django.png";
import JavaImg from "../img/language/java.png";
import ReactImg from "../img/language/React.png";
import ReactNativeImg from "../img/language/ReactNative.png";

const DivStyle = {
  margin: "20px",
};

const AvatarStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "70%",
  objectFit: "cover",
  overflow: "hidden",
};

const ImgType = (type) => {
  if (type === "Django") {
    return DjangoImg;
  } else if (type === "Java") {
    return JavaImg;
  } else if (type === "React") {
    return ReactImg;
  } else if (type === "ReactNative") {
    return ReactNativeImg;
  }
};

const Avatar = (args) => {
  const { type } = args;
  return (
    <div style={DivStyle}>
      <img src={ImgType(type)} style={AvatarStyle} />
    </div>
  );
};

export default Avatar;
