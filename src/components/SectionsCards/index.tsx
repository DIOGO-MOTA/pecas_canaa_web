import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Cards } from "../Cards";

interface HomeProps {
   id: string,
   description: string,
   imageUrl: string,
   color: string,
   marca: string,
   fuel: string,  
 }

 interface Props {
  title: string;
  data: HomeProps[];
  href: string;
  text: string;
 }

export function SectionsCards({ title, href, text, data}: Props ) {
  return (
    <>
       <Box
          display="flex"
          width='100%'
          flexDir={"column"}
          justifyContent="center"
          alignItems={"center"}
          borderRadius={4}
          bg="yellow.500"
          p={2}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize="3xl" fontWeight="semibold" color="gray.20">
           {title}
          </Text>
        </Box>

        <Flex flexWrap="wrap" gap="20px" align="center" justify="center">
          {data.map((product) => {
            return <Cards products={product} key={product.id} />;
          })}
        </Flex>

        
        <Flex w='100%' justify='right' >

        <Link
           passHref
            href= {href}
          >
            <Flex
              as='a'
              align="center"
              justify="center"
              flexDir='column'
              border='2px'
              borderColor="yellow.500"
              _hover={{ background: "yellow.800" }}
              p="2"
              borderRadius="8"
              cursor='pointer'
            >
        
              <Text
                as="strong"
                color="gray.20"
                _hover={{ color: "gray.50" }}
                fontSize={{ base: "sm", md: "md", lg: "2xl" }}
              >
               {text}
              </Text>
            </Flex>
          </Link>
        </Flex>

    </>

  )
}