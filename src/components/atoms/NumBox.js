import {
  Box,
  Center,
  Stat,
  StatArrow,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function NumBox({ name, direction, color }) {
  return (
    <Box
      h={73}
      w={189}
      border={"1px solid #E4E4E4"}
      bg="white"
      borderRadius={12}
      textAlign="start"
      p={2}
    >
      <Stat>
        <StatNumber fontSize={"xl"} color={color}>
          ₦ 0.00
        </StatNumber>
        <StatHelpText display={"flex"} gap={3} alignItems={"center"}>
          <Text fontSize={"xs"}>{name}</Text>
          <Box fontSize={"xs"}>
            <StatArrow type={direction} />
            0%
          </Box>
        </StatHelpText>
      </Stat>
    </Box>
  );
}
