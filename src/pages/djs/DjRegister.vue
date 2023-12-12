<template>
    <section>
        <BaseCard>
            <h2>Reister as a dj now</h2>
            <DjForm @save-data="saveData"></DjForm>
        </BaseCard>
    </section>
</template>

<script>
    import DjForm from "@/components/djs/DjForm.vue";

    export default {
        components: {
            DjForm,
        },

        methods: {
            saveData(data) {
                this.$store.dispatch("djs/addDiskJockey", data);
                console.log("added");
                console.log(data);
                this.$router.replace("/djs");
            },
        },
    };
</script>
