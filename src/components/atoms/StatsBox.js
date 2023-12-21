import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function StatsBox({ small, name }) {
  return (
    <Box
      h={79}
      w={small ? 88 : 117}
      border={"1px solid #F5F5F5"}
      borderRadius={12}
      textAlign="center"
    >
      <Text color="#191919" fontWeight={600} fontSize="x-large" mt={2}>
        0
      </Text>
      <Text color={"#606060"} fontWeight={400} fontSize="sm">
        {name}
      </Text>
    </Box>
  );
}
