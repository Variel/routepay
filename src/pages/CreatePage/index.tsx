import { Box, Button, Text } from "@chakra-ui/react";
import { RegisterSection } from "../../features/create/RegisterSection";
import { TransactionSection } from "../../features/create/TransactionSection";
import { useWizard } from "../../features/wizard/useWizard";

export const CreatePage = () => {
  const { renderStep, nextStep, prevStep } = useWizard(3);

  return (
    <Box>
      <Text fontSize="4xl">Create</Text>
      {renderStep([<RegisterSection />, <TransactionSection />])}
      <Button onClick={() => prevStep()}>이전</Button>
      <Button onClick={() => nextStep()}>다음</Button>
    </Box>
  );
};
