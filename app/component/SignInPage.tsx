"use client";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignInPage = () => {
  const router = useRouter();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      router.push("home");
    }
  };

  const validateForm = (): boolean => {
    !password ? setPasswordError(true) : setPasswordError(false);
    if (!email) {
      setEmailError(true);
      return false;
    }
    if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email)) {
      console.log("here");
      setEmailError(false);
    } else {
      setEmailError(true);
      return false;
    }
    return true;
  };

  return (
    <>
      <Image
        src="/images/KindImpact-logo-slogan.png"
        alt="KindImpact-logo"
        width={450}
        height={450}
        style={{ marginLeft: "auto", marginRight: "auto" }}
      />
      <Card
        sx={{
          minWidth: 500,
          maxWidth: 500,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 10,
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 px-20">
              <label className="text-center text-3xl font-bold">
                Log in with
              </label>

              <Button variant="outlined">
                <Link href="https://auth.singpass.gov.sg/main">
                  Login with Singpass
                </Link>
              </Button>
              <div className="flex content-center">
                <div className="grow">
                  <hr className="my-3" />
                </div>
                <div className="mx-2">OR</div>
                <div className="grow">
                  <hr className="my-3" />
                </div>
              </div>
              <TextField
                error={emailError}
                label="Email address*"
                // required
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                error={passwordError}
                label="Password*"
                // required
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button variant="contained" type="submit">
                Log in
              </Button>
              <div className="flex flex-col gap-1">
                <Link href="#" className="text-center text-blue-700">
                  Forgot password?
                </Link>
                <div className="flex content-center">
                  <div className="grow">
                    <hr className="my-3" />
                  </div>
                  <div className="mx-2">OR</div>
                  <div className="grow">
                    <hr className="my-3" />
                  </div>
                </div>
                <Link href="#" className="text-center text-blue-700">
                  Sign up for an account
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default SignInPage;
