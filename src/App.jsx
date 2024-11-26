import "./App.css";
import "./config.mjs";
import googleIcon from "../src/assets/google.svg";
import facebookIcon from "../src/assets/facebook.svg";
import githubIcon from "../src/assets/github.svg";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

function App() {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const auth = getAuth();

  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("jwt-token-->", user / n, "google-access-token--->", token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const facebookLogin = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(
          "jwt-token-->",
          user / n,
          "facebook-access-token--->",
          token
        );
      })
      .catch((error) => {
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = FacebookAuthProvider.credentialFromError(error);
      });
  };

  const githubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("jwt-token-->", user / n, "github-access-token--->", token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h2 className="pb-3">Social Logins</h2>
      <div
        className="social-icon rounded-5 d-flex justify-content-center align-items-center gap-2 py-2 px-5 my-2"
        onClick={googleLogin}
      >
        <img src={googleIcon} alt="google-icon" width={25} height={25} />
        <span>Signin with Google</span>
      </div>
      <div
        className="social-icon rounded-5 d-flex justify-content-center align-items-center gap-2 py-2 px-5 my-2"
        onClick={facebookLogin}
      >
        <img src={facebookIcon} alt="google-icon" width={25} height={25} />
        <span>Signin with Facebook</span>
      </div>
      <div
        className="social-icon rounded-5 d-flex justify-content-center align-items-center gap-2 py-2 px-5 my-2"
        onClick={githubLogin}
      >
        <img src={githubIcon} alt="google-icon" width={25} height={25} />
        <span>Signin with Github</span>
      </div>
    </div>
  );
}

export default App;
