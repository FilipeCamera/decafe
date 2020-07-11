import React, { useContext } from "react";
import AuthRoute from "./routes/Auth.routes";
import AppRoute from "./routes/App.routes";
import AppContext from "./contexts/appContext";

export default function Routes() {
  //const { signed } = useContext(AppContext);
  const signed = true;

  return signed ? <AppRoute /> : <AuthRoute />;
}
