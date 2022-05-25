import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import UserCardComp from '../github/UserCardComp.vue'

describe('Github UserCardComp', () => {
  it("renders author's html", () => {
    const author = process.env.GITHUB_AUTHOR
    const wrapper = mount(UserCardComp, { props: { author: author, search: author } })

    it('renders the correct data', () => {
      expect(wrapper.html()).toContain(author)
    })
  })
})
