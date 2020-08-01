<template>
  <v-container>
    <div class="step-one">
      <h3>ตัวเลือกการจัดส่ง</h3>
      <v-form>
        <v-radio-group v-model="delivery_options">
          <v-radio label="รับด้วยตัวเอง" value="self_pickup"></v-radio>
          <v-radio label="จัดส่งผ่าน EMS" value="ems_delivery"></v-radio>
        </v-radio-group>
        <v-row>
          <v-col>
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-col>
        </v-row>

        <v-text-field
          v-model="phone"
          :rules="nameRules"
          :counter="10"
          label="Phone Number"
          required
        ></v-text-field>
      </v-form>
      <v-row justify="end" no-gutters class="mt-2">
        <v-btn color="primary" @click="nextStep()">
          ถัดไป
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Register",

  methods: {
    nextStep: function () {
      /*let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
      };
      this.$store.dispatch("setOrderDetail", data);*/
      this.$router.push("/register/order-summary");
    },
  },

  beforeCreate() {
    /*let race_id = this.$store.state.order.race_id;
    if (!race_id) this.$router.push("/all-races");*/
  },

  data() {
    return {
      dropdown_bloodgroup: ["A", "B", "AB", "O"],
      nameRules: [],
      firstname: "",
      lastname: "",
      phone: "",
      delivery_options: "self_pickup",
      blood: "",
      day: "",
      month: "",
      year: "",
      ident: "",
      //race_id: this.$route.params.id,
      //items: this.$store.state.race_items,
    };
  },
};
</script>
