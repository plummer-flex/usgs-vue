<script>
import UsaButton from '@/components/USWDS/Button/Button'
import WudsModal from '@/components/Modal'

export default {
  components: {
    UsaButton,
    WudsModal,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    subscriptionId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    openModal() {
      this.$refs['alert-modal-id'].openModal()
      this.$emit('opened-alert-message-box', {
        subscription: this.subscriptionId,
      })
    },
    modalOkay() {
      this.$refs['alert-modal-id'].closeModal()
      this.$emit('closed-alert-message-box', {
        subscription: this.subscriptionId,
      })
    },
  },
}
</script>

<template>
  <WudsModal id="alert-modal-id" ref="alert-modal-id">
    <template v-slot:header>{{ title }}</template>
    <template v-slot:body>
      {{ message }}
    </template>
    <template v-slot:footer>
      <UsaButton tabindex="0" className="ok-btn" variant="default" color="default" @click="modalOkay">OK</UsaButton>
    </template>
  </WudsModal>
</template>
