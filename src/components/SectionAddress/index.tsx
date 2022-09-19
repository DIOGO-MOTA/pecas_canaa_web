import { Flex, Icon, Text } from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";

export function SectionAddress() {
  return (
    <Flex
      ml={{ base: 0, md: 4 }}
      mt={{ base: 12, md: 12, lg: 0 }}
      justifyContent={{ base: "center", md: "center", lg: "auto" }}
      mb='20'
    >
      <Flex flexDir={{base: 'column' , md: 'row' } }>
        <Flex
          flex="1"
          overflow={"hidden"}
          w={{ base: "380px", md: "100%", lg: "100%" }}
          p={{ base: 2, md: 0, lg: "12" }}
          alignItems={{ base: "center", md: "auto", lg: "auto" }}
          mb={{ base: 12, md: 12, lg: 0 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.8385546363758!2d-49.489346717623356!3d-16.666525469059867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e5d75fb9ca853%3A0x9999a039556bcc20!2sR.%20Ladomi%20de%20Lima%20-%20St.%20Cristina%20II%2C%20Trindade%20-%20GO%2C%2075389-134!5e0!3m2!1spt-BR!2sbr!4v1654688615357!5m2!1spt-BR!2sbr"
            width="600"
            height="350"
          ></iframe>
        </Flex>

        <Flex
          flexDir={"column"}
          justifyContent={{ base: "center", md: "center", lg: "auto" }}
          alignItems={{
            base: "center",
            md: "center",
            lg: "flex-start",
          }}
        >
            <Flex maxW='424px' >
              <Icon as={MdLocationPin} boxSize={12} mr={2} />
              <Text  as="strong"  fontWeight="bold" fontSize={"xl"} mb={4}>
                AVENIDA NEDDERMEYER, 1190 - VILA CANAÃ, GOIÁS CEP:
                74423-210
              </Text>
            </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
