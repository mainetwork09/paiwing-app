<template>
  <v-container>
    <div class="step-one">
      <h3>Select Race Group</h3>

      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="finishRegister()">
          <v-list-item-icon>
            <v-icon color="pink">mdi-decagram</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <div>{{ item.content }}</div>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Step3",

  beforeCreate: function () {
    /*this.$liff
      .init({
        liffId: "1561133255-7gzQ2vlA",
      })
      .then(() => {
        if (!this.$liff.isLoggedIn()) {
          this.$liff.login();
        }
      })
      .catch(function (error) {
        console.error(error);
      });*/
  },

  methods: {
    nextStep: function (item) {
      console.log(item);
      let router = this.$router;
      setTimeout(function () {
        router.push("/step3");
      }, 400);
    },
    finishRegister: function () {
      var liff = this.$liff;
      this.$liff
        .sendMessages([
          {
            type: "text",
            text: "Registration Complete!",
          },
        ])
        .then(function () {
          //window.alert("success");
          liff.closeWindow();
        })
        .catch(function (error) {
          window.alert(error);
        });
    },
  },

  data() {
    return {
      items: [
        { title: "15 year old", content: "" },
        { title: "16-29", content: "" },
        { title: "30-39", content: "" },
        { title: "40-49", content: "" },
        { title: "50-59", content: "" },
        { title: "60-69", content: "" },
        { title: "70+", content: "" },
      ],
    };
  },
};
</script>
