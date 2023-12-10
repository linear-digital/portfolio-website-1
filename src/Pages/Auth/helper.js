import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, TwitterAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "./firebase.init";

const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider()
const github = new GithubAuthProvider()
const microsoft = new OAuthProvider('microsoft.com');
const apple = new OAuthProvider('apple.com');
const twitter = new TwitterAuthProvider();


export const loginWithGoogle = () => {
    signInWithPopup(auth, google)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            toast.error(errorCode)
        });
}

export const loginWithGithub = () => {
    signInWithPopup(auth, github)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            toast.error(errorCode)
        });
}
export const loginWithFacebook = () => {
    signInWithPopup(auth, facebook)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            toast.error(errorCode)
        });
}

export const loginWithMicrosoft = () => {
    signInWithPopup(auth, microsoft)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            toast.error(errorCode)
        });
}

export const loginWithTwitter = () => {
    signInWithPopup(auth, twitter)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            toast.error(errorCode)
        });
}
export const loginWithApple = () => {
    signInWithPopup(auth, apple)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            toast.error(errorCode)
        });
}