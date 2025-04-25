import {
  Button,
  Center,
  HStack,
  Icon,
  Strong,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { TbLoader3 } from "react-icons/tb";
import { FaMicrophoneLines } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Center height="100%" width="100%">
      <VStack width="100%">
        <Icon size="lg" color="tomato">
          <TbLoader3 />
        </Icon>
        <Text>
          <Strong>
            Welcome to <span> AI Agent Builder</span>
          </Strong>
        </Text>
        <Text color="gray.500">
          <Strong>
            Let's Build your AI Agents with Omnis AI Agent Bulider
          </Strong>
        </Text>

        <HStack
          width="70%"
          boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;"
          borderRadius="10px"
          padding="1rem"
        >
          <VStack width="80%">
            <HStack spacing={2} whiteSpace="nowrap">
              <FaMicrophoneLines />
              <Strong color="blue.600">Voice AI Agents</Strong>
            </HStack>
            <Text color="gray.500">
              <Strong>
                Add prompts, tasks, objectives, acions, custom business
                knowledge and more to your agent. Automate your business.
                Streamline workflows.
              </Strong>
            </Text>
          </VStack>
          <Button variant="outline" onClick={() => navigate("/chat")}>
            Create Agent
          </Button>
        </HStack>
      </VStack>
    </Center>
  );
};
