import React, { useEffect } from "react";
import { Navbar } from "../Components/custom/Navbar";
import { Box, HStack } from "@chakra-ui/react";
import { AllRoutes } from "../Routes/AllRoutes";
import { useSelector } from "react-redux";
import { SideMenu } from "../Components/custom/SideMenu";
import { useTheme } from "next-themes";

export const Layout = () => {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("light");
  }, [setTheme]);
  const isAuthenticated = useSelector((state) => state?.Login?.isAuthenticated);
  const screenWidth = useSelector((state) => state?.CurrentScreenWidth?.width);

  return (
    <>
      {isAuthenticated && <Navbar />}
      {isAuthenticated ? (
        <Box height="100vh" width="100%" paddingTop="4rem">
          <HStack height="100%">
            {screenWidth > 1024 && (
              <Box height="100%" width="13%">
                <SideMenu />
              </Box>
            )}
            <Box
              height="100%"
              width={screenWidth > 1024 ? "87%" : "100%"}
              padding="2rem"
              paddingTop="3rem"
            >
              <AllRoutes />
            </Box>
          </HStack>
        </Box>
      ) : (
        <Box
          width="100%"
          height="90vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <AllRoutes />
        </Box>
      )}
    </>
  );
};
