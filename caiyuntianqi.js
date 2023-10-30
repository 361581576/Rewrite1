/*************************************

项目名称：彩云天气-净化/部分SVIP
下载地址：https://t.cn/A66d95hV
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/(biz|wrapper|starplucker)\.(cyapi|caiyunapp)\.(cn|com)\/(.+\/(user\?app_name|one_key_login|third_party_login|activity|visitors|operation\/banners)|p\/v\d\/(vip_info|user_info)) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/caiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, *.caiyunapp.com, adx.sogaha.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const url = $request.url;
const adUrl = /https:\/\/(wrapper|starplucker)\.(cyapi\.cn|caiyunapp\.com)\/v\d\/(activity|banners)/;
const vipUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/vip_info/;
const userUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/v\d\/user\?app_name/;
const infoUrl = /https:\/\/biz\.(cyapi\.cn|caiyunapp\.com)\/p\/v\d\/user_info/;


switch (true) {
    case adUrl.test(url):
        chxm1023.activities = [];
        chxm1023.data = [];
        break;
    case vipUrl.test(url):
        chxm1023 = {  ...chxm1023,  vip: {    "expires_time" : "4092599349",    "is_auto_renewal" : true  },  trial_svip: {    ...chxm1023.trial_svip,    "received_time" : "1666666666",    "expires_time" : "4092599349",    "is_recharge_vip" : true  },  svip: {    "expires_time" : "4092599349",    "is_auto_renewal" : true  }};
        break;
    case userUrl.test(url):
        chxm1023.result = {
            ...chxm1023.result,
            is_vip: true,
            vip_expired_at: 4092599349,
            svip_given: 9999,
            is_xy_vip: true,
            xy_svip_expire: 4092599349,
            wt: {
              ...chxm1023.result.wt,
              vip: {
                ...chxm1023.result.wt.vip,
                "expired_at" : 0,
                "enabled" : true,
                "svip_apple_expired_at" : 4092599349,
                "is_auto_renewal" : true,
                "svip_expired_at" : 4092599349
              },
              svip_given: 9999,
            },
            is_phone_verified: true,
            vip_take_effect: 1,
            is_primary: true,
            xy_vip_expire: 4092599349,
            svip_expired_at: 4092599349,
            svip_take_effect: 1,
            vip_type: "s",
            phone_num: "13145200000",
            name: "叮当猫の分享频道",
            avatar: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI6OLWyDbM42w944dUdfzrPEQv6uaD3AEsVcicibYibxG9PBBSaibwqRJzOk2US1d8N4hC9nL1a5rXu3g/132",
            caiyun: {
              ...chxm1023.result.caiyun,
              "username" : "叮当猫の分享频道",
              "is_bound" : true
            }
          };
        break;
    case infoUrl.test(url):
        chxm1023["reg_days"] = 99999;
        chxm1023["name"] = "叮当猫の分享频道";
        chxm1023["avatar"] = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI6OLWyDbM42w944dUdfzrPEQv6uaD3AEsVcicibYibxG9PBBSaibwqRJzOk2US1d8N4hC9nL1a5rXu3g/132";
        break;
    default:
        console.log("URL didn't match any cases");
}

$done({ body: JSON.stringify(chxm1023)});