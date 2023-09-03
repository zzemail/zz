/*

项目名称：算料宝计算器
下载地址：applestore
特别说明：登录解锁
脚本作者：@ios151
使用声明：仅供参考，禁止转载与售卖！


[rewrite_local]
^https:\/\/app\.suanliaobao\.com\/authority\/verify_vip\? url script-response-body https://raw.githubusercontent.com/Yu9191/Rewrite/main/jiangongjsq.js

[mitm]
hostname = app.suanliaobao.com

*/
var originalResponse = $response.body;

var lovebaby = JSON.parse(originalResponse);
lovebaby.data.type = 3;
lovebaby.data.expiresTime = "2099-08-03 16
