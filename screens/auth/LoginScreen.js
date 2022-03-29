import { useContext, useState } from "react";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import AuthContent from "../../components/Auth/AuthContent";
import { login } from "../../utils/auth";
import { Alert } from "react-native";
import { AuthContext } from "../../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication Failed",
        "Could not logged you in. Please check your credentials or try again later"
      );
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
