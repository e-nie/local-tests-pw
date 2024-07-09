import {Page} from './page'

export class ProfilePage extends Page {
  constructor(page) {
    super(page)
  }

  async open() {
    return this.page.goto(`/profile/${process.env.PROFILE_ID}`)
  }
}
