<template>
  <div class="about">
    <div class="about__title">
      <span>О хакатоне</span>
    </div>
    <div class="about__scheme">
      <div class="about__polygons">
        <div class="about__polygons-first-floor">
          <div>
            <span>XX</span>
            <span>трек разработки</span>
          </div>
          <div>
            <span>XX</span>
            <span>проектов сделано</span>
          </div>
        </div>
        <div class="about__polygons-second-floor">
          <div>
            <span>XX</span>
            <span>интересных задач</span>
          </div>
          <div>
            <span>XX</span>
            <span>участников хакатона</span>
          </div>
        </div>
        <div class="about__polygons-third-floor">
          <div>
            <span>XX</span>
            <span>часов работы</span>
          </div>
          <div>
            <span>XX</span>
            <span>тысяч рублей</span>
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
.about {
  display: grid;
  height: 11.36%;
  margin-top: 105px;
  grid-template-rows: 260px auto;
  background: url("../svg/about-background.svg") no-repeat 60%;
  background-size: 85%;
  background-position: -13% 82%;
}

.about__title {
  display: grid;
  color: #000;
  font-size: 65px;
  font-weight: bold;
  margin-left: 100px;
  justify-content: start;
}

.about__scheme {
  margin-left: 280px;
  margin-right: 270px;
}

.about__polygons {
  display: grid;
  background: url("../svg/polygons.svg") no-repeat;
  width: 100%;
  height: 100%;
  grid-template-rows: 95px 150px 150px 190px;
  grid-auto-flow: column;
}

.about__polygons-first-floor,
.about__polygons-second-floor,
.about__polygons-third-floor {
  display: grid;
  grid-auto-flow: column;
  width: 645px;

  justify-content: space-between;
}

.about__polygons-first-floor {
  grid-row-start: 2;
  margin-left: 85px;
}

.about__polygons-second-floor {
  margin-left: 350px;
}

.about__polygons-third-floor {
  margin-left: 610px;
}

.about__polygons-first-floor div,
.about__polygons-second-floor div,
.about__polygons-third-floor div {
  display: grid;
  width: 120px;
  text-align: left;
}

.about__polygons-first-floor div span:last-child,
.about__polygons-second-floor div span:last-child {
  display: block;
  margin-top: -30px;
}

.about__polygons-third-floor div span:last-child {
  display: block;
  margin-top: -60px;
}

.about__polygons div div span:first-child {
  color: #00ffff;
  font-size: 60px;
  font-weight: 800;
}

.about__polygons div div span:last-child {
  color: #fff;
  font-size: 24px;
  font-weight: 500;
}
</style>