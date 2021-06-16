import React, { useState, useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../../context/firebase";
import { doesUserNameExist } from "../../services/firebase";
import "./register.css";

const Register = () => {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [username, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleRegister = async (e) => {
    e.preventDefault();
    const usernameExists = await doesUserNameExist(username);
    if (usernameExists) {
      console.log(usernameExists);
      console.log("shit");
    }

    if (usernameExists === false) {
      try {
        const createdUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);
        console.log(createdUser);

        await createdUser.user.updateProfile({
          displayName: username,
        });

        await firebase
          .firestore()
          .collection("users")
          .add({
            userId: createdUser.user.uid,
            username: username.toLowerCase(),
            fullName,
            emailAddress: emailAddress.toLowerCase(),
            following: ["2"],
            followers: [],
            dateCreated: Date.now(),
          });
        history.push("/");
      } catch (error) {
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      }
    } else {
      // setUserName("");
      setError("That username is already taken, please try another.");
    }
  };
  return (
    <div className="login-div">
      <div className="login--img-div">
        <img
          src="https://github.com/karlhadwen/instagram/blob/master/public/images/iphone-with-profile.jpg?raw=true"
          alt="iPhone with Instagram app"
          height="600"
          width="400"
        />
      </div>
      <div className="login-form-div">
        <div className="form-div">
          <h1>Instagram</h1>

          {error && <p>{error}</p>}

          <form onSubmit={handleRegister} method="POST">
            <input
              type="text"
              placeholder="Enter Username"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setUserName(target.value)}
              value={username}
            />
            <br />
            <input
              type="text"
              placeholder="Enter full name"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
            <br />
            <input
              aria-label="Enter your email address"
              type="email"
              placeholder="Email address"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <br />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <br />
            <button
              disabled={isInvalid}
              type="submit"
              className={`${isInvalid && "buttonInvalid"}`}
            >
              Register
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary">
          <p className="text-sm">
            Already have an account?
            <Link to="/login" className="font-bold text-blue-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
