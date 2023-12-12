<script>
    export default {
        props: ["id", "djName", "rate", "services"],
        computed: {
            djContactLink() {
                return this.$route.path + "/" + this.id + "/contact";
            },
            djDetailsLink() {
                return this.$route.path + "/" + this.id;
            },
        },
    };
</script>

<template>
    <li>
        <h3>{{ djName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <BaseBadge
                v-for="service in services"
                :key="service"
                :type="service"
                :title="service"
            ></BaseBadge>
        </div>
        <div class="actions">
            <BaseButton mode="outline" link :to="djContactLink"
                >Contact</BaseButton
            >
            <BaseButton link :to="djDetailsLink">View Details</BaseButton>
        </div>
    </li>
</template>

<style scoped>
    li {
        margin: 1rem 0;
        border: 1px solid #424242;
        /* border-radius: 12px; */
        padding: 1rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h3,
    h4 {
        margin: 0.5rem 0;
    }

    div {
        margin: 0.5rem 0;
    }

    .actions {
        display: flex;
        justify-content: flex-end;
    }
</style>
