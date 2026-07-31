import { Container, ContainerProps } from "@chakra-ui/react";

export default function Section({ children, ...props }: ContainerProps) {
  return (
    <Container fluid py="12" {...props}>
      <Container as="section" p="4" maxW="1024px">
        {children}
      </Container>
    </Container>
  );
}
