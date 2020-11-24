const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  
  type ToDo {
    todo: String
    finshed: Boolean
  }

  type Query {
    toDoList: [ToDo]
  }

  type Mutation {
    addTodo(todo:string, finshed: Boolean)ToDo
  }
`;


const toDoList = [
  {
    todo: '事务1',
    finshed: true
  },
  {
    todo: '事务2',
    finshed: false
  },
  {
    todo: '事务3',
    finshed: false
  }
]

const resolvers = {
  Query: {
    toDoList: () => toDoList,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});