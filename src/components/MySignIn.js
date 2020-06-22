import React from "react";

import { Authenticator, AmplifyTheme } from "aws-amplify-react";
// const federated = {
//   google_client_id: "ssss",
//   amazon_client_id: "ssss",
//   facebook_app_id: "ssss",
// };

export default function MySignIn() {
  const theme = {
    ...AmplifyTheme,
    navBar: {
      ...AmplifyTheme.navBar,
    },
    oAuthSignInButton: {
      ...AmplifyTheme.oAuthSignInButton,
      padding: "0px",
    },
    // button: {
    //   ...AmplifyTheme.button,
    //   backgroundColor: "var(--secondary-text-color)",
    // },
    // input: {
    //   ...AmplifyTheme.input,
    //   color: "var(--secondary-text-color)",
    //   border: "1px solid var(--secondary-text-color)",
    // },
    hint: {
      ...AmplifyTheme.hint,
      // color: "#66afe9",
    },
    a: {
      ...AmplifyTheme.a,
      color: "#BAA949",
    },
    sectionBody: {
      ...AmplifyTheme.sectionBody,
      padding: "5px",
    },
    sectionHeader: {
      ...AmplifyTheme.sectionHeader,
      // backgroundColor: "var(--squidInk)",
      backgroundColor: "#fff",
      color: "#baa949",
      // border: "1px solid #baa949",
    },
    button: {
      ...AmplifyTheme.button,
      backgroundColor: "#baa949",
      color: "#fff",
    },
    // signInButtonIcon: { display: "none" },
  };
  return (
    <div
      className="container"
      style={{ paddingTop: "6rem", margin: "0 auto", maxWidth: "90vw" }}
    >
      <Authenticator theme={theme} />
    </div>
  );
}
