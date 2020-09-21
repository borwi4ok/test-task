<template>
  <div class="face-container shadow">
    <nav class="face-container__navbar">
      <ul class="face-container__ul">
        <li v-for="(navItem,i) in this.nav" :key="i">
          <a>{{navItem}}</a>
        </li>
      </ul>
    </nav>
    <div class="face-container__head-logo">
      <img src="../svg/logo.svg" width="127px" height="178px" />
      <div class="face-container__logo-text">
        <span class="face-container__logo-text_blockchain">blockchain</span>
        <span class="face-container__logo-text_hackathon">hackathon</span>
      </div>
    </div>
    <div class="face-container__info">
      <div class="face-container__info-prize">
        <span class="face-container__info-prize-title">Призовой фонд</span>
        <span class="face-container__info-prize-amount">1 500 000 &#8381;</span>
      </div>
      <div class="face-container__subinfo">
        <div>
          <img src="../svg/face-1-icon.svg" width="80px" height="75px" />
          <span>24 сентября - 1 ноября 2020</span>
        </div>
        <div>
          <img src="../svg/face-2-icon.svg" width="80px" height="75px" />
          <span>Место проведения</span>
        </div>
      </div>
      <div class="face-container__btn">
        <button type="button">ПРИНЯТЬ УЧАСТИЕ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    nav() {
      return this.$store.getters.nav;
    }
  },
  methods: {
    bla() {
      console.log(this.$store.getters.nav);
    }
  }
};
</script>

<style scoped>
.face-container {
  display: grid;
  position: relative;
  font-family: "Montserrat", sans-serif;
  background-color: #020941;
  color: #fff;
  /* Подставить background */
  /*  no-repeat; */
  /* ~ 1 of 10 page */
  height: 11.36%;
}

.face-container::after {
  position: absolute;
  content: url("../svg/face-background.png");
  opacity: 0.2;
  left: 305px;
  top: 60px;
  z-index: 100;
}

.face-container__navbar {
  display: grid;
  padding: 60px 50px 50px 0;
  margin-left: 370px;
}

.face-container__ul {
  display: grid;
  grid-auto-flow: column;
  text-decoration: none;
}

li {
  list-style-type: none;
  text-align: right;
}

a {
  font-size: 22px;
  font-weight: bold;
}

.face-container__head-logo {
  display: grid;
  margin-left: 97px;
  grid-auto-flow: column;
  justify-items: start;
  /* 130-logo 380-text */
  grid-template-columns: 130px 380px auto;
}

.face-container__logo-text {
  display: grid;
  font-weight: 400;
  grid-template-rows: auto 54px 26px auto;
  margin-top: 45px;
  margin-left: 15px;
}

.face-container__logo-text_blockchain {
  grid-row-start: 2;
  font-size: 67px;
  align-self: end;
}

.face-container__logo-text_hackathon {
  font-size: 33px;
  grid-row-start: 3;
  justify-self: end;
}

.face-container__info {
  display: grid;
  margin-left: 270px;
  margin-bottom: 217px;
}

.face-container__info-prize {
  display: grid;
  margin-top: 55px;
  justify-items: start;
}

.face-container__info-prize-title {
  font-size: 50px;
  font-weight: 500;
}

.face-container__info-prize-amount {
  font-size: 120px;
  font-weight: bold;
}

.face-container__subinfo {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  font-weight: bold;
  font-size: 25px;
  gap: 80px;
  margin-top: 30px;
}

.face-container__subinfo div {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 20px;
}

.face-container__btn {
  display: grid;
  align-items: start;
  margin-top: 65px;
}

.face-container__btn button {
  width: 336px;
  height: 83px;
  font-weight: bold;
  font-size: 20px;
  background: linear-gradient(to right, #3600ec, #7c1dc6);
  color: #fff;
  border: 3px solid #fff;
  font-family: "Montserrat", sans-serif;
}
</style>

<style>
.shadow {
  box-shadow: 0px 0px 30px 13px rgba(0, 0, 0, 0.3);
}
a {
  cursor: pointer;
}
</style>

