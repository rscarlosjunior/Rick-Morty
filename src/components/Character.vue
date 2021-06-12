<template>
  <div v-if="!loading" class="container characters pt-4">
    <div v-for="char in character" :key="char.name" class="character__item">
      <div class="character__box">
        <div class="character__img-box">
          <img class="character__img" :src="char.image" />
        </div>
        <div class="character__info">
          <h3 class="character__name">{{ char.name }}</h3>
          <div class="information-box">
            <div class="all-info">
              <span class="character__customer"> <span class="character__description">Age:</span> {{ char.age }}</span>
              <span class="character__customer"> <span class="character__description">Origin:</span> {{ char.origin }}</span>
              <span class="character__customer"> <span class="character__description">Episode List:</span> {{ char.list }}</span>
            </div>
            <button
              :class="['btn character__btn desktop',{'btn--green': char.name,},]"
            >
              <span> More information</span>
            </button>
          </div>
        </div>
      </div>
      <button
        :class="['btn character__btn mobile',{'btn--green': char.name,},]"
      >
        <span> More information</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: [
        {
          name: "Rick",
          age: 55,
          image:'https://scontent.fvix1-1.fna.fbcdn.net/v/t1.6435-9/37062855_173353523530239_6288408248257085440_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=JQu1Ej4hS9UAX8CnimO&tn=uyphJc1HGCLNMY1P&_nc_ht=scontent.fvix1-1.fna&oh=07b86170b0f8e1f68a82b3489dafc0d5&oe=60C91914',
          origin: "Earth 155",
          list: '1-1000'
        },
        {
          name: "Morty",
          age: 55,
          image:'https://i.pinimg.com/originals/02/2b/bb/022bbb45b3257c3c494a1de93179bd8a.png',
          origin: "Earth 155",
          list: '1-1000'
        },
        {
          name: "Mr.Poopybutthole ",
          age: 'Immortal',
          image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-and-morty-poopybuthole-1574420029.jpg?crop=0.704xw:1.00xh;0,0&resize=768:*',
          origin: "Universe",
          list: '1-1000'},
      ],
    };
  },
};
</script>