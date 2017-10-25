import { makeExecutableSchema } from 'graphql-tools';
import { PMResolvers, PMRootFields, PMTypeDefs } from './graphqlPrimaryMaths';

/************************************************
*                                               *
*                      SCHEMA                   *
*                                               *
************************************************/

const resolver = {
    RootQuery: {
        ...PMResolvers.root,
    }
};

const schemaTypeDef = `
    schema {
        query: RootQuery
    }

    type RootQuery {
        ${PMRootFields}
    }

    ${PMTypeDefs}
`;

export const graphqlSchema = makeExecutableSchema({
    typeDefs: [schemaTypeDef],
    resolvers: resolver,
});