<template>
  <div class="partners">
    <div class="partners__box">
      <div class="partners__title">
        <span>Партнёры</span>
      </div>
      <div class="partners__images">
        <div class="first-partner"></div>
        <div class="second-partner"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.partners {
  display: grid;
  height: 6%;
  align-content: space-between;
}
.partners__title {
  display: grid;
  justify-content: start;
  font-size: 65px;
  font-weight: bold;
}

.partners__title span {
  margin-left: 105px;
  margin-top: 100px;
}

.partners__images {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
}

.first-partner {
  background: url("../svg/first-partner.png") no-repeat;
  width: 265px;
  height: 60px;
}
.second-partner {
  background: url("../svg/second-partner.png") no-repeat;
  position: relative;
  left: 420px;
  width: 260px;
  height: 110px;
}
</style>