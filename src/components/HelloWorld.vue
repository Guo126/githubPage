<template>
    <div id="all" class="hello">
        <a-back-top />
        <!-- ============head ==================== -->
        <div id="header" class="head">
            <div class="head-content">
                <!-- 标题栏 -->
                <div id="title" class="head-content-head flex-row">
                    <!-- <img src="/static/imgs/title.png" /> -->
                    <div class="flex-row hori-center" style>
                        <div class="nav-button" @click="goTop()">
                            <h1>首页</h1>
                        </div>
                        <!-- <div class="nav-button" @click="goDays()">
              <h1>点滴</h1>
                        </div>-->
                        <div class="nav-button" @click="goAbout('header')">
                            <h1>关于</h1>
                        </div>
                        <div class="nav-button" @click="goContact()">
                            <h1>联系</h1>
                        </div>
                    </div>
                    <!-- 登录注册 -->
                    <div class="hori-center loginBar" style="margin-left:3rem;">
                        <a-button type="primary" size="large" @click="showDrawer">登录 / 注册</a-button>
                        <!-- 抽屉 -->
                        <a-drawer
                            :width="420"
                            :closable="false"
                            :visible="visible"
                            :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px',background:'#0000002d'}"
                        >
                            <!-- 抽屉内导航栏 -->
                            <a-menu v-model="current" mode="horizontal">
                                <a-menu-item key="login" @click="isLogin = true">
                                    <a-icon type="smile" />登录
                                </a-menu-item>
                                <a-menu-item key="register" @click="isLogin = false">
                                    <a-icon type="user-add" />注册
                                </a-menu-item>
                            </a-menu>
                            <!-- 登录抽屉 -->
                            <div v-if="isLogin">
                                <div style="width:100% ;padding-top:2rem">
                                    <a-avatar
                                        :size="80"
                                        src="/static/imgs/avatar.jpg"
                                        style="margin-left:40%"
                                    />
                                </div>
                                <a-form
                                    :form="form"
                                    layout="vertical"
                                    hideRequiredMark
                                    style="padding-top:2rem"
                                >
                                    <a-form-item label="手机号/邮箱">
                                        <a-input
                                            v-decorator="['name', {
                  rules: [{ required: true, message: '请输入手机号或邮箱' }]
                }]"
                                            placeholder="请输入手机号或邮箱"
                                        />
                                    </a-form-item>

                                    <a-form-item label="密码">
                                        <a-input
                                            v-decorator="['psw', {
                  rules: [{ required: true, message: '请输入密码' }]
                }]"
                                            placeholder="请输入密码"
                                        />
                                    </a-form-item>
                                </a-form>
                            </div>
                            <!-- 注册抽屉 -->
                            <a-form
                                :form="form"
                                layout="vertical"
                                hideRequiredMark
                                style="margin-top:2rem"
                                v-if="!isLogin"
                            >
                                <a-form-item label="用户名">
                                    <a-input
                                        v-decorator="['account', {
                  rules: [{ required: true, message: '请输入用户名' }]
                }]"
                                        placeholder="请输入用户名"
                                    />
                                </a-form-item>
                                <div>
                                    <strong :style="{ marginRight: 8 }">您去过哪里?</strong>
                                    <br />
                                    <br />
                                    <template v-for=" tag in tags">
                                        <a-checkable-tag
                                            :key="tag"
                                            :checked="selectedTags.indexOf(tag) > -1"
                                            @change="(checked) => handleChange(tag, checked)"
                                        >{{tag}}</a-checkable-tag>
                                    </template>
                                </div>
                                <br />
                                <br />
                                <a-form-item label="手机号/邮箱">
                                    <a-input
                                        v-decorator="['name', {
                  rules: [{ required: true, message: '请输入手机号或邮箱' }]
                }]"
                                        placeholder="请输入手机号或邮箱"
                                    />
                                </a-form-item>

                                <a-form-item label="密码">
                                    <a-input
                                        v-decorator="['psw', {
                  rules: [{ required: true, message: '请设置密码' }]
                }]"
                                        placeholder="请输入密码"
                                    />
                                </a-form-item>

                                <a-form-item label="个人描述">
                                    <a-textarea
                                        v-decorator="['desc', {
                  rules: [{ required: true, message: '写下您想说的。。。' }]
                }]"
                                        :rows="4"
                                        placeholder="写下您想说的。。。"
                                    />
                                </a-form-item>
                            </a-form>
                            <div
                                :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
                            >
                                <a-button :style="{marginRight: '8px'}" @click="onClose">取消</a-button>
                                <a-button @click="onClose" type="primary">登录 / 注册</a-button>
                            </div>
                        </a-drawer>
                    </div>
                </div>
            </div>
            <videoCom></videoCom>
            <!-- <slider :imgs="imgs"></slider> -->
        </div>

        <!-- ============body ==================== -->
        <div id="body" class="body">
            <!-- 第一块 -->
            <div class="body-two" style="margin-top:5rem">
                <div class="menu-line">
                    <div class="menuL" @click="toItemA">
                        花里胡哨
                        <br />
                        <p>Play</p>
                    </div>
                    <div class="menuL" @click="toItemB">
                        幸运日记
                        <br />
                        <p>DIARY</p>
                    </div>
                    <div class="menuL" @click="toItemC">
                        点墨书屋
                        <br />
                        <p>BOOK</p>
                    </div>
                    <!-- <div class="menuL" @click="toItemD">联系我</div> -->
                </div>
            </div>

            <!-- 第二块 -->
            <div class="body-one flex-col" style="align-items: center">
                <h3 style="color:#000000;cursor:pointer">Me</h3>
                <br />
                <div class="line"></div>

                <div id="m_photo" class="myPart">
                    <!-- <router-link :to="{path:'/me'}" style="width:330px;height:450px"> -->
                    <img
                        id="myP"
                        class="myPhoto"
                        v-lazy="'/static/imgs/me2.jpg'"
                        alt="It's Me"
                        width="330px"
                        height="450px"
                    />
                    <!-- </router-link> -->
                    <div id="myM" class="aboutMe">
                        <p>我们可以欺瞒别人</p>
                        <p>却无法欺瞒自己</p>
                        <p>当我们走向枝繁叶茂的五月</p>
                        <p>青春就不再是一个谜</p>
                        <p>向上的路</p>
                        <p>总是坎坷又崎岖</p>
                        <p>当我们跨越了一座高山</p>
                        <p>也就跨越了一个真实的自己</p>
                    </div>
                </div>
            </div>

            <!-- 滚动视差 -->
            <div class="slideBg" style="background-image:url('/static/imgs/sea.jpg')">
                <div class="content">&nbsp;我喜欢大海，</div>
            </div>
            <div class="slideBg" style="background-image:url('/static/imgs/city.jpg')">
                <div class="content">&nbsp;喜欢建筑，</div>
            </div>
            <div class="slideBg" style="background-image:url('/static/imgs/game03.jpg')">
                <div class="content">&nbsp;当然，少不了史诗。</div>
            </div>

            <!-- <div id="sudoku-demo" class="demo">
        <transition-group name="cell" tag="div" class="container">
          <div v-for="cell in cells" :key="cell.id" class="cell">{{ cell.number }}</div>
        </transition-group>
            </div>-->

            <!-- 第三块 -->
            <div class="body-three flex-col">
                <h3 style="color:#000">Days</h3>
                <br />
                <br />
                <!-- 图片 -->
                <a-tooltip placement="right" title="点击进入我的世界！">
                    <div @click="goDays()" style="cursor:pointer">
                        <a-row :gutter="40">
                            <a-col :span="8">
                                <img class="col3" v-lazy="'/static/imgs/portfolio-img1.jpg'" />
                            </a-col>
                            <a-col :span="8">
                                <img class="col3" v-lazy="'/static/imgs/portfolio-img2.jpg'" />
                            </a-col>
                            <a-col :span="8">
                                <img class="col3" v-lazy="'/static/imgs/portfolio-img3.jpg'" />
                            </a-col>
                        </a-row>

                        <a-row :gutter="40" style="margin-top:40px">
                            <a-col :span="12">
                                <img class="col2" v-lazy="'/static/imgs/portfolio-img4.jpg'" />
                            </a-col>
                            <a-col :span="12">
                                <img class="col2" v-lazy="'/static/imgs/portfolio-img5.jpg'" />
                            </a-col>
                        </a-row>
                    </div>
                </a-tooltip>
            </div>
            <div class="slideBg" style="background-image:url('/static/imgs/basketball.jpg')">
                <div class="content">&nbsp;冲啊，少年！</div>
            </div>

            <!-- 最后一块 -->
            <div class="flex-col last-div" style=" align-items: center;padding-top:2rem">
                <h3>Get In Touch</h3>

                <div class="flex-row" style="margin:2rem 0">
                    <a-popover title="支付宝收款码">
                        <template slot="content">
                            <img v-lazy="'/static/imgs/aliCode.jpg'" width="200px" height="200px" />>
                        </template>
                        <a-icon
                            type="alipay-circle"
                            :style="{fontSize:'30px' , color:'#01A9DB'}"
                            class="foot-icon"
                        />
                    </a-popover>
                    <a-popover title="微信收款码">
                        <template slot="content">
                            <img
                                v-lazy="'/static/imgs/weChatCode.jpg'"
                                width="200px"
                                height="200px"
                            />>
                        </template>
                        <a-icon
                            type="wechat"
                            :style="{fontSize:'30px' , color:'#04B431'}"
                            class="foot-icon"
                        />
                    </a-popover>
                    <a-popover title="QQ收款码">
                        <template slot="content">
                            <img v-lazy="'/static/imgs/qqCode.jpg'" width="200px" height="200px" />>
                        </template>
                        <a-icon
                            type="qq"
                            :style="{fontSize:'30px' , color:'#00BFFF'}"
                            class="foot-icon"
                        />
                    </a-popover>
                </div>

                <div class="textdiv">
                    <a-textarea allowClear placeholder="写下诗和远方..." :rows="6" />
                </div>
                <div style="margin:2rem auto">
                    <a-button ghost icon="thunderbolt" @click="test">SEND</a-button>
                </div>
            </div>
        </div>

        <!-- =================foot================= -->
        <div id="foot" class="foot">
            <div class="icons-list flex-row">
                <a-icon type="weibo-square" class="foot-icon" />
                <a-icon type="github" class="foot-icon" />
                <a-icon type="twitter" class="foot-icon" />
                <a-icon type="facebook" class="foot-icon" />
            </div>
            <div>
                <p>Copyright © 2020.wenhao.guo . All rights reserved</p>
            </div>
        </div>
    </div>
</template>

<script>
//  import Slider from "../base/Slider";
import videoCom from "../base/video";
import _ from "lodash/lodash";
import { getInfo } from "../api";
export default {
    name: "HelloWorld",
    components: {
        // Slider,
        videoCom: () => import("../base/video")
    },
    data () {
        return {
            winHeight: window.innerHeight,
            cells: Array.apply(null, { length: 81 }).map(function (_, index) {
                return {
                    id: index,
                    number: (index % 9) + 1
                };
            }),
            is_bg: true,
            // imgs: [
            //     { src: "/static/imgs/banner1.jpg" },
            //     { src: "/static/imgs/banner2.jpg" }
            // ],
            visible: false,
            confirmLoading: false,
            step: {
                //此数据是控制动画快慢的
                type: Number,
                default: 50
            },
            form: this.$form.createForm(this),
            visible: false,
            current: ["login"],
            isLogin: true,
            checked1: false,
            checked2: false,
            checked3: false,
            tags: [
                "上海",
                "海南",
                "广州",
                "深圳",
                "香港",
                "澳门",
                "西藏",
                "东北",
                "欧洲",
                "美洲",
                "澳洲",
                "非洲"
            ],
            selectedTags: [],
            dayTime: "",
            moveMe: false
        };
    },

    created () {
        //this.$refs.head.style.height = document.body.scrollWidth;
    },
    mounted () {
        // this.$refs.head.style.height = this.winHeight + "px";
        this.setDayTime();
        this.shuffle();
        this.scrollAnim();

        //console.log(this.$store.state.text)
    },
    beforeDestroy () {
        window.removeEventListener("scroll", this.anim())
    },
    methods: {
        shuffle: function () {
            setTimeout(() => {
                this.cells = _.shuffle(this.cells);
                this.shuffle();
            }, 4000);
        },
        setDayTime () {
            //设置问候语
            var time = new Date().getHours();
            if (time > 5 && time < 11) {
                this.dayTime = "  Morning !";
            } else if (time >= 11 && time <= 13) {
                this.dayTime = "  Noon !";
            } else if (time > 14 && time <= 17) {
                this.dayTime = "  Afternoon !";
            } else {
                this.dayTime = "  Evening !";
            }
        },

        showMe (type) {
            if (type == "out" && !this.moveMe) {
                this.moveMe = true;
                let mp = document.querySelector("#m_photo");
                mp.style.marginLeft = "-500px";
                //this.changePosition("#m_photo", "marginLeft", -30, "px", 10, 50);
            }

            if (type == "in" && this.moveMe) {
                this.moveMe = false;
                let mp = document.querySelector("#m_photo");
                mp.style.marginLeft = "0px";
                // this.changePosition("#m_photo", "marginLeft", 30, "px", 10, 50);
            }
        },

        test () {
            let url = "https://api.github.com/users/111";
            // this.$ajax.get(url).then(res=>{
            //   console.log(res)
            // });
            getInfo(url).then(res => {
                //console.log(res);
            });
        },

        // 缓慢迭代变化样式，domID，样式名称，每次修改的值，单位名称，修改次数,时间
        changePosition (id, css, value, unit, times, time) {
            let mp = document.querySelector(id);
            let n = 0; //储存已经执行的次数

            (function doThing () {
                if (times > 0) {
                    mp.style[css] = value * ++n + unit;
                    times--;
                    setTimeout(doThing, time);
                }
            })();
        },

        goDays () {
            this.$router.push("/myDays");
        },
        toItemA () {
            this.$router.push({ name: "list", params: { active: false } });
        },
        toItemB () {
            this.$router.push("/myworld");
        },
        toItemC () {
            this.$router.push("/myzoom");
        },

        //选择标签
        handleChange (tag, checked) {
            const { selectedTags } = this;
            const nextSelectedTags = checked
                ? [...selectedTags, tag]
                : selectedTags.filter(t => t !== tag);

            this.selectedTags = nextSelectedTags;
        },
        showDrawer () {
            this.visible = true;
        },
        onClose () {
            this.visible = false;
        },
        handleOk (e) {
            this.ModalText = "The modal will be closed after two seconds";
            this.confirmLoading = true;
            setTimeout(() => {
                this.visible = false;
                this.confirmLoading = false;
            }, 2000);
        },
        handleCancel (e) {
            this.visible = false;
        },

        //回到顶部
        goTop () {
            let distance =
                document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
            let step = distance / 50; //每步的距离
            (function jump () {
                if (distance > 0) {
                    distance -= step;
                    window.scrollTo(0, distance);
                    setTimeout(jump, 14);
                }
            })();
        },
        //滑到关于我们
        goAbout (target) {
            let distance =
                document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
            target = document.getElementById(target).scrollHeight;
            let step = target / 50; //每步的距离
            (function jump () {
                if (distance <= target) {
                    distance += step;
                    window.scrollTo(0, distance);
                    setTimeout(jump, 14);
                }
            })();
        },

        goContact () {
            let distance =
                document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
            var target = document.getElementById("all").scrollHeight;
            let step = target / 50; //每步的距离
            (function jump () {
                if (distance <= target) {
                    distance += step;
                    window.scrollTo(0, distance);
                    setTimeout(jump, 20);
                }
            })();
        },

        getEle (name) {
            return document.getElementById(name);
        },
        getEleTop (name) {
            return document.getElementById(name).getBoundingClientRect().top;
        },

        //动画监听
        scrollAnim () {
            window.addEventListener("scroll", this.anim())

            // this.$on('hook:beforeDestroy', () => {
            //     window.removeEventListener("scroll", this.anim())
            // })
        },
        //页面动画
        anim () {
            let scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop;

            //标题栏出现
            if (scrollTop < 200) {
                this.getEle("title").style.top = 0;
                this.getEle("title").style.backgroundColor = "#0000002d";
            }
            //三个小菜单依次上升
            if (scrollTop > 300) {
                this.showMenuA = true;
                let menus = Array.from(document.getElementsByClassName("menuL"));
                if (menus.length > 0) {
                    menus[0].classList.add("animated", "rize");

                    setTimeout(() => {
                        this.showMenuB = true;
                        menus[1].classList.add("animated", "rize");
                    }, 250);
                    setTimeout(() => {
                        this.showMenuC = true;
                        menus[2].classList.add("animated", "rize");
                    }, 500);
                }

            }

            //个人信息
            if (scrollTop > 1000) {
                this.getEle("myP").classList.add("animated", "slideR");
                this.getEle("myM").classList.add("animated", "slideL");
            }

            //days部分的图片
            if (scrollTop > 4200) {
                let domsa = Array.from(document.getElementsByClassName("col2"));
                let domsb = Array.from(document.getElementsByClassName("col3"));

                domsa.forEach(item => {
                    item.style.transform = "scale(1)";
                });

                domsb.forEach(item => {
                    item.style.transform = "scale(1)";
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import './HelloWorld.scss';
@import './animation.scss';
</style>
