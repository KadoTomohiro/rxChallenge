import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {RxChallengeApp} from '../app/rx-challenge';

beforeEachProviders(() => [RxChallengeApp]);

describe('App: RxChallenge', () => {
  it('should have the `defaultMeaning` as 42', inject([RxChallengeApp], (app: RxChallengeApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([RxChallengeApp], (app: RxChallengeApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

