import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
  Menu,
  Icon,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

import { RiMenuLine } from "react-icons/ri";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";

import Link from "next/link";
import Search from "../Search";
import { SetStateAction, useState } from "react";

export function Header() {
  const isWedeVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs"];

  return (
    <Flex
      as="header"
      w={"100%"}
      bg="gray.800"
      mx="auto"
      flexDir={"column"}
      boxShadow={"1px 2px 3px 3px rgba(0,0,0,0.1)"}
      p={{base:'2'}}
    >
      <Flex
        w={"100%"}
        maxWidth={1200}
        pt={{ base: "1rem", md: "1rem", lg: "0" }}
        h={{ base: "8rem", md: "8rem", lg: "8rem" }}
        gap={3}
        mx="auto"
        align="center"
      >
        <Image src={"/logo.png"} width="244px" height="90px" alt="logo" />
        <Flex align="center" ml={"auto"} pr={{ base: "4" }}>
          {isWedeVersion && (
            <Flex
              as="nav"
              align="center"
              justifyContent="center"
              flexDir={"row"}
              gap="1.5rem"
            >
              <Menu>
                <Box>
                  <Link passHref href="/">
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
                </Box>
                <Box>
                  <Link passHref href="/">
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
                </Box>

                <Box>
                  <Link passHref href="/">
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
                </Box>

                <Box>
                  <Link passHref href="/">
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
                </Box>
              </Menu>
            </Flex>
          )}

          {!isWedeVersion && (
            <>
              {sizes.map((size) => (
                <Button
                  onClick={() => handleClick(size)}
                  bg="yellow.800"
                  color="white"
                  key={size}
                >
                  <RiMenuLine />
                </Button>
              ))}

              <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader></DrawerHeader>
                  <DrawerBody>
                    <Flex flexDir="column" gap="2" mt="4">
                      <Link passHref href="/">
                        <Text
                          as="a"
                          color="gray.800"
                          _hover={{ color: "yellow.500" }}
                          fontWeight="bold"
                          fontSize="2xl"
                          onClick={onClose}
                        >
                          HOME
                        </Text>
                      </Link>

                      <Link passHref href="/">
                        <Text
                          as="a"
                          color="gray.800"
                          _hover={{ color: "yellow.500" }}
                          fontWeight="bold"
                          fontSize="2xl"
                          onClick={onClose}
                        >
                          SUCATAS
                        </Text>
                      </Link>

                      <Link passHref href="/">
                        <Text
                          as="a"
                          color="gray.800"
                          _hover={{ color: "yellow.500" }}
                          fontWeight="bold"
                          fontSize="2xl"
                          onClick={onClose}
                        >
                          PEÇAS
                        </Text>
                      </Link>

                      <Link passHref href="/">
                        <Text
                          as="a"
                          color="gray.800"
                          _hover={{ color: "yellow.500" }}
                          fontWeight="bold"
                          fontSize="2xl"
                          onClick={onClose}
                        >
                          COM COMPAR
                        </Text>
                      </Link>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          )}
        </Flex>
        <Flex display={{ base:"none", md: 'flex'}} >
          <Link
           passHref
            href={
              "https://api.whatsapp.com/send?phone=5562994382290&text=Estamos%20entrando%20em%20contato%20a%20partir%20do%20site!"
            }
          >
            <Flex
              as='a'
              align="center"
              justify="center"
              bg="yellow.500"
              _hover={{ background: "yellow.800" }}
              p="2"
              borderRadius="8"
              cursor='pointer'
              target={"_blank"}
            >
              <Icon as={IoLogoWhatsapp} fontSize="35" color="gray.20" mr={4} />
              <Text
                as="span"
                color="gray.20"
                _hover={{ color: "gray.50" }}
                fontSize={{ base: "sm", md: "md", lg: "md" }}
              >
                FAÇA SEU ORÇAMENTO
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
