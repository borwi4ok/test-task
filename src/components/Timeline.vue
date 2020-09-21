<template>
  <div class="timeline shadow">
    <div class="timeline__box">
      <div class="timeline__title">
        <span>Таймлайн</span>
      </div>
      <div class="timeline__info">
        <div class="timeline__first-floor">
          <div class="container">
            <div class="container__number">
              <span>02</span>
            </div>
            <div class="container__description">
              <span>
                <b>15 ОКТЯБРЯ 2020</b>
                Окончание приема
                заявок
              </span>
            </div>
          </div>
          <div class="container">
            <div class="container__number">
              <span>04</span>
            </div>
            <div class="container__description">
              <span>
                <b>22-29 ОКТЯБРЯ 2020</b>
                Проведение
                Хакатона
              </span>
            </div>
          </div>
        </div>
        <div class="timeline__second-floor">
          <div class="container" style="width:110%">
            <div class="container__number">
              <span>01</span>
            </div>
            <div class="container__description">
              <span>
                <b>24 СЕНТЯБРЯ 2020</b>
                Старт приема заявок
              </span>
            </div>
          </div>
          <div class="container">
            <div class="container__number">
              <span>03</span>
            </div>
            <div class="container__description">
              <span>
                <b>16 ОКТЯБРЯ 2020</b>
                Результаты отбора
              </span>
            </div>
          </div>
          <div class="container">
            <div class="container__number">
              <span>05</span>
            </div>
            <div class="container__description">
              <span>
                <b>
                  30 ОКТЯБРЯ -
                  <br />1 НОЯБРЯ 2020
                </b>
                Супер финал
              </span>
            </div>
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
.timeline {
  display: grid;
  position: relative;
  height: 11.36%;
  background: url("../svg/timeline-background.png");
  grid-template-rows: 185px auto;
  box-sizing: border-box;
  color: #fff;
}

.timeline:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #1b1464;
  opacity: 0.85;
}

.timeline__box {
  display: grid;
  z-index: 1000;
}

.timeline__title {
  display: grid;
  justify-content: start;
  font-size: 65px;
  font-weight: bold;
}

.timeline__title span {
  margin-left: 100px;
  margin-top: 105px;
}

.timeline__info {
  display: grid;
  grid-row-start: 3;
  gap: 190px;
  margin-top: 100px;
  background: url("../svg/timeline-image.svg") no-repeat;
  background-size: 70%;
  background-position: 325px 50%;
}

.timeline__first-floor {
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  padding: 0 470px 0 580px;
  gap: 250px;
}

.timeline__second-floor {
  display: grid;
  grid-auto-flow: column;
  align-content: space-between;
  gap: 250px;
  padding: 0 255px 0 355px;
}

.container {
  display: grid;
  grid-auto-flow: row;
  justify-items: start;
}

.timeline__second-floor .container:nth-child(2) {
  position: relative;
  left: 30px;
}

.timeline__second-floor .container:nth-child(3) {
  position: relative;
  left: 60px;
}

.container__description {
  text-align: left;
}

.container__number {
  color: #00ffff;
  font-size: 80px;
  font-weight: 800;
}

.container__description {
  font-size: 28px;
}
</style>