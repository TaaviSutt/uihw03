<template>
  <li>
    <button class="interactive__option" v-bind:class="{'interactive__option--selected': this.selected}">
        <span class="interactive-option__icon">
          <span class="plus">
            <svg width="17" height="17" viewBox="0 0 17 17" xmlns="http://www.w3.org/2000/svg" fill="#424770" fill-rule="evenodd" style="opacity: 1; fill: rgb(66, 71, 112); transform: scale(1) rotate(0deg);"><path d="M14.625 6.5H9.75V1.625a1.625 1.625 0 0 0-3.25 0V6.5H1.625a1.625 1.625 0 0 0 0 3.25H6.5v4.875a1.625 1.625 0 0 0 3.25 0V9.75h4.875a1.625 1.625 0 0 0 0-3.25z"></path></svg>
          </span>
          <span class="check">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="11" viewBox="0 0 13 11" fill="#24B47E" style="opacity: 0; fill: rgb(66, 71, 112); transform: scale(0);"><path d="M11.128.271l-7.366 7.19L1.78 5.21C.907 4.49-.467 5.329.158 6.408l2.355 3.927c.373.48 1.249.959 2.122 0 .374-.48 7.49-8.987 7.49-8.987C13 .39 11.878-.449 11.129.27v.001z"></path></svg>
          </span>
        </span>
      <span class="interactive-option__text">
              <span>{{title}}</span>
              <span>{{description}}</span>
        </span>
    </button>
  </li>
</template>

<script>

  import {TweenMax} from 'gsap';

  export default {
    name: "InteractiveOption",
    props: ["selected", "title", "description"],
    data: () => ({
    }),
    mounted() {
      if (this.selected) {
          this.selectAnimation(true);
      }
    },
    watch: {
        selected(value, oldValue) {
          this.selectAnimation(value);
        }
    },
    methods: {
        selectAnimation(value) {
          if (value === true) {
            TweenMax.to(this.$el.querySelector(".check svg"), 1.5, {css: {opacity: 1, transform: "scale(1)", fill: "#24B47E"}, ease: Elastic.easeOut.config(1, 0.5), delay: 0.05});
            TweenMax.to(this.$el.querySelector(".plus svg"), 1.5, {css: {opacity: 0, transform: "scale(0)"}, ease: Elastic.easeOut.config(1, 0.5)})
          } else {
            TweenMax.to(this.$el.querySelector(".plus svg"), 1.5, {css: {opacity: 1, transform: "scale(1)"}, ease: Elastic.easeOut.config(1, 0.5), delay: 0.05});
            TweenMax.to(this.$el.querySelector(".check svg"), 1.5, {css: {opacity: 0, transform: "scale(0)", fill: "#424770"}, ease: Elastic.easeOut.config(1, 0.5)})
          }
        }
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

  .interactive__option:hover .interactive-option__text>span {
    opacity: .80
  }

</style>

