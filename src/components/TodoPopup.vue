<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>Confirm</span>
        <button class="modal__btn-close modal__close" @click="closePopup"></button>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-popup',

  data() {
    return {};
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup_wrapper']) {
        vm.closePopup();
      }
    });
  },
};
</script>

<style scoped>
.popup_wrapper {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  backdrop-filter: blur(10px);
  right: 0;
  top: 0;
  width: 100%;
  z-index: 10;
}
.v-popup {
  padding: 16px;
  position: fixed;
  top: 100px;
  width: 410px;
  background: #727272;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 100;
}
.v-popup__header,
.v-popup__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.v-popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}
.submit_btn {
  padding: 8px;
  color: #ffffff;
  background: #26ae68;
}
.close_modal {
  padding: 8px;
  color: #ffffff;
  background: red;
}
.modal__btn-close {
  position: absolute;
  top: 8px;
  right: 14px;
  display: block;
  width: 24px;
  height: 24px;
  padding: 0;
}
.modal__close {
  background-image: url('../assets/close.svg');
  border-radius: 100%;
  background-size: 27.7px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
.v-popup__header span {
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #fff;
}
@media (max-width: 460px) {
  .v-popup {
    width: 351px;
  }
}
</style>
