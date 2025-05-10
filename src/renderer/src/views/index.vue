<script setup lang="ts">
import { ref } from 'vue'

// const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

const api:any = window.api

let tables = ref<string>('')
let ddlSql = ref<string>('')


const handleTable = ():void =>{
  console.log('table ' , tables.value)
  ddlSql.value = ""
  const tabArr:string[] = tables.value.split(",")
  tabArr.forEach(table =>{
    api.executeSql('show create table '+table).then(res=>{
      console.log("res ",res)
      res.forEach(res =>{
        const createDDL = res['Create Table']
        console.log("createDDL ",createDDL)  
        ddlSql.value += createDDL + ";\n\n"
      })
    })
  })
 
}

 

</script>

<template>
   <div class="container">
    <div class="from">
      <el-text class="txt" size="large">填写表名：</el-text>
      <el-input v-model="tables" type="textarea" placeholder="表名多个英文逗号分割"/>
      <el-button @click="handleTable" type="primary">查询</el-button>
    </div>

    <div class="gen">
      <el-text class="txt" size="large">DDL SQL：</el-text>
      <el-input v-model="ddlSql" readonly="true" type="textarea" />
    </div>
    
  </div>

</template>

<style lang="scss" scoped>

.container{
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .from{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
    .txt{
      align-self: flex-start;
      margin-bottom: 10px;
    }

    .el-textarea{
      width: 95vw;
      margin-bottom: 10px;
    }
  }

  .gen{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;

    .txt{
      align-self: flex-start;
      margin-bottom: 10px;
    }

    :deep(.el-textarea){
      .el-textarea__inner{
        width: 95vw;
        height: 65vh;
      }
      
    }


  }
}
</style>
