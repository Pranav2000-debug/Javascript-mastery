const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');


// UNIT TESTING 
// test() is globally available while using Jest --> 2 Args.
test('Should output name and age', () => {
    const text = generateText('Max', 29);
    // expect() is provided by the assertion library from Jest
    // expect (receive something) and (what is expected); 
    expect(text).toBe('Max (29 years old)'); 
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
});

// INTEGRATION TEST
test('should generate a vaild text output', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 80, // // See the steps happen
        // args: ['--windows-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/Section-31-Testing/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Anna');
    await page.click('input#age');
    await page.type('input#age', '28');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', (element) => {
       return element.textContent;
    });
    expect(finalText).toBe('Anna (28 years old)');
}, 10000);