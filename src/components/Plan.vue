<template>
  <div class="plan">
    <div class="plan__title">
      <span>Программа</span>
    </div>
    <div class="plan__box">
      <div class="container">
        <div class="container__date">
          <span>ХХ/ХХ/ХХХХ</span>
        </div>
        <img src="../svg/plan-1.svg" />
      </div>

      <div class="container">
        <div class="container__date">
          <span>ХХ/ХХ/ХХХХ</span>
        </div>
        <img src="../svg/plan-2.svg" />
      </div>

      <div class="container">
        <div class="container__date">
          <span>ХХ/ХХ/ХХХХ</span>
        </div>
        <img src="../svg/plan-3.svg" />
      </div>
    </div>

    <div class="plan__btn">
      <button>ПРИНЯТЬ УЧАСТИЕ</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.plan {
  display: grid;
  height: 12.63%;
  gap: 50px;
  color: #3900b1;
}

.plan__title {
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  font-size: 65px;
  font-weight: bold;
  color: #000;
}

.plan__title span {
  margin-left: 100px;
  margin-top: 75px;
}

.plan__box {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: auto auto auto;
  gap: 85px;
  margin: 0 245px;
}

.container {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 55px auto;
}

.container__date {
  display: grid;
  justify-content: start;
  align-content: flex-start;
  font-size: 45px;
  color: #000;
  font-weight: 800;
  writing-mode: tb-rl;
}

.plan__btn {
  display: grid;
  justify-content: center;
  padding-top: 30px;
}

.plan__btn button {
  width: 450px;
  height: 112px;
  background: linear-gradient(to right, #3600ec, #7c1dc6);
  font-size: 27px;
  font-weight: bold;
  font-family: "Montserrat";
  border: 0px;
  color: #fff;
}
</style>