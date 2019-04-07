import React from "react";
import theme from "../../theme";
import { graphql } from "react-apollo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";
import { ThemeProvider } from "../../typed-components";

const AppContainer = ({ data }) => (
  <>
    <ThemeProvider theme={theme}>
      <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
    </ThemeProvider>
    <ToastContainer draggable={true} position="bottom-center" />
  </>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
