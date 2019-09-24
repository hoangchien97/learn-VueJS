<template>
    <div class="user-detail" v-if="Object.keys(userDetailInfo).length != 0" >
        <h2>User Detail</h2>
        <div class="user-name">
            Name: {{ userDetailInfo.name.last }} {{ userDetailInfo.name.first }}
        </div>
        <div class="user-email">
            Email: {{ userDetailInfo.email }}
        </div>
        <div class="user-dob">
            DOB: {{ userDetailInfo.dob }}
        </div>
        <div class="user-gender">
            Gender: {{ userDetailInfo.gender }}
        </div>
        <div class="user-address">
            Address: {{ userDetailInfo.location.city }}
        </div>
        <!-- {{userDetailInfo}}} -->
    </div>
</template>

<script>
export default {
    props: {
        userDetailInfo: Object
    }
    // You can also write props: ['userDetailInfo'] but the above is recommended
}
</script>

<style>

</style>