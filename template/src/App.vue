<template>
    <div id="page">
        <head-top/>
        <div class="g-main">
            <side-nav 
                :isExtend="isExtend"
                @sideBarClicked="isExtend = !isExtend"/>
            <div class="g-content" 
                :class="[isExtend ? 'slide-to-right' : 'slide-to-left']">
                <router-view/>
                <foot-bottom/>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '@/components/layout/headTop';
    import sideNav from '@/components/layout/sideNav';
    import footBottom from '@/components/layout/footBottom';

    export default {
        name: 'App',
        components: {
            headTop,
            sideNav,
            footBottom,
        },
        data() {
            return {
                isExtend: true
            }
        },
    };
</script>