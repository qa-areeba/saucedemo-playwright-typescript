import { test, expect } from '../base/baseTest';
import { CommonUtils } from '../utils/CommonUtils';

test('Generate Random Email', async () => {

    const email = CommonUtils.generateRandomEmail();

    console.log('Generated Email:', email);

    expect(email).toMatch(/^automation\d+@gmail\.com$/);

});
