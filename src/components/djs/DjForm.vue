<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !djName.isValid }">
            <label for="djName">DjName</label>
            <input
                type="text"
                id="djName"
                v-model.trim="djName.val"
                @blur="clearValidity('djName')"
            />
            <p v-if="!djName.isValid">djName must not be empty</p>
        </div>
        <div class="form-control" :class="{ invalid: !description.isValid }">
            <label for="description">Description</label>
            <textarea
                name="description"
                id="description"
                rows="3"
                v-model.trim="description.val"
                @blur="clearValidity('description')"
            ></textarea>
            <p v-if="!description.isValid">Description must not be empty</p>
        </div>
        <div class="form-control" :class="{ invalid: !rate.isValid }">
            <label for="rate">Hourly Rate</label>
            <input
                type="number"
                name="rate"
                id="rate"
                v-model.number="rate.val"
                @blur="clearValidity('rate')"
            />
            <p v-if="!rate.isValid">Rate cannot be blank</p>
        </div>
        <div class="form-control" :class="{ invalid: !services.isValid }">
            <h3>Services offered</h3>
            <div>
                <input
                    type="checkbox"
                    id="ClubNights"
                    value="ClubNights"
                    v-model="services.val"
                    @blur="clearValidity('services')"
                />
                <label for="ClubNights">Club Nights</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Events"
                    value="Events"
                    v-model="services.val"
                    @blur="clearValidity('services')"
                />
                <label for="Events">Events</label>
            </div>
            <div>
                <input
                    type="checkbox"
                    id="Weddings"
                    value="Weddings"
                    v-model="services.val"
                    @blur="clearValidity('services')"
                />
                <label for="Weddings">Weddings</label>
            </div>
            <p v-if="!services.isValid">
                At least one expertise must be selected
            </p>
        </div>
        <p v-if="!formIsValid">Please fix the above errors and submit again</p>
        <BaseButton>Register</BaseButton>
    </form>
</template>

<script>
    export default {
        emits: ["save-data"],
        data() {
            return {
                djName: {
                    val: "",
                    isValid: true,
                },
                description: {
                    val: "",
                    isValid: true,
                },
                rate: {
                    val: null,
                    isValid: true,
                },
                services: {
                    val: [],
                    isValid: true,
                },
                formIsValid: true,
            };
        },
        methods: {
            clearValidity(input) {
                this[input];
            },
            validateForm() {
                this.formIsValid = true;
                if (this.djName.val === "") {
                    this.djName.isValid = false;
                    this.formIsValid = false;
                }
                if (this.description.val === "") {
                    this.description.isValid = false;
                    this.formIsValid = false;
                }
                if (!this.rate.val || this.rate.val < 0) {
                    this.rate.isValid = false;
                    this.formIsValid = false;
                }
                if (this.services.val.length === 0) {
                    this.services.isValid = false;
                    this.formIsValid = false;
                }
            },
            submitForm() {
                this.validateForm();

                if (!this.formIsValid) {
                    return;
                }
                const formData = {
                    dj: this.djName.val,
                    desc: this.description.val,
                    rate: this.rate.val,
                    servi: this.services.val,
                };
                this.$emit("save-data", formData);
            },
        },
    };
</script>

<style scoped>
    .form-control {
        margin: 0.5rem 0;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input[type="checkbox"] + label {
        font-weight: normal;
        display: inline;
        margin: 0 0 0 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        font: inherit;
    }

    input:focus,
    textarea:focus {
        background-color: #f0e6fd;
        outline: none;
        border-color: #3d008d;
    }

    input[type="checkbox"] {
        display: inline;
        width: auto;
        border: none;
    }

    input[type="checkbox"]:focus {
        outline: #3d008d solid 1px;
    }

    h3 {
        margin: 0.5rem 0;
        font-size: 1rem;
    }

    .invalid label {
        color: red;
    }

    .invalid input,
    .invalid textarea {
        border: 1px solid red;
    }
</style>
