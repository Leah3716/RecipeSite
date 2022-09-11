import { MinutesHoursPipe } from './minutes-hours.pipe';

describe('MinutesHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new MinutesHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
