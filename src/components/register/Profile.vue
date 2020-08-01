<template>
  <v-container>
    <div class="step-one">
      <h1>D{{ $route.params.id }}</h1>
      <v-btn @click="CreateOrder(race_id)">ลงทะเบียน</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AllRace",

  data() {
    return {
      race_id: this.$route.params.id,
      //items: this.$store.state.race_items,
    };
  },

  methods: {},

  beforeCreate: function () {},
};
</script>
