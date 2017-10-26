import { graphql } from 'graphql';
import { graphqlSchema } from '../graphql/graphqlSchema';

export const handler = async (event: any, context: any, callback: any) => {
    try {
        const payload = JSON.parse(event.body);
        const requestString = payload[Object.keys(payload)[0]];

        const result = await graphql(graphqlSchema, requestString);
        callback(null, {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            statusCode: 200,
            body: JSON.stringify(result)
        });
    } catch (err) {
        // TODO: if production, hide the actual error
        callback(null, {
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            statusCode: 400,
            body: JSON.stringify(err)
        });
    }

};