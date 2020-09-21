<template>
  <div class="judges">
    <div class="judges__title">
      <span>Жюри</span>
    </div>
    <div class="wrapper">
      <div class="judges__block">
        <div class="container">
          <img src="../svg/judge-1.png" />
          <div class="container__fullname">
            <span>Фамилия Имя</span>
          </div>
          <div class="container__info">
            <span>Дополнительная информация</span>
          </div>
        </div>
        <div class="container">
          <img src="../svg/judge-2.png" />
          <div class="container__fullname">
            <span>Фамилия Имя</span>
          </div>
          <div class="container__info">
            <span>Дополнительная информация</span>
          </div>
        </div>
        <div class="container">
          <img src="../svg/judge-3.png" />
          <div class="container__fullname">
            <span>Фамилия Имя</span>
          </div>
          <div class="container__info">
            <span>Дополнительная информация</span>
          </div>
        </div>
        <div class="container">
          <img src="../svg/judge-4.png" />
          <div class="container__fullname">
            <span>Фамилия Имя</span>
          </div>
          <div class="container__info">
            <span>Дополнительная информация</span>
          </div>
        </div>
        <div class="container">
          <img src="../svg/judge-5.png" />
          <div class="container__fullname">
            <span>Фамилия Имя</span>
          </div>
          <div class="container__info">
            <span>Дополнительная информация</span>
          </div>
        </div>
        <div class="container">
          <img src="../svg/judge-6.png" />
          <div class="container__fullname">
            <span>Фамилия Имя</span>
          </div>
          <div class="container__info">
            <span>Дополнительная информация</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.judges {
  display: grid;
  height: 11.36%;
  color: black;
  grid-template-rows: 200px auto;
}

.judges__title {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  font-size: 65px;
  font-weight: bold;
}

.judges__title span {
  margin-left: 100px;
  margin-top: 105px;
}

.wrapper {
  display: grid;
  grid-auto-flow: column;
  margin-top: 40px;
  padding: 0 320px;
}

.judges__block {
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  gap: 45px;
}

.container__fullname {
  font-size: 35px;
  font-weight: 800;
  margin-top: 25px;
}

.container__info {
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  width: 99.9%;
}
</style>