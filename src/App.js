import './App.css';
import AppNavbar from './Component/AppNavbar';
import AppBody from './Pages/AppBody';
import BuyFranchise from './Pages/BuyFranchise';
import AppFooter from './Component/AppFooter';
import { Routes, Route } from "react-router-dom";
import FranchiseQuiz from './Pages/FranchiseQuiz';
import SellFranchise from './Pages/SellFranchise';
import FranchiseFra from './Pages/FranchiseFra';
import Login from './Pages/Login';
import { createContext, useReducer } from "react";
import FranchiseManual from './Pages/FranchiseManual';
// import FranchiseServices from './Pages/FranchiseServices';
import FranchiseSme from './Pages/FranchiseSme';
import FranchiseFdp from './Pages/FranchiseFdp';
import { Toaster } from 'react-hot-toast';
import AboutFranchise from './Pages/AboutFranchise';
import AboutKhalifafund from './Pages/AboutKhalifafund';
import ScrollToTop from './Component/ScrollToTop';
import FranchiseMedia from './Pages/FranchiseMedia';
import FranchiseSales from './Pages/FranchiseSales';
import FranchiseOther from './Pages/FranchiseOther';
import AboutPartnership from './Pages/AboutPartnership';

export const AuthContext  = createContext();
const initialState = {
  isLoginModalOpen: false,
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isLoginModalOpen: true
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isLoginModalOpen: false
      };
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isLoginModalOpen:false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isLoginModalOpen:false,
        isAuthenticated: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      <div className="App">
        {state.isLoginModalOpen && <Login />}
        <Toaster/>
        <ScrollToTop />
        <AppNavbar />
        <Routes>
          <Route path="/" element={<AppBody />} />
          <Route path="/about" element={<AboutFranchise />} />
          <Route path="/about-partnership" element={<AboutPartnership />} />
          <Route path="/about-khalifafund" element={<AboutKhalifafund />} />
          <Route path="buy-franchise" element={<BuyFranchise />} />
          <Route path="sell-franchise" element={<SellFranchise />} />
          <Route path="franchise-quiz" element={<FranchiseQuiz />} />
          <Route path="franchise-quiz/franchise-fra" element={<FranchiseFra />} />
          <Route path='franchise-management-training' element={<FranchiseManual />}></Route>
          <Route path='franchise-sales-training' element={<FranchiseSales />}></Route>
          <Route path='other-training' element={<FranchiseOther />}></Route>
          <Route path='franchise-sme' element={<FranchiseSme />}></Route>
          <Route path='franchise-fdp' element={<FranchiseFdp />}></Route>
          <Route path='franchise-media' element={<FranchiseMedia />}></Route>
        </Routes>
        <AppFooter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
