<template>
    <section class="main">
        <section class="left">
            <section class="header">
                <a-menu v-model="current" mode="horizontal">
                    <a-menu-item key="music">
                        <router-link to="/myDays/music">
                            <a-icon type="customer-service" />音乐
                        </router-link>
                    </a-menu-item>
                    <a-sub-menu>
                        <span slot="title" class="submenu-title-wrapper">
                            <a-icon type="play-circle" />
                            <a-badge :count="movieCount" :offset="offset">电影</a-badge>
                        </span>

                        <a-menu-item key="movie">
                            <router-link :to="{name:'movie', params:{type:'recommond'}}">重磅推荐</router-link>
                        </a-menu-item>
                        <a-menu-item key="movies">
                            <router-link :to="{name:'movie', params:{type:'recent'}}">最近在看</router-link>
                        </a-menu-item>
                    </a-sub-menu>
                    <a-menu-item key="book">
                        <router-link to="/myDays/book">
                            <a-icon type="read" />图书
                        </router-link>
                    </a-menu-item>
                </a-menu>
            </section>
            <section class="content">
                <!-- <router-link   class="back-button">
              <a-icon type="left" />&nbsp;BACK
                </div>-->
                <router-view @sendMovie="setMovie"></router-view>
                <div>
                    <a-back-top />
                    <strong style="color: rgba(64, 64, 64, 0.6)"></strong>
                </div>
            </section>
        </section>

        <section id="movie" class="right">
            <div class="part1">
                <img v-lazy="movieInfo.poster" width="180px" height="260px" />

                <div style="margin-left:10px">
                    <h1>
                        <strong>{{movieInfo.name}}({{movieInfo.year}})</strong>
                    </h1>
                    <span>
                        <a-rate
                            :value="parseInt(movieInfo.star/2) + parseFloat((movieInfo.star - parseInt(movieInfo.star/1)) > 0.5 ? 0.5 : 0)"
                            :allowHalf="true"
                        />

                        <span class="ant-rate-text">{{movieInfo.star}}</span>
                    </span>
                    <br />
                    <br />
                    <p>
                        类型：
                        <strong>{{movieInfo.type}}</strong>
                    </p>
                    <p>
                        地区：
                        <strong>{{movieInfo.country}}</strong>
                    </p>
                    <p>
                        演员：
                        <strong>{{movieInfo.actors}}</strong>
                    </p>
                </div>
            </div>
            <div class="part2">
                <h1>
                    <strong>本人影评</strong>
                </h1>
                <p>{{movieInfo.feel}}</p>
            </div>
        </section>
    </section>
</template>
<style lang="scss" scoped>
.main {
    display: flex;
    align-items: center;

    .left {
        //  background-color: #34ace0;
        width: 60%;
        height: 100%;
        .header {
            width: 100%;
            // position: fixed;
        }
        .content {
            padding-top: 30px;
            height: calc(100vh - 50px);
            overflow-y: scroll;
        }
    }
    .right {
        // background-size: cover;
        // filter: opacity(0.5);
        //  background-color:rgba(247, 241, 241, 0.863);
        margin: 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.692);
        width: 40%;
        height: calc(100vh - 100px);
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        padding: 50px;
        padding-top: 8%;
        .part1 {
            display: flex;
            justify-content: space-around;
            text-align: left;
        }
        .part2 {
            padding: 16px;
            text-align: left;
        }
    }
}
</style>
<script>
export default {
    data () {
        return {
            mode: "inline",
            theme: "dark",
            current: ["movie"],
            movieInfo: {},
            movieCount: 0,
            offset: [10, -5]
        };
    },
    methods: {
        changeTheme (checked) {
            this.theme = checked ? "dark" : "light";
        },
        setMovie (item) {
            this.movieInfo = item;
            if (this.movieCount == 0) {
                this.movieCount = item.count;
            }
            // document.getElementById("movie").style.backgroundImage = `url(${item.poster})`;
            // console.log(this.movieInfo);
        }
    }
};
</script>