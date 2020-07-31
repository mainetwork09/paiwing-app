<template>
  <v-container>
    <div class="step-one">
      <router-link to="/profile">ข้อมูลส่วนตัว</router-link>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="nextStep(item)">
          <v-list-item-icon>
            <v-icon color="pink">mdi-star</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <div>{{ item.date_schedule }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "AllRace",

  methods: {
    nextStep: function (item) {
      console.log(item);
      let router = this.$router;
      setTimeout(function () {
        router.push("/step2");
      }, 400);
    },
  },

  data() {
    return {
      items: [
        {
          title: "Running Day #1",
          date_schedule: new Date("2021-01-15").toDateString(),
        },
        {
          title: "Running Day #2",
          date_schedule: new Date("2021-01-15").toDateString(),
        },
      ],
    };
  },
};
</script>
