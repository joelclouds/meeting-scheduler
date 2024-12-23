const { Builder, By, Key, until } = require('selenium-webdriver');

describe('End-to-End Meeting Scheduling', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should schedule a meeting', async () => {
    await driver.get('http://localhost:3000/schedule');
    await driver.findElement(By.name('title')).sendKeys('Test Meeting');
    await driver.findElement(By.name('description')).sendKeys('This is a test meeting');
    await driver.findElement(By.name('attendees')).sendKeys('John Doe');
    await driver.findElement(By.xpath("//button[text()='Schedule Meeting']")).click();
    await driver.wait(until.urlIs('http://localhost:3000/'), 10000);
    expect(await driver.getTitle()).toBe('Job Matching Platform');
  });
});