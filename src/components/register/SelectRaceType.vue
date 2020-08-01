<template>
  <v-container>
    <div class="step-one">
      <h3>เลือกประเภทการแข่งขัน</h3>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="nextStep(item)">
          <v-list-item-content>
            <v-list-item-title v-text="item.race_type_name"></v-list-item-title>
            <div>{{ item.race_type_detail }}</div>
          </v-list-item-content>
          <v-list-item-action>{{item.race_price}} บาท</v-list-item-action>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Step2",

  methods: {
    nextStep: function (item) {
      console.log(item);
      let router = this.$router;
      this.$store.dispatch("setOrderRaceType", item.title);
      setTimeout(function () {
        router.push("/register/add-runner-info");
      }, 400);
    },
  },

  beforeCreate() {
    //console.log(this.$store.state.order.race_id);
    let race_id = this.$store.state.order.race_id;

    if (!race_id) this.$router.push("/all-races");

    let races = this.$store.state.race_items;
    let race = races.filter(function (item) {
      console.log(item.race_id, race_id);
      return item.race_id == race_id ? item : false;
    });
    race = race[0];
    console.log("race_id", race_id);
    console.log("races", races);
    console.log("race type", race.race_types);
    this.items = race.race_types;
  },

  data() {
    return {};
  },
};
</script>
