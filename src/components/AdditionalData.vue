<template>
  <div class="wrapper">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-100">
        <div class="start-content">
          <md-checkbox v-model="form.expanded">Soovin lisada täpsustavaid andmeid</md-checkbox>
        </div>
      </div>
    </div>

    <div v-if="form.expanded">
      <div class="md-layout md-gutter" v-if="mail_and_phone">
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="email">E-post</label>
            <md-input name="email" id="email" type="email" autocomplete="email" v-model="form.email"/>
          </md-field>
        </div>

        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="phone">Telefon</label>
            <md-input type="number" id="phone" name="phone" autocomplete="age" v-model="form.phone"/>
          </md-field>
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="nationality">Rahvus</label>
            <md-input name="nationality" id="nationality" autocomplete="text" v-model="form.nationality"/>
            <span class="md-helper-text">Rahvus, millega isik end kõige tihedamini seob</span>
          </md-field>
        </div>

        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="mother_tongue">Emakeel</label>
            <md-input type="text" id="mother_tongue" name="mother_tongue" autocomplete="mother_tongue" v-model="form.motherTongue"/>
            <span class="md-helper-text">Esimese keelena omandatud ja mida kõige paremini valdab</span>
          </md-field>
        </div>
      </div>

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="education">Kõrgeim haridustase</label>
            <md-select v-model="form.education" name="education" id="education">
              <md-option value="Doktor/võrdsustatud haridus">Doktor/võrdsustatud haridus</md-option>
              <md-option value="Magister/võrdsustatud haridus">Magister/võrdsustatud haridus</md-option>
              <md-option value="Bakalaureus/võrdsustatud haridus">Bakalaureus/võrdsustatud haridus</md-option>
              <md-option value="Keskeri- ja tehnikumiharidus">Keskeri- ja tehnikumiharidus</md-option>
              <md-option value="Kutseharidus keskhariduse baasil">Kutseharidus keskhariduse baasil</md-option>
              <md-option value="Keskharidus">Keskharidus</md-option>
              <md-option value="Kutsekeskharidus või kutseõpe">Kutsekeskharidus või kutseõpe</md-option>
              <md-option value="Põhiharidus (põhikool 7.-9. klass)">Põhiharidus (põhikool 7.-9. klass)</md-option>
              <md-option value="Põhiharidus või varasem algharidus">Põhiharidus (põhikool 1.-6. klass)</md-option>
              <md-option value="Algharidus või alghariduseta">Algharidus või alghariduseta</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="social_status">Sotsiaal-majanduslik seisund</label>
            <md-select v-model="form.socialStatus" name="social_status" id="social_status">
              <md-option value="Töötav">Töötav</md-option>
              <md-option value="Kodune">Kodune</md-option>
              <md-option value="Töötu või tööd otsiv">Töötu või tööd otsiv</md-option>
              <md-option value="Ajateenija">Ajateenija</md-option>
              <md-option value="(Üli)õpilane">(Üli)õpilane</md-option>
              <md-option value="Pensionär">Pensionär</md-option>
              <md-option value="Lapsehoolduspuhkusel">Lapsehoolduspuhkusel</md-option>
              <md-option value="Muu mittetöötav">Muu mittetöötav</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {
    email,
  } from 'vuelidate/lib/validators'

  export default {
    name: 'AdditionalData',
    props: ["mail_and_phone"],
    mixins: [validationMixin],
    data: () => ({
      form: {
        nationality: null,
        motherTongue: null,
        education: null,
        socialStatus: null,
        expanded: false,
        phone: null,
        email: null
      }
    }),
    methods: {
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
