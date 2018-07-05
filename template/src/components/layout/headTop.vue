<template>
    <header class="g-header">
        <h1 class="m-logo f-fl">
            <div class="logo-bd">
                <div class="logo-img f-fl">
                    <img src="http://haitao.nos.netease.com/fb11aa98-5098-4048-a4ad-1e10b78e8864.svg" alt="logo">
                </div>
                <div class="logo-txtWrap f-fl">
                    <h2 class="logo-title">考拉 | xxx后台管理系统</h2>
                    <h4 class="logo-subtitle">中国最大的进口电商平台</h4>
                </div>
            </div>
        </h1>
        <div class="quick-nav f-fr">
            <div class="m-nav-item" 
                @mouseenter="showSettings = true"
                @mouseleave="showSettings = false">
                <i class="scaffold-icon-my u-icon-user"></i>个人中心
                <transition name="fade">
                    <ul v-if="showSettings" class="m-user-dropdown">
                        <li class="u-item">
                            <p class="f-toe">
                                <i class="scaffold-icon-my f-mr10"></i>
                                <span class="f-toe">朱平</span>
                            </p>
                        </li>
                        <li class="u-item">
                            <a class="f-toe" href="/logout">
                                <i class="scaffold-icon-lock f-mr10"></i>退出
                            </a>
                        </li>
                    </ul>
                </transition>
            </div>
        </div>
    </header>
</template>

<script>
    import { commonApi } from '@/api';

    export default {
        name: 'head-top',
        data() {
            return {
                showSettings: false
            }
        },
        created() {
            // this.getUser();
        },
        methods: {
            getUser() {
                commonApi.getUser().then((res) => {
                    const { nickname } = res.data;
                    this.nickname = nickname;
                });
            }
        }
    }
</script>

<style lang="less">
    .g-header {
        padding: 8px 0 8px 38px;
        height: 60px;
        background-color: #22354a;
        color: #fff;
        .m-logo {
            height: 44px;
            overflow: hidden;
            margin-left: -38px;
            .logo-bd {
                display: inline-block;
                padding-left: 20px;
                color: #fff;
            }
            .logo-img {
                margin-right: 10px;
            }
            .logo-txtWrap {
                padding: 4px 0;
                .logo-title {
                    font-weight: normal;
                    line-height: 20px;
                }
                .logo-subtitle {
                    font-size: 12px;
                    font-weight: normal;
                    line-height: 20px;
                }
            }
        }
        .quick-nav {
            font-size: 12px;
            line-height: 44px;
            .m-nav-item {
                position: relative;
                display: inline-flex;
                align-items: center;
                margin-right: 20px;
            }
            .u-icon-user {
                font-size: 25px;
                margin-right: 8px;
            }
        }
        .m-user-dropdown {
            position: absolute; 
            z-index:500; 
            top: 46px; 
            right: 0px; 
            border:1px solid rgba(235,235,235,0.4); 
            border-top:0; 
            background: #fff; 
            color: #616a78; 
            box-shadow: 1px 1px 3px #ccc;
            &:after {
                content: ' '; 
                position: absolute; 
                top: -9px; 
                right: 17px; 
                width: 0; 
                height: 0; 
                border-left: 7px solid transparent; 
                border-right: 7px solid transparent; 
                border-bottom: 9px solid rgba(0,0,0,0.045); 
                border-bottom-color: #fdfeff;
            }
            .u-item {
                display:flex; 
                position: relative; 
                width: 200px; 
                height:40px; 
                align-items: center; 
                border-bottom: 1px solid #f1f2f3; 
                white-space: nowrap;
                &:hover {
                    color: #16181b; 
                    background: #f9fafb;
                }
                a,
                a:hover {
                    display: block; 
                    width: 100%; 
                    text-decoration: none; 
                    color: #616a78;
                }
                a,
                p {
                    padding: 0 16px;
                }
                i {
                    font-size: 16px;
                }
            }
        }
        .fade-enter,
        .fade-leave-to {
            opacity: 0;
        }
        .fade-enter-active, 
        .fade-leave-active {
            transition: opacity .5s;
        }
    }
</style>