import {test, expect} from '../common/test'
import loginWithApi from '../common/log-in-with-api'

test.describe('Delivery', () => {
  test('Delivery', async ({page, request, context, deliveryPage}) => {
    await loginWithApi(page, request, context, process.env.EMAIL, process.env.PASSWORD),
      await request.patch(`${process.env.API_BASE_URL}/user/shipping`, {
        data: {
          fullName: 'John',
          countryName: 'Germany',
          state: 'Berlin',
          address: '',
          city: '',
          zipCode: null,
          contactPhone: '',
          countryCode: '49',
        },
        // headers: {
        //   Cookie: process.env.COOKIE,
        // },

        headers: {
          Cookie: Object.entries(finalCookies)
            .map(([key, value]) => `${key}=${value}`)
            .join('; '),
        },
      }),
      await deliveryPage.open()

    await deliveryPage.input.city.fill('Los Angeles')
    //говорим - перехвати такой-то запрос
    const responsePromise = page.waitForResponse(
      response =>
        response.url() === `${process.env.API_BASE_URL}/user/shipping` &&
        response.request().method() === 'PATCH'
    )
    await deliveryPage.button.save.click()
    expect((await responsePromise).status()).toEqual(200)
    await page.reload()
    await expect(await deliveryPage.input.city).toHaveValue('Los Angeles')
  })
})
