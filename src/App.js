import { Container, CssBaseline } from "@mui/material";
import myOrderProps from "./my-order.json";
import "./App.css";
import { Order } from "./layouts";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Order
          {...myOrderProps}
          onSubmit={async (values) => {
            await sleep(500);
            console.log(JSON.stringify(values, null, 4));
          }}
        />
      </Container>
    </>
  );
}

export default App;
