import { Global } from "@emotion/react";
import "./App.css";
import { MainPage } from "./pages/MainPage";
import { applicationTheme } from "./styles/app-styles";

function App() {
  const applicationStyles = applicationTheme();
  return (
    <div>
      <Global styles={[applicationStyles]} />
      <MainPage />
    </div>
  );
}

export default App;
