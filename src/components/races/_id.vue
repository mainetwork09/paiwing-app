<template>
  <v-container>
    <div class="step-one">
      <div class="navigation">
        <v-btn icon to="/">
          <v-icon>mdi-chevron-left</v-icon>กลับ
        </v-btn>
      </div>
      <h1>{{ race_title }}</h1>
      <v-img :src="race_cover"></v-img>
      <div class="mb-3">{{ race_content }}</div>
      <v-btn rounded color="primary" block @click="CreateOrder(race_id)">ลงทะเบียน</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AllRace",

  data() {
    return {
      race_id: this.$route.params.id,
      race_content: "Loren",
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
          return response.text().then(function (order_id) {
            let data = {
              order_id,
              race_id,
            };
            store.dispatch("setOrderDetail", data);
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
    this.race_cover = result[0].cover;
  },
};
</script>
