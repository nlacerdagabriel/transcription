import { Sidebar } from "./components/Sidebar";
import { AppProvider } from "./contexts/AppContext";
import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./style/GlobalStyle";
import { Container } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppProvider>
      <GlobalStyle />
      <ToastContainer />

      <Container>
        <Sidebar />
        <AppRoutes />
      </Container>
    </AppProvider>
  );
}

export default App;
