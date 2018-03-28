<template>
    <div>
        <h1>{{ info.title }}</h1>
        <h3>{{ systemTime }}</h3>
    </div>
</template>

<style>
</style>

<script>
    import { mapState } from 'vuex';
    import { demo } from '@/api';

    export default {
        computed: mapState({
            info: state => state.demo.info,
            systemTime: state => state.demo.systemTime
        }),
        created() {
            this.getInfo();
            this.getEcho();
        },
        data() {
            return {
            }
        },
        methods: {
            getInfo() {
                demo.getInfo()
                .then((res) => {
                    this.$store.dispatch(
                        'demo/updateInfo',
                        {
                            info: res.data
                        }
                    )
                })
            },
            getEcho() {
                demo.getEcho({
                    data: {
                        message: 'hello'
                    },
                    count: 3
                }).then((res) => {
                    console.log(res)
                    this.$store.dispatch(
                        'demo/updateSystemTime',
                        {
                            systemTime: res.systemtime
                        }
                    );
                })
            }
        }
    };
</script>
