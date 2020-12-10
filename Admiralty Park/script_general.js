(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('begin', r, this);
                    f['call'](this);
                };
                q['bind']('begin', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['MainViewer'];
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['MainViewer']);
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o !== undefined) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var p = n != undefined ? o['getObjective'](n, m) : o['get'](m);
                                if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    p += 0x1;
                                return p;
                            } catch (q) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"mobileMipmappingEnabled":false,"overflow":"hidden","propagateClick":false,"width":"100%","scrollBarMargin":2,"verticalAlign":"top","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.ThumbnailList_599223D9_4BB7_0B6D_41B7_102731A52279_playlist])","vrPolyfillScale":0.75,"contentOpaque":false,"scrollBarWidth":10,"scripts":{"initQuiz":TDV.Tour.Script.initQuiz,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"initGA":TDV.Tour.Script.initGA,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizStart":TDV.Tour.Script.quizStart,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"mixObject":TDV.Tour.Script.mixObject,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getComponentByName":TDV.Tour.Script.getComponentByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"existsKey":TDV.Tour.Script.existsKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"getOverlays":TDV.Tour.Script.getOverlays,"showWindow":TDV.Tour.Script.showWindow,"registerKey":TDV.Tour.Script.registerKey,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPixels":TDV.Tour.Script.getPixels,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"cloneCamera":TDV.Tour.Script.cloneCamera,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setValue":TDV.Tour.Script.setValue,"init":TDV.Tour.Script.init,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setLocale":TDV.Tour.Script.setLocale,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupImage":TDV.Tour.Script.showPopupImage,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playAudioList":TDV.Tour.Script.playAudioList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getMediaByName":TDV.Tour.Script.getMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"translate":TDV.Tour.Script.translate,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"openLink":TDV.Tour.Script.openLink,"getKey":TDV.Tour.Script.getKey,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizShowScore":TDV.Tour.Script.quizShowScore,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot},"paddingLeft":0,"borderSize":0,"defaultVRPointer":"laser","downloadEnabled":false,"paddingRight":0,"minHeight":20,"shadow":false,"minWidth":20,"definitions": [{"id":"panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C","thumbnailUrl":"media/panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_t.jpg","hfovMax":130,"label":trans('panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C.label'),"hfov":360,"partial":false,"vfov":180,"pitch":0,"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"rowCount":4,"class":"TiledImageResourceLevel","colCount":24,"url":"media/panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"tags":"ondemand","height":1024,"rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"tags":["ondemand","preload"],"height":512,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"tags":"mobilevr","height":1536,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_0/{face}/vr/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"adjacentPanoramas":[{"panorama":"this.panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7","distance":2.79,"select":"this.mainPlayList.set('selectedIndex', 1)","class":"AdjacentPanorama"}],"data":{"label":"Scene 1_Entrance of SIT"},"hfovMin":"135%","overlays":["this.overlay_454374F4_4B57_0D3B_4188_63F4D666A4DE","this.overlay_4470CDD6_4B6E_FF67_41AC_8F248BA3E7D8"]},{"propagateClick":false,"left":"7.95%","width":"29.197%","scrollBarMargin":2,"scrollBarWidth":10,"paddingLeft":10,"borderSize":3,"borderColor":"#000000","backgroundOpacity":0,"paddingRight":10,"minHeight":1,"shadow":false,"minWidth":1,"id":"HTMLText_592A8457_4BD3_0D65_41C3_E0284ED77E70","height":"25%","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"class":"HTMLText","paddingTop":10,"html":trans('HTMLText_592A8457_4BD3_0D65_41C3_E0284ED77E70.html',null,{'quiz.media.score':regTextVar('HTMLText_592A8457_4BD3_0D65_41C3_E0284ED77E70.html', 'quiz.media.score'),'quiz.score1.media.score.total':regTextVar('HTMLText_592A8457_4BD3_0D65_41C3_E0284ED77E70.html', 'quiz.score1.media.score.total')}),"borderRadius":0,"paddingBottom":10,"scrollBarVisible":"rollOver","top":"9.58%","data":{"name":"HTMLText1580"},"scrollBarColor":"#000000"},{"id":"panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7","thumbnailUrl":"media/panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_t.jpg","hfovMax":130,"label":trans('panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7.label'),"hfov":360,"partial":false,"vfov":180,"pitch":0,"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"rowCount":4,"class":"TiledImageResourceLevel","colCount":24,"url":"media/panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"tags":"ondemand","height":1024,"rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"tags":["ondemand","preload"],"height":512,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"tags":"mobilevr","height":1536,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_0/{face}/vr/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"adjacentPanoramas":[{"panorama":"this.panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F","distance":1,"select":"this.mainPlayList.set('selectedIndex', 2)","class":"AdjacentPanorama"}],"data":{"label":"Scene 2_Entrance of Admiralty Park"},"hfovMin":"135%","overlays":["this.overlay_44F8D883_4BAD_B6A2_41B2_6D3FCB521882"]},{"id":"panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_camera","initialPosition":{"yaw":-154.52,"pitch":7.1,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"class":"PanoramaCamera"},{"bodyPaddingRight":5,"data":{"name":"Window3016"},"closeButtonIconLineWidth":2,"footerBackgroundColorRatios":[0,0.9,1],"closeButtonPaddingLeft":0,"closeButtonBorderRadius":11,"titlePaddingBottom":5,"contentOpaque":false,"bodyBackgroundColorRatios":[0,0.5,1],"shadowOpacity":0.5,"headerPaddingLeft":10,"paddingLeft":0,"headerPaddingRight":10,"closeButtonRollOverBackgroundColorRatios":[0],"scrollBarWidth":10,"modal":true,"shadowSpread":1,"closeButtonRollOverIconLineWidth":2,"closeButtonBorderSize":0,"paddingRight":0,"minHeight":20,"minWidth":20,"closeButtonPaddingTop":0,"headerVerticalAlign":"middle","backgroundColor":[],"veilOpacity":0.4,"children":["this.htmlText_47AA1EF6_4B52_FD27_41A7_907774745600"],"bodyBackgroundColorDirection":"vertical","gap":10,"overflow":"scroll","class":"Window","closeButtonPaddingBottom":0,"titleFontColor":"#000000","titlePaddingTop":5,"scrollBarOpacity":0.5,"closeButtonPaddingRight":0,"titleFontSize":"1.29vmin","closeButtonBackgroundColorRatios":[],"layout":"vertical","horizontalAlign":"center","closeButtonRollOverIconColor":"#FFFFFF","shadowHorizontalLength":3,"paddingBottom":0,"bodyPaddingLeft":5,"veilColorDirection":"horizontal","closeButtonBackgroundColor":[],"paddingTop":0,"titlePaddingRight":5,"closeButtonIconColor":"#000000","backgroundColorRatios":[],"headerBackgroundColorDirection":"vertical","footerBackgroundOpacity":1,"propagateClick":false,"headerPaddingTop":10,"closeButtonPressedBorderColor":"#000000","scrollBarMargin":2,"verticalAlign":"middle","shadowColor":"#000000","shadowBlurRadius":6,"closeButtonIconWidth":12,"closeButtonPressedBorderSize":0,"bodyPaddingTop":5,"borderSize":0,"bodyPaddingBottom":5,"veilColor":["#000000","#000000"],"width":400,"shadow":true,"backgroundOpacity":1,"closeButtonRollOverBorderSize":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"id":"window_467BDEFB_4B52_FD2D_41A6_EA94DFAFCFE7","scrollBarColor":"#000000","headerBackgroundOpacity":1,"closeButtonPressedIconColor":"#FFFFFF","titlePaddingLeft":5,"closeButtonRollOverBackgroundColor":["#C13535"],"closeButtonPressedBackgroundColor":["#3A1D1F"],"height":100,"backgroundColorDirection":"vertical","shadowVerticalLength":0,"closeButtonPressedBackgroundColorRatios":[0],"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"toolTipHorizontalAlign":"center","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"veilColorRatios":[0,1],"closeButtonRollOverBorderColor":"#000000","headerBackgroundColorRatios":[0,0.1,1],"bodyBackgroundOpacity":1,"footerHeight":5,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"closeButtonBorderColor":"#000000","borderRadius":5,"scrollBarVisible":"rollOver","closeButtonPressedIconLineWidth":2,"closeButtonIconHeight":12,"titleFontFamily":"Arial","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"headerPaddingBottom":10,"footerBackgroundColorDirection":"vertical"},{"id":"panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F","thumbnailUrl":"media/panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_t.jpg","hfovMax":130,"label":trans('panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F.label'),"hfov":360,"partial":false,"vfov":180,"pitch":0,"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"rowCount":4,"class":"TiledImageResourceLevel","colCount":24,"url":"media/panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"tags":"ondemand","height":1024,"rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"tags":["ondemand","preload"],"height":512,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"tags":"mobilevr","height":1536,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_0/{face}/vr/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"adjacentPanoramas":[{"panorama":"this.panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B","distance":1.19,"select":"this.mainPlayList.set('selectedIndex', 3)","class":"AdjacentPanorama"}],"data":{"label":"IMG_20201210_132032_00_merged"},"hfovMin":"135%","overlays":["this.overlay_5A0A079D_4BD3_0BE5_41C6_017AE26842FB"]},{"id":"panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B","thumbnailUrl":"media/panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_t.jpg","overlays":["this.overlay_59EC6847_4BDF_0565_41CC_DB5856FEAFBB"],"hfovMax":130,"label":trans('panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B.label'),"data":{"label":"IMG_20201210_132135_00_merged"},"hfovMin":"135%","hfov":360,"partial":false,"vfov":180,"pitch":0,"class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_t.jpg","cube":{"levels":[{"width":12288,"tags":"ondemand","height":2048,"rowCount":4,"class":"TiledImageResourceLevel","colCount":24,"url":"media/panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_0/{face}/0/{row}_{column}.jpg"},{"width":6144,"tags":"ondemand","height":1024,"rowCount":2,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_0/{face}/1/{row}_{column}.jpg"},{"width":3072,"tags":["ondemand","preload"],"height":512,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_0/{face}/2/{row}_{column}.jpg"},{"width":9216,"tags":"mobilevr","height":1536,"rowCount":1,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_0/{face}/vr/0.jpg"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}]},{"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","zoomEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"arrowKeysAction":"translate","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","gyroscopeVerticalDraggingEnabled":true},{"itemThumbnailBorderRadius":50,"itemThumbnailShadowVerticalLength":3,"right":"0.04%","selectedItemLabelFontWeight":"bold","scrollBarWidth":10,"itemLabelFontStyle":"normal","paddingLeft":20,"itemThumbnailShadow":true,"itemLabelFontColor":"#FFFFFF","itemPaddingBottom":3,"itemThumbnailShadowColor":"#000000","paddingRight":20,"minHeight":20,"minWidth":20,"itemThumbnailOpacity":1,"backgroundColor":["#000000"],"itemMode":"normal","itemThumbnailWidth":75,"itemThumbnailShadowSpread":1,"gap":10,"itemBorderRadius":0,"scrollBarOpacity":0.5,"class":"ThumbnailList","layout":"vertical","itemBackgroundColor":[],"itemVerticalAlign":"middle","horizontalAlign":"left","playList":"this.ThumbnailList_599223D9_4BB7_0B6D_41B7_102731A52279_playlist","paddingTop":10,"itemPaddingLeft":3,"itemThumbnailShadowHorizontalLength":3,"top":"0.11%","backgroundColorRatios":[0],"paddingBottom":10,"itemPaddingTop":3,"propagateClick":false,"scrollBarMargin":2,"verticalAlign":"top","itemBackgroundColorRatios":[],"itemLabelTextDecoration":"none","itemPaddingRight":3,"itemThumbnailHeight":75,"itemLabelHorizontalAlign":"center","borderSize":0,"rollOverItemBackgroundOpacity":0,"rollOverItemLabelFontWeight":"normal","shadow":false,"itemHorizontalAlign":"center","width":202,"itemBackgroundOpacity":0,"itemLabelGap":9,"id":"ThumbnailList_599223D9_4BB7_0B6D_41B7_102731A52279","itemThumbnailScaleMode":"fit_outside","backgroundOpacity":0.24,"height":"66.667%","itemOpacity":1,"itemLabelFontWeight":"normal","scrollBarColor":"#FFFFFF","toolTipHorizontalAlign":"center","itemLabelPosition":"bottom","backgroundColorDirection":"vertical","itemBackgroundColorDirection":"vertical","itemLabelFontFamily":"Arial","itemLabelFontSize":14,"itemThumbnailShadowBlurRadius":8,"borderRadius":5,"selectedItemLabelFontColor":"#FFCC00","scrollBarVisible":"rollOver","data":{"name":"ThumbnailList35762"},"itemThumbnailShadowOpacity":0.54},{"id":"ThumbnailList_599223D9_4BB7_0B6D_41B7_102731A52279_playlist","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_camera","media":"this.panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_camera","media":"this.panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_camera","media":"this.panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_camera","media":"this.panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B"}],"class":"PlayList"},{"id":"panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_camera","initialPosition":{"yaw":176.25,"pitch":-21.66,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"initialSequence":"this.sequence_5BCE899C_4BD5_07EB_41C0_614E89E9CCFA","class":"PanoramaCamera"},{"toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"subtitlesGap":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesBackgroundColor":"#000000","playbackBarHeadWidth":6,"subtitlesHorizontalAlign":"center","firstTransitionDuration":0,"playbackBarProgressBorderSize":0,"paddingLeft":0,"subtitlesVerticalAlign":"bottom","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarRight":0,"toolTipTextShadowOpacity":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"minHeight":50,"toolTipShadowColor":"#333333","minWidth":100,"paddingRight":0,"subtitlesBorderSize":0,"toolTipFontColor":"#606060","displayTooltipInTouchScreens":true,"playbackBarHeadShadowOpacity":0.7,"subtitlesFontColor":"#FFFFFF","toolTipShadowBlurRadius":3,"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowSpread":0,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"toolTipShadowVerticalLength":0,"toolTipShadowHorizontalLength":0,"class":"ViewerArea","subtitlesFontWeight":"normal","playbackBarBorderColor":"#FFFFFF","transitionDuration":500,"playbackBarBorderRadius":0,"subtitlesPaddingLeft":5,"playbackBarProgressBorderColor":"#000000","subtitlesBottom":50,"toolTipPaddingLeft":6,"progressOpacity":1,"subtitlesPaddingRight":5,"progressBackgroundColorRatios":[0],"progressRight":0,"progressBarBackgroundColorDirection":"vertical","paddingTop":0,"paddingBottom":0,"playbackBarHeadBorderRadius":0,"playbackBarProgressOpacity":1,"transitionMode":"blending","progressBarBorderColor":"#000000","playbackBarHeadBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipOpacity":1,"progressBackgroundColorDirection":"vertical","playbackBarBorderSize":0,"propagateClick":false,"subtitlesTop":0,"subtitlesTextShadowVerticalLength":1,"vrPointerSelectionColor":"#FF6600","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowColor":"#000000","playbackBarBackgroundOpacity":1,"progressBackgroundColor":["#FFFFFF"],"playbackBarHeadShadowVerticalLength":0,"subtitlesFontSize":"3vmin","borderSize":0,"progressBottom":0,"vrPointerSelectionTime":2000,"progressBarOpacity":1,"shadow":false,"toolTipShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowBlurRadius":3,"subtitlesBorderColor":"#FFFFFF","playbackBarLeft":0,"subtitlesPaddingBottom":5,"toolTipFontStyle":"normal","toolTipFontWeight":"normal","id":"MainViewer","width":"100%","progressBorderSize":0,"playbackBarHeadShadowColor":"#000000","progressHeight":10,"toolTipPaddingRight":6,"progressBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesTextDecoration":"none","height":"100%","progressBarBorderSize":0,"toolTipHorizontalAlign":"center","playbackBarHeadHeight":15,"subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","subtitlesTextShadowBlurRadius":0,"toolTipBorderRadius":3,"playbackBarHeadBorderSize":0,"playbackBarHeadOpacity":1,"borderRadius":0,"progressBackgroundOpacity":1,"progressBorderRadius":0,"playbackBarOpacity":1,"vrPointerColor":"#FFFFFF","subtitlesShadow":false,"toolTipBorderSize":1,"subtitlesPaddingTop":5,"toolTipTextShadowBlurRadius":3,"progressLeft":0,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"},"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesOpacity":1,"playbackBarBottom":5,"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","doubleClickAction":"toggle_fullscreen","toolTipFontFamily":"Arial","toolTipDisplayTime":600},{"id":"panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_camera","initialPosition":{"yaw":-178.67,"pitch":-18.43,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"initialSequence":"this.sequence_44D99D2D_4BAF_3F25_41B2_4C668329EFB3","class":"PanoramaCamera"},{"bodyPaddingRight":5,"data":{"name":"Window6926"},"closeButtonIconLineWidth":2,"footerBackgroundColorRatios":[0,0.9,1],"closeButtonPaddingLeft":0,"closeButtonBorderRadius":11,"titlePaddingBottom":5,"contentOpaque":false,"bodyBackgroundColorRatios":[0,0.5,1],"shadowOpacity":0.5,"headerPaddingLeft":10,"paddingLeft":0,"headerPaddingRight":10,"closeButtonRollOverBackgroundColorRatios":[0],"scrollBarWidth":10,"modal":true,"shadowSpread":1,"closeButtonRollOverIconLineWidth":2,"closeButtonBorderSize":0,"paddingRight":0,"minHeight":20,"minWidth":20,"closeButtonPaddingTop":0,"headerVerticalAlign":"middle","backgroundColor":[],"veilOpacity":0.4,"children":["this.htmlText_45E0652D_4B57_0F25_4190_BF877CE9C689"],"bodyBackgroundColorDirection":"vertical","gap":10,"overflow":"scroll","class":"Window","closeButtonPaddingBottom":0,"titleFontColor":"#000000","titlePaddingTop":5,"scrollBarOpacity":0.5,"closeButtonPaddingRight":0,"titleFontSize":"1.29vmin","closeButtonBackgroundColorRatios":[],"layout":"vertical","horizontalAlign":"center","closeButtonRollOverIconColor":"#FFFFFF","shadowHorizontalLength":3,"paddingBottom":0,"bodyPaddingLeft":5,"veilColorDirection":"horizontal","closeButtonBackgroundColor":[],"paddingTop":0,"titlePaddingRight":5,"closeButtonIconColor":"#000000","backgroundColorRatios":[],"headerBackgroundColorDirection":"vertical","footerBackgroundOpacity":1,"propagateClick":false,"headerPaddingTop":10,"closeButtonPressedBorderColor":"#000000","scrollBarMargin":2,"verticalAlign":"middle","shadowColor":"#000000","shadowBlurRadius":6,"closeButtonIconWidth":12,"closeButtonPressedBorderSize":0,"bodyPaddingTop":5,"borderSize":0,"bodyPaddingBottom":5,"veilColor":["#000000","#000000"],"width":400,"shadow":true,"backgroundOpacity":1,"closeButtonRollOverBorderSize":0,"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"id":"window_5BC67B6B_4B53_1B2D_41B6_4590506FC6FA","scrollBarColor":"#000000","headerBackgroundOpacity":1,"closeButtonPressedIconColor":"#FFFFFF","titlePaddingLeft":5,"closeButtonRollOverBackgroundColor":["#C13535"],"closeButtonPressedBackgroundColor":["#3A1D1F"],"height":100,"backgroundColorDirection":"vertical","shadowVerticalLength":0,"closeButtonPressedBackgroundColorRatios":[0],"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"toolTipHorizontalAlign":"center","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"veilColorRatios":[0,1],"closeButtonRollOverBorderColor":"#000000","headerBackgroundColorRatios":[0,0.1,1],"bodyBackgroundOpacity":1,"footerHeight":5,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"closeButtonBorderColor":"#000000","borderRadius":5,"scrollBarVisible":"rollOver","closeButtonPressedIconLineWidth":2,"closeButtonIconHeight":12,"titleFontFamily":"Arial","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"headerPaddingBottom":10,"footerBackgroundColorDirection":"vertical"},{"id":"mainPlayList","items":[{"end":"this.showWindow(this.window_467BDEFB_4B52_FD2D_41A6_EA94DFAFCFE7, null, false)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C_camera","media":"this.panorama_406A453F_4B55_0F25_41D2_2AD23EC4B56C"},{"end":"this.quizShowTimeout({repeat: {visible: false}, score: {visible: true}})","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","camera":"this.panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_camera","media":"this.panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7"},{"player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)","camera":"this.panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F_camera","media":"this.panorama_44652409_4BAF_0CED_41C2_2D3A6601C16F"},{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)","camera":"this.panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B_camera","media":"this.panorama_5B7400E6_4BD5_0527_41CF_91A84D224F7B"}],"class":"PlayList"},{"id":"panorama_5A23E3E0_4B7F_0B5B_41CF_6AE4CEE3A1F7_camera","initialPosition":{"yaw":159.96,"pitch":-28.73,"class":"PanoramaCameraPosition"},"automaticZoomSpeed":10,"initialSequence":"this.sequence_5A427A5E_4B6F_0567_41A3_05355519F4D4","class":"PanoramaCamera"},{"id":"overlay_454374F4_4B57_0D3B_4188_63F4D666A4DE","maps":[],"items":[{"scaleMode":"fit_inside","image":"this.res_44C4B399_4B55_0BED_41A8_6F9DBBDF359E","data":{"label":"Image"},"hfov":28.51,"horizontalAlign":"center","vfov":26.89,"verticalAlign":"middle","distance":50,"pitch":18.67,"class":"HotspotPanoramaOverlayImage","yaw":165.33}],"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_46B8B5AD_4B57_0F25_41AE_08E11742AF21"],"data":{"label":"Image"},"useHandCursor":true},{"id":"overlay_4470CDD6_4B6E_FF67_41AC_8F248BA3E7D8","maps":[],"items":[{"image":"this.AnimatedImageResource_5B8E3A60_4BBD_559E_41B5_D2F2F41F498C","hfov":27.5,"verticalAlign":"middle","pitch":-31.33,"class":"HotspotPanoramaOverlayImage","yaw":163.33,"vfov":22.13,"scaleMode":"fit_inside","horizontalAlign":"center","distance":50,"data":{"label":"Arrow 01 Right"}}],"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_447ADDDA_4B6E_FF6F_41D0_5EB2BEB153C9"],"data":{"label":"Arrow 01 Right"},"useHandCursor":true},{"id":"overlay_44F8D883_4BAD_B6A2_41B2_6D3FCB521882","maps":[],"items":[{"image":"this.AnimatedImageResource_5B8E8A61_4BBD_559E_41D1_C755020A6E3B","hfov":18.11,"verticalAlign":"middle","pitch":-59.62,"class":"HotspotPanoramaOverlayImage","yaw":166.67,"vfov":14.74,"scaleMode":"fit_inside","horizontalAlign":"center","distance":50,"data":{"label":"Arrow 02 Right-Up"}}],"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_44F2C887_4BAD_B6A2_41CC_DCDDAC236F6C"],"data":{"label":"Arrow 02 Right-Up"},"useHandCursor":true},{"propagateClick":false,"scrollBarWidth":10,"paddingLeft":10,"borderSize":0,"scrollBarColor":"#000000","paddingRight":10,"minHeight":0,"shadow":false,"backgroundOpacity":0,"id":"htmlText_47AA1EF6_4B52_FD27_41A7_907774745600","minWidth":0,"height":"100%","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"class":"HTMLText","paddingTop":10,"html":trans('htmlText_47AA1EF6_4B52_FD27_41A7_907774745600.html'),"borderRadius":0,"paddingBottom":10,"scrollBarHorizontalMargin":-3,"scrollBarVisible":"always","data":{"name":"HTMLText3017"},"width":"100%"},{"id":"overlay_5A0A079D_4BD3_0BE5_41C6_017AE26842FB","maps":[],"items":[{"image":"this.AnimatedImageResource_5B8D6A61_4BBD_559E_41B9_01E0A8976C7E","hfov":27.89,"verticalAlign":"middle","pitch":-54.95,"class":"HotspotPanoramaOverlayImage","yaw":152.1,"vfov":25.38,"scaleMode":"fit_inside","horizontalAlign":"center","distance":50,"data":{"label":"Arrow 02 Right-Up"}}],"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_5A3867A0_4BD3_0BDB_41B3_60E5C1E92093"],"data":{"label":"Arrow 02 Right-Up"},"useHandCursor":true},{"id":"overlay_59EC6847_4BDF_0565_41CC_DB5856FEAFBB","maps":[],"items":[{"image":"this.AnimatedImageResource_5B8DDA62_4BBD_4A62_41B3_34EA7173B88B","hfov":29.5,"verticalAlign":"middle","pitch":-49.81,"class":"HotspotPanoramaOverlayImage","yaw":164.19,"vfov":22.62,"scaleMode":"fit_inside","horizontalAlign":"center","distance":100,"data":{"label":"Arrow 01c"}}],"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_59E60855_4BDF_0565_41D2_D1353813F584"],"data":{"label":"Arrow 01c"},"useHandCursor":true},{"id":"sequence_5BCE899C_4BD5_07EB_41C0_614E89E9CCFA","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"},{"id":"sequence_44D99D2D_4BAF_3F25_41B2_4C668329EFB3","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"},{"propagateClick":false,"scrollBarWidth":10,"paddingLeft":10,"borderSize":0,"scrollBarColor":"#000000","paddingRight":10,"minHeight":0,"shadow":false,"backgroundOpacity":0,"id":"htmlText_45E0652D_4B57_0F25_4190_BF877CE9C689","minWidth":0,"height":"100%","toolTipHorizontalAlign":"center","scrollBarOpacity":0.5,"class":"HTMLText","paddingTop":10,"html":trans('htmlText_45E0652D_4B57_0F25_4190_BF877CE9C689.html'),"borderRadius":0,"paddingBottom":10,"scrollBarHorizontalMargin":-3,"scrollBarVisible":"always","data":{"name":"HTMLText6927"},"width":"100%"},{"id":"sequence_5A427A5E_4B6F_0567_41A3_05355519F4D4","restartMovementOnUserInteraction":false,"movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"},{"id":"res_44C4B399_4B55_0BED_41A8_6F9DBBDF359E","levels":[{"width":119,"height":119,"url":"media/res_44C4B399_4B55_0BED_41A8_6F9DBBDF359E_0.png","class":"ImageResourceLevel"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_46B8B5AD_4B57_0F25_41AE_08E11742AF21","click":"this.showWindow(this.window_5BC67B6B_4B53_1B2D_41B6_4590506FC6FA, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_5B8E3A60_4BBD_559E_41B5_D2F2F41F498C","levels":[{"width":300,"height":300,"url":"media/res_5BED53C3_4B6F_0B5D_41B2_19401C3751C8_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":9,"colCount":3,"frameDuration":62,"rowCount":3},{"id":"HotspotPanoramaOverlayArea_447ADDDA_4B6E_FF6F_41D0_5EB2BEB153C9","click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_5B8E8A61_4BBD_559E_41D1_C755020A6E3B","levels":[{"width":380,"height":570,"url":"media/res_5A3E0116_4BD3_04E7_41A6_4A44F1325EDE_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":24,"colCount":4,"frameDuration":41,"rowCount":6},{"id":"HotspotPanoramaOverlayArea_44F2C887_4BAD_B6A2_41CC_DCDDAC236F6C","click":"this.mainPlayList.set('selectedIndex', 2)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_5B8D6A61_4BBD_559E_41B9_01E0A8976C7E","finalFrame":"first","repeat":1,"levels":[{"width":380,"height":570,"url":"media/res_5A3E0116_4BD3_04E7_41A6_4A44F1325EDE_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":24,"colCount":4,"frameDuration":41,"rowCount":6},{"id":"HotspotPanoramaOverlayArea_5A3867A0_4BD3_0BDB_41B3_60E5C1E92093","click":"this.mainPlayList.set('selectedIndex', 3)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"AnimatedImageResource_5B8DDA62_4BBD_4A62_41B3_34EA7173B88B","levels":[{"width":330,"height":180,"url":"media/res_5A9B805D_4BDF_0565_41C9_ECF3E01CE21C_0.png","class":"ImageResourceLevel"}],"class":"AnimatedImageResource","frameCount":9,"colCount":3,"frameDuration":62,"rowCount":3},{"id":"HotspotPanoramaOverlayArea_59E60855_4BDF_0565_41D2_D1353813F584","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"id":"rootPlayer","desktopMipmappingEnabled":false,"mediaActivationMode":"window","height":"100%","toolTipHorizontalAlign":"center","children":["this.MainViewer","this.ThumbnailList_599223D9_4BB7_0B6D_41B7_102731A52279","this.HTMLText_592A8457_4BD3_0D65_41C3_E0284ED77E70"],"scrollBarOpacity":0.5,"gap":10,"layout":"absolute","class":"Player","borderRadius":0,"horizontalAlign":"left","paddingTop":0,"paddingBottom":0,"scrollBarVisible":"rollOver","backgroundPreloadEnabled":true,"data":{"name":"Player520","locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false}},"mouseWheelEnabled":true,"scrollBarColor":"#000000"};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.4.0.js.map
//Generated with v2020.4.0, Thu Dec 10 2020