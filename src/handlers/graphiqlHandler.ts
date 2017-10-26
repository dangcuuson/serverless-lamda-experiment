import { graphqlSchema } from '../graphql/graphqlSchema';
import { graphql } from 'graphql';
import * as fs from 'fs';
import * as path from 'path';

const html = fs.readFileSync(path.resolve('src', 'handlers', 'graphiqlTemplate.html'), 'utf-8');

export const handler = (event: any, context: any, callback: any) => {
    callback(null, {
        headers: { 'Content-Type': 'text/html; charset=UTF-8' },
        statusCode: 200,
        body: html
    });
};