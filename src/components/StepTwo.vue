<template>
  <div>
    <div class="segment-title">
      Uus elukoht
    </div>
    <div class="segment">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <custom-auto-complete ref="auto1" label="Uue elukoha aadress"></custom-auto-complete>
            </div>
          </div>

          <div class="start-content">
            <md-checkbox v-model="form.dataAboutMe" v-on:change="form.checkBoxError = false">Esitan uue elukoha enda kohta</md-checkbox>
          </div>

          <div class="start-content">
            <md-checkbox v-model="form.dataAboutOthers" v-on:change="dataAboutOthersChange">Esitan uue elukoha teis(te)e kohta</md-checkbox>
          </div>

          <p v-if="form.checkBoxError" class="custom-error">Vähemalt üks kahest peab olema valitud</p>

        </md-card-content>
      </md-card>
    </div>

    <div class="segment-title">
      Muu elukoht
    </div>
    <div class="segment">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-content>
          <div class="start-content wrapper">
            <md-checkbox v-model="form.liveElsewhere">Elan ka mujal kui eelnevalt nimetatud elukohas</md-checkbox>
          </div>

          <div v-if="form.liveElsewhere" class="wrapper">
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <custom-auto-complete ref="auto2" label="Täpne sideaadress"></custom-auto-complete>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <span class="md-helper-text external">Kuupäevad täita juhul, kui aadressi kehtivuse alguse kuupäev on tulevikus või kui on teada, millal kehtivus lõppeb</span>
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-datepicker v-model="form.dateFrom" :md-disabled-dates="disabledDatesFrom">
                  <label>Kehtib alates</label>
                </md-datepicker>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-datepicker v-model="form.dateTo" :md-disabled-dates="disabledDatesTo">
                  <label>Kuni</label>
                </md-datepicker>
              </div>
            </div>
          </div>

          <md-button class="md-raised md-primary" v-on:click="validateAndNext">Edasi</md-button>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
  import {validationMixin} from 'vuelidate'

  import CustomAutoComplete from "./CustomAutoComplete"

  export default {
    name: 'StepTwo',
    mixins: [validationMixin],
    data: () => ({
      form: {
        dataAboutMe: false,
        dataAboutOthers: false,
        liveElsewhere: false,
        dateFrom: null,
        dateTo: null,
        checkBoxError: false,
      }
    }),
    watch: {
      "$v.$invalid": function (before, now) {
        this.$emit('error', 'second', now ? null : "yes");
      }
    },
    methods: {
      disabledDatesFrom(date) {
        if (this.form.dateTo !== null) {
          return this.form.dateTo < date;
        }

        return false
      },
      disabledDatesTo(date) {
        if (this.form.dateFrom !== null) {
          return this.form.dateFrom > date;
        }

        return false
      },
      validateAndNext() {
        if (this.$refs.auto1.validate()) {
          if (this.form.liveElsewhere && !this.$refs.auto2.validate()) {
            return;
          }
          if (!this.form.dataAboutMe && !this.form.dataAboutOthers) {
            this.form.checkBoxError = true;
          } else {
            this.$emit('complete');
          }
        }
      },
      dataAboutOthersChange() {
        this.form.checkBoxError = false;
        this.$emit('others', "dataAboutOthers", this.form.dataAboutOthers);
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
