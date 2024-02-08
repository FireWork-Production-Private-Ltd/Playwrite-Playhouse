import { expect, test } from '@playwright/test';

// Define a custom matcher function
expect.extend({

    toBeWithinRange(received: number, floor: number, ceiling: number): { pass: boolean; message: () => string } {
    const pass = received >= floor && received <= ceiling;
    if(pass) {
        return {
            pass: true,
            message: () => `Utsav Expected ${received} not to be within range ${floor} - ${ceiling}`,
        };
    } else {
        return {
            pass: false,
            message: () => `Utsav Expected ${received} to be within range ${floor} - ${ceiling}`,
        };
    }
}
});

// Test case using the custom matcher
test('Test custom matcher', async () => {
    expect(10).toBeWithinRange(5, 15); // This will pass
    expect(25).not.toBeWithinRange(10, 20); // This will pass
    expect(30).toBeWithinRange(10, 20); // This will fail
});