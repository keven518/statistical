var express = require('express');
var router = express.Router();
var http = require('http');
var _hostname = '10.1.30.9';
var _port = 8080;
var kv_getUsedServiceInfoByRespTime = require('../app/models/data');

/****1 *****/
var options = {
    hostname: _hostname,
    port: _port,
    path: '/huidao/openapi/getChannelCount',
    method: 'GET'
};

var kv_getUsedServiceInfoByStatus = {
  "code": "1",
  "msg": "success",
"totle":1000,
  "result":[
  {"servicename":"挂号",
"channelname":"医疗服务平台",
"calltime":"2015-09-22 10:00:00",
"callchannel":"健康云",
"resulttype":"成功",
"message":""
},{"servicename":"挂号",
"channelname":"医疗服务平台",
"calltime":"2015-09-22 10:00:00",
"callchannel":"健康云",
"resulttype":"成功",
"message":""
},{"servicename":"挂号",
"channelname":"医疗服务平台",
"calltime":"2015-09-22 10:00:00",
"callchannel":"健康云",
"resulttype":"成功",
"message":"谁告诉对方花果山福地"
},{"servicename":"挂号",
"channelname":"医疗服务平台",
"calltime":"2015-09-22 10:00:00",
"callchannel":"健康云",
"resulttype":"成功",
"message":"啊时代发生的发生"
},{"servicename":"挂号",
"channelname":"医疗服务平台",
"calltime":"2015-09-22 10:00:00",
"callchannel":"健康云",
"resulttype":"成功",
"message":"asdf"
}]
};

var kv_getChannelInfoList = {
  "code": "1",
  "msg": "success",
"totle":1000,
  "result":[
  {"channelname":"渠道商名称",
 "createtime":"2015-09-22 10:00:00",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"channeled":"渠道商id"
},{"channelname":"渠道商名称",
 "createtime":"2015-09-22 10:00:00",
"owner":"雍正",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"channeled":"渠道商id"
},{"channelname":"渠道商名称",
 "createtime":"2015-09-22 10:00:00",
"owner":"成吉思汗",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"channeled":"渠道商id"
},{"channelname":"渠道商名称",
 "createtime":"2015-09-22 10:00:00",
"owner":"毛泽东",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"channeled":"渠道商id"
},{"channelname":"渠道商名称",
 "createtime":"2015-09-22 10:00:00",
"owner":"朱元璋",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"channeled":"渠道商id"
}]
};

var kv_getServiceByChannelid = {
  "code": "1",
  "msg": "success",
"totle":1000,
  "result":[
  {"servicename":"挂号11",
 "createtime":"2015-09-22 10:00:00",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8000
},{"servicename":"挂号",
 "createtime":"2015-09-22 10:00:00",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8002
},{"servicename":"挂号",
 "createtime":"2015-09-22 10:00:00",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8034
},{"servicename":"挂号",
 "createtime":"2015-09-22 10:00:00",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8670
}]
};

var kv_getChannelByServiceid = {
  "code": "1",
  "msg": "success",
"totle":1000,
  "result":[
  {"servicename":"挂号12",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8000
},{"servicename":"挂号",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8002
},{"servicename":"挂号",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8034
},{"servicename":"挂号",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8670
}]
};

var kv_getServiceInfo = {
  "code": "1",
  "msg": "success",
"totle":1000,
  "result":[
  {"servicename":"挂号",
"channelname":"健康云",
     "type":"医疗健康",
 "createtime":"2015-09-22 10:00:00",
"owner":"王冰",
"phone":"13111111111",
"email":"wang@wondersgroup.com",
"count":8000,
"serviceid":"xxxxxx"
}]
};


var data = '';
var req = http.request(options, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        data = chunk;
    });
});

req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req.end();
/*****1 end*******/

/****2 *****/
var options_2 = {
    hostname: _hostname,
    port: _port,
    path: '/huidao/openapi/getServiceCount',
    method: 'GET'
};

var data2 = '';
var req_2 = http.request(options_2, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        data2 = chunk;
    });
});

req_2.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req_2.end();
/*****2 end*******/

/****getUseServiceCount *****/
var options_getUseServiceCount = {
    hostname: _hostname,
    port: _port,
    path: '/octopus_statistic_server/hd_statistic/getUseServiceCount',
    method: 'GET'
};
var data_getUseServiceCount = '';
var req_getUseServiceCount = http.request(options_getUseServiceCount, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        data_getUseServiceCount = chunk;
    });
});

req_getUseServiceCount.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req_getUseServiceCount.end();
/*****getUseServiceCount end*******/

/****首页响应时间*****/
var options_getResponseTime = {
    hostname: _hostname,
    port: _port,
    path: '/octopus_statistic_server/hd_statistic/getResponseTime',
    method: 'GET'
};
var data_getResponseTime = '';
var req_getResponseTime = http.request(options_getResponseTime, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        data_getResponseTime = chunk;
    });
});

req_getResponseTime.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req_getResponseTime.end();
/*****首页响应时间 end*******/

/****getTopList *****/
var options_getTopList = {
    hostname: _hostname,
    port: _port,
    path: '/huidao/openapi/getServiceCount',
    method: 'GET'
};

var data_getTopList = '';
var req_getTopList = http.request(options_getTopList, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        data_getTopList = chunk;
    });
});

req_getTopList.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req_getTopList.end();
/*****getTopList end*******/



/****首页调用状态*****/
var options_getResponseStatus = {
    hostname: _hostname,
    port: _port,
    path: '/octopus_statistic_server/hd_statistic/getResponseStatus',
    method: 'GET'
};
var data_getResponseStatus = '';
var req_getResponseStatus = http.request(options_getResponseStatus, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        data_getResponseStatus = chunk;
    });
});

req_getResponseStatus.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req_getResponseStatus.end();
/*****首页调用状态 end*******/

/****首页服务调用频次统计按年 *****/
var options_getUsedCount = {
    hostname: _hostname,
    port: _port,
    path: '/octopus_statistic_server/hd_statistic/getUsedCount?type=2',
    method: 'GET'
};
var data_getUsedCount = '';
var req_getUsedCount = http.request(options_getUsedCount, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        data_getUsedCount = chunk;
    });
});

req_getUsedCount.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req_getUsedCount.end();
/*****首页服务调用频次统计按年 end*******/

/****首页服务调用频次统计按月 *****/
var options_getUsedCountM = {
    hostname: _hostname,
    port: _port,
    path: '/octopus_statistic_server/hd_statistic/getUsedCount?starttime=20151000&endtime=20151031&type=3',
    method: 'GET'
};
var data_getUsedCountM = '';
var req_getUsedCountM = http.request(options_getUsedCountM, function (res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
        data_getUsedCountM = chunk;
    });
});

req_getUsedCountM.on('error', function (e) {
    console.log('problem with request: ' + e.message);
});

req_getUsedCountM.end();
/*****首页服务调用频次统计按月 end*******/


var mod= require('../app/models/dataParsing.js');
/* GET home page. */
router.get('/kv', function(req, res, next) {
  res.send(data);
});
router.get('/kv2', function(req, res, next) {
  res.send(data2);
});
router.get('/getResponseTime', function(req, res, next) {
  res.send(data_getResponseTime);
});
router.get('/getResponseStatus', function(req, res, next) {
  res.send(data_getResponseStatus);
});
router.get('/getUsedCount_freForYears', function(req, res, next) {
  res.send(data_getUsedCount);
});
router.get('/getUsedCount_freForMonth', function(req, res, next) {
  res.send(data_getUsedCountM);
});
router.get('/getUseServiceCount', function(req, res, next) {
  res.send(data_getUseServiceCount);
});

/**服务商-开发列表**/
router.get('/getServiceByChannelid', function(req, res_kv, next) {
  /**/
  var options_getServiceByChannelid = {
      hostname: _hostname,
      port: _port,
      path: '/octopus_statistic_server/hd_statistic/getServiceByChannelid?starttime=&endtime=&type=1&name=&start=0&pagesize=20&channelid=4a68d45d-452f-4a1b-953f-8de261de9ed1',
      method: 'GET'
  };
  var data_getServiceByChannelid = '';
  var req_getServiceByChannelid = http.request(options_getServiceByChannelid, function (res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          data_getServiceByChannelid = chunk;
          res_kv.send(data_getServiceByChannelid);
      });
  });

  req_getServiceByChannelid.on('error', function (e) {
      console.log('problem with request: ' + e.message);
  });

  req_getServiceByChannelid.end();
  /**/
});

/**服务商-开发列表 end**/


router.get('/serviceCall', function(req, res, next) {
  res.render('serviceCall', { title: 'Express' ,
        top: mod.infoTo});
});

router.get('/kv_getUsedServiceInfoByRespTime', function(req, res, next) {
  res.send(kv_getUsedServiceInfoByRespTime);
});

router.get('/kv_getUsedServiceInfoByStatus', function(req, res, next) {
  res.send(kv_getUsedServiceInfoByStatus);
});

router.get('/kv_getChannelInfoList', function(req, res, next) {
  res.send(kv_getChannelInfoList);
});

router.get('/kv_getServiceByChannelid', function(req, res, next) {
  res.send(kv_getServiceByChannelid);
});

router.get('/kv_getChannelByServiceid', function(req, res, next) {
  res.send(kv_getChannelByServiceid);
});

router.get('/kv_getServiceInfo', function(req, res, next) {
  res.send(kv_getServiceInfo);
});

router.get('/getTopList', function(req, res, next) {
  res.send(data_getTopList);
});



router.get('/getResponseTime', function(req, res, next) {
  res.send(data_getResponseTime);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/serviceList', function(req, res, next) {
  res.render('serviceList', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/serviceResponse', function(req, res, next) {
  res.render('serviceResponse', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/serviceScreening', function(req, res, next) {
  res.render('serviceScreening', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/distributors', function(req, res, next) {
  res.render('distributors', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/distributorsDetails', function(req, res, next) {
  res.render('distributorsDetails', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/distributorsIndex', function(req, res, next) {
  res.render('distributorsIndex', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/distributorsService', function(req, res, next) {
  res.render('distributorsService', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/distributorsUsingService', function(req, res, next) {
  res.render('distributorsUsingService', { title: 'Express' ,
  			top: mod.infoTo});
});
router.get('/freForYears', function(req, res, next) {
  res.render('freForYears', { title: 'Express' ,
        top: mod.infoTo});
});
router.get('/freForMonth', function(req, res, next) {
  res.render('freForMonth', { title: 'Express' ,
        top: mod.infoTo});
});

module.exports = router;
