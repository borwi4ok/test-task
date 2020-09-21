<template>
  <div id="app">
    <Face />
    <About />
    <Format />
    <Tasks />
    <Timeline />
    <Judges />
    <Plan />
    <Location />
    <Partners />
    <Contacts />
  </div>
</template>
<script>
import Face from "./components/Face";
import About from "./components/About";
import Format from "./components/Format";
import Tasks from "./components/Tasks";
import Timeline from "./components/Timeline";
import Judges from "./components/Judges";
import Plan from "./components/Plan";
import Location from "./components/Location";
import Partners from "./components/Partners";
import Contacts from "./components/Contacts";
export default {
  components: {
    Face,
    About,
    Format,
    Tasks,
    Timeline,
    Judges,
    Plan,
    Location,
    Partners,
    Contacts
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100%;
  height: 880%;
  /* height: 9500px; */
}
html,
body {
  width: 100%;
  height: 100%;
}
</style>
