import type { GetServerSideProps } from "next";

import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";

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

        <Box
          display="flex"
          width="100%"
          flexDir={"column"}
          justifyContent="center"
          alignItems={"center"}
          borderRadius={4}
          bg="yellow.500"
          p={2}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text fontSize="3xl" fontWeight="semibold" color="gray.20">
            COMO COMPAR
          </Text>
        </Box>

        <Flex flexDir={{base: 'column' , md: 'row'}} >
          <Box p='4'>
          <Image src={"/imgcompar.png"} width="640px" height="479px" />
          </Box>

          <Text as="p" fontSize="24px" maxW='737px' fontWeight='semibold' color="gray.800" textAlign="justify" p='4'>
            Nosso atendimento e suporte é online feito via whatsapp. Nos envie
            uma mensagem com a lista de itens que deseja, que um de nossos
            vendedores irá entrar em contato o quanto antes. Após confirmação do
            pagamento, feito por PIX, iremos retirar as peças em nossos
            fornecedores e encaminhamos para nossos clientes. Os pedidos são
            enviados via transportadora ou Correios de segunda-feira a sábado,
            exceto feriados nacionais.
          </Text>
        </Flex>
      </Flex>

      <Footer />
    </Box>
  );
}
