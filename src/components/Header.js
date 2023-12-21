import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import DrawerTop from "./Drawer";
import MenuDropdown from "./MenuDropdown";
import Calendar from "react-calendar";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, onChange] = useState(new Date());

  const btnRef = React.useRef();
  return (
    <>
      <Box
        className="container-main"
        bg="#191919"
        boxShadow="0px 4px 8px 0px rgba(0, 0, 0, 0.02)"
        w="100%"
        h="82px"
        p={2}
        color="white"
      >
        <Flex alignItems="center">
          <Image src="/assests/logo.svg" width={165} height={38} />
          <Spacer />
          <Flex gap={7}>
            <ButtonGroup spacing={2}>
              <Button
                bg="none"
                w="auto"
                h="auto"
                padding={0}
                _hover={{ bg: "none" }}
              >
                <Image
                  src="/assests/plusIcon.svg"
                  height={26}
                  width={26}
                  style={{ margin: 0 }}
                />
              </Button>
              <Button
                bg="none"
                w="auto"
                h="auto"
                padding={0}
                _hover={{ bg: "none" }}
                onClick={onOpen}
                ref={btnRef}
              >
                <Image
                  src="/assests/calenderIcon.svg"
                  height={26}
                  width={26}
                  style={{ margin: 0 }}
                />
              </Button>
              <Button
                bg="none"
                w="auto"
                h="auto"
                padding={0}
                _hover={{ bg: "none" }}
              >
                <Image
                  src="/assests/notificationIcon.svg"
                  height={26}
                  width={26}
                  style={{ margin: 0 }}
                />
              </Button>
            </ButtonGroup>
            <MenuDropdown name={"Ahmed Ali"} />
          </Flex>
        </Flex>
      </Box>
      <DrawerTop
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        btnRef={btnRef}
        title={"Calendar"}
      >
        <Calendar
          onChange={onChange}
          value={value}
          className="calendar-container"
        />
      </DrawerTop>
    </>
  );
}
