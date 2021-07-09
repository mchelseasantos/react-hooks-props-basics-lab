import React from "react";

function About(props) {
  console.log(props)
  let bio;
  if ("bio" in props && props.bio.length > 0 ){ 
    bio=<p>{props.bio}</p>
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={props.links["github"]}>{props.links["github"]}</a>
      <a href={props.links["linkedin"]}>{props.links["linkedin"]}</a>
      
    </div>
  );
}

export default About;
