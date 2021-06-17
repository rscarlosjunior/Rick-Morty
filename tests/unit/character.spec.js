import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from "vuex"
import Character from '@/components/Character'

const localVue = createLocalVue()
localVue.use(Vuex)

const setList = [
  {
      id:'1',
      name:'Morty',
      image:'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      status:'dead',
      species:'unknow',
      origin:{
        name:'unknow'
      },
      episode:[1,2,3,4]
  },
  {
      id:'2',
      name:'Morty',
      image:'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      status:'alive',
      species:'human',
      origin:{
        name:'earth'
      },
      episode:[1,2,3,4]
  },
  {
      id:'3',
      name:'Morty',
      image:'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      status:'alive',
      species:'alien',
      origin:{
        name:'marte'
      },
      episode:[1,2,3,4]
  }
]
const fakeArr = ["1","2","3"]

const store = new Vuex.Store({
  state: {
    allCharacters: setList,
    allCharacterEpisode: fakeArr
  },
  getters: {
    getCharacters: (state) => state.allCharacters,
    getEpisodeCharacter: (state) => state.allCharacterEpisode,
  }
})
test('renders all character box', () => {
  const wrapper = mount(Character, {
    store,
    localVue
  })
  expect(wrapper.findAll('[data-test="character"]')).toHaveLength(3)
})