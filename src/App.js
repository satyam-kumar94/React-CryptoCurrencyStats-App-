import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
// import CoinPage from "./Pages/AccountPage";
import Header from "./components/Header";
import  Alert  from "./components/Alert";
import AccountPage from "./Pages/AccountPage";
import SuccessfulPayment from "./Pages/SuccessfulPayment";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",  //
    color: "yellow",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/AccountPage" component={AccountPage} exact />
        <Route path="/paymentdone" component={SuccessfulPayment} exact />
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
