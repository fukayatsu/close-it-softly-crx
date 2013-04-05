chrome.extension.sendRequest({
  method: "getSetting"
}, function(response) {
  var setting = response.setting;

  if (setting.active) {
    $tag = $('a.nicopedia:contains("投稿者を見てそっと閉じる動画")');
    if ($tag.length === 0) {
      // do nothing
    } else if(history.length > 1) {
      history.back();
    } else {
      window.close();
    }
  }
});
