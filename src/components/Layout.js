import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Box position={"sticky"} top={0} zIndex={200}>
        <Header />
        <Navigation />
      </Box>

      <main>{children}</main>
    </>
  );
}
