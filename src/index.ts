import { errors, ClientError } from 'recurly';

const e: any = null;

/**

 * node_modules/recurly/lib/recurly.d.ts:2651:11 - error TS2304: Cannot find name 'AsyncIterable'.
 * 2651   each(): AsyncIterable<T>;
 */

/**
 * Compile error: The right-hand side of an 'instanceof' expression must be of type 'any' or of a type assignable to the 'Function' interface type.ts(2359)
 * TODO: comment this out after you get this compilation error to see the next one 
 */
if (e instanceof errors.ClientError) {}


// TODO: switch `skipLibCheck` to true in tsconfig.json to get to this run-time error
if (e instanceof ClientError) {
    console.log('GOOD');
}