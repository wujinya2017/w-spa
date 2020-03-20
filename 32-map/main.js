$function() {
    var e = new BMap.Map("main"), 
        t = new BMap.Point(114.529963,38.003679);

    e.centerAndZoom(t, 25),
    e.addControl(new BMap.MapTypeControl({
        mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
    })),
    e.enableScrollWheelZoom(!0),
    e.setMapType(BMAP_HYBRID_MAP);

    var a = new BMap.Marker(t,{
        title: "SPA 富应用开发"
    });

    a.setAnimation(BMAP_ANIMATION_BOUNCE),
    e.addOverlay(a);

    var n = new BMap.InfoWindow('<div style="width: 250px"><p>时间：周二、周四下午<br>地点：505 教室</p><a href="https://github.com/wujinya2017" target="_blank"><img src="https://avatars1.githubusercontent.com/u/33738386?s=460&u=434bcf1f98d2126c272e7cbd1c9d92ce831d1c5c&v=4" alt="吴金雅" width="40px" height="40px" style="position: relative; top: -58px; left: 190px"></a></div>',{
        width: 230,
        height: 100,
        title: "<strong>SPA 富应用开发</strong>"
    });

    a.openInfoWindow(n),
    a.addEventListener("click", function() {
        e.openInfoWindow(n, t)
    })
});

