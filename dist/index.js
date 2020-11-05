"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recurly_1 = require("recurly");
const e = null;
/**
 * Error in library typings (switch `skipLibCheck` to false in tsconfig.json to see this error)
 * node_modules/recurly/lib/recurly.d.ts:2651:11 - error TS2304: Cannot find name 'AsyncIterable'.
 * 2651   each(): AsyncIterable<T>;
 */
// Compile error: The right-hand side of an 'instanceof' expression must be of type 'any' or of a type assignable to the 'Function' interface type.ts(2359)
// TODO: comment this out after you get this compilation error to see the next one
// if (e instanceof errors.ClientError) {}
if (e instanceof recurly_1.ClientError) {
    console.log('GOOD');
}
//# sourceMappingURL=index.js.map