import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Biryani from "../../../assets/biryani.jpg";

const OrderItem = () => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          filter="auto"
          brightness="70%"
          maxHeight={"lg"}
          src={Biryani}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces.
          </Text>
        </Stack>
      </CardBody>
      <CardFooter justifyContent="space-between" alignItems={"center"}>
        <Text fontSize={"lg"} fontWeight="semibold">$22</Text>
        <Button variant={"solid"} colorScheme="orange" rounded={"full"}>
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OrderItem;