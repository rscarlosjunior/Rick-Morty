import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"
import Episodes from '@/components/Episodes'

const localVue = createLocalVue()
localVue.use(Vuex)

const setEpisodes = [
  {
    id:'1',
    name:'Episode 1',
    air_date:'February 31,2099',
    characters:["1","2","3"],
  },
  {
    id:'2',
    name:'Episode 2',
    air_date:'February 31,2099',
    characters:["1","2","3"],
  },
  {
    id:'3',
    name:'Episode 3',
    air_date:'February 31,2099',
    characters:["1","2","3"],
  },
]
const store = new Vuex.Store({
  state: {
    allEpisodes: setEpisodes,
  },
  getters: {
    getEpisodes: (state) => state.allEpisodes,
  }
})
test('render all episodes', () => {
  const wrapper = mount(Episodes, {
    store,
    localVue
  })
  expect(wrapper.findAll('[data-test="episode"]')).toHaveLength(3)
})

test('verify id from first episodes', () => {
  const wrapper = mount(Episodes, {
    store,
    localVue
  })
  const epx = wrapper.find('[data-test="id"]')
  expect(epx.text()).toBe("1")  
})