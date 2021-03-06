
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})
test('test draw', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const displayed = await draw.isDisplayed()
    expect(draw).toBe(true)
})
test('test adding bots', async () => {
    const draw = await driver.findElement(By.id('draw'))
    const displayed = await draw.isDisplayed()
    const bots = await driver.findElement(By.className('bot-btn'))
    const displayed2 = await bots.isDisplayed()
})
