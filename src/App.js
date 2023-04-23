import { Container, CssBaseline } from "@mui/material";
import myOrderProps from "./my-order.json";
import "./App.css";
import { Order } from "./layouts";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Order {...myOrderProps} />
      </Container>
    </>
  );
}

export default App;
