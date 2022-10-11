import { Google } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import constate from "constate";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { firebaseApp } from "./firebase-app";
import { Err, Ok, Result } from "./Result";

//
//
//
//
//

const auth = getAuth(firebaseApp);

//
//
//
//
//
//

type SignInResult = Result<string, never>;

export const signInWithGoogle = async (): Promise<SignInResult> => {
  try {
    const response = await signInWithRedirect(auth, new GoogleAuthProvider());
    return Ok(response);
  } catch (error) {
    const problem = String(error);
    return Err(problem);
  }
};

export const SignInScreen = () => {
  const [state, setState] = useState<
    SignInResult | { type: "Idle" } | { type: "Loading" }
  >({ type: "Idle" });

  const onContinueWithGoogle = async () => {
    setState({ type: "Loading" });
    const result = await signInWithGoogle();
    setState(result);
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        left: "50%",
        transform: "translateX(-50%)",
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}>
      <Typography variant="h2" align="center" gutterBottom fontWeight={800}>
        Ping as a Service
      </Typography>
      <LoadingButton
        startIcon={<Google />}
        fullWidth
        variant="contained"
        onClick={onContinueWithGoogle}
        loading={state.type === "Loading"}>
        Continue with Google
      </LoadingButton>
    </Container>
  );
};

//
//
//
//
//
//
//

const useCurrentUser = () => {
  const [state, setState] = useState<
    | { type: "Loading" }
    | { type: "SignedIn"; userId: string }
    | { type: "SignedOut" }
  >({ type: "Loading" });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setState({ type: "SignedIn", userId: currentUser.uid });
        return;
      }
      setState({ type: "SignedOut" });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return state;
};

export const [CurrentUserProvider, useCurrentUserContext] =
  constate(useCurrentUser);
