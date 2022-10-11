import { CircularProgress, Container } from "@mui/material";
import { SignInScreen, useCurrentUserContext } from "./Auth";

export const App = () => {
  const currentUser = useCurrentUserContext();

  if (currentUser.type === "Loading") {
    return <LoadingScreen />;
  }

  if (currentUser.type === "SignedOut") {
    return <SignInScreen />;
  }

  return <>hello</>;
};

const LoadingScreen = () => {
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
      <CircularProgress />
    </Container>
  );
};
