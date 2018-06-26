<template>
    <div class="g-side-nav" :class="{active: isExtend}">
        <nav class="m-nav-list">
            <el-menu 
                router
                :default-active="$route.path"
                class="el-menu-vertical">
                <el-menu-item index="/demo1.html">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Demo1</span>
                </el-menu-item>
                <el-menu-item index="/demo2.html">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Demo2</span>
                </el-menu-item>
            </el-menu>
        </nav>
        <div class="u-sidebar-btn" @click="toggleSideBar">
            <i :class="[isExtend ? 'el-icon-arrow-left' : 'el-icon-arrow-right']"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'side-nav',
        props: {
            isExtend: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                defaultOpeneds: [],
            };
        },
        methods: {
            toggleSideBar() {
                this.$emit('sideBarClicked');
            }
        }
    };
</script>