"use client";
import { useState } from "react";
import MainMenu from "./component/main-menu";
import SignInPage from "./component/SignInPage";

export default function Home() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      {isSignedIn ? <MainMenu /> : <SignInPage setIsSignedIn={setIsSignedIn} />}
    </>
  );
}
