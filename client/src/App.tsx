import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import "./App.css";
import AppLayout from "./components/common/AppLayout";
import CartProvider from "./context/CartContext";
import NotificationProvider from "./context/Notification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

interface CartContextProp {
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

function App() {
  return (
    <React.StrictMode>
      <Router>
        <CartProvider>
          <NotificationProvider>
            <AppLayout>
              {/* <ErrorBoundary> */}

              {/* </ErrorBoundary> */}
            </AppLayout>
            {/* </Loader> */}
          </NotificationProvider>
        </CartProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
