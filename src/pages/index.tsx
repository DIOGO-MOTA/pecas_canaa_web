import type { GetServerSideProps } from "next";

import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from 'framer-motion'

import {
  Flex,
  Box,
  Text,
  Stack,
  SimpleGrid,
  Wrap,
  WrapItem,
  Center,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";
import { SectionsCards } from "../components/SectionsCards";
import { SectionsCardBrands } from "../components/SectionsCardBrands";
import { SectionsHowToBuy } from "../components/SectionsHowToBuy";
import { SectionAddress } from "../components/SectionAddress";





export default function Home() {
  const products = [
    {
      id: "2312",
      description: "2022 FIAT PULSE IMPETUS 1.0 TURBO CVT",
      imageUrl: "/carro.jpeg",
      color: "BRANCA",
      marca: "FIAT",
      fuel: "FLEX",
    },
    {
      id: "231",
      description: "2022 FIAT PULSE IMPETUS 1.0 TURBO CVT",
      imageUrl: "/carro.jpeg",
      color: "BRANCA",
      marca: "FIAT",
      fuel: "FLEX",
    },
    {
      id: "212",
      description: "2022 FIAT PULSE IMPETUS 1.0 TURBO CVT",
      imageUrl: "/carro.jpeg",
      color: "BRANCA",
      marca: "FIAT",
      fuel: "FLEX",
    },
  ];

  return (
    <Box as="main">
      <Box display="flex" alignContent="center" justifyContent="center">
        <Image src={"/banner01.png"} width="1900px" height="650px" />
      </Box>

      <Flex
        alignItems="center"
        justifyContent="center"
        direction="column"
        as="section"
        w="100%"
        maxWidth={1200}
        mx="auto"
        mt="4"
        p="2"
        gap="30"
      >
        <Flex
          gap="30"
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
        >
          <WrapItem bg="gray.20" borderRadius="12" p="4">
            <Center w="280px" h="210px" flexDir="column">
              <Heading fontSize="3xl" mb="6" color="gray.50">
                Atendimento Online
              </Heading>

              <Text as="p" color="gray.50" textAlign="justify">
                Nosso objetivo é facilitar a vida de nossos clientes, com isso,
                você entrará em contato direto com um vendedor via Whatsapp.
                Solicite agora seu orçamento!
              </Text>
            </Center>
          </WrapItem>
          <WrapItem bg="gray.20" borderRadius="12" p="4">
            <Center w="280px" h="210px" flexDir="column">
              <Heading fontSize="3xl" mb="6" color="gray.50">
                Qualidade Garantida
              </Heading>

              <Text as="p" color="gray.50" textAlign="justify">
                Oferecemos peças originais retiradas de veículos como sucatas
                entre outros. Todas peças são devidamente revisadas e o envio
                com a devida nota fiscal.
              </Text>
            </Center>
          </WrapItem>
          <WrapItem bg="gray.20" borderRadius="12" p="4">
            <Center w="280px" h="210px" flexDir="column">
              <Heading fontSize="3xl" mb="6" color="gray.50">
                Frete Expresso
              </Heading>

              <Text as="p" color="gray.50" textAlign="justify">
                Trabalhamos com as principais transportadoras nacionais, com a
                logística integrada, prezando a qualidade e agilidade no
                atendimento.
              </Text>
            </Center>
          </WrapItem>
        </Flex>

        <SectionsCards
          title="Sucatas"
          data={products}
          text="TODOS OS CARROS"
          href="/"
        />

        <SectionsCards
          title="Peças"
          data={products}
          text="TODAS AS PEÇAS"
          href="/"
        />

        <SectionsHowToBuy />

        <Box
          h='8px'
          width="100%"
          bg="yellow.500"
        />
         
         <SectionsCardBrands />
        <Box
          h='8px'
          width="100%"
          bg="yellow.500"
        />

        <SectionAddress />
        
      </Flex>

    </Box>
  );
}
