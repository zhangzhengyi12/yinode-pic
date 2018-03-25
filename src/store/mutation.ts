import cache from '@/common/js/cache'
import { MutationTree } from 'vuex'
import * as types from './mutation-types'

const CLOUD_SETTINGS = 'CLOUD_SETTINGS'

const mutations: MutationTree<any> = {
  [types.SAVE_CLOUD](state, cloud) {
    let curSet = state.cloudSettings
    let key = cloud.id
    curSet[key] = cloud.data
    cache.set(curSet, CLOUD_SETTINGS)
  },
  [types.CLEAR_CLOUD](state, id) {
    let curSet = state.cloudSettings
    curSet[id] = null
    cache.set(curSet, CLOUD_SETTINGS)
  }
}

export default mutations
