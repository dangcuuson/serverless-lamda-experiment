import { graphqlSchema } from './graphqlSchema';
import { graphql } from 'graphql';

const maybeJson = str => {
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
};

/**
 * Lambda function handler
 */
export const handler = (event: any, context: any, callback: any) => {
    let payload = maybeJson(event.body);
    let requestString = payload[Object.keys(payload)[0]];

    graphql(graphqlSchema, requestString)
        .then(body => {
            callback(null, {
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
                statusCode: 200,
                body: JSON.stringify(body)
            })
        });
};