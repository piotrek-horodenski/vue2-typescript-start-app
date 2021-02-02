import Vue from 'vue'

import { router } from '@/router'
import guards from '@/router/guards'

export default () => {
  guards.forEach(guard => {
    router.beforeEach(guard)
  })
}
