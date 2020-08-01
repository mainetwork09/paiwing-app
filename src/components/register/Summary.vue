<template>
  <v-container>
    <div class="step-one">
      <h3>Summary</h3>

      <div>
        <div>Order No. {{ $store.state.order.order_id }}</div>
        <div>{{ $store.state.order.firstname }} {{ $store.state.order.lastname }}</div>
        <div>Race: {{ $store.state.order.race_type }}</div>
        <div>Race Group: xxxx</div>
        <div>Shirt Size: xxxx</div>
      </div>

      <div class="app-navigation">
        <v-btn @click="checkout()">Checkout</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Checkout",

  data() {
    return {
      ///race_id: this.$route.params.id,
      //items: this.$store.state.race_items,
    };
  },

  methods: {
    checkout: function () {
      //let router = this.$router;
      let store = this.$store;
      let jsonData = [];
      let liff = this.$liff;
      let accessToken = liff.getAccessToken();
      let pushUrl = "https://paiwing.com/linepush.php";
      console.log(store.state.order);
      jsonData.order = store.state.order;
      jsonData.token = accessToken;

      console.log(jsonData);

      fetch(pushUrl, {
        method: "post",
        mode: "no-cors",
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body: jsonData,
      })
        .then(function (data) {
          console.info("success");
          console.log(data);
          liff.closeWindow();
        })
        .catch(function (err) {
          console.log("Request failed", err);
        });
    },
  },

  beforeCreate: function () {},
};
</script>
