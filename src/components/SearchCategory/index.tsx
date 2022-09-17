import { Button, Flex, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../../lib/prismic";
import Link from "next/link";
import Prismic from "prismic-javascript";

import PrismicDom from "prismic-dom";
import { Document } from "prismic-javascript/types/documents";



export default function SearchCategory() {
  const [categoriesList, setCategoriesList] = useState<Document[]>();
  const [selectedCategory, setSelectedCategory] = useState<string>();
  const [productsList, setProductsList] = useState<Document[]>();
  const [selectedProduct, setSelectedProduct] = useState<string>();

  categoriesList?.sort(function (a, b) {
    return a.uid < b.uid ? -1 : a.uid > b.uid ? 1 : 0;
  });

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      try {
        const data = await client().query([
          Prismic.Predicates.at("document.type", "brand"),
        ]);

        setCategoriesList(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadProducts();
  }, []);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      try {
        const data = await client().query([
          Prismic.Predicates.at("document.type", "brand"),
        ]);

        const resultsId = data.results.find((category) => {
          return category.uid === selectedCategory.toLowerCase();
        });

        const products = await client().query([
          Prismic.Predicates.at("document.type", "car"),
          Prismic.Predicates.at("my.car.brand", resultsId.id),
        ]);

        setProductsList(products.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadProducts();
  }, [selectedCategory]);


  return (
    <Flex as="form" p="4">
      <Flex flexDir={{ base: "column", md: "row" }} gap={3}>
        <Select
          w={{ base: "100%", md: "468px", lg: "468px" }}
          h={"48px"}
          bg="gray.80"
          focusBorderColor="red.500"
          border={0}
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option style={{ background: "#E9E9E9", height: "48px" }}>
            MARCA
          </option>

          {categoriesList?.map((category) => {
            return (
              <option key={category.id} style={{ background: "#E9E9E9", height: "48px" }}>
                {PrismicDom.RichText.asText(category.data.title)}
              </option>
            );
          })}
        </Select>

        <Select
          bg="gray.80"
          h={"48px"}
          focusBorderColor="red.500"
          border={0}
          onChange={(e) => setSelectedProduct(e.target.value)}
          value={selectedProduct}
        >
          <option style={{ background: "#E9E9E9", height: "48px" }}>
            MODELO
          </option>

          {productsList
            ? productsList?.map((category) => {
                return (
                  <option key={category.id} style={{ background: "#E9E9E9", height: "48px" }}>
                    {category.uid}
                  </option>
                );
              })
            : null}
        </Select>

        <Link passHref href={`/produtos/${selectedProduct}`}>
          <Button
            bg="red.800"
            color={"white"}
            h={"48px"}
            w={"168px"}
            _hover={{ bg: "red.700" }}
          >
            PESQUISAR
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
