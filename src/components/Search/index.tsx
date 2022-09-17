import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { Box, Button, Flex, Input } from "@chakra-ui/react";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    router.push(`/busca?q=${encodeURIComponent(search)}`);

    setSearch("");
  }

  return (
    <Box as="main">
      <Flex
        as="section"
        align="center"
        justify="center"
        direction="row"
        padding="0 16px"
      >
        <Flex as="form" onSubmit={handleSearch} gap="2">
          <Input
            bg="white"
            w={{ base: "100%", md: "20rem", lg: "20rem" }}
            placeholder="Digite o Veículo que procura!"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button w={["4rem", "6rem"]} bg="red.800" color="white" type="submit">
            <RiSearchLine fontSize="20" />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
