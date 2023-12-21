import {
  Box,
  Button,
  Stat,
  StatArrow,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function NumBox({ name, direction, color, isListing }) {
  return (
    <Box
      h={73}
      w={189}
      border={"1px solid #E4E4E4"}
      bg="white"
      borderRadius={12}
      textAlign="start"
      p={2}
      position={isListing && "relative"}
    >
      <Stat>
        <StatNumber fontSize={"xl"} color={color}>
          {isListing ? "0" : "₦ 0.00"}
        </StatNumber>
        <StatHelpText display={"flex"} gap={3} alignItems={"center"}>
          <Text fontSize={"xs"}>{name}</Text>
          <Box fontSize={"xs"}>
            {direction && <StatArrow type={direction} />}
            {direction && "0%"}
          </Box>
        </StatHelpText>
      </Stat>
      {isListing && (
        <Button
          position={"absolute"}
          top={0}
          right={0}
          bg="transparent"
          _hover={{ bg: "transparent" }}
          w="auto"
          p={0}
        >
          <Image src={"/assests/bookmarkIcon.svg"} width={24} height={24} />
        </Button>
      )}
    </Box>
  );
}
