<script>
import { Escapable } from "@/utils/Escapable";
import UsaIconClose from "@/components/USWDS/Icon/IconClose.vue";

export default {
  name: "usgs-modal",
  mixins: [Escapable],
  components: {
    UsaIconClose,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    escapable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    openModal() {
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
      this.$emit("opened", this.id);
      this.$nextTick(() => {
        const frameRef = this.$refs["dialog-frame"];
        frameRef.focus();
      });
    },
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
      this.$emit("closed", this.id);
    },
    // Handle Escape key
    escapeHandler() {
      if (this.escapable) {
        this.closeModal();
      }
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div
      class="wuds-modal"
      aria-modal="true"
      tabindex="-1"
      ref="modal-window"
      :class="{ 'open fade-in-background': show }"
      :id="id"
      :aria-labelledby="`${id}_label`"
      v-show="show"
    >
      <div class="backdrop" @click="escapeHandler" />

      <div class="modal-dialog" ref="dialog-frame" tabindex="-1">
        <header class="modal_header">
          <h2>
            <slot name="header" />
          </h2>
          <UsaIconClose
            classNames="close-btn float-right"
            @click="closeModal"
          ></UsaIconClose>
        </header>
        <section class="modal_body">
          <slot name="body" />
        </section>
        <footer class="modal_footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </transition>
</template>
