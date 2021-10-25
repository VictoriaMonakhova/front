<template>
  <div id = "main">
   <InfoCardd/>
   <FormCard/>
  </div>
</template>

<script>
import InfoCardd from "@/components/InfoCardd.vue";
import FormCard from "@/components/FormCard.vue"
  export default {
    name: "InfoPage",
    components: {
    InfoCardd,
    FormCard,
    },
  };
</script>