<template>
    <div>
        <h1>{{ count }}</h1>
        <el-button @click="increase()">increase</el-button>
    </div>
</template>

<style>
</style>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            count: state => state.demo.count
        }),
        mounted() {
            this.$ajax.post('/api/demo', {
                type: 'form-urlencoded',
                data: {
                    x: 1,
                    b: 2
                }
            }).then((data) => {
                console.log(data)
            })
        },
        data() {
            return {
            }
        },
        methods: {
            increase() {
                this.$store.dispatch('demo/increase');
            }
        }
    };
</script>
