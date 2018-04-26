<template>
  <div>
    <div class="segment-title">
      Ruumi kasutamine
    </div>
    <div class="segment">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100"></div>
          </div>

          <md-list>
            <md-list-item>
              <md-radio v-model="form.permission" value="0">Olen ruumi omanik</md-radio>
            </md-list-item>
            <md-list-item>
              <md-radio v-model="form.permission" value="4">Olen ruumi kaasomanik</md-radio>
            </md-list-item>
            <md-list-item>
              <md-radio v-model="form.permission" value="1">Lisan üürilepingu</md-radio>
            </md-list-item>
            <md-list-item>
              <md-radio v-model="form.permission" value="2">Ruumi kasutamise muu alus</md-radio>
            </md-list-item>
            <md-list-item>
              <md-radio v-model="form.permission" value="3">Ruumi omanik annab nõusoleku</md-radio>
            </md-list-item>
          </md-list>

          <transition name="fade" mode="out-in">
            <div v-if="form.permission === '3' || form.permission === '1' || form.permission === '4'" class="wrapper">
              <div class="md-layout md-gutter">
                <md-field :class="getValidationClass('files')">
                  <label v-if="form.permission === '3'">Ruumi omaniku nõusolek (.bdoc)</label><label v-if="form.permission === '1'">Üürileping</label>
                  <label v-if="form.permission === '4'">Ruumi kaasomanike nõusolek (.bdoc)</label>
                  <md-file v-model="form.files" :accept="form.permission === '3' || form.permission === '4' ? '.bdoc' : '*'" required/>
                  <md-button class="md-primary remove-file" v-if="form.files !== ''" @click="form.files = ''">KUSTUTA FAIL</md-button>
                  <span class="md-error" v-if="(form.permission === '3' || form.permission === '1' || form.permission === '4') && !$v.form.files.required">Ühtegi faili pole valitud</span>
                </md-field>
              </div>

            </div>
          </transition>

          <md-button class="md-raised md-primary" v-on:click="validateAndNext">Edasi</md-button>
        </md-card-content>
      </md-card>
    </div>

  </div>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {
    required,

  } from 'vuelidate/lib/validators'

  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  import CustomAutoComplete from "./CustomAutoComplete"

  export default {
    name: 'StepThree',
    mixins: [validationMixin],
    data: () => ({
      form: {
        permission: "0",
        other: "",
        firstName: "",
        lastName: "",
        idcode: "",
        files: ""
      },
    }),
    validations: {
      form: {
        files: {
          required
        }
      }
    },
    watch: {
      "$v.$invalid": function (before, now) {
        this.$emit('error', 'third', now ? null : "yes");
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName];

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      validateAndNext() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          if (this.form.permission === '0' || this.form.permission === '2') {
            this.$emit('complete');
          }
        } else {
          this.$emit('complete');
        }
      }
    },
    components: {
      'custom-auto-complete': CustomAutoComplete
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  .md-layout.md-gutter {
    margin-left: 0px;
    margin-right: 0px;
  }

  .md-card:not(:first-child) {
    margin-top: 20px;
  }

  .md-switch-front {
    margin: 16px 16px 16px 0;
    cursor: pointer;
    line-height: 20px;
  }

  .choice {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .float-right {
    float: right;
  }

</style>
