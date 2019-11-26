<template>
  <div id="all" class="hello">
    <a-back-top />
    <!-- ============head ==================== -->
    <div id="header" class="head">
      <div class="head-content">
        <!-- 标题栏 -->
        <div id="title" class="head-content-head flex-row">
          <img src="/static/imgs/title.png" />
          <div class="flex-row hori-center" style="margin-left:auto">
            <div class="nav-button" @click="goTop()">
              <h1>首页</h1>
            </div>
            <div class="nav-button" @click="goAbout('header')">
              <h1>关于</h1>
            </div>
            <div class="nav-button" @click="goContact()">
              <h1>联系我们</h1>
            </div>
          </div>
          <!-- 登录注册 -->
          <div class="hori-center" style="margin-left:3rem;">
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
                  <a-avatar :size="80" src="/static/imgs/avatar.jpg" style="margin-left:40%" />
                </div>
                <a-form :form="form" layout="vertical" hideRequiredMark style="padding-top:2rem">
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
      <slider :imgs="imgs"></slider>
    </div>

    <!-- ============body ==================== -->
    <div id="body" class="body">
      <!-- 第一块 -->
      <div class="body-one flex-col">
        <h3>Me</h3>

        <div class="flex-row">
          <img src="/static/imgs/me2.jpg" alt="It's Me" width="25%" height="450px" />
          <img src="/static/imgs/words01.png" alt="My Words" width="75%" height="450px" />
        </div>
      </div>

      <h3>Good {{dayTime}}</h3>

      <!-- 第二块 -->
      <div class="body-two">
        <div style="padding-top:80px" class="flex-col">
          <div class="menuL" @click="toItemA">欢迎投稿</div>
          <div class="menuL" @click="toItemB">幸运记事</div>
          <div class="menuL" @click="toItemC">微小说</div>
          <div class="menuL" @click="toItemD">联系我</div>
        </div>
      </div>
      <!-- 第三块 -->
      <div class="body-three flex-col">
        <h3>Days</h3>
        <br />
        <br />
        <div>
          <a-row :gutter="120">
            <a-col :span="8">
              <a-card hoverable>
                <img height="450px" alt="example" src="/static/imgs/photo.jpg" slot="cover" />
                <a-card-meta title="Europe Street beat">
                  <template slot="description">
                    <a-rate :defaultValue="4.5" allowHalf />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card hoverable>
                <img height="450px" alt="example" src="/static/imgs/photo.jpg" slot="cover" />
                <a-card-meta title="Europe Street beat">
                  <template slot="description">
                    <a-rate :defaultValue="4" allowHalf />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card hoverable>
                <img height="450px" alt="example" src="/static/imgs/photo.jpg" slot="cover" />
                <a-card-meta title="Europe Street beat">
                  <template slot="description">
                    <a-rate :defaultValue="3.5" allowHalf />
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>

      <!-- 最后一块 -->
      <div class="flex-col" style=" align-items: center">
        <h3>Get In Touch</h3>

        <div class="flex-row" style="margin:1rem 0">
          <a-popover title="支付宝收款码">
            <template slot="content">
              <img src="/static/imgs/aliCode.jpg" width="200px" height="200px" />>
            </template>
            <a-icon
              type="alipay-circle"
              :style="{fontSize:'30px' , color:'#01A9DB'}"
              class="foot-icon"
            />
          </a-popover>
          <a-popover title="微信收款码">
            <template slot="content">
              <img src="/static/imgs/weChatCode.jpg" width="200px" height="200px" />>
            </template>
            <a-icon type="wechat" :style="{fontSize:'30px' , color:'#04B431'}" class="foot-icon" />
          </a-popover>
          <a-popover title="QQ收款码">
            <template slot="content">
              <img src="/static/imgs/qqCode.jpg" width="200px" height="200px" />>
            </template>
            <a-icon type="qq" :style="{fontSize:'30px' , color:'#00BFFF'}" class="foot-icon" />
          </a-popover>

          <div style></div>
        </div>

        <div style="width:50%;margin:2rem auto">
          <a-textarea placeholder="写下诗和远方" :rows="5" />
        </div>
        <div style="margin:2rem auto">
          <a-button ghost icon="thunderbolt">SEND</a-button>
        </div>

        <!-- <div class="line" style="width:100px;margin-top:-30px"></div> -->

        <!-- <h2>1944522054@qq.com</h2>
          <div class="text-middle" style="textAlign:center">
            邮箱:1944522054@qq.com
            <br />手机号:17863129132
            <br />微信:17863129132
            <br />QQ:1944522054
        </div>-->
      </div>
    </div>

    <!-- =================foot================= -->
    <div id="foot" class="foot flex-row">
      <div class="icons-list flex-row">
        <a-icon type="weibo-square" class="foot-icon" />
        <a-icon type="github" class="foot-icon" />
        <a-icon type="twitter" class="foot-icon" />
        <a-icon type="facebook" class="foot-icon" />
      </div>
      <div style="margin-left:auto">
        <p>Copyright © 2019.guowenhao. All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "../base/Slider";
export default {
  name: "HelloWorld",
  components: {
    Slider
  },
  data() {
    return {
      winHeight: window.innerHeight,
      is_bg: true,
      imgs: [
        { src: "/static/imgs/banner1.jpg" },
        { src: "/static/imgs/banner2.jpg" },
        { src: "/static/imgs/banner3.jpg" },
        { src: "/static/imgs/banner4.jpg" }
      ],
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
      dayTime: ""
    };
  },

  created() {
    //this.$refs.head.style.height = document.body.scrollWidth;
  },
  mounted() {
    // this.$refs.head.style.height = this.winHeight + "px";
    this.setDayTime();
  },
  methods: {
    setDayTime() {
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

    toItemA() {
    
    },
    toItemB() {
      this.$router.push("/myworld");
    },
    toItemC() {
      this.$router.push("/myzoom");
    },
    toItemD() {
      this.$router.push("/contactme");
    },
    //选择标签
    handleChange(tag, checked) {
      const { selectedTags } = this;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);

      this.selectedTags = nextSelectedTags;
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      this.visible = false;
    },

    //回到顶部
    goTop() {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
      let step = distance / 50; //每步的距离
      (function jump() {
        if (distance > 0) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(jump, 14);
        }
      })();
    },
    //滑到关于我们
    goAbout(target) {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
      target = document.getElementById(target).scrollHeight;
      let step = target / 50; //每步的距离
      (function jump() {
        if (distance <= target) {
          distance += step;
          window.scrollTo(0, distance);
          setTimeout(jump, 14);
        }
      })();
    },

    goContact() {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
      var target = document.getElementById("all").scrollHeight;
      let step = target / 50; //每步的距离
      (function jump() {
        if (distance <= target) {
          distance += step;
          window.scrollTo(0, distance);
          setTimeout(jump, 20);
        }
      })();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" type="text/css">
.menuL {
  margin: 0 0 5rem 2rem;
  border-radius: 1rem;
  height: 50px;
  width: 60px;
  font-size: 1rem;
  padding-right: 5rem;
  text-align: right;
  font-weight: 700;
  color: transparent;
  background-color: #ffffffde;
  cursor: pointer;
  transition: all 0.8s ease-out;
}

.menuL:hover {
  font-size: 5rem;
  height: 120px;
  background-color: #e4a828;
  color: #000000;
  width: 60%;
}

.body {
  .body-one {
    height: 600px;
    width: 100%;
    padding: 8rem 7rem 2rem 7rem;
    margin-bottom: 10rem;
  }
  .body-two {
    height: 600px;
    margin-top: 3rem;
    background: no-repeat url("/static/imgs/words02.png");
    background-size: cover;
    //background-size: 100% 600px;
  }
  .body-three {
    margin: 2rem auto;
    padding: 1.4rem 6rem 6rem 6rem;
  }
}

.col-bg {
  height: 200px;
}

.modal {
  background: #00000021;
}
.foot-icon {
  font-size: 1.4rem;
  margin-left: 0.7rem;
  cursor: pointer;
}
.foot {
  height: 4rem;
  background-color: black;
  color: #ffffff;
  padding: 1rem 10rem;
  justify-items: center;
}

h3 {
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
}
.body-one {
  height: 600px;
}

.img-bg2 {
  background-image: url("/static/imgs/me.jpg");
  background-size: cover;
}
.line {
  border: 4px solid #ffffff;
}

.head-content-middle {
  margin: 20% auto auto 20%;
  line-height: 1.5rem;
  z-index: 2;
  position: absolute;
}
.text-head {
  font-size: 7rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
}
.text-foot {
  width: 50%;
  margin: 0 auto;
  margin-top: 3rem;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
}

.body-bg2 {
  background-color: rgba(40, 180, 166, 0.932);
  padding: 7rem 8rem 2rem 1rem;
}
.hello {
  position: relative;
  /* background-color: black; */
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  overflow: hidden;
}

.hori-center {
  margin: auto 0;
}
.ver-center {
  margin: 0 auto;
}
.nav-button {
  /* padding: 0.3rem; */
  border-radius: 4px;
  margin-left: 0.7rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  cursor: pointer;
}
.nav-button:hover {
  background: #ffffff;
}
.nav-button > h1:hover {
  color: rgba(0, 0, 0, 0.726);
}
h1 {
  font-size: 1.4rem;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  margin: 0;
}
.head-content {
  /* z-index: -1; */
  /* position: fixed; */
  height: 100%;
}
.head-content-head {
  z-index: 3;
  width: 100%;
  position: fixed;
  padding: 0 1.3rem;
  background-color: #0000002d;
}
.head-content-content {
  position: absolute;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
  /* justify-items: center; */
}
.header {
  width: 100%;
  background-repeat: no-repeat;
}
</style>
