import { test as base } from '@playwright/test';

type TestFixtures = {
  testId: string;
};

export const test = base.extend<TestFixtures>({
  testId: [async ({}, use, testInfo) => {
    await use(`${testInfo.project.name}-${testInfo.title}-${Date.now()}`);
  }, { scope: 'test' }],
});

export const expect = test.expect;


