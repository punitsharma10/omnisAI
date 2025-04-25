import {
  Box,
  Card,
  Grid,
  HStack,
  Icon,
  Image,
  Strong,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const Chat = () => {
  const tempObj = {
    sender: "ai",

    message: "First, what industry are you in?",

    type: "question_with_options",

    options: [
      {
        label: "Medical",

        value: "medical",

        description:
          "Ideal for clinics and hospitals to handle appointment booking, patient follow-ups, and insurance inquiries using AI voice assistants.",

        icon: "https://yourcdn.com/icons/medical.png",
      },

      {
        label: "Legal",

        value: "legal",

        description:
          "Automate client intake, appointment scheduling, and case status updates for law firms using a smart voice agent.",

        icon: "https://yourcdn.com/icons/legal.png",
      },

      {
        label: "Financial",

        value: "financial",

        description:
          "Enable voice-based account queries, appointment booking with advisors, and customer support for financial institutions.",

        icon: "https://yourcdn.com/icons/financial.png",
      },

      {
        label: "Travel",

        value: "travel",

        description:
          "Assist customers with itinerary changes, booking confirmations, and travel-related queries through an AI voice bot.",

        icon: "https://yourcdn.com/icons/travel.png",
      },

      {
        label: "Telecom",

        value: "telecom",

        description:
          "Handle SIM activations, plan upgrades, and customer complaints with a conversational voice AI assistant.",

        icon: "https://yourcdn.com/icons/telecom.png",
      },

      {
        label: "Education",

        value: "education",

        description:
          "Support student enrollment, schedule reminders, and course queries with an AI assistant for schools and institutions.",

        icon: "https://yourcdn.com/icons/education.png",
      },

      {
        label: "Insurance",

        value: "insurance",

        description:
          "Use AI voice support to handle policy inquiries, premium reminders, and claims status updates efficiently.",

        icon: "https://yourcdn.com/icons/insurance.png",
      },
    ],
  };

  return (
    <Box  width="100%" height="100%">
      <Box padding="1rem">
        <Strong>Let's Build Your Voice AI Agent!</Strong>
        <Text color="gray.400">First, What industry are you in?</Text>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap="4"
          width="45%"
          paddingTop="2rem"
        >
          {tempObj?.options?.map((item) => (
            <Card.Root key={item.label} width="320px">
              <Card.Body gap="2">
                <Card.Title mt="2">
                  <HStack>
                    <Image src={item?.icon} /> {item.label}
                  </HStack>
                </Card.Title>
                <Card.Description>{item.description}</Card.Description>
              </Card.Body>
            </Card.Root>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
