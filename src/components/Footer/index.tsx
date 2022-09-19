import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/future/image";

export function Footer() {
  return (
    <Box w="100%" as="footer" bg="gray.800" color="gray.50">
      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        as="section"
        w="100%"
        mx="auto"
        px="2"
        bg="red.100"
      >
        <Image src="/frete.png" width={1200} height={450} alt="" />
      </Flex>

      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack
          direction={{ base: "column", md: "column", lg: "row" }}
          alignItems={{ base: "center", md: "center", lg: "space-between" }}
          spacing={6}
        >
          <Link href="/" passHref>
            <Text
              as="a"
              cursor={"pointer"}
              color="gray.50"
              _hover={{ color: "yellow.500" }}
              fontWeight="bold"
              fontSize={"xl"}
            >
              HOME
            </Text>
          </Link>

          <Link href="/" passHref>
            <Text
              as="a"
              cursor={"pointer"}
              color="gray.50"
              _hover={{ color: "yellow.500" }}
              fontWeight="bold"
              fontSize={"xl"}
            >
              SUCATAS
            </Text>
          </Link>

          <Link href="/" passHref>
            <Text
              as="a"
              cursor={"pointer"}
              color="gray.50"
              _hover={{ color: "yellow.500" }}
              fontWeight="bold"
              fontSize={"xl"}
            >
              PEÇAS
            </Text>
          </Link>

          <Link href="/" passHref>
            <Text
              as="a"
              cursor={"pointer"}
              color="gray.50"
              _hover={{ color: "yellow.500" }}
              fontWeight="bold"
              fontSize={"xl"}
            >
              COMO COMPAR
            </Text>
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={"center"}
          textAlign={{ base: "center", md: "center" }}
        >
          <Text>Todos direitos Reservados - Peças Canaã - 2022 </Text>
        </Container>
      </Box>

      <Box
        display="flex"
        w="100%"
        p="4"
        justifyContent="center"
        flexDir={"row"}
        alignItems="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <Text fontSize="13px" fontWeight="medium" mr="2">
            {" "}
            Desenvolvido por{" "}
          </Text>
          <Box>
            {" "}
            <Image src={"/EasyAPP.png"} width={59} height={14} alt="" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
