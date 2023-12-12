<template>
    <BaseCard>
        <h2>FInd your coach</h2>
        <span class="filter-option">
            <input
                type="checkbox"
                id="Club-Nights"
                chacked
                @change="setFilter"
            />
            <label for="Club-Nights">Club Nights</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="Events" chacked @change="setFilter" />
            <label for="Events">Events</label>
        </span>
        <span class="filter-option">
            <input type="checkbox" id="Weddings" chacked @change="setFilter" />
            <label for="Weddings">Weddings</label>
        </span>
    </BaseCard>
</template>

<script>
    export default {
        emits: ["change-filter"],
        data() {
            return {
                filters: {
                    ClubNights: true,
                    Events: true,
                    Weddings: true,
                },
            };
        },
        methods: {
            setFilter(event) {
                const inputId = event.target.id;
                const isActive = event.target.checked;
                const updatedFilters = {
                    ...this.filters,
                    [inputId]: isActive,
                };
                this.filters = updatedFilters;
                this.$emit("change-filter", updatedFilters);
            },
        },
    };
</script>

<style scoped>
    h2 {
        margin: 0.5rem 0;
    }

    .filter-option {
        margin-right: 1rem;
    }

    .filter-option label,
    .filter-option input {
        vertical-align: middle;
    }

    .filter-option label {
        margin-left: 0.25rem;
    }

    .filter-option.active label {
        font-weight: bold;
    }
</style>
