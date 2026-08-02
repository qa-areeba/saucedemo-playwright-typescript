import { test as base, expect } from '../fixtures/baseFixture';

base.beforeAll(async () => {
    console.log('🚀 beforeAll - Starting Test Suite');
});

base.beforeEach(async () => {
    console.log('➡️ beforeEach - Starting Test');
});

base.afterEach(async () => {
    console.log('✅ afterEach - Test Completed');
});

base.afterAll(async () => {
    console.log('🏁 afterAll - Test Suite Finished');
});

export const test = base;
export { expect };