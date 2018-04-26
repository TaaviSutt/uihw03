<template>
  <div class="wrapper-element">
    <md-autocomplete v-model="address" :md-options="this.addresses" @md-opened="getAddresses" @md-changed="getAddresses" @md-selected="selected" :class="{'md-invalid': hasError}">
      <label>{{ label }}</label>

      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-highlight-text :md-term="term">{{ item.name }}</md-highlight-text>
      </template>

      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        Sellist aadressi ei leitud
      </template>

      <span class="md-error" v-if="hasError">Aadress ei ole piisavalt täpne</span>
    </md-autocomplete>
  </div>
</template>

<script>

  export default {
    name: 'CustomAutoComplete',
    props: ["label"],
    data: () => ({
      addresses: [],
      address: "",
      service: null,
      zip: "",
      id: "",
      hasError: false
    }),
    components: {

    },
    mounted: function () {
      this.service = new google.maps.places.AutocompleteService();
    },
    methods: {
      selected(item) {
        this.address = item.name;
        this.id = item.id;

        const n = document.getElementById('q').appendChild(document.createElement('li'));
        const service = new google.maps.places.PlacesService(n.appendChild(document.createElement('div')));

        let that = this;
        service.getDetails({placeId: this.id}, function(place) {
          const postalCode = place.address_components.filter(item => item.types[0] === "postal_code");
          if (!postalCode || postalCode.length === 0) {
            that.setError();
          } else {
            that.setClean();
          }
        });
      },
      validate() {
        if (!this.hasError && this.address.trim().length > 0) {
          return true;
        } else {
          this.setError();
        }
        return false;
      },
      setError() {
        this.hasError = true;
      },
      setClean() {
        this.hasError = false;
      },
      getAddresses (searchTerm) {
        let that = this;
        if (searchTerm && this.service) {
          this.service.getPlacePredictions({
            input: searchTerm,
            componentRestrictions: {country: 'ee'}
          }, function(data) {
            if(!data) {
              data = []
            }
            data = data.map(item => {
              return {name: item.description, id: item.place_id}
            });
            that.addresses = data ? data : [];
          })
        }
      }
    }
  }
</script>


<style lang="scss" scoped>
  .wrapper-element {
    position: relative;
  }
</style>
