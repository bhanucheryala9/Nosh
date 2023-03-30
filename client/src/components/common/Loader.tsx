import { Flex, Text } from "@chakra-ui/react";
import {
  Children,
  createContext,
  CSSProperties,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import { BounceLoader } from "react-spinners";
// import { LoaderProps } from "./utils";

interface LoaderProps {
  message?: string;
  children?: ReactNode;
}

const Loader = (props: LoaderProps) => {
  return (
      <Flex
        height={"100vh"}
        w="100%"
        bg={"#000000cc"}
        direction="column"
        position={"fixed"}
        alignItems="center"
        justifyContent={"center"}
        zIndex="1000"
        top="0%"
        left={"0%"}
      >
        <BounceLoader color="#ED8936"  className="spinner-custom"></BounceLoader>
        <Text marginTop={"3"} textColor="white" fontFamily={"'Allura', cursive"} fontSize="2xl" letterSpacing={2}>Loading...</Text>
        {props.children}
      </Flex>
  );
};

export default Loader;
