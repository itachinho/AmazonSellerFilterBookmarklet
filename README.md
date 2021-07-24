# AmazonSellerFilterBookmarklet
Amazon.co.jpの検索結果からAmazon発送以外の商品を除外するブックマークレット用Javascript  
## 使い方
1. 以下の文字列をブックマークとして登録する  
`javascript:(function(){var a=new URL(window.location.href);"www.amazon.co.jp"==a.hostname&&"/s"==a.pathname&&(null==a.searchParams.get("emi")?a.searchParams.append("emi","AN1VRQENFRJN5"):a.searchParams.set("emi","AN1VRQENFRJN5"),location.href=a)})();`
2. Amazon.co.jpの検索結果ページで上記ブックマークを呼び出す  
（それ以外のページでは一応動作しないようになっているはず）  

参考)https://nakanote.com/bookmarklet-howto/
