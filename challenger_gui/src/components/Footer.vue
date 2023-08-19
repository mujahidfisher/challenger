<template>
    <div class="footer">
        <p class="lead">
            CopyRight &copy; {{ currentDate }}
        </p>


    </div>
</template>

<script>
    export default {
        computed: {
            currentDate() {
                return new Date
            }
        }
        
    }
</script>

<style scoped>

</style>