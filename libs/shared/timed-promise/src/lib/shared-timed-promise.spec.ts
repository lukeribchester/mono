import { sharedTimedPromise } from './shared-timed-promise';

describe('sharedTimedPromise', () => {
  it('should work', () => {
    expect(sharedTimedPromise()).toEqual('shared-timed-promise');
  });
});
