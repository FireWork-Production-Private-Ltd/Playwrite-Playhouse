// import { test, expect } from '@playwright/test';
// test('should create a bug report', async ({ baseURL,request }) => {
//     const newIssue = await request.post(`${baseURL}/posts`, {
//       data: {
//         title: '[Bug] report 1',
//         content: 'Bug description',
//         status: 'publish',
//       }
//     });
//     // console.log(newIssue);
//     expect(newIssue.ok()).toBeTruthy();

// //     const issues = await request.get(`https://qa-utsav-patel.rt.gw/wp-json/wp/v2/posts?per_page=1`);
// //   expect(issues.ok()).toBeTruthy();
// //   console.log(await issues.json());
// //   expect(await issues.json()).toContainEqual(expect.objectContaining({
// //     title: '[Bug] report 1',
// //     body: 'Bug description'
// //   }));

// const issues = await request.get(`${baseURL}/posts?per_page=1`);
// expect(issues.ok()).toBeTruthy();

// const responseJson = await issues.json();

// // Ensure the response contains an object with the expected title and body
// // expect(responseJson).toEqual(
// //     expect.arrayContaining([
// //       expect.objectContaining({
// //         title: { rendered: '[Bug] report 1' },
// //         body: { rendered: 'Bug description' }
// //       })
// //     ])
// //   );
// console.log(responseJson);
// const hasExpectedIssue = responseJson.some(issue => 
//     issue.title.rendered === '[Bug] report 1' && issue.content.rendered === '<p>Bug description</p>\n'
//   );
//   expect(hasExpectedIssue).toBeTruthy();

//   });