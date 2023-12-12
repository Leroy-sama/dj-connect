<script>
    import DjItem from "@/components/djs/DjItem.vue";
    import DjFilter from "@/components/djs/DjFilter.vue";

    export default {
        components: {
            DjItem,
            DjFilter,
            DjFilter,
        },
        data() {
            return {
                isLoading: false,
                error: null,
                activeFilters: {
                    ClubNights: true,
                    Events: true,
                    Weddings: true,
                },
            };
        },
        computed: {
            isDj() {
                return this.$store.getters["djs/isDj"];
            },
            djs() {
                const djs = this.$store.getters["djs/djs"];
                return djs.filter((dj) => {
                    if (
                        this.activeFilters.ClubNights &&
                        dj.services.includes("ClubNights")
                    ) {
                        return true;
                    }
                    if (
                        this.activeFilters.Events &&
                        dj.services.includes("Events")
                    ) {
                        return true;
                    }
                    if (
                        this.activeFilters.Weddings &&
                        dj.services.includes("Weddings")
                    ) {
                        return true;
                    }
                    return false;
                });
                return this.$store.getters["djs/djs"];
            },
            hasDjs() {
                return !this.isLoading && this.$store.getters["djs/hasDjs"];
            },
        },
        created() {
            this.loadDjs();
        },
        methods: {
            setFilters(updatedFilters) {
                this.activeFilters = updatedFilters;
            },
            async loadDjs() {
                this.isLoading = true;
                try {
                    await this.$store.dispatch("djs/loadDjs");
                } catch (error) {
                    this.error = error.message || "Something went wrong!";
                }
                this.isLoading = false;
            },
            handleError() {
                this.error = null;
            },
        },
    };
</script>

<template>
    <BaseDialog :show="!!error" title="An error occurred" @close="handleError">
        <p>{{ error }}</p>
    </BaseDialog>
    <section>
        <DjFilter @change-filter="setFilters"></DjFilter>
    </section>
    <section>
        <BaseCard>
            <div class="controls">
                <BaseButton mode="outline" @click="loadDjs">Refresh</BaseButton>
                <BaseButton v-if="!isDj && !isLoading" link to="/register"
                    >Register as Coach</BaseButton
                >
            </div>
            <div v-if="isLoading">
                <BaseSpinner></BaseSpinner>
            </div>
            <ul v-else-if="hasDjs">
                <DjItem
                    v-for="dj in djs"
                    :key="dj.id"
                    :id="dj.id"
                    :dj-name="dj.djName"
                    :rate="dj.hourlyRate"
                    :services="dj.services"
                ></DjItem>
            </ul>
            <h3 v-else>No Djs found</h3>
        </BaseCard>
    </section>
</template>

<style scoped>
    ul {
        list-style: none;
    }

    .controls {
        display: flex;
        justify-content: space-between;
    }
</style>
