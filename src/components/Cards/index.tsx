import { Box, Center, Heading, Text, Flex, Icon } from "@chakra-ui/react";

import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";

interface HomeProps {
 products: {
  id: string,
  description: string,
  imageUrl: string,
  color: string,
  marca: string,
  fuel: string,  
 }
}

export function Cards({ products }: HomeProps) {
  return (
    <Center >
      <Box
        w={"full"}
        maxW={"330px"}
        boxShadow={"2xl"}
        overflow={"hidden"}
        rounded={"md"}
      >
        <Box mt={-6} mx={-6}>
          <Image src={products.imageUrl} width='365px' height='267px' alt={products.description}  />
        </Box>
        <Box>
          <Box>
            <Heading
              h="20"
              fontSize={"xl"}
              fontWeight={"semibold"}
              textAlign={"center"}
              mt="4"
            >
              {products.description}
            </Heading>
            <Text
              h="20"
              mt={2}
              fontWeight="light"
              fontSize={"xl"}
              textAlign={"center"}
              color={"gray.300"}
            >
              {products.fuel} -{" "}
              {products.color} -{" "}
              {products.marca}{" "}
            </Text>
          </Box>
          <Flex
            borderTop={"1px"}
            mt={6}
            pt={2}
            justify={"center"}
            align={"center"}
            cursor="pointer"
          >
            <Link 
            passHref
            href={
              "https://api.whatsapp.com/send?phone=5562993834795&text=Estamos%20entrando%20em%20contato%20a%20partir%20do%20site!"
            }>
             
              <Text
                as='a'
                fontSize={"2xl"}
                fontWeight={600}
                _hover={{ color: "yellow.800" }}
                target={"_blank"}
              >
                 <Icon as={IoLogoWhatsapp} fontSize="35" color="gray.20" mr={4} />
                + DETALHES
              </Text>
            </Link>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}
