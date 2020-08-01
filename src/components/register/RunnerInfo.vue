<template>
  <v-container>
    <div class="step-one">
      <h3>ข้อมูลผู้สมัคร</h3>
      <v-form>
        <v-radio-group v-model="sex" row>
          <v-radio label="ชาย" value="male"></v-radio>
          <v-radio label="หญิง" value="female"></v-radio>
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
          v-model="ident"
          :rules="nameRules"
          :counter="10"
          label="ID card number"
          required
        ></v-text-field>

        <v-text-field
          v-model="phone"
          :rules="nameRules"
          :counter="10"
          label="Phone Number"
          required
        ></v-text-field>

        <v-label>กรุ๊ปเลือด</v-label>
        <v-row>
          <v-col>
            <v-overflow-btn
              class="my-2"
              :items="dropdown_bloodgroup"
              label="Blood Group"
              target="#dropdown-example"
            ></v-overflow-btn>
          </v-col>
          <v-col></v-col>
        </v-row>

        <v-label>ว/ด/ปีเกิด</v-label>

        <v-row>
          <v-col>
            <v-overflow-btn
              class="my-2"
              :items="dropdown_bloodgroup"
              label="Day"
              target="#dropdown-example"
            ></v-overflow-btn>
          </v-col>
          <v-col>
            <v-overflow-btn
              class="my-2"
              :items="dropdown_bloodgroup"
              label="Month"
              target="#dropdown-example"
            ></v-overflow-btn>
          </v-col>
          <v-col>
            <v-overflow-btn
              class="my-2"
              :items="dropdown_bloodgroup"
              label="Year"
              target="#dropdown-example"
            ></v-overflow-btn>
          </v-col>
        </v-row>

        <v-label>ไซส์เสื้อ</v-label>
        <v-overflow-btn
          class="my-2"
          :items="dropdown_bloodgroup"
          label="เลือกไซส์เสื้อ"
          target="#dropdown-example"
        ></v-overflow-btn>
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
      console.log(this.firstname);
      console.log(this.lastname);
      console.log(this.phone);
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        phone: this.phone,
      };
      this.$store.dispatch("setOrderDetail", data);
      this.$router.push("/register/order-delivery");
    },
  },

  beforeCreate() {
    let race_id = this.$store.state.order.race_id;
    if (!race_id) this.$router.push("/all-races");
  },

  data() {
    return {
      dropdown_bloodgroup: ["A", "B", "AB", "O"],
      nameRules: [],
      firstname: "",
      lastname: "",
      phone: "",
      sex: "male",
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
