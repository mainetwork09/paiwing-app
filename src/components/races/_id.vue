<template>
  <v-container>
    <div class="step-one">
      <h1>{{ race_title }}</h1>
      <div>{{ race_content }}</div>
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

  methods: {
    CreateOrder: function (race_id) {
      let router = this.$router;
      let store = this.$store;
      fetch("https://www.uuidgenerator.net/api/version1")
        .then(function (response) {
          if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
          }
          return response.text().then(function (data) {
            store.dispatch("setOrderId", data);
            router.push("/register");
          });
        })
        .catch(function (error) {
          console.error(error);
        });
      console.info("Creating Order " + race_id);
    },
  },

  beforeCreate: function () {
    let race_id = this.$route.params.id;
    let items = this.$store.state.race_items;
    let result = items.filter((item) => {
      return item.race_id == race_id ? item : false;
    });
    console.log(result[0]);
    this.race_title = result[0].title;
    this.race_content = result[0].content;
  },
};
</script>
