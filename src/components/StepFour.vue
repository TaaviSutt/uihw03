<template>
  <div>
    <div class="segment-title" v-if="data_about_others">Teised isikud</div>
    <div class="segment">
      <md-card class="md-layout-item md-size-100 md-small-size-100" v-if="data_about_others">
        <md-card-content>
          <div class="users" v-for="(row, index) in form.users" v-if="data_about_others">
            <div>
              <div class="wrapper">
                <hr class="hr-text" :data-content="(index + 1) + '. isik'">
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="{'md-invalid': getNestedValidationClass($v.form.users.$each[index].firstName) }">
                      <label for="first-name">Eesnimi</label>
                      <md-input name="first-name" id="first-name" autocomplete="given-name" v-model.trim="row.firstName" @input="delayTouch($v.form.users.$each[index].firstName)" required/>
                      <span class="md-error" v-if="!$v.form.users.$each[index].firstName.validation">Eesnimi ei tohi olla tühi</span>
                    </md-field>

                  </div>


                  <div class="md-layout-item md-small-size-100">
                    <md-field
                        :class="{'md-invalid': getNestedValidationClass($v.form.users.$each[index].lastName) }">
                      <label for="last-name">Perekonnanimi</label>
                      <md-input name="last-name" id="last-name" autocomplete="family-name" v-model.trim="row.lastName" @input="delayTouch($v.form.users.$each[index].lastName)" required/>
                      <span class="md-error" v-if="!$v.form.users.$each[index].lastName.required">Perekonnanimi ei tohi olla tühi</span>
                    </md-field>
                  </div>
                </div>

                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field :class="{'md-invalid': getNestedValidationClass($v.form.users.$each[index].idcode) }">
                      <label for="idcode">Isikukood</label>
                      <md-input name="idcode" id="idcode" autocomplete="id-code" v-model.lazy="row.idcode" @input="delayTouch($v.form.users.$each[index].idcode)" required/>
                      <span class="md-error" v-if="!$v.form.users.$each[index].validation">Sisestage korrektne isikukood</span>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-small-size-100 start-content"></div>
                </div>
              </div>

              <div>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item">
                    <div class="start-content">
                      <md-checkbox v-model="row.fromOutside">Saabub välismaalt</md-checkbox>
                    </div>
                  </div>
                </div>

                <div class="md-layout md-gutter wrapper" v-if="row.fromOutside">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="foreign_home">Välismaa elukoha riik</label>
                      <md-input name="foreign home" id="foreign_home" autocomplete="text" v-model="row.foreignHome"/>
                    </md-field>
                  </div>

                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="foreign_code">Välisriigi isikukood olemasolul</label>
                      <md-input type="number" id="foreign_code" name="foreign_code" autocomplete="foreign-home" v-model="row.foreignCode"/>
                    </md-field>
                  </div>
                </div>
              </div>

              <div><additional-data :mail_and_phone="true"></additional-data></div>

              <div class="md-layout">
                <div class="md-layout-item md-size-100">
                  <md-button class="md-accent float-right" v-if="index !== 0" @click="form.users.splice(index, 1);">Kustuta rida</md-button>
                </div>
              </div>
            </div>
          </div>
          <md-button class="md-primary" v-if="form.users.length < 20 && data_about_others" @click="form.users.push({firstName: null, lastName: null, idcode: null, underage: false, fromOutside: false, foreignCode: null, foreignHome: null})">Lisa isik <md-icon class="md-size-05">add</md-icon></md-button>

          <div v-if="form.existsUnderAge">
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <span class="md-helper-text external"><span v-if="underage() === 1">Alaealise lapse</span><span v-if="underage() !== 1">Alaealiste laste</span> teise hooldusõigusliku vanema nõusolek</span>
              </div>
            </div>
            <div class="md-layout md-gutter wrapper">
              <md-field :class="getValidationClass('files')">
                <label>Nõusolek (.bdoc)</label>
                <md-file v-model="form.files" accept=".bdoc"/>
                <md-button class="md-primary remove-file" v-if="form.files !== ''" @click="form.files = ''">KUSTUTA FAIL</md-button>
                <span class="md-error" v-if="!$v.form.files.customRequired">Ühtegi faili pole sisestatud</span>
              </md-field>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>

    <div class="segment-title">Elukohateatele lisatavad dokumendid</div>
    <div class="segment">
      <md-card class="md-layout-item md-size-100 md-small-size-100">

        <md-card-content>
          <div class="md-layout md-gutter">
            <md-field>
              <label>Lisatavad failid</label>
              <md-file v-model="form.multiple" multiple/>
              <md-button class="md-primary remove-file" v-if="form.multiple !== ''" @click="form.multiple = ''">KUSTUTA FAIL</md-button>
            </md-field>
          </div>

          <md-button class="md-raised md-primary" v-on:click="validateAndNext">Esita taotlus</md-button>
        </md-card-content>

      </md-card>
    </div>

  </div>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  import CustomAutoComplete from "./CustomAutoComplete"
  import AdditionalData from "./AdditionalData"
  import {validateIdCode} from "../utils/validation";
  const touchMap = new WeakMap();
  export default {
    name: 'StepFour',
    mixins: [validationMixin],
    props: ["data_about_others"],
    data: () => ({
      form: {
        users: [
          {firstName: '', lastName: '', idcode: '', underage: false, fromOutside: false, foreignCode: null, foreignHome: null}
        ],
        dataAboutOthers: true,
        multiple: '',
        files: '',
        existsUnderAge: false
      }
    }),
    validations: {
      form: {
        users:{
          $each: {
            firstName: {
              required
            },
            lastName: {
              required
            },
            idcode: {
              required,
              validation (idcode) {
                let validationObj = validateIdCode(idcode);
                if (!this.form.existsUnderAge && validationObj.underAge) {
                  this.form.existsUnderAge = true;
                } else if (this.form.existsUnderAge && !validationObj.underAge) {
                   if (this.form.users.filter(user => validateIdCode(user.idcode).underAge).length === 0) {
                     this.form.existsUnderAge = false;
                   }
                }
                return validationObj.isValid
              }

            }
          },
        },
        files: {
          customRequired() {
            if (this.form.existsUnderAge) {
              return this.form.files !== "";
            }

            return true;
          }
        }
      }

    },
    watch: {
      "$v.$invalid": function (before, now) {
        this.$emit('error', 'fourth', now ? null : "yes");
      }
    },
    methods: {
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName];

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      getNestedValidationClass(nestedObject) {
        return nestedObject.$invalid && nestedObject.$dirty ? 'md-invalid' : "";
      },
      delayTouch ($v) {
        $v.$reset()
        if (touchMap.has($v)) {
          clearTimeout(touchMap.get($v))
        }
        touchMap.set($v, setTimeout($v.$touch, 1000))
      },
      validateAndNext() {
        this.$v.$touch();
        if (!this.data_about_others || !this.$v.$invalid) {
          this.$emit('complete');
        } else {
          this.$emit('error', 'fourth', 'yes');
        }
      },
      underage() {
        return this.form.users.filter(user => validateIdCode(user.idcode).underAge).length;
      },
    },
    components: {
      AdditionalData, 'custom-auto-complete': CustomAutoComplete,
      "additional-data": AdditionalData
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
