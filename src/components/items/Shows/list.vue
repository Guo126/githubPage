<template>
    <section>
        <a-back-top />
        <!-- <div :class="[{'preloader':true,'active':active}]">
            <div ref="num" :class="[{'count':true,'hide':hide}]">0</div>
        </div>-->
        <div>
            <colorful>
                <div>
                    <div class="back">
                        <div @click="goBack()" class="back-button">
                            <a-icon type="left" />&nbsp;首页
                        </div>
                    </div>
                    <div class="main">
                        <div
                            class="card"
                            v-for="(item,index) in items"
                            :key="index"
                            :style="{backgroundImage:`url(${item.img})`,backgroundSize:'cover'}"
                        >
                            <div class="card-content" @click="checkItem(item)">{{item.title}}</div>
                        </div>
                    </div>
                </div>

                <!-- <button @click="toCard()">click</button> -->
            </colorful>
        </div>
    </section>
</template>
<script>
import Loading from "../../../base/Loading";
import ColorBg from "../../../base/colorfulBg";
export default {
    data () {
        return {
            time: 3000,
            hide: false,
            active: true,
            items: [
                {
                    title: "Get Color",
                    img: "./static/imgs/cool_getColor.png",
                    url: "/colorfulLife/getColor"
                },
                {
                    title: "炫酷Loading",
                    img: "./static/imgs/cool_loading.png",
                    url: "/colorfulLife/loading"
                },
                {
                    title: "鼠标悬浮Card效果",
                    img: "./static/imgs/cool_card.png",
                    url: "/colorfulLife/cardHover"
                },
                {
                    title: "永不停歇的渐变",
                    img: "./static/imgs/cool_bg.jpg",
                    name: "colorBg",
                    params: {
                        origin: "colorBg"
                    }
                },
                {
                    title: "绚烂霓虹灯",
                    img: "./static/imgs/cool_btn.png",
                    name: "colorBg",
                    params: {
                        origin: "colorBtn"
                    }
                },
                {
                    title: "简约大气搜索",
                    img: "./static/imgs/cool_search.png",
                    url: "/colorfulLife/coolSearch"
                }
            ]
        };
    },
    components: {
        loading: Loading,
        colorful: ColorBg
    },
    mounted () {

        this.active = this.$route.params.active != undefined ? this.$route.params.active : true;
        // this.load();
    },
    methods: {
        addOne () {
            this.$store.commit("addOne", 1);
        },
        async () {
            this.$store.dispatch("addOneAsync", 2);
        },
        toCard () {
            this.$router.push("/colorfulLife/cardHover");
        },
        load () {
            //预加载界面
            // let numDiv = this.$refs.num;
            // let counter = setInterval(() => {
            //     let num = parseInt(numDiv.textContent);
            //     numDiv.textContent = (++num).toString();
            //     if (num == 100) {
            //         clearInterval(counter);
            //         this.hide = true;
            //         this.active = true;
            //     }
            // }, 30);
        },
        checkItem (item) {
            if (item.url) {
                this.$router.push(item.url);

            } else {
                this.$router.push({ name: item.name, params: item.params })
            }
        },
        goBack () {
            this.$router.push('/');
        }
    }
};
</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.back-button {
    padding: 5px 8px;
    cursor: pointer;
    color: #fff;
    font-weight: 500;
    outline: none;
    border: none;
    font-size: 18px;
}

.preloader {
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #070707;
    z-index: 100;
}

.back {
    position: fixed;
    padding: 2rem 0 0 6rem;
    text-align: left;
}

.preloader:before {
    position: absolute;
    content: 'Loading';
    text-transform: uppercase;
    font-size: 12em;
    font-weight: 700;
    color: rgba(225, 225, 225, 0.123);
}

.active {
    /* transform: translateY(-100vh);
    transition: ease-in-out 1s;
    transition-delay: 1s; */
    opacity: 0;
    pointer-events: none;
    transition: ease-in-out 1s;
    transition-delay: 1s;
}

.count {
    position: relative;
    font-size: 16em;
    font-weight: 800;
    color: #fff;
    z-index: 1;
}

.count:after {
    content: '%';
    font-size: 0.5em;
}

.hide {
    opacity: 0;
    pointer-events: none;
    transition: ease-in-out 1s;
}

.content {
    padding: 5rem;
    display: flex;
    flex-direction: column;
    justify-items: center;
}

.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 9rem 0;
}

.card {
    border-radius: 5px;
    width: 700px;
    height: 360px;
    margin-bottom: 10%;
    position: relative;
}

.card-content {
    text-align: center;
    color: whitesmoke;
    line-height: 360px;
    font-size: 3.5rem;
    z-index: 5;
    background: #070707b6;
    border-radius: 5px;
    opacity: 0;
    transition: ease-in 0.6s;
    cursor: pointer;
}

.card-content:hover {
    opacity: 1;
}

.item-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: #03030300;
}
</style>