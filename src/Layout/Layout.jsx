import React, { useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { AllRoutes } from "../Routes/AllRoutes";

import { useTheme } from "next-themes";

export const Layout = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding='1rem'
    >
      <AllRoutes />
    </Box>
  );
};
