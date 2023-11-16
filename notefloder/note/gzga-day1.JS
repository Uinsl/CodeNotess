/* 
* 基础资料 *
quest 1、Holiday Schedule Worktime
公共假期 排班设置 班次设置

// api每次只保留需要传输的内容

// 公共假期 Holiday
api接口：view get search create update delete 均能正常，发送返回数据
print export 未测试
update 也是同create的代码 BUG 修改完毕

web："查询"功能，因为year=null,故无返回数据
"新增"功能，未连接接口

// 排班设置 schedule
api接口：getlist view get search create  delete 均能正常，发送返回数据
update 修改 返回true，数据库无变化
print export 未测试

web：“新增” 功能 报错：api.getList is not a function

// 班次设置 worktime 
api接口：view get search create update delete 均能正常，发送返回数据
update 修改 返回true，数据库无变化

print export 未测试

后台api地址 和 账号
// gzga
// http://127.0.0.1:5002/api-docs
// 考情基础资料-面板机OK
// 面板机表 - sign_device
//

// -----------------------------------
// 公共假期表 holiday
// 公共假期API OK

// worktime // 班次设置
// 1、添加数据，通过接口 API接口

*/




/*

面板机
search 
{
  "result": {
    "data": [],
    "paged": {
      "isempty": true,
      "totalcount": 0,
      "page": 1,
      "pageindex": 0,
      "pagesize": 30,
      "totalpages": 0,
      "haspreviouspage": false,
      "hasnextpage": false
    }
  },
  "success": true,
  "message": "",
  "errcode": 0
}

holiday
{
  "result": {
    "data": [],
    "paged": {
      "isempty": true,
      "totalcount": 0,
      "page": 1,
      "pageindex": 0,
      "pagesize": 30,
      "totalpages": 0,
      "haspreviouspage": false,
      "hasnextpage": false
    }
  },
  "success": true,
  "message": "",
  "errcode": 0
}

schedule 和 worktime
{
  "result": {
    "data": [
      {
        "idx": "1",
        "id": "2",
        "name": "APITest1",
        "dates": 0,
        "worktime": "System.String[]",
        "remark": "string"
      },
      {
        "idx": "2",
        "id": "3",
        "name": "APITest2",
        "dates": 0,
        "worktime": "System.String[]",
        "remark": "string"
      }
    ],
    "paged": {
      "isempty": false,
      "totalcount": 3,
      "page": 1,
      "pageindex": 0,
      "pagesize": 30,
      "totalpages": 1,
      "haspreviouspage": false,
      "hasnextpage": false
    }
  },
  "success": true,
  "message": "",
  "errcode": 0
}













*/
