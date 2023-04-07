import {

    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,

    Text,
    Divider,

  } from "@chakra-ui/react";
  
  const Cart = () => {

  
 
  
    return (
      <div>
        <Drawer>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton _focus={{ outline: "none" }} />
            <DrawerHeader></DrawerHeader>
            <DrawerBody>
              <Flex>
                <Text mt="4" fontWeight={"semibold"}>
                  Your Dashboard
                </Text>
                <Flex>
                  <Text >
                    Balance
                  </Text>
                  <Text >
                    $200
                  </Text>
                </Flex>
                <Divider mb="4" />
          
  
              
           
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    );
  };
  
  export default Cart;
  