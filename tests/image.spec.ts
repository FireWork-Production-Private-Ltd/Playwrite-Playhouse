import { test, expect } from '@playwright/test';

test('should upload an image in WordPress', async ({ page }) => {
  // Navigate to the WordPress admin media library
  await page.goto('https://qa-utsav-patel.rt.gw/wp-admin/upload.php');

  // Click on the 'Add New' button to open the media uploader modal
  await page.click('text="Add New Media File"');

  // Wait for the media uploader modal to appear
//   await page.waitForSelector('.plupload-browse-button');

  // Path to the image file you want to upload
//   const imagePath = 'manheim.png';

//   // Selector for the file input element in the media uploader modal
//   const fileInputSelector = '.media-frame-content input[type="file"]';

//   // Upload the image
//   await page.setInputFiles(fileInputSelector, imagePath);

//   // Wait for the upload to complete
//   await page.waitForSelector('.thumbnail');

//   // Assert that the upload was successful
//   const thumbnailVisible = await page.isVisible('.thumbnail');
//   expect(thumbnailVisible).toBeTruthy();
await expect(page.locator( "div[class='wrap'] h1" )).toHaveText( 'Upload New Media' ) //Wait for Upload media text

    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      page.waitForEvent( 'filechooser' ),
      // Opens the file chooser.
      page.locator( 'role=button[name="Select Files"i]' ).click()
    ])
    await fileChooser.setFiles([ 'uploads/manheim.png' ])

    // await page.waitForSelector('.attachment-details input[name="alt"]')).type('manheim');

    //Validate the media items.
    await expect(page.locator( '.media-list-title' )).toHaveText( 'manheim' )
});
