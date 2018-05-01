<template>
  <div>
    <ul class="interactive__options">
      <InteractiveOption v-for="(grade, index) in grading[dataIndex]"
                         @click.native="toggleGrade(index)" :selected="grade.selected"
                         :key="index" :title="grade.title" :description="grade.description"></InteractiveOption>
    </ul>
  </div>
</template>

<script>

  import InteractiveOption from "./InteractiveOption";
  import {mapGetters, mapActions} from "vuex";

  export default {
    name: "ExperimentalGrading",
    components: {
      InteractiveOption
    },
    props: ["dataIndex"],
    data: () => ({
      selected: false
    }),
    computed: mapGetters(
      ["grading"]
    ),
    methods: {
        ...mapActions({
          toggleGrade (dispatch, index) {
            dispatch('toggleGrade', {dataIndex: this.dataIndex, index})
          },
        }),
    }
  }
</script>

<style lang="scss" scoped>

  .interactive__options {
    display: flex;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    position: relative;
    padding: 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-x: visible;
    list-style: none;

    li {
      cursor: pointer;
    }

    &:before {
      background: linear-gradient(rgba(233,237,241,.27),#cfd7df);
      height: 100%;
      top: 15px;
      left: 10px;
      width: 2px;
      content: "";
      position: absolute;
      display: block;
    }

    &:after {
      background-color: #cfd7df;
      width: 8px;
      height: 8px;
      border-radius: 100%;
      position: absolute;
      bottom: -15px;
      left: 7px;
      display: block;
      content: "";
    }


    button.interactive__option {
      padding: 10px 0 10px 40px;
      padding-left: 40px;
      border: none;
      cursor: pointer;
      display: block;
      position: relative;
      text-align: left;
      border-radius: 4px;
      -webkit-transition: all .4s cubic-bezier(.25,.46,.45,.94);
      transition: all .4s cubic-bezier(.25,.46,.45,.94);
      background: none;
    }

    .interactive__option .interactive-option__icon {
      width: 22px;
      height: 22px;
      border-radius: 100%;
      -webkit-box-shadow: 0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02);
      box-shadow: 0 1px 3px rgba(50,50,93,.15), 0 1px 0 rgba(0,0,0,.02);
      position: absolute;
      -webkit-transition: -webkit-box-shadow .3s ease-in-out;
      transition: -webkit-box-shadow .3s ease-in-out;
      transition: box-shadow .3s ease-in-out;
      transition: box-shadow .3s ease-in-out,-webkit-box-shadow .3s ease-in-out;
      background-color: #fff;
      pointer-events: none;
      z-index: 5;
      top: 15px;
      left: 0;

      span {
        width: 12px;
        height: 12px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
      }
    }
  }

  .interactive__option .interactive-option__text span:first-child {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.9;
    color: #32325d;
    display: block;
    z-index: 5;
  }

  .interactive__option .interactive-option__text span:last-child {
    font-size: 17px;
    line-height: 1.4;
    color: #525f7f;
    -webkit-transition-delay: .15s;
    transition-delay: .15s;
    display: block;
  }

  .interactive__option .interactive-option__icon span svg {
    width: 100%;
    height: 100%;
    transform-origin: 3px bottom;
  }

  .interactive__option--selected .interactive-option__text>span:first-child {
    color: #159570;
  }

</style>

