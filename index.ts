import {getCallSites} from 'node:util';
import {describe, it} from 'node:test';
import assert from 'node:assert';

function foo(sourceMap) {
  return getCallSites(10, {sourceMap});
}

describe('getCallSite', () => {
  it('should get call sites without sourcemaps', () => {
    const sites = foo(false);
    assert.strictEqual(sites[0].functionName, 'foo');
  });

  it('should get call sites wit sourcemaps', () => {
    const sites = foo(true);
    assert.strictEqual(sites[0].functionName, 'foo');
  });
});
