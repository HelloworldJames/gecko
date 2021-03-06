// Copyright (C) 2017 V8. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
author: Sathya Gunasekaran
description: finally calls the SpeciesConstructor
esid: sec-promise.prototype.finally
features: [Promise.prototype.finally]
flags: [async]
---*/


var count = 0;
class FooPromise extends Promise {
  constructor(resolve, reject) {
    count++;
    return super(resolve, reject);
  }
}

new FooPromise(r => r())
  .finally(() => {})
  .then(() => {
    assert.sameValue(count, 6, "6 new promises were created");
    $DONE();
});
