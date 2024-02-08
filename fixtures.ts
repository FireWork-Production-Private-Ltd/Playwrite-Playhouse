// import { expect as baseExpect } from '@playwright/test';
// import type { Page, Locator } from '@playwright/test';

// export { test } from '@playwright/test';

// export const expect = baseExpect.extend({
//   async toHaveAmount(locator: Locator, expected: number, options?: { timeout?: number }) {
//     const assertionName = 'toHaveAmount';
//     let pass: boolean;
//     let matcherResult: any;
//     try {
//       await baseExpect(locator).toHaveAttribute('data-amount', String(expected), options);
//       pass = true;
//     } catch (e: any) {
//       matcherResult = e.matcherResult;
//       pass = false;
//     }

//     const message = pass
//       ? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
//           '\n\n' +
//           `Locator: ${locator}\n` +
//           `Expected: ${this.isNot ? 'not' : ''}${this.utils.printExpected(expected)}\n` +
//           (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')
//       : () =>  this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
//           '\n\n' +
//           `Locator: ${locator}\n` +
//           `Expected: ${this.utils.printExpected(expected)}\n` +
//           (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');

//     return {
//       message,
//       pass,
//       name: assertionName,
//       expected,
//       actual: matcherResult?.actual,
//     };
//   },
// });

import { expect as baseExpect } from '@playwright/test';
import type { Page, Locator } from '@playwright/test';

// Export only necessary elements
export { test } from '@playwright/test';

export const expect = baseExpect.extend({
  async toHaveAttributeWithText(
    locator: Locator,
    attributeName: string,
    expectedText: string | RegExp,
    options?: { timeout?: number }
  ) {
    const assertionName = 'toHaveAttributeWithText';
    let pass: boolean;
    let matcherResult: any;

    try {
      // Check if the attribute exists
      await baseExpect(locator).toHaveAttribute(attributeName, options);

      // Fetch the attribute value
      const actualText = await locator.evaluate((el, attributeName) => el.getAttribute(attributeName), attributeName);

      // Match against expected text or RegExp
      pass =
        typeof expectedText === 'string'
          ? actualText === expectedText
          : expectedText.test(String(actualText));
    } catch (e: any) {
      matcherResult = e.matcherResult;
      pass = false;
    }

    const message = pass
      ? () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
          '\n\n' +
          `Locator: ${locator}\n` +
          `Attribute: ${attributeName}\n` +
          `Expected: ${this.isNot ? 'not' : ''}${this.utils.printExpected(expectedText)}\n` +
          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')
      : () => this.utils.matcherHint(assertionName, undefined, undefined, { isNot: this.isNot }) +
          '\n\n' +
          `Locator: ${locator}\n` +
          `Attribute: ${attributeName}\n` +
          `Expected: ${this.isNot ? 'not' : ''}${this.utils.printExpected(expectedText)}\n` +
          (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');

    return {
      message,
      pass,
      name: assertionName,
      expected: { attributeName, expectedText },
      actual: matcherResult?.actual,
    };
  },
});
