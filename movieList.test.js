const {By, Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('testing adding, deleting, scratching off', async () => {

    let addField = driver.findElement(By.xpath('//input'))

    await addField.sendKeys('Monsters INC.')

    await driver.sleep(3000)

    await driver.findElement(By.xpath('//button[text()="Add"]')).click()

    await driver.sleep(3000)

    await driver.findElement(By.xpath('//li/span')).click()

    await driver.sleep(3000)

    await driver.findElement(By.xpath('//button[text()="x"]')).click()

    await driver.sleep(3000)
})

// test('testing crossing out', async () => {
//     await driver.findElement(By.xpath('//aside[contains(@class, "hide")]')).click()

//     await driver.sleep(3000)
// })

