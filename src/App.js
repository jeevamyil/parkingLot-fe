//import logo from './logo.svg';

import Header from "./Header/header";
import WelcomePage from "./WelcomePage/WelcomePage";
import { Routes, Route } from 'react-router-dom';
import OptionsPage from "./OptionsPage/OptionsPage";
import FindVehiclePage from "./FindVehiclePage/FindVehiclePage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import CheckinPage from "./CheckinPage/CheckinPage";
import ShowLotsPage from "./ShowLotsPage/ShowLotsPage";


function App() {
  return (
    <div>

      <Header />
      <Routes>
        <Route path="/options" exact element={<OptionsPage />} />

        <Route path="/checkin" exact element={<CheckinPage />} />

        <Route path="/checkout" exact element={<CheckoutPage />} />

        <Route path="/find" exact element={<FindVehiclePage />} />

        <Route path="/lots" exact element={<ShowLotsPage />} />

        <Route path="/" element={<WelcomePage />} />

      </Routes>

    </div>

  )

}

export default App;
