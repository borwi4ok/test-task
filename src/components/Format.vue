<template>
  <div class="format shadow">
    <div class="format__title">
      <span>Формат</span>
    </div>
    <div class="format__info">
      <div class="format__container">
        <div class="format__img">
          <img src="../svg/format-1-icon.svg" width="125px" height="125px" />
        </div>
        <div class="format__text align-down">
          <span>Готовое решение</span>
          <span>
            Если вы стартап или зрелая
            компания и у вас есть готовое
            решение для одной задачи,
            то вы можете заявить о себе, пройти отбор и представить
            свое решение партнеру в рамках питч‑сессии готовых решений.
          </span>
        </div>
        <div class="format__btn">
          <button style="width:100%">Подать решение на хакатон</button>
        </div>
      </div>
      <div class="format__container">
        <div class="format__img">
          <img src="../svg/format-2-icon.svg" width="112px" height="116px" />
        </div>
        <div class="format__text align-down">
          <span>Хакатон</span>
          <span>
            Если вы разработчик, дизайнер или продакт-менеджер,
            то вы можете объединиться
            в команду, за
            <b>ХХ</b> часов предложить решение одной из задач
            и выиграть
            <b>ХХХХХ</b> рублей.
            Подать заявку может независимый участник или готовая команда.
          </span>
        </div>
        <div class="format__btn">
          <button style="width:100%">Подать заявку на хакатон</button>
        </div>
      </div>
      <div class="format__container">
        <div class="format__img">
          <img src="../svg/format-3-icon.svg" width="133px" height="96px" />
        </div>
        <div class="format__text">
          <span>
            Онлайн-
            участие
          </span>
          <span>
            Здесь должно быть описание
            онлайн-участия
          </span>
        </div>
        <div class="format__btn">
          <button style="width:100%">Подать заявку на онлайн-участие</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.format {
  display: grid;
  position: relative;
  overflow: hidden;
  height: 11.36%;
  background: linear-gradient(to right bottom, #091390, #020941);
  grid-template-rows: 270px 600px auto;
}

.format__title {
  display: grid;
  color: #fff;
  font-size: 65px;
  font-weight: bold;
  justify-content: start;
}

.format__title span {
  margin-left: 100px;
  margin-top: 105px;
  z-index: 1000;
}

.format::before {
  /* color || opacity */
  content: "";
  position: absolute;
  background: url("../svg/format-background.svg") no-repeat;
  width: 1490px;
  height: 1303px;
  /* transform: scale(1.05); */
  left: -60px;
  top: -220px;
}

.format__info {
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  gap: 30px;
  color: #fff;
  font-weight: 300;
  font-size: 18.5px;
  z-index: 1000;
}

.format__container {
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  grid-template-rows: 175px auto 100px;
  width: 400px;
  height: 600px;
  background: linear-gradient(to bottom, #3900b2, #2d0098);
}

.format__img {
  position: relative;
  margin: auto 0;
  padding-top: 30px;
}

.format__text {
  display: grid;
  grid-template-rows: 100px auto;
}

.format__text span:first-child {
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  padding: 0px 100px;
  padding-top: 10px;
}

.format__text span:last-child {
  display: inline-block;
  padding: 0 35px;
}

.format__btn {
  display: grid;
}

.format__btn button {
  font-size: 26px;
  color: #3900b1;
  font-weight: 600;
  border: 2px solid #00ffff;
  padding-left: 85px;
  padding-right: 85px;
}
</style>