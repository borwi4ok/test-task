<template>
  <div class="contacts">
    <div class="contacts__container">
      <div class="contacts__first-par">
        <div class="contacts__cont">
          <span>Контакты</span>
        </div>
        <div class="contacts__question">
          <span>По всем вопросам и предложения:</span>
        </div>
      </div>
      <div class="contacts__second-par">
        <div class="contacts__fullname">
          <span>Имя Фамилия</span>
        </div>
        <div class="contacts__mail">
          <span>qwerty@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contacts {
  display: grid;
  height: 6.2%;
  background-color: #020941;
  color: #fff;
}

.contacts__container {
  display: grid;
  margin-left: 100px;
  margin-top: 100px;
  grid-template-rows: 200px 130px;
  gap: 60px;
}

.contacts__container div {
  display: grid;
  justify-content: start;
}

.contacts__first-par {
  display: grid;
  align-content: space-between;
}

.contacts__cont {
  font-size: 65px;
  font-weight: bold;
}
.contacts__question {
  font-size: 36px;
  font-weight: 500;
}

.contacts__fullname {
  font-size: 41px;
  font-weight: 800;
}
.contacts__mail {
  font-size: 35px;
  font-weight: 600;
  text-decoration: underline;
}
</style>