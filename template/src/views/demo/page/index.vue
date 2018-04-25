<template>
<div>
    <p>demo page {{ pageId }}</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            pageId: 'none'
        };
    },
    created() {
        this.pageId = this.$route.params.id
    }
}
</script>
