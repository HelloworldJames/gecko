// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.reduce
es5id: 15.4.4.21-1-5
description: Array.prototype.reduce applied to number primitive
---*/

        function callbackfn(prevVal, curVal, idx, obj) {
            return obj instanceof Number;
        }

            Number.prototype[0] = 1;
            Number.prototype.length = 1;

assert(Array.prototype.reduce.call(2.5, callbackfn, 1), 'Array.prototype.reduce.call(2.5, callbackfn, 1) !== true');

reportCompare(0, 0);
