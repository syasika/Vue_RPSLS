<template>
  <div class="hello">
    <div>
      <button v-on:click="updateScore">test</button>
      <button v-on:click="resetScore">test</button>
    </div>
    <h2>Make Your Selection</h2>
    <div class="choices">
      <i id="rock" class="choice fas fa-hand-rock fa-10x" v-on:click="getWinner"></i>
      <i id="paper" class="choice fas fa-hand-paper fa-10x"></i>
      <i id="scissors" class="choice fas fa-hand-scissors fa-10x"></i>
      <i id="lizard" class="choice fas fa-hand-lizard fa-10x"></i>
      <i id="spock" class="choice fas fa-hand-spock fa-10x"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    updateScore() {
      this.$store.dispatch("UPDATE_SCORE", false, false);
    },
    resetScore() {
      this.$store.dispatch("RESET_SCORE");
    },
    getWinner() {
      this.$store.dispatch("UPDATE_SCORE", true, false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
