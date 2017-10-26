/**
 * Workaround for missing apollo-link dependency in graphql-tools
 * We don't want to install this package just to use the ApolloLink type
 */
declare module 'apollo-link' {
    type ApolloLink = any;
}