import Head from "next/head";
import {
  Badge,
  Box,
  Button,
  Center,
  ChakraProvider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Chakra() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <>
      <Head>
        <title>Chakra UI</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ChakraProvider>
        <Center paddingTop="14">
          <Heading as="h1" size="xl" color="primary.900">
            Learning Chakra UI
          </Heading>
        </Center>
        <Center paddingTop="14">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p="6">
              <Box d="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {property.beds} beds &bull; {property.baths} baths
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {property.title}
              </Box>

              <Box>
                {property.formattedPrice}
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box d="flex" mt="2" alignItems="center">
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      color={i < property.rating ? "teal.500" : "gray.300"}
                    />
                  ))}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {property.reviewCount} reviews
                </Box>
              </Box>
            </Box>
          </Box>
        </Center>
        <Stack spacing={4} bg="white" p={8} borderRadius="lg">
          <Text as="p" fontSize="md" color="primary.500">
            Your first Chakra components:
          </Text>
          <Button variantColor="primary" isFullWidth>
            Click me
          </Button>
        </Stack>
      </ChakraProvider>
    </>
  );
}
