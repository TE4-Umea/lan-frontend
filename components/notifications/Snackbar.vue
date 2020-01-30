<template>
  <transition name="snack">
    <div
      v-if="active"
      :style="styles"
      class="snackbar bottom"
      >
      <div class="snackbar__text">{{ text }}</div>
      <template v-if="button">
        <div
          @click.prevent="close"
          class="snackbar__action">{{ button }}</div>
      </template>
      <template v-else>
        <div
          @click="close"
          class="times">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="#E3E3E3" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </div>
      </template>
    </div>
  </transition>
</template>

<script>
export default {
    computed: {
        styles () {
           return `--primary: ${this.color}`
        }
    },
    data () {
        return {
            active: false,
            text: '',
            button: '',
            color: ''
        }
    },
    methods: {
        close() {
            this.active = false;
        }
    },
    created() {
        this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'snackbar/showSnack') {
            this.text = state.snackbar.text
            this.button = state.snackbar.button
            this.color = state.snackbar.color
            this.active = true;
            setTimeout(this.close, 7000);
        }
        })
    }
}
</script>

<style lang="scss" scoped>

.snackbar {
  --primary: #C849F4;
  --background: #353535;
  --text: #E3E3E3;
  --font: 'Roboto', sans-serif;
  --times: 1rem;
  --padd: 1rem;
}
$sm: 576px;

.snackbar {
  font-size: 1rem;
  background-color: var(--background);
  color: var(--text);
  font-family: var(--font);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  min-height: var(--times);
  padding: var(--padd);
  border-radius: 4px;
  @media screen and (max-width: $sm) {
    border-radius: 0;
    width: calc(100% - (2 * var(--padd)));
  }
  &.top, &.bottom {
    @media screen and (min-width: $sm) {
      transform: translateX(-50%);
      left: 50%;
      &-left {
        left: 1rem;
      }
      &-right {
        right: 1rem;
      }
    }
  }
  &[class*="bottom"] {
    bottom: 1rem;
  }
  &[class*="top"] {
    top: 1rem;
  }
  @media screen and (max-width: $sm) {
    left: 0;
    &[class*="bottom"] {
      bottom: 0;
    }
    &[class*="top"] {
      top: 0;
    }
  }

  .snackbar__text {
    flex: 1;
  }
  .snackbar__action {
    text-transform: uppercase;
    font-weight: 500;
    margin: 0 0 0 1rem;
    color: var(--primary);
    cursor: pointer;
    user-select: none;
  }
  .times {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--times);
    width: var(--times);
    margin-left: 1rem;
    transform: scale(1.25);
    position: relative;
    &:before {
      display: block;
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(.9);
      border-radius: 50%;
      transition: transform .1s ease-in;
    }
    &:hover {
      &:before {
        background-color: rgba(255, 255, 255, .2);
        transform: scale(2);
      }
    }
  }
}

.snack-enter-active, .snack-leave-active {
  transition: all .4s ease;
}
.snack-enter, .snack-leave-to {
  opacity: 0;
  @media screen and (min-width: $sm) {
    &.bottom {
      transform: translateY(100%) translateX(-50%);
    }
    &.top {
      transform: translateY(-100%) translateX(-50%);
    }
  }  
  &[class*="top"] {
    @media screen and (max-width: $sm) {
      transform: translateY(-100%);
    }
  }
  &[class*="bottom"] {
    @media screen and (max-width: $sm) {
      transform: translateY(100%);
    }
  }
  &[class*="-left"] {
    @media screen and (min-width: $sm) {
      transform: translateX(-50%);
    }
  }
  &[class*="-right"] {
    @media screen and (min-width: $sm) {
      transform: translateX(50%);
    }
  }
}
</style>