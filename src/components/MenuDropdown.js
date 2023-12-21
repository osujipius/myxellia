import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Avatar,
  Flex,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const DropDownItem = ({ icon, name }) => {
  return (
    <Flex
      w={"100%"}
      borderBottom={"1px solid #f0f0f0"}
      alignItems="center"
      gap={4}
      pb={1}
      cursor="pointer"
    >
      {icon}
      <Text color={"black"} fontSize={"sm"}>
        {name}
      </Text>
    </Flex>
  );
};

export default function MenuDropdown({ name }) {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            w={178}
            py={2}
            transition="all 0.2s"
            position={"relative"}
          >
            <Flex alignItems={"center"} gap={5}>
              <Avatar size={"md"} />
              <Text fontSize={"sm"} color={"white"}>
                {name}
              </Text>
              <Image src="/assests/arrowUpIcon.svg" width={18} height={20} />
            </Flex>
          </MenuButton>

          <MenuList>
            <MenuItem>
              <DropDownItem
                icon={
                  <Image src="/assests/chatIcon.svg" width={18} height={20} />
                }
                name="Support Center"
              />
            </MenuItem>
            <MenuItem>
              <DropDownItem
                icon={
                  <Image src="/assests/usersIcon.svg" width={18} height={20} />
                }
                name="Switch account"
              />
            </MenuItem>
            <MenuItem>
              <DropDownItem
                icon={
                  <Image src="/assests/logoutIcon.svg" width={18} height={20} />
                }
                name="Logout"
              />
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}
