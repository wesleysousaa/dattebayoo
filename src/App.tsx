import { LikeProvider } from "./context/LikesContext";
import Router from "./router/Router";
import { GlobalStyled } from "./styles/Global";

function App() {
  return (
    <>
      <LikeProvider>
        <Router />
        <GlobalStyled />
      </LikeProvider>
    </>
  );
}

export default App;
