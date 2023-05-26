import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products-context";
import { AuthProvider } from "./contexts/auth-context";
import { WishlistProvider } from "./contexts/wishlist-context";
import { CartProvider } from "./contexts/cart-context";
import { AddressProvider } from "./contexts/address-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <WishlistProvider>
            <CartProvider>
              <AddressProvider>
                  <App />
              </AddressProvider>
            </CartProvider>
          </WishlistProvider>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
