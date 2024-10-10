import React, { Dispatch, SetStateAction } from "react";

const SignInPage = ({
  setIsSignedIn,
}: {
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = () => {
    setIsSignedIn(true);
  };
  return (
    <>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>spacing</h1>
      <h1>Sign in page</h1>
      <button onClick={handleClick}>click here</button>
    </>
  );
};

export default SignInPage;
