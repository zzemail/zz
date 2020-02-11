/**
 * @supported 设备 ID
 */

let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("yhCookie") != undefined) {
    if ($prefs.valueForKey("yhCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "yhCookie");
      if (!cookie) {
        $notify("更新樱花穿隧Cookie失败！", "", "");
      } else {
        $notify("更新樱花穿隧Cookie成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "ssrenCookie");
    if (!cookie) {
      $notify("首次写入樱花穿隧Cookie失败！", "", "");
    } else {
      $notify("首次写入樱花穿隧Cookie成功！", "", "");
    }
  }
}
$done({});
