import { GraphQLServer } from "graphql-yoga";
import prisma from "./prisma";


const typeDefs = "src/schema.graphql";
import resolvers from "./resolvers/index";
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context(request) {
    return {
      request,
      prisma
    };
  }
});

server.start(() => {
  console.log("The server is up");
});
