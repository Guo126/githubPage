<template >
  <section ref="main" class="bg">
    
      <!-- 左抽屉======================================== -->
      <a-drawer
        :v-if="visible"
        :title="title"
        placement="left"
        @close="onClose"
        :visible="visible"
        :mask="false"
        width="20%"
      >
        <div>
          <a-tree
            @expand="onExpand"
            :expandedKeys="expandedKeys"
            :autoExpandParent="autoExpandParent"
            :treeData="gData"
            @select="showMemory"
          >
            <template slot="title" slot-scope="{title}">
              <span v-if="title.indexOf(searchValue) > -1">
                {{title.substr(0, title.indexOf(searchValue))}}
                <span
                  style="color: #f50"
                >{{searchValue}}</span>
                {{title.substr(title.indexOf(searchValue) + searchValue.length)}}
              </span>
              <span v-else>{{title}}</span>
            </template>
          </a-tree>
        </div>
      </a-drawer>
    

    <!-- 右边区域================================================= -->
    <section class="flex-row">
      <div style="width:20%">
        <!-- <a-progress type="circle" :percent="75" :format="共记事"/> -->
      </div>
      <div class="edit-area flex-col">
        <div class="flex-row" style="padding:0 0.5rem 1rem 0.5rem">
          <div>
            <a-button type="primary" @click="showDrawer" ghost>目录</a-button>
            <a-button type="primary" @click="goBack" ghost>返回</a-button>
          </div>
          <div style="margin-left:auto">
            <a-button type="primary" @click="save" ghost>保存</a-button>
            <a-button type="danger" @click="deleteDialog = true" ghost>删除</a-button>
            <a-button type="primary" icon="plus" @click="newText" ghost>新增</a-button>
          </div>
        </div>
        <a-modal
          title="注意!"
          v-model="deleteDialog"
          @ok="deleteItem"
          okText="删除"
          width="20rem"
          okType="danger"
          cancelText="取消"
        >
          <p>确认要删除吗？</p>
        </a-modal>
        <a-input size="large" placeholder="请输入标题" v-model="editTitle" />
        <div style="margin:1rem 0"></div>
        <a-textarea placeholder="写下诗和远方..." :rows="23" v-model="editContent" />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      title:'幸运记事',
      selectedKeys: [],
      show: false,
      visible: false,
      expandedKeys: [],
      searchValue: "",
      autoExpandParent: true,
      gData: [],
      memory: [],
      editContent: "",
      editTitle: "",
      index: -1,
      deleteDialog: false
    };
  },
  mounted() {
    if (!localStorage.getItem("memory")) {
      localStorage.setItem("memory", JSON.stringify(this.memory));
    }
    if (!localStorage.getItem("gData")) {
      localStorage.setItem("gData", JSON.stringify(this.gData));
    }
    this.memory = JSON.parse(localStorage.getItem("memory"));
    this.gData = JSON.parse(localStorage.getItem("gData"));
    this.setHeight();
    if (!this.visible) {
      this.visible = true;
    }
    this.expandedKeys.push(new Date().toLocaleDateString());
  },
  methods: {
    goBack() {
      this.visible = false;
      setTimeout(() => {
        this.$router.push("/");
      }, 800);
    },
    newText() {
      this.visible = false;
      this.reload();
      // this.editTitle = " ";
      // this.editContent = " ";
    },

    showMemory(selectedKeys, e) {
      this.matchMemory(selectedKeys[0]);
      if (this.index > -1) {
        this.editTitle = this.memory[this.index].title;
        this.editContent = this.memory[this.index].content;
      } else {
        this.editTitle = " ";
        this.editContent = " ";
      }
    },
    matchMemory(key) {
      this.memory.forEach((item, index) => {
        if (item.key == key) {
          this.index = index;
        }
      });
    },
    deleteItem() {
      if (this.index > -1) {
        for (var i = 0; i < this.gData.length; i++) {
          for (var j = 0; j < this.gData[i].children.length; j++) {
            if (this.gData[i].children[j].key == this.memory[this.index].key) {
              this.memory.splice(this.index, 1);
              this.gData[i].children.splice(j, 1);
              this.editTitle = " ";
              this.editContent = " ";
              localStorage.setItem("gData", JSON.stringify(this.gData));
              localStorage.setItem("memory", JSON.stringify(this.memory));
              this.deleteDialog = false;
              this.$notification.open({
                icon: <a-icon type="smile" style="color: #00FF00" />,
                message: "通知",
                description: "删除成功!",
                duration: 2.5,
                onClick: () => {
                   this.$notification.open({
                    icon: <a-icon type="frown" style="color: #FF0000" />,
                    duration: 2.5,
                    message: "警告",
                    description: "不要再点啦!",
                    onClick: () => {}
                  });
                }
              });
              return;
            }
          }
        }
      }
    },
    save() {
      //标题不得为空通知
      if (this.editTitle == "") {
        this.$notification.open({
          icon: <a-icon type="frown" style="color: #FF0000" />,
          duration: 2.5,
          message: "警告",
          description: "标题不得为空!",
          onClick: () => {
             this.$notification.open({
                    icon: <a-icon type="frown" style="color: #FF0000" />,
                    duration: 2.5,
                    message: "警告",
                    description: "不要再点啦!",
                    onClick: () => {}
                  });
          }
        });
        return;
      }
      //数据初始化
      var date = new Date();
      var dd = date.toLocaleDateString();
      var time = date.toLocaleTimeString();
      var has = false;
      var order = -1;
      //今天的
      var data = {
        key: dd,
        title: dd,
        children: []
      };
      //日记详情
      var child = {
        key: this.editTitle + time,
        title: this.editTitle + "  " + time
      };
      var cancel = false;
      if (this.index > -1) {
        //看看是不是修改以前的
        this.gData.forEach((item, index) => {
          item.children.forEach((itema, indexa) => {
            if (itema.key == this.memory[this.index].key) {
              this.memory[this.index].title = this.editTitle;
              this.gData[index].children[indexa].title =
                this.editTitle + "  " + time;
              this.memory[this.index].content = this.editContent;
              cancel = true;

              this.$notification.open({
                icon: <a-icon type="smile" style="color: #00FF00" />,
                message: "通知",
                description: "保存成功!",
                duration: 2.5,
                onClick: () => {
                  this.$notification.open({
                    icon: <a-icon type="frown" style="color: #FF0000" />,
                    duration: 2.5,
                    message: "警告",
                    description: "不要再点啦!",
                    onClick: () => {}
                  });
                }
              });
              //存到本地储存中
              localStorage.setItem("gData", JSON.stringify(this.gData));
              localStorage.setItem("memory", JSON.stringify(this.memory));
              return;
            }
          });
        });
      }

      if (cancel) {
        return;
      }

      //看看今天的总结点是否建立
      this.gData.forEach((item, index) => {
        if (item.key == dd) {
          has = true;
          order = index;
        }
      });
      //如果已经建立就在此父节点下新增
      if (has) {
        this.gData[order].children.push(child);
        //否则新增父节点再加子节点
      } else {
        data.children.push(child);
        this.gData.push(data);
      }
      //memory增加当前日记
      this.memory.push({
        key: this.editTitle + time,
        title: this.editTitle,
        content: this.editContent
      });
      this.expandedKeys.push(dd);
      this.$notification.open({
        icon: <a-icon type="smile" style="color: #00FF00" />,
        message: "通知",
        description: "保存成功!",
        duration: 2.5,
        onClick: () => {
           this.$notification.open({
                    icon: <a-icon type="frown" style="color: #FF0000" />,
                    duration: 2.5,
                    message: "警告",
                    description: "不要再点啦!",
                    onClick: () => {}
                  });
        }
      });
      //存到本地储存中
      localStorage.setItem("gData", JSON.stringify(this.gData));
      localStorage.setItem("memory", JSON.stringify(this.memory));
    },

    setHeight() {
      this.$refs.main.style.height =
        document.documentElement.clientHeight + "px";
    },
    showDrawer() {
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
      // var edit = document.getElementById("edit");
      // edit.style.width = document.documentElement.clientWidth + "px";
    },
    onExpand(expandedKeys) {
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    }
  }
};
</script>
<style scoped lang="scss" type="text/css">
$color-black:#000;

.bg {
  // $color-black:#000;
  width: 100%;
  background: radial-gradient(200% 100% at bottom center, #f7f7b6 ,#e96f92 ,#1b2947);
  background: radial-gradient(220% 105% at top center, #1b2947 10% ,#75517d 40% ,#e96f92 65% )

  /* background: no-repeat url("/static/imgs/banner3.jpg");
  background-size: cover; */
}
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.edit-area {
  width: 80%;
  padding: 2rem 8rem;
}
</style>