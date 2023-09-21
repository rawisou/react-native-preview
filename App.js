import React from 'react';
import { WebView } from "react-native-webview";


const App = () => {
	return (
		<WebView
			javaScriptEnabled
			originWhitelist={['*']}
			source={{
				html: `<script> let adSeen = false; let adSeenTracked = false; let bfAd = null;  function adIsInView() {     if (adSeenTracked) {         return;     }     adSeen = true;     trackInView(); };  function trackInView() {     if (adSeenTracked || bfAd === null) {         return;     }     adSeenTracked = true;     bfAd.tracking.trackCustomEvent({         name: 'In view'     }); }; var AdScript = (function() {     function AdScript(ad) {         bfAd = ad;         if (adSeen) {             trackInView();         }     };     AdScript.prototype.overrideRedirect = function(redirect, targetUrl, adInfo) {         if (targetUrl && targetUrl.indexOf('open-in-app') > -1) {             const newTargetUrl = 'budbee://'+ targetUrl.split('/').splice(3).join('/').replace('?open-in-app', '').replace('&open-in-app', '');             window.open(newTargetUrl);             redirect.prevent = true;             return redirect;         };          return;     };     return AdScript; }()); window._bannerflow = window._bannerflow || {}; window._bannerflow.adScripts = window._bannerflow.adScripts || []; window._bannerflow.adScripts.push(AdScript); </script><script src="https://c.bannerflow.net/a/64fefadf7f3245a95572790d?did=5cf6638e8e4e100001a17710&deeplink=on&responsive=on&preload=on&redirecturl=" async></script>`
			}}
		/>
	);
};

export default App;
