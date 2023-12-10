
import React from "react";
import AuthButtons from "./AuthButton";
import { loginWithFacebook, loginWithGithub, loginWithGoogle, loginWithMicrosoft, loginWithTwitter } from "../../Auth/helper";



function SocialLogin() {

  return (
    <div className={`w-96  z-50 inset-0 flex flex-col items-center  justify-center `}>
      <div className="w-full h-full flex flex-col items-center justify-center px-[10px] ">
        <AuthButtons
          AuthImage={"/fb.webp"}
          AuthName={"Sign in with Facebook"}
          providers_Name={"facebook"}
          onclick={loginWithFacebook}
        />
        <AuthButtons
          AuthImage={"/Logo_of_Twitter.svg.webp"}
          AuthName={"Sign in with Twitter"}
          providers_Name={"instagram"}
          onclick={loginWithTwitter}
        />
        <AuthButtons
          AuthImage={"/google.png"}
          AuthName={"Sign in with Google"}
          providers_Name={"google"}
          onclick={loginWithGoogle}
        />
        <AuthButtons
          AuthImage={"/gitwhite.png"}
          AuthName={"Sign in with Github  "}
          providers_Name={"github"}
          onclick={loginWithGithub}
        />
        <AuthButtons
          AuthImage={"/microsoft.png"}
          AuthName={"Sign in with Microsoft  "}
          providers_Name={"microsoft"}
          onclick={loginWithMicrosoft}
        />
      </div>
    </div>
  );
}

export default SocialLogin;

