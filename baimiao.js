/*************************************

项目名称：白描
下载地址：https://t.cn/A602ZQ3K
更新日期：2023-12-05
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/baimiao\.uzero\.cn\/api\/.+\/(appLaunchWithUser|getAnnouncement|checkLoginClient) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/baimiao.js

[mitm]
hostname = baimiao.uzero.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const user = /appLaunchWithUser/;
const ad = /(getAnnouncement|checkLoginClient)/;
const Data = {"id":102366,"boughtType":"new","createdTime":1555777247,"levelSeq":2,"boughtUnit":"year","levelId":2,"userId":1666666,"boughtTime":1555777247,"boughtDuration":10,"orderId":160888,"operatorId":0,"level":{"isSubscribe":0,"monthPrice":0.02,"maxRate":100,"yearPrice":40,"recognizeNormal":-100,"upgradeSubscribePrice":0,"picture":"","icon":"","gived":0,"recognizeTranslateAll":1,"pdfTranslateCount":0,"name":"黄金会员","createdTime":1429260383,"id":2,"enabled":1,"recognizeBatch":-100,"seq":2,"pdfTransCount":0,"recognizeTranslate":-100,"description":""},"deadlineNotified":0,"deadline":1871396447,"boughtAmount":26};

if(user.test($request.url)){
  chxm1023.value.recognize = {"remainBatch":-100,"remainShare":3,"recognizeTranslateAll":1,"translateCount":3,"remainPdfTranslateCount":0,"pdfTranslateCount":0,"remainNormal":-100,"userId":1666666,"pdfCount":0,"remainPdfTransCount":0,"balanceCount":0,"shareCount":3,"remainTranslate":-100,"batchCount":1,"normalCount":-100};
  chxm1023.value.vips = [(Data)];
  chxm1023.value.vip = (Data);
}

if(ad.test($request.url)){
  chxm1023 = {};
}

$done({body : JSON.stringify(chxm1023)});
