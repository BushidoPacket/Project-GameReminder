import { useState, useEffect } from "react";
import games from "../games.json";

export const AddGame = () => {
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [release, setRelease] = useState("");
  const [company, setCompany] = useState("");

  function nameHandler(e) {
    setName(e.target.value);
  }
  function platformHandler(e) {
    setPlatform(e.target.value);
  }
  function releaseHandler(e) {
    setRelease(e.target.value);
  }
  function companyHandler(e) {
    setCompany(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log("success");
    const newGame = {
      name: name,
      platform: platform,
      release: release,
      company: company,
    };

    //TODO : Add to existing json
    console.log(newGame);
  }

  return (
    <>
      <div>
        <input placeholder="Game Title" onChange={nameHandler}></input>
        <br />
        <input placeholder="Platform" onChange={platformHandler}></input>
        <br />
        <input placeholder="Release Date" onChange={releaseHandler}></input>
        <br />
        <input placeholder="Company" onChange={companyHandler}></input>
        <br />
        <button onClick={submitHandler}>SUBMIT</button>
      </div>
    </>
  );
};
