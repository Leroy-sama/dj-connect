<script>
    export default {
        props: ["id"],
        data() {
            return {
                selectedDj: null,
            };
        },
        computed: {
            djName() {
                return this.selectedDj.djName;
            },
            services() {
                return this.selectedDj.services;
            },
            rate() {
                return this.selectedDj.hourlyRate;
            },
            description() {
                return this.selectedDj.description;
            },
            contactLink() {
                return this.$route.path + "/";
            },
        },
        created() {
            this.selectedDj = this.$store.getters["djs/djs"].find(
                (dj) => dj.id === this.id
            );
        },
    };
</script>

<template>
    <section>
        <BaseCard>
            <h2>{{ djName }}</h2>
            <h3>${{ rate }}/hour</h3>
        </BaseCard>
    </section>
    <section>
        <BaseCard>
            <header>
                <h2>Interested? Reach out now!</h2>
                <BaseButton link :to="contactLink">Contact</BaseButton>
            </header>
            <RouterView />
        </BaseCard>
    </section>
    <section>
        <BaseCard>
            <BaseBadge
                v-for="service in services"
                :key="service"
                :type="service"
                :title="service"
            ></BaseBadge>
            <p>{{ description }}</p>
        </BaseCard>
    </section>
</template>
