import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";

const Login = () => {
  const theme = useTheme();
  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={() => {}}
        providers={[]}
        slotProps={{ form: { noValidate: true } }}
      />
    </AppProvider>
  );
};

export default Login;
