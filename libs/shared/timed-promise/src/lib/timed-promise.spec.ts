import { TimedPromise } from '@lgr.dev/timed-promise';

function getTimedPromise(expected: 'resolve' | 'reject' | 'timeout'): TimedPromise<string, string> {
  return new TimedPromise<string, string>(
    (resolve, reject) => {
      if (expected === 'resolve') { return resolve('resolve'); }
      if (expected === 'reject') { return reject('reject'); }

      setTimeout(() => {
        resolve('resolve');
      }, 30);
    },
    15,
    () => {
      return 'timeout';
    }
  );
}

describe('TimedPromise', () => {
  it('should be resolved', async () => {
    const promise: string = await getTimedPromise('resolve');
    expect(promise).toMatch('resolve');
  });

  it('should be rejected', async () => {
    expect.assertions(1);

    try {
      await getTimedPromise('reject');
    } catch (error: unknown) {
      expect(error).toMatch('reject');
    }
  });

  it('should time out', async () => {
    expect.assertions(1);

    try {
      await getTimedPromise('timeout');
    } catch (error: unknown) {
      expect(error).toMatch('timeout');
    }
  });
});
