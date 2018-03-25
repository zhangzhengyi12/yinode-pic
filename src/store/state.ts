import cache from '@/common/js/cache'

const CLOUD_SETTINGS = 'CLOUD_SETTINGS'
const cloudSettings = cache.get({}, CLOUD_SETTINGS)

const state = {
  cloudSettings
}

export default state
