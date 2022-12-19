import GlobalStyles from "../styles/GlobalStyles";
import {SessionProvider} from "next-auth/react";
import {StyledContainer} from "../components/StyledContainer";

function MyApp({Component, pageProps: {session, ...pageProps}}) {
  return (
    <SessionProvider session={session}>
      <GlobalStyles />
      <StyledContainer>
        <h1>Next Auth Demo</h1>
        <Component {...pageProps} />
      </StyledContainer>
    </SessionProvider>
  );
}

export default MyApp;
