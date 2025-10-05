const { test, expect } = require('@playwright/test');

test('Upload a single file with Playwright', async ({ page }) => {
  await page.goto('https://www.foundit.in/');  // Example: change to your target file upload site

  // Click upload button if required (adjust selector as needed)
  await page.locator('.mq-find-upload').click();

  // Set file path (update with your file name and path)
  const filePath = 'uploadfiles/testfile1.pdf';
  await page.locator('#file-upload').setInputFiles(filePath);

  // Optional wait to observe result
  await page.waitForTimeout(3000);
});



const { test, expect } = require('@playwright/test');

test('Upload multiple files with Playwright', async ({ page }) => {
  await page.goto('https://easyupload.io/');  // Example: adjust to demo site for multi-file upload

  // Paths to the files you want to upload
  const files = [
    'uploadfiles/testfile1.pdf',
    'uploadfiles/testfile2.pdf'
  ];

  await page.locator('#filesToUpload').setInputFiles(files);

  // Optional: Wait or assertion to confirm upload
  await page.waitForTimeout(3000);


  // To remove uploaded files, just setInputFiles to an empty array
await page.locator('#filesToUpload').setInputFiles([

    'uploadfiles/testfile1.pdf',
    'uploadfiles/testfile2.pdf'

]);

});

