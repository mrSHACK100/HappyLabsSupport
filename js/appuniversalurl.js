var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function generateCorrectURLforApp (itunesAppId, androidPackageName) {
    var iTunesURLByPackageName = {
        'com.happylabs.hotelstory': 'https://itunes.apple.com/sg/app/hotel-story/id579188627',
        'com.happylabs.happymall': 'https://itunes.apple.com/sg/app/happy-mall-story-be-shopping/id703327328'
    };

	if (isMobile.iOS()) {
		var itunesURL = iTunesURLByPackageName[androidPackageName] || ('https://itunes.apple.com/app/id' + itunesAppId);
		return itunesURL;
	}else if (isMobile.Android()) {
		var googlePlayURL = 'https://play.google.com/store/apps/details?id=' + androidPackageName;
		return googlePlayURL;
	}else {
		var desktopURL = "https://play.google.com/store/apps/developer?id=Happy+Labs";
		return desktopURL;
	}
}

function downloadAppWithInfo(itunesAppId, androidPackageName) {
    var url = generateCorrectURLforApp(itunesAppId, androidPackageName);
    location.href = url;
}