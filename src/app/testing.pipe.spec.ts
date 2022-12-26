import { TestingPipe } from './testing.pipe';

describe('TestingPipe', () => {
  it('create an instance', () => {
    const pipe = new TestingPipe();
    expect(pipe).toBeTruthy();
  });
});
