/**
 * @supported 设备 ID
 */

let headerCookie = $request.headers["Cookie"];

if (headerCookie) {
  if ($prefs.valueForKey("ssrenCookie") != undefined) {
    if ($prefs.valueForKey("ssrenCookie") != headerCookie) {
      var cookie = $prefs.setValueForKey(headerCookie, "ssrenCookie");
      if (!cookie) {
        $notify("更新卡车极速Cookie失败！", "", "");
      } else {
        $notify("更新卡车极速Cookie成功！", "", "");
      }
    }
  } else {
    let cookie = $prefs.setValueForKey(headerCookie, "ssrenCookie");
    if (!cookie) {
      $notify("首次写入卡车极速Cookie失败！", "", "");
    } else {
      $notify("首次写入卡车极速Cookie成功！", "", "");
    }
  }
}
$done({});
