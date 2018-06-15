<template>
    <div class="g-side-nav" :class="{active: isExtend}">
        <nav class="m-nav-list">
            <el-menu 
                default-active="/card.html"
                class="el-menu-vertical"
                router="true">
                <el-menu-item index="/card.html">
                    <i class="el-icon-menu"></i>
                    <span slot="title">领取卡券</span>
                </el-menu-item>
                <el-menu-item index="/templateAync.html">
                    <i class="el-icon-menu"></i>
                    <span slot="title">模板库/关键词同步</span>
                </el-menu-item>
                <el-menu-item index="/noticeConfig.html">
                    <i class="el-icon-menu"></i>
                    <span slot="title">配置服务通知</span>
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