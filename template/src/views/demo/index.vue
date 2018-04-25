<template>
    <div>
        <h1>{{ info.title }}</h1>
        <h3>{{ systemTime }}</h3>
        <div>
            <router-link to="/demo/page/2"> to Demo page</router-link>
        </div>
        <el-button @click="onNotify">toast</el-button>
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
            this.$ajax.axios({
                url: '/404api',
                ignoreIntercepors: [
                    'addHttpRequestHeader'
                ]
            })
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
            },
            onNotify() {
                this.$notify({
                    title: 'title',
                    message: 'msg',
                    duration: 3000
                });
            }
        }
    };
</script>
