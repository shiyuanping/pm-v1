<template>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <template v-for="(menu, i) in menuDatas">
            <el-submenu :key="i" :index="String(menu.index)" v-if="menu.children">
              <template slot="title">{{menu.name}}</template>
              <el-menu-item :index="String(minimenu.index)" v-for="(minimenu, j) in menu.children" :key="i+j">
                <router-link :to='minimenu.url'>{{minimenu.name}}</router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item :key="i" :index="String(menu.index)" v-if="!menu.children" >
              <router-link :to='menu.url'>{{menu.name}}</router-link>
            </el-menu-item>
          </template>
        </el-menu>
      </el-header>
    <el-main>
      <!-- <div class="tabs-box"> -->
        <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
          <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
            {{item.content}}
          </el-tab-pane>
        </el-tabs>
      <!-- </div> -->
      <!-- <div style="margin-bottom: 20px;">
        <el-button
          size="small"
          @click="addTab(editableTabsValue)"
        >
          add tab
        </el-button>
      </div> -->
        <router-view></router-view>
      </el-main>
    </el-container>
</template>

<script>
export default {
    name: 'Pages',
    data() {
      return {
        activeIndex: '1',
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        menuDatas: [
          { 
            index: 1,
            icon: '',
            name: '项目门户',
            children: [
              { 
                index: 1.1,
                icon: '',
                name: '项目列表',
                url: '/pages/project'
              }, {
                index: 1.2,
                icon: '',
                name: '合同列表',
                url: '/pages/contract'
              },
            ]
          }, {
            index: 2,
            icon: '',
            name: '园区GIS',
            url: '/pages/park-gis'
          }
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        window.console.log(key, keyPath);
      },
      // addTab(targetName) {
      //   let newTabName = ++this.tabIndex + '';
      //   this.editableTabs.push({
      //     title: 'New Tab',
      //     name: newTabName,
      //     content: 'New Tab content'
      //   });
      //   this.editableTabsValue = newTabName;
      // },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
}
</script>

<style>
  .el-header, .el-footer {
    /* background-color: #B3C0D1; */
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  /* 修改element的样式 */
  .el-container.is-vertical /deep/ .el-header {
      padding: 0 120px;
  }
  .el-container.is-vertical /deep/ .el-main {
    padding: 0;
    line-height: normal;
  }

  /* 自定义样式 */
  .tabs-box {
    width: 100%;
    height: 50px;
    background-color: #fff;
  }
</style>