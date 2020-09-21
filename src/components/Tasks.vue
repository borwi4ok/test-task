<template>
  <div class="tasks">
    <div class="tasks__title">
      <span>Задания</span>
    </div>
    <div class="tasks__box">
      <div class="tasks__container">
        <img src="../svg/tasks-1-icon.svg" width="113px" height="101px" />
        <div class="tasks__container-title">
          <span>Название</span>
        </div>
        <div class="tasks__container-description">
          <span>Описание задания и его суть</span>
        </div>
        <div class="tasks__container-specify">
          <a>ПОДРОБНЕЕ</a>
        </div>
      </div>
      <div class="tasks__container">
        <img src="../svg/tasks-2-icon.svg" width="102px" height="102px" />
        <div class="tasks__container-title">
          <span>Название</span>
        </div>
        <div class="tasks__container-description">
          <span>Описание задания и его суть</span>
        </div>
        <div class="tasks__container-specify">
          <a>ПОДРОБНЕЕ</a>
        </div>
      </div>
      <div class="tasks__container">
        <img src="../svg/tasks-3-icon.svg" width="109px" height="102px" />
        <div class="tasks__container-title">
          <span>Название</span>
        </div>
        <div class="tasks__container-description">
          <span>Описание задания и его суть</span>
        </div>
        <div class="tasks__container-specify">
          <a>ПОДРОБНЕЕ</a>
        </div>
      </div>
      <div class="tasks__container">
        <img src="../svg/tasks-4-icon.svg" width="117px" height="103px" />
        <div class="tasks__container-title">
          <span>Название</span>
        </div>
        <div class="tasks__container-description">
          <span>Описание задания и его суть</span>
        </div>
        <div class="tasks__container-specify">
          <a>ПОДРОБНЕЕ</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.tasks {
  display: grid;
  grid-template-rows: 230px auto;
  box-sizing: border-box;
  height: 11.36%;
}

.tasks__title {
  display: grid;
  margin-left: 100px;
  margin-top: 105px;
  font-size: 65px;
  font-weight: bold;
  justify-content: start;
}

.tasks__box {
  display: grid;
  position: relative;
  top: -30px;
  justify-content: start;
  grid-auto-flow: row;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
  gap: 0px 150px;
  margin-left: 450px;
}

.tasks__container {
  display: grid;
  grid-auto-flow: row;
  justify-items: start;
  align-content: start;
  gap: 25px;
}

.tasks__container img {
  margin-top: 40px;
}

.tasks__container-title {
  display: grid;
  justify-content: start;
  position: relative;
  font-size: 47px;
  width: 100%;
  font-weight: bold;
  color: #0049d1;
}

.tasks__container-title:after {
  position: absolute;
  content: "";
  height: 3px;
  width: 100%;
  background: black;
  top: 120%;
  left: 0;
}

.tasks__container-description {
  font-size: 28px;
  font-weight: 500;
}

.tasks__container-specify {
  display: grid;
  font-size: 20px;
  font-weight: bold;
  color: #6b41c2;
  padding-top: 40px;
}
</style>