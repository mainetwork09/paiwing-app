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
      if (process.env.NODE_ENV === "production") {
        //let router = this.$router;
        let store = this.$store;
        let payload = {};
        let liff = this.$liff;
        let accessToken = liff.getAccessToken();
        //let accessToken = "aabb"; // mockup
        let pushUrl = "https://paiwing.com/linepush.php";
        console.log(store.state.order);
        payload.order = store.state.order;
        payload.token = accessToken;

        console.log(payload);

        var postData = new FormData();
        postData.append("json", JSON.stringify(payload));

        fetch(pushUrl, {
          method: "post",
          mode: "no-cors",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(payload),
        })
          .then(function (data) {
            console.info("success");
            console.log(data);
            liff.closeWindow();
          })
          .catch(function (err) {
            console.log("Request failed", err);
          });
      }
    },
  },
  beforeCreate: function () {},
};
</script>
