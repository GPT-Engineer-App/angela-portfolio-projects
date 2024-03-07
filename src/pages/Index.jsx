import { Box, Container, Heading, SimpleGrid, Text, VStack, Image, Button, Link, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  const projects = [
    {
      title: "E-commerce Store",
      description: "A fully-functional e-commerce platform with payment integration.",
      image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlLWNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHx8fDE3MDk4MjkzNDh8MA&ixlib=rb-4.0.3&q=80&w=1080",
      github: "https://github.com/Angela/e-commerce-store",
      demo: "https://e-commerce-store.angela.dev",
    },
    {
      title: "Social Media App",
      description: "A social networking app with real-time chat and post sharing features.",
      image: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcHxlbnwwfHx8fDE3MDk4MjkzNDl8MA&ixlib=rb-4.0.3&q=80&w=1080",
      github: "https://github.com/Angela/social-media-app",
      demo: "https://social-media-app.angela.dev",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlfGVufDB8fHx8MTcwOTgyOTM0OXww&ixlib=rb-4.0.3&q=80&w=1080",
      github: "https://github.com/Angela/portfolio-website",
      demo: "https://portfolio.angela.dev",
    },
    {
      title: "Task Management Tool",
      description: "A task management and collaboration tool for teams.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHRvb2x8ZW58MHx8fHwxNzA5ODI5MzQ5fDA&ixlib=rb-4.0.3&q=80&w=1080",
      github: "https://github.com/Angela/task-management-tool",
      demo: "https://task-management.angela.dev",
    },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10}>
        <Heading as="h1" size="2xl">
          Angela's Portfolio
        </Heading>
        <Text fontSize="xl">Hi, I'm Angela, a full-stack developer with a passion for building beautiful and functional web applications.</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {projects.map((project, index) => (
            <Box key={index} bg={useColorModeValue("gray.100", "gray.700")} boxShadow="lg" rounded="md" p={5} position="relative" overflow="hidden" transition="transform 0.2s" _hover={{ transform: "scale(1.05)" }}>
              <Box as="a" href={project.demo} target="_blank" rel="noopener noreferrer" position="relative" display="block">
                <Image src={project.image} alt={project.title} rounded="md" mb={4} />
              </Box>
              <VStack align="start" spacing={3}>
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
                <Text fontSize="sm">{project.description}</Text>
                <Box>
                  <Link href={project.github} isExternal>
                    <Button leftIcon={<Icon as={FaGithub} />} mr={2}>
                      Code
                    </Button>
                  </Link>
                  <Link href={project.demo} isExternal>
                    <Button leftIcon={<Icon as={FaExternalLinkAlt} />}>Demo</Button>
                  </Link>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;
