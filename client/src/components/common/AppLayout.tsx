import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Cart from "../customer/cart/Cart";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Loader from "./Loader";

interface AppLayoutProp {
  children?: ReactNode;
}
const AppLayout = (props: AppLayoutProp) => {
  const { children } = props;
  return (
    <React.Fragment>
      {/* <Loader> */}
        <Header />
        <Box minH={"85vh"}>{children}</Box>
        <Footer />
        <Cart />
      {/* </Loader> */}
    </React.Fragment>
  );
};

export default AppLayout;
