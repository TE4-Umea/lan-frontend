<template>
  <div class="nav-wrapper d-contrast">
      <div class="line gradient--background"></div>
      <div class="content">
            <span>
                <logo class="pr-3 logo d-inline"/>
                <slot class="d-inline"/>
            </span>
            <dropdown />
      </div>
  </div>
</template>

<script>
import Logo from '~/components/navbar/Logo.vue';
import Dropdown from '~/components/navbar/Dropdown.vue';

export default {
    components: {
        Logo,
        "dropdown": Dropdown
    }
}
</script>

<style scoped>
    .logo {
        margin-top: 7px;
    }
    .content {
        padding: 15px;
        display: flex;
        justify-content: space-between;
    }
    .line {
        height: 6px;
    }
    .nav-wrapper {
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        width: 100%;
        /* height: 69px; */
    }
</style>
