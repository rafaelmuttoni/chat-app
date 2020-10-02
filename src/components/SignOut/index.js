import React from "react";

const SignOut = ({ auth }) => {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
};

export default SignOut;
