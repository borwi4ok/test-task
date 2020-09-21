<template>
  <div class="location">
    <div class="location__map"></div>
    <div class="location__container">
      <div class="location__logo">
        <img src="../svg/location-logo.png" width="365px" height="125px" />
      </div>
      <div class="location__text">
        <span>Биржевая линия,д.16</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.location {
  display: grid;
  grid-template-columns: 940px auto;
  height: 5.7%;
  padding-top: 100px;
}

.location__map {
  background: url("../svg/location-map.png") no-repeat;
}

.location__container {
  display: grid;
  background-color: #020941;
  justify-content: center;
  align-content: center;
  gap: 30px;
}

.location__text {
  color: #fff;
  font-size: 52px;
  font-weight: 500;
}
</style>