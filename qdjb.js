/**
 * @supported 设备 ID
 */

let Cookie = $prefs.valueForKey("yhCookie");

let Req = {
  url: "https://sakura.aoaomoe.club/auth/login",
  method: "POST",
  headers: {
    Cookie: Cookie,
    Origin: "https://sakura.aoaomoe.club",
    Referer: "https://sakura.aoaomoe.club/auth/login",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1 Mobile/15E148 Safari/604.1"
  }
};

$task.fetch(Req).then(response => {
  try {
    let doc = JSON.parse(response.body);
    if (doc["ret"] == 1) {
      $notify(
        "樱花穿随",
        "成功",
        `${doc["msg"]}\n已使用流量${doc["trafficInfo"]["lastUsedTraffic"]}\n剩余流量${doc["trafficInfo"]["unUsedTraffic"]}`
      );
    } else {
      $notify("樱花穿随", "成功", doc["msg"]);
    }
  } catch (error) {
    $notify("樱花穿随", "失败", error);
  }
});
