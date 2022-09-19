import { Box, Flex, Text } from "@chakra-ui/react";

import { useParallax } from "react-scroll-parallax";

import Image from "next/image";

export function SectionsHowToBuy( ) {
  const { ref } = useParallax<HTMLImageElement>({
    translateY: [40, -40],
    opacity: [0.2, 5, 'easeInOut']
  }); 

  return (
    <>
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

        <Flex ref={ref} flexDir={{base: 'column' , md: 'row'}} >
          <Box 
         
          p='4'
          >
          <Image src={"/imgcompar.png"} width="640px" height="479px" />
          </Box>

          <Text   as="p" fontSize="24px" maxW='737px' fontWeight='semibold' color="gray.800" textAlign="justify" p='4'>
            Nosso atendimento e suporte é online feito via whatsapp. Nos envie
            uma mensagem com a lista de itens que deseja, que um de nossos
            vendedores irá entrar em contato o quanto antes. Após confirmação do
            pagamento, feito por PIX, iremos retirar as peças em nossos
            fornecedores e encaminhamos para nossos clientes. Os pedidos são
            enviados via transportadora ou Correios de segunda-feira a sábado,
            exceto feriados nacionais.
          </Text>
        </Flex>

    </>

  )
}