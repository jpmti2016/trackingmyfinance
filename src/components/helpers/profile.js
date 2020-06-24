import React, { useState, useEffect } from "raect";
import { Auth, Hub } from "aws-amplify";

export const protedtedRoute = (Comp, route = "/profile") => (props) => {
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
    } catch (error) {
      props.history.push(route);
    }
  }

  useEffect(() => {
    checkAuthState();
  }, []);

  return <Comp {...props} />;
};

//;;;;
export const Container = ({ children }) => (
  <div style={styles.container}>{children}</div>
);

const styles = {
  container: {
    margin: "0 auto",
    padding: "50px 100px",
  },
  button: {
    backgroundColor: "#006bfc",
    color: "white",
    width: 316,
    height: 45,
    fontWeight: "600",
    fontSize: 14,
    cursor: "pointer",
    border: "none",
    outline: "none",
    borderRadiuos: 3,
    marginTop: "25px",
    boxShadow: "0px 1px 3px rgba(0, 0, 0, .3)",
  },
  containe: {
    display: "flex",
    flexDirection: "column",
    marginTop: 150,
    justyfyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    marginTop: 8,
    width: 300,
    maxWidth: 300,
    padding: "0px 8px",
    fontSize: 16,
    outline: "none",
    border: "none",
    borderBottom: "2px solid rgba(0, 0, 0, .3",
  },
  toogleForm: {
    fontWeight: "600",
    padding: "0px 25px",
    margingTop: "15px",
    marginBottom: 0,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.6)",
  },
  resetPassword: {
    marginTop: "5px",
  },
  anchor: {
    color: "#006bfc",
    cursor: "pointer",
  },
};

//;;;;;

function Protected() {
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export const protectedR = protedtedRoute(Protected);
//export default protedtedRoute(Protected)

//;;;;

export function Button({ onClick, title }) {
  return (
    <button style={styles.button} onClick={onClick}>
      {title}
    </button>
  );
}

//;;;;

const initialFormState = {
  username: "",
  password: "",
  email: "",
  confirmationCode: "",
};

async function singIn({ username, password }, setUser) {
  try {
    const user = await Auth.signIn(username, password);
    const userInfo = { username: user.username, ...user.attributes };
    setUser(userInfo);
  } catch (error) {
    console.error("error signing up", error);
  }
}

async function signUp({ username, password, email }, updateFormType) {
  try {
    await Auth.signUp({ username, password, attributes: { email } });
    console.log("sign up success!!");
    updateFormType("confirmSignUp");
  } catch (error) {
    console.error("error sign up", error);
  }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) {
  try {
    await // After retrieveing the confirmation code from the user
    Auth.confirmSignUp(username, confirmationCode);
    updateFormType("signIn");
  } catch (error) {
    console.error("error signing up", error);
  }
}

async function forgotPassword({ username }, updateFormType) {
  try {
    await Auth.forgotPassword(username);
    updateFormType("forgotPasswordSubmit");
  } catch (error) {
    console.error("error submiting username to reset password", error);
  }
}

async function forgotPasswordSubmit(
  { username, confirmationCode, password },
  updateFormType
) {
  try {
    await // Collect confirmation code and new password , then
    Auth.forgotPasswordSubmit(username, confirmationCode, password);
    updateFormType("signIn");
  } catch (error) {
    console.error("error updating password", error);
  }
}

export function Form(props) {
  const [formType, updateFormType] = useState("signIn");
  const [formState, updateFormState] = useState(initialFormState);

  function updateForm(event) {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };

    updateFormState(newFormState);
  }

  function renderForm() {
    switch (formType) {
      case "signUp":
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case "confirmSignUp":
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case "signIn":
        return (
          <SignIn
            signIn={() => singIn(formState, props.setUser)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case "forgotPassword":
        return (
          <ForgotPassword
            forgotPassword={() => forgotPassword(formState, updateFormType)}
            updateFormState={(e) => updateForm(e)}
          />
        );
      case "forgotPasswordSubmit":
        return (
          <ForgotPasswordSubmit
            forgotPasswordSubmit={() =>
              forgotPasswordSubmit(formState, updateFormType)
            }
            updateFormState={(e) => updateForm(e)}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div>
      {renderForm()}
      {formType === "signUp" && (
        <p style={styles.toogleForm}>
          Already have an account ?{" "}
          <span style={styles.anchor} onClick={() => updateFormType("signIn")}>
            Sign In
          </span>
        </p>
      )}
      {formType === "signIn" && (
        <>
          <p style={styles.toogleForm}>
            Need an account?{" "}
            <span
              style={styles.anchor}
              onClick={() => updateFormType("signUp")}
            >
              Sign Up
            </span>
          </p>
          <p style={{ ...styles.toogleForm, ...styles.resetPassword }}>
            Forgot password ?{" "}
            <span
              style={styles.anchor}
              onClick={() => updateFormType("forgotPassword")}
            >
              Reset Password
            </span>
          </p>
        </>
      )}
    </div>
  );
}

// ;;;;

export function Profile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();

    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signOut") {
        setUser(null);
      }
    });
  }, []);

  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (error) {
      console.error("check user error", error);
    }
  }

  function signOut() {
    Auth.signOut().catch((err) => console.error("error signing out", err));
  }

  if (user) {
    return (
      <Container>
        <h1>Profile</h1>
        <h2>Username: {user.username}</h2>
        <h3>Email: {user.email}</h3>
        <h4>Phone: {user.phone_number}</h4>
        <Button onClick={signOut}>Sign Out</Button>
      </Container>
    );
  }
  return <Form setUser={setUser} />;
}

//;;;;

export function SignIn({ signIn, updateFormState }) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="usernanme"
      />

      <input
        type="password"
        name="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="password"
      />

      <Button onClick={signIn} title="Sing In" />
    </div>
  );
}

/// ;;;;

export function SignUp({ updateFormState, signUp }) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="usernanme"
      />

      <input
        type="password"
        name="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
      />

      <input
        name="email"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="email"
      />

      <Button onClick={signUp} title="Sing Up" />
    </div>
  );
}

//;;;;

export function ConfirmSignUp({ updateFormState, confirmSignUp }) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationCode"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="Confirmation Code"
      />

      <Button onClick={confirmSignUp} title="Confirm Sign Up" />
    </div>
  );
}

// ;;;;;

export function ForgotPassword({ updateFormState, forgotPassword }) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="Username"
      />

      <Button onClick={forgotPassword} title="Reset Password" />
    </div>
  );
}

// ;;;;
export function ForgotPasswordSubmit({
  updateFormState,
  forgotPasswordSubmit,
}) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationcode"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="confirmation code"
      />

      <input
        name="password"
        type="password"
        onChange={(e) => {
          e.persist();
          updateFormState(e);
        }}
        style={styles.input}
        placeholder="new password"
      />

      <Button onClick={forgotPasswordSubmit} title="Save New Password" />
    </div>
  );
}
