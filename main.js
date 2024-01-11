! function(t) {
    function e(e) {
        for (var s, n, r = e[0], h = e[1], l = e[2], d = 0, _ = []; d < r.length; d++) n = r[d], a[n] && _.push(a[n][0]), a[n] = 0;
        for (s in h) Object.prototype.hasOwnProperty.call(h, s) && (t[s] = h[s]);
        for (p && p(e); _.length;) _.shift()();
        return o.push.apply(o, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < o.length; e++) {
            for (var i = o[e], s = !0, r = 1; r < i.length; r++) {
                var h = i[r];
                0 !== a[h] && (s = !1)
            }
            s && (o.splice(e--, 1), t = n(n.s = i[0]))
        }
        return t
    }
    var s = {},
        a = {
            0: 0
        },
        o = [];

    function n(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = s, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) n.d(i, s, function(e) {
                return t[e]
            }.bind(null, s));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "";
    var r = window.webpackJsonp = window.webpackJsonp || [],
        h = r.push.bind(r);
    r.push = e, r = r.slice();
    for (var l = 0; l < r.length; l++) e(r[l]);
    var p = h;
    o.push([18, 1]), i()
}([, function(t, e, i) {
    "use strict";
    var s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(2),
        o = s(i(22)),
        n = s(i(23)),
        r = i(15);
    e.debugSpecialId = "", e.worldDims = new Phaser.Geom.Rectangle(0, 0, 644, 722), e.MED_TIME_FRAME = 16.67, e.GAME_ANALYTHICS_ENABLED = !0, e.PLAYER_SHIP_EMITERS_ENABLED = !1, e.FACTION = {
        BADDIES: 1e3,
        PLAYER: 2e3
    }, e.FONTS = {
        SPACE_RANGER_BI: "SpaceRanger_BI",
        SPACE_RANGER_FRAME: "SpaceRangerFontFrame0000"
    }, e.BASE_DEPTH = {
        BACKGROUND: 0,
        SHIP: 10,
        ITEM: 200,
        BULLET: 300,
        GFX: 500
    }, e.SETTINGS = {
        DB_EXPLOS: !1,
        PLAYER_FOLLOWS_POINTER: !0,
        SCREEN_OFFSET_Y: 60,
        CAM_FOLLOW_LERP: .05,
        IS_TOUCH_SCREEN: !1,
        SKIP_TEXT_TOUCH_SCREEN: "\n[   Touch to Skip   ]",
        SKIP_TEXT_DESKTOP: "\n[   Click or Space to Skip   ]",
        SKIP_TEXT: ""
    }, e.DB_FILE_NAME = "ex4ceb1", e.DRAGONBONES = {
        SKE_JSON: e.DB_FILE_NAME + "_ske.json",
        TEX_JSON: e.DB_FILE_NAME + "_tex.json",
        TEX_IMG: e.DB_FILE_NAME + "_tex.png"
    }, e.ARMATURE_IDS = {
        MAIN: 0,
        B1: 1,
        B2: 2,
        B3: 3,
        B4: 4,
        B5: 5,
        B6: 6,
        B7: 7,
        B8: 8,
        B9: 9,
        B5_1: 51,
        B5_2: 52,
        B5_3: 53,
        MD_B1: 101,
        MD_B2: 102,
        MD_B3: 103,
        BOSS1: 201,
        BOSS2: 202,
        BOSS3: 203,
        BOSS4: 204,
        PLAYER_BOT: 30,
        PLAYER_MISSILE_S: 31,
        PLAYER_MISSILE_L: 32
    }, e.ARMATURE_NAMES = {
        B1: "b1",
        B2: "b2",
        B3: "b3",
        B4: "b4",
        B5: "b5",
        B6: "b6",
        B7: "b7",
        B8: "b8",
        B9: "b9",
        B5_1: "b5_1",
        B5_2: "b5_2",
        B5_3: "b5_3",
        MD_B1: "mdB1",
        MD_B2: "mdB2",
        MD_B3: "mdB3",
        BOSS1: "boss1",
        BOSS2: "boss2",
        BOSS3: "boss3",
        BOSS4: "boss4",
        EXPLOSION_ANIMS: "ExplosionAnims"
    }, e.BADDIE_ANIMS = {
        FLY: "fly",
        ATTACK: "attack",
        BOSS_LAZOR_CHARGE: "lazor_charge",
        NO_ANIM: "noAnim"
    }, e.KEYS = {
        SCENE: {
            PRELOAD: "preload_scene",
            LOAD: "load_scene",
            TITLE: "title_scene",
            STORY_INTRO: "story_scene_intro",
            GAME: "game_scene",
            GAME_PAUSED: "game_paused_scene",
            GAME_UI: "game_ui",
            GAME_SHOP: "game_shop",
            END_GAME: "end_game_scene"
        },
        ANIMS: {
            SHIP_EXHAUST: "thruster",
            ACID_BULLET: "BaddieBullet1",
            FLAME_BULLET: "BaddieBullet2",
            BADDIE_BULLET_EX: "BaddieBulletEx1",
            EXPLO1: "Ex1",
            EXPLO2: "Ex2",
            POW_UP_PICKED: "PowUpPickAnim",
            PLAYER_BOT: "playerBot",
            PLAYER_MISSILE_S: "playerMissileSmall",
            PLAYER_MISSILE_L: "playerMissileLarge",
            BIG_LAZOR: "BigLazor",
            BADDIE_BIG_LAZOR: "BBigLazor",
            LAZOR_CIRCULAR_BURST: "LazorCirularBurst",
            SPLATTER1: "Splat1",
            SPLATTER2: "Splat2",
            FLARE1: "flare1"
        },
        GAME_TEX_SS1: "ss1_tex",
        MENUS_TEX_SS2: "ss2_tex",
        LOADING_COMPLETE: "LoadingComplete0000",
        INPUT_KEYBOARD: "InputArrows0000",
        INPUT_POINTER: "InputPointer0000",
        GAME_PAUSED: "GamePaused0000",
        BACKGROUND: {
            FAR_FRAME_1: "farBg0000",
            FAR_FRAME_2: "farBg0001",
            FAR_FRAME_3: "farBg0002",
            FAR_FRAME_4: "farBg0003",
            TRANSITION_CLOUDS: "farBg0004"
        },
        CLOUDS: {
            LARGE_CLOUD1: "lgClouds0000",
            LARGE_CLOUD2: "lgClouds0001",
            LARGE_CLOUD3: "lgClouds0002",
            LARGE_CLOUD4: "lgClouds0003",
            MID_CLOUD1: "medClouds0000",
            MID_CLOUD2: "medClouds0001",
            MID_CLOUD3: "medClouds0002",
            MID_CLOUD4: "medClouds0003"
        },
        SHIP: {
            PLAYER_SHIP1: "pship10000",
            PLAYER_BOT: "playerBot0000"
        },
        MISSILE: {
            SMALL: "playerMissileLarge0000",
            LARGE: "playerMissileSmall0000"
        },
        BULLET: {
            BULLET1: "bullet10000",
            BULLET2: "bullet20000",
            BULLET3: "bullet30000",
            BULLET4: "bullet40000",
            BULLET5: "bullet50000",
            MINI1: "miniBullet0000"
        },
        GAME_ITEM: {
            BIG_LAZOR: "PowUp0000",
            MAIN_GUN: "PowUp0001",
            HEALTH: "PowUp0002",
            ENERGY: "PowUp0003",
            STAR: "PowUp0004",
            STAR_2: "PowUp0005",
            STAR_5: "PowUp0006",
            STAR_10: "PowUp0007",
            STAR_20: "PowUp0008"
        },
        GREEN_SQUARE_64: "greenRectangle640000",
        GREEN_BG: "GreenBg",
        HP_BAR: {
            BG: "hpBarBg0000",
            METER: "hpBar0000"
        },
        GAME_UI: {
            LIVES_BG: "GameUi0000",
            BIG_LAZOR_BG: "GameUi0001",
            SEGMENT_ON: "GameUi0002",
            SEGMENT_OFF: "GameUi0003",
            STARS_BG: "GameUi0004",
            PAUSE_BTN: "GameUi0005",
            SUPPORT_US: "supportUs0000"
        },
        UI: {
            HEART: "UiComponents0000",
            BIG_LAZOR: "UiComponents0001",
            STAR: "UiComponents0002",
            BULLETS: "UiComponents0003",
            MISSILES: "UiComponents0004",
            ENERGY: "UiComponents0005",
            MAGNET: "UiComponents0006",
            MISSILES_SPEED: "UiComponents0007",
            BOTS: "UiComponents0008",
            BOTS_ENERGY: "UiComponents0009",
            SEGMENT_ON: "Segment0000",
            SEGMENT_OFF: "Segment0001",
            UPGRADES_BTN_BG: "UpgradesBtnBg0000",
            UPGRADES_BG: "UpgradesBg0000",
            UPGRADES_CONFIRM_BG: "UpgradesConfirmBg0000",
            LEFT_ARROW_BTN: "ArrowBtn0000",
            RIGHT_ARROW_BTN: "ArrowBtn0001",
            CANCEL_BTN: "CancelBtn0000",
            APPLY_BTN: "ApplyBtn0000",
            WATCH_AD_BTN: "WatchAdBtn0000",
            ITCH_IO_BTN: "ItchIoBtn0000",
            FB_BTN: "fbBtn0000",
            TW_BTN: "twBtn0000",
            UPGRADE_AVAILABLE: "UpgradeAvailable0000",
            BOUNTY_BAR_BG: "BountyBarBg0000",
            BOUNTIES_BG: "BountiesBg0000",
            TITLE_BG: "TitleBg0000",
            PAUSE_BG: "GamePausedBg0000",
            SFX_ON: "SfxBtn0000",
            SFX_OFF: "SfxBtn0001",
            MUSIC_ON: "MusicBtn0000",
            MUSIC_OFF: "MusicBtn0001",
            RESUME_BTN: "LargeBtn0000",
            EXIT_BTN: "LargeBtn0001",
            CONTINUE_BTN: "LargeBtn0002",
            START_BTN: "LargeBtn0003",
            RESET_GAME_BTN: "LargeBtn0004"
        },
        GAME_MUSIC: "music"
    }, e.BULLET_SETTINGS = {
        BADDIE_BULLET_ACID: 0,
        BADDIE_BULLET_FLAME: 1
    }, e.PATHS = {
        P1: 0,
        P2: 1
    }, e.setCurrentScene = function(t) {
        e.currentScene = t
    }, e.onWindowResize = function(t, i) {
        a.isDefined(e.currentScene) && (e.currentScene.scale.resize(t, i), a.isDefined(e.currentScene.onResize) && e.currentScene.onResize.apply(e.currentScene))
    }, e.UPDATE_MODEL_TYPE = {
        NORMAL: 0,
        FOLLOW_GRID: 1,
        MISSILE: 2,
        PATH: 3,
        CUSTOM: 4,
        SHIELDER: 5
    }, e.MAX_DEPTH = 999, e.lastSceneId = "", e.setLastSceneId = function(t) {
        e.lastSceneId = t
    }, e.isGamePaused = !1, e.setIsGamePaused = function(t) {
        e.isGamePaused = t
    }, e.storage = window.localStorage;
    var h = "EX4CE1234!@#$";

    function l() {
        T() || console.warn(">>> [RETRIEVING PERSISTENT DATA BLOCKED OR DISABLED BY USER EXTENSION]Game progress might not be available!!!");
        var t = e.storage.getItem(h);
        return a.isDefined(t) ? JSON.parse(t) : (console.log("getSavedStoredData null"), null)
    }
    e.getStoredData = l, e.hasStoredData = function() {
        return a.isDefined(l())
    }, e.setStoredData = function(t) {
        T() || console.warn(">>> [SAVING PERSISTENT DATA BLOCKED OR DISABLED BY USER EXTENSION]Might not be able to save game progress!!!"), e.storage.setItem(h, JSON.stringify(t))
    }, e.deleteStoredData = function() {
        e.storage.setItem(h, null), e.storage.removeItem(h)
    }, e.SFX_KEYS = {
        LEVEL_WON: "levelWon",
        COMMS: "comms",
        POW_UP: "powup",
        STAR1: "star1",
        STAR2: "star2",
        STAR3: "star3",
        STAR4: "star4",
        MISSILE: "missile",
        PLAYER_LAZOR: "playerLazor",
        BADDIE_LAZOR: "baddieLazor",
        BOSS1_DEFEATED: "boss1Defeated",
        BOSS2_DEFEATED: "boss2Defeated",
        BOSS3_DEFEATED: "boss3Defeated"
    }, e.sfxSpriteMarkers = [{
        name: "playerHit",
        start: 0,
        duration: 1,
        config: {}
    }, {
        name: "powup",
        start: 1.6,
        duration: 1.1,
        config: {}
    }, {
        name: "star1",
        start: 2.8,
        duration: .6,
        config: {}
    }, {
        name: "star2",
        start: 3.8,
        duration: .7,
        config: {}
    }, {
        name: "star3",
        start: 5,
        duration: .7,
        config: {}
    }, {
        name: "star4",
        start: 6,
        duration: .7,
        config: {}
    }, {
        name: "missile",
        start: 7,
        duration: 2.5,
        config: {
            volume: .55
        }
    }], e.smallAndMediumEnemiesSpriteMarkers = [{
        name: "sm1Defeated",
        start: 0,
        duration: 1.3,
        config: {
            volume: .75
        }
    }, {
        name: "sm2Defeated",
        start: 1.5,
        duration: .9,
        config: {
            volume: .75
        }
    }, {
        name: "sm3Defeated",
        start: 2.5,
        duration: 1,
        config: {
            volume: .75
        }
    }, {
        name: "sm4Defeated",
        start: 4,
        duration: 1.4,
        config: {
            volume: .75
        }
    }, {
        name: "md1Defeated",
        start: 5.5,
        duration: 1.3,
        config: {}
    }, {
        name: "md2Defeated",
        start: 7,
        duration: 1.7,
        config: {}
    }, {
        name: "md3Defeated",
        start: 9,
        duration: 1.6,
        config: {}
    }, {
        name: "md4Defeated",
        start: 11,
        duration: 1.7,
        config: {}
    }], e.largeAndBossEnemiesSpriteMarkers = [{
        name: "lg1Defeated",
        start: 0,
        duration: 2,
        config: {}
    }, {
        name: "lg2Defeated",
        start: 2.5,
        duration: 2.1,
        config: {}
    }, {
        name: "lg3Defeated",
        start: 5,
        duration: 1.8,
        config: {}
    }, {
        name: "boss1Defeated",
        start: 7,
        duration: 3.3,
        config: {}
    }, {
        name: "boss2Defeated",
        start: 10.5,
        duration: 3.2,
        config: {}
    }, {
        name: "boss3Defeated",
        start: 14.5,
        duration: 3.5,
        config: {}
    }], e.explosSfxSpriteMarkers = [{
        name: "hit1",
        start: .2,
        duration: .5,
        config: {}
    }, {
        name: "hit2",
        start: 1,
        duration: .4,
        config: {}
    }, {
        name: "hit3",
        start: 1.8,
        duration: .5,
        config: {}
    }, {
        name: "explo1",
        start: 2.5,
        duration: 1.1,
        config: {}
    }, {
        name: "explo2",
        start: 3.8,
        duration: 1.21,
        config: {}
    }], e.bigLazorsSfxSpriteMarkers = [{
        name: "playerLazor",
        start: 0,
        duration: 3.3,
        config: {}
    }, {
        name: "baddieLazor",
        start: 3.5,
        duration: 2.5,
        config: {}
    }], e.numConcurentSfxSprites = 3, e.setNumConcurentSfxSprites = function(t) {
        e.numConcurentSfxSprites = t
    }, e.sfxSprites = [], e.setSfxSprites = function(t) {
        e.sfxSprites = t
    }, e.numConcurentLgBossSfxSprites = 1, e.setNumConcurentLgBossSfxSprites = function(t) {
        e.numConcurentLgBossSfxSprites = t
    }, e.numConcurentSmMdSfxSprites = 2, e.setNumConcurentSmMdSfxSprites = function(t) {
        e.numConcurentSmMdSfxSprites = t
    }, e.smMdSfxSprites = [], e.setSmMdSfxSprites = function(t) {
        e.smMdSfxSprites = t
    }, e.lgBossSfxSprites = [], e.setLgBossSfxSprites = function(t) {
        e.lgBossSfxSprites = t
    }, e.numConcurentExplosSfxSprites = 2, e.explosSfxSprites = [], e.setExplosSfxSprites = function(t) {
        e.explosSfxSprites = t
    }, e.numConcurentBigLazorSfxSprites = 2, e.setNumConcurentBigLazorSfxSprites = function(t) {
        e.numConcurentBigLazorSfxSprites = t
    }, e.bigLazorSfxSprites = [], e.setBigLazorSfxSprites = function(t) {
        e.bigLazorSfxSprites = t
    };
    var p = 0;

    function d(t) {
        e.isSoundOn && (e.sfxSprites[p].isPlaying && p++, p >= e.sfxSprites.length && (p = 0), e.sfxSprites[p].play(t))
    }
    e.playSfx = d;
    var _ = 0;

    function c(t) {
        e.isSoundOn && (e.smMdSfxSprites[_].isPlaying && _++, _ >= e.smMdSfxSprites.length && (_ = 0), e.smMdSfxSprites[_].play(t))
    }
    e.playSmMdSfx = c;
    var S = 0;

    function u(t) {
        e.isSoundOn && (e.lgBossSfxSprites[S].isPlaying && S++, S >= e.lgBossSfxSprites.length && (S = 0), e.lgBossSfxSprites[S].play(t))
    }
    e.playLgBossSfx = u;
    var g = 0;

    function y(t) {
        e.isSoundOn && (e.explosSfxSprites[g].isPlaying && g++, g >= e.explosSfxSprites.length && (g = 0), e.explosSfxSprites[g].play(t))
    }
    e.playExplosSfx = y;
    var m = 0;

    function f(t, i) {
        if (void 0 === i && (i = {}), a.isDefined(e.currentMusic))
            if (e.currentMusic.isPlaying) {
                if (e.currentMusic.key == t) return void(e.lastPlayedMusicKey = t);
                e.currentMusic.stop(), e.currentMusic = null
            } else e.currentMusic.isPaused && e.currentMusic.resume();
        else if (e.lastPlayedMusicKey = t, e.isMusicOn) {
            var s = e.musicTracks[t];
            a.isDefined(s) && !s.isPlaying && (s.play("", i), e.currentMusic = e.musicTracks[t], e.lastPlayedMusicKey = t)
        } else E()
    }

    function E(t) {
        if (void 0 === t && (t = "current"), "current" === t && a.isDefined(e.currentMusic)) return e.currentMusic.stop(), void(e.currentMusic = null);
        var i = e.musicTracks[t];
        a.isDefined(i) && i.stop()
    }

    function A(t) {
        if (void 0 === t && (t = "current"), "current" === t && a.isDefined(e.currentMusic)) e.currentMusic.pause();
        else {
            var i = e.musicTracks[t];
            a.isDefined(i) && i.pause()
        }
    }

    function T() {
        return a.isDefined(document.getElementById("UhiBYSAsCdvjbby"))
    }
    e.playBigLazorSfx = function(t) {
        e.isSoundOn && (e.bigLazorSfxSprites[m].isPlaying && m++, m >= e.bigLazorSfxSprites.length && (m = 0), e.bigLazorSfxSprites[m].play(t))
    }, e.smBaddieSfxs = ["sm1Defeated", "sm2Defeated", "sm3Defeated", "sm4Defeated"], e.playRandSmallBaddieDefeatedSfx = function() {
        e.isSoundOn && c(e.smBaddieSfxs[Phaser.Math.RND.between(0, 3)])
    }, e.mdBaddieSfxs = ["md1Defeated", "md2Defeated", "md3Defeated", "md4Defeated"], e.playRandMedBaddieDefeatedSfx = function() {
        e.isSoundOn && c(e.mdBaddieSfxs[Phaser.Math.RND.between(0, 3)])
    }, e.lgBaddieSfxs = ["lg1Defeated", "lg2Defeated", "lg3Defeated"], e.playRandLgBaddieDefeatedSfx = function() {
        e.isSoundOn && u(e.lgBaddieSfxs[Phaser.Math.RND.between(0, 2)])
    }, e.explosSfxs = ["explo1", "explo2"], e.playRandExploSfx = function() {
        e.isSoundOn && y(e.explosSfxs[Phaser.Math.RND.between(0, 1)])
    }, e.hitSfxs = ["hit1", "hit2", "hit3"], e.playRandHitSfx = function() {
        e.isSoundOn && y(e.hitSfxs[Phaser.Math.RND.between(0, 2)])
    }, e.starSfxs = ["star1", "star2", "star3", "star4"], e.playRandStarSfx = function() {
        e.isSoundOn && d(e.starSfxs[Phaser.Math.RND.between(0, 3)])
    }, e.isMusicOn = !0, e.setIsMusicOn = function(t) {
        e.isMusicOn = t, 0 == e.isMusicOn ? A() : f(e.lastPlayedMusicKey)
    }, e.musicTracks = {}, e.currentMusic = null, e.lastPlayedMusicKey = "", e.MENU_MUSIC_VOLUME = .25, e.GAME_MUSIC_VOLUME = .7, e.addMusicSound = function(t) {
        e.musicTracks[t.key] = t
    }, e.setMusic = f, e.fadeCurrentMusic = function(t, i, s) {
        a.isDefined(e.currentMusic) && e.currentMusic.isPlaying && t.tweens.add({
            targets: e.currentMusic,
            volume: i,
            duration: s
        })
    }, e.stopMusic = E, e.pauseMusic = A, e.setPlayerShipReference = function(t) {
        e.playerShip = t
    }, e.isSoundOn = !0, e.setIsSoundOn = function(t) {
        e.isSoundOn = t, a.isDefined(e.playerShip) && e.playerShip.onSetSoundOn(t)
    }, e.SHOOTING_TYPE = {
        NONE: 0,
        AT_ANGLE: 10,
        FROM_ROTATION: 40,
        AT_OR_NEAR_TARGET: 50,
        SPREAD: 100
    }, e.DIRECTION_RAD = {
        UP: Phaser.Math.DegToRad(-90),
        DOWN: Phaser.Math.DegToRad(90),
        RIGHT: Phaser.Math.DegToRad(0),
        LEFT: Phaser.Math.DegToRad(180),
        UP_RIGHT: Phaser.Math.DegToRad(-45),
        UP_LEFT: Phaser.Math.DegToRad(-135),
        DOWN_RIGHT: Phaser.Math.DegToRad(45),
        DOWN_LEFT: Phaser.Math.DegToRad(135)
    }, e.dropsKeeper = new o.default, e.squadronKeeper = new n.default, e.upgrades = new r.Upgrades, e.isFirstRun = !1, e.setIsFirstRun = function(t) {
        this.isFirstRun = t, console.log("Is first run", this.isFirstRun)
    }, e.isDevSupportEnabled = T
}, function(t, e, i) {
    "use strict";

    function s(t) {
        return void 0 !== t && null != t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isDefined = s, e.copyInto = function(t, e) {
        if (s(e))
            if (s(t))
                for (var i in e) Array.isArray(e[i]) ? t[i] = e[i].slice(0) : t[i] = e[i];
            else console.warn("Cannot copy into an undefined or null destination object! Use Phaser.Utils.Objects.Clone() for a shallow copy of an object.");
        else console.warn("Cannot copy an undefined or null source object!")
    }, e.getDebugText = function(t, e, i, a, o, n, r) {
        return void 0 === o && (o = 32), void 0 === n && (n = "#ffffff"), void 0 === r && (r = "#000000"), s(t) ? t.add.text(e, i, a, {
            fontFamily: "Arial",
            fontSize: o,
            fontStyle: "bold",
            color: n,
            backgroundColor: r
        }) : (console.error("util.getDebugText: scene needs to be initialized!"), null)
    }, e.isEvenNumber = function(t) {
        return 0 == (1 & t)
    }, e.getGridDetails = function(t) {
        if (s(t))
            if (s(t.fitBox)) {
                if (s(t.tileDims)) {
                    var e = t.numRows,
                        i = t.numCols,
                        a = t.fitBox,
                        o = t.tileDims.x,
                        n = t.tileDims.y,
                        r = t.padding;
                    s(r) || (r = new Phaser.Geom.Point(0, 0));
                    var h = r.x + (o + r.x) * i,
                        l = r.y + (n + r.y) * e,
                        p = 1,
                        d = (a = t.fitBox, h),
                        _ = l,
                        c = new Phaser.Geom.Point;
                    a.width > a.height ? (p = a.width / h, m(), c.x = 0, c.y = Math.abs(a.height - _) / 2, _ > a.height && (p = a.height / l, m(), c.x = Math.abs(a.width - d) / 2, c.y = 0)) : (p = a.height / l, m(), c.x = Math.abs(a.width - d) / 2, c.y = 0, d > a.width && (p = a.width / h, m(), c.x = 0, c.y = Math.abs(a.height - _) / 2));
                    for (var S = [], u = i * e, g = 0; g < u; g++) {
                        var y = {
                            x: c.x + g % i * ((o + r.x) * p) + o * p / 2 + r.x * p,
                            y: c.y + Math.floor(g / i) * ((n + r.y) * p) + n * p / 2 + r.y * p
                        };
                        S.push(y)
                    }
                    return {
                        scale: p,
                        coordinatesArr: S,
                        gridBox: new Phaser.Geom.Rectangle(c.x, c.y, d, _)
                    }
                }
                console.error("grid_config.tileDims needs to be defined:", t.tileDims)
            } else console.error("grid_config.fitBox needs to be defined:", t.fitBox);
        else console.error("grid_config needs to be defined:", t);

        function m() {
            d = h * p, _ = l * p
        }
    }, e.shuffle = function(t) {
        t.sort(function() {
            return Math.random() - .5
        })
    }, e.numToDigitsArray = function(t) {
        return ("" + t).split("").map(function(t) {
            return parseInt(t)
        })
    }
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(2),
        l = i(4),
        p = i(13),
        d = i(6),
        _ = (a(c, n = p.BaseActor), c.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.updateMode == r.UPDATE_MODEL_TYPE.MISSILE ? this.updateMissileMode(t) : this.updateMode == r.UPDATE_MODEL_TYPE.NORMAL ? this.updateNormal(t) : this.updateMode == r.UPDATE_MODEL_TYPE.PATH ? this.updatePathMode() : this.updateMode == r.UPDATE_MODEL_TYPE.SHIELDER ? this.updateShielderMode(t) : this.updateMode == r.UPDATE_MODEL_TYPE.CUSTOM || this.updateNormal(t), this.armature && (this.armature.x = this.bodySpr.x, this.armature.y = this.bodySpr.y, this.armature.rotation = this.bodySpr.rotation), this.updateSmokeTrail()
        }, c.prototype.updateSmokeTrail = function() {}, c.prototype.updateNormal = function(t) {
            (this.bodySpr.x < -200 || this.bodySpr.x > r.worldDims.width + 200 || this.bodySpr.y < -200 || this.bodySpr.y > r.worldDims.height + 200) && (this.toBePooledBack = !0), h.isDefined(this.lookAtPoint) ? (this.rotationTowardsTarget = Phaser.Math.Angle.BetweenPoints(this.bodySpr, this.lookAtPoint), this.rotateToTargetRotation(t)) : h.isDefined(this.target) && (this.rotationTowardsTarget = Phaser.Math.Angle.BetweenPoints(this.bodySpr, this.target.bodySpr), this.rotateToTargetRotation(t))
        }, c.prototype.updatePathMode = function() {
            this._movePathIndex = Math.round(this._pathTween.getValue()), this._movePathIndex >= this._movePath.length ? this.toBePooledBack = !0 : (this._pathPoint = this._movePath[this._movePathIndex], h.isDefined(this._pathPoint) && (this.bodySpr.x = this._pathPoint.x, this.bodySpr.y = this._pathPoint.y, this._pathConfig.xMirror && this._pathConfig.yMirror ? (this.bodySpr.angle = this._pathPoint.alpha, this.bodySpr.x = r.worldDims.width - this._pathPoint.x, this.bodySpr.y = r.worldDims.height - this._pathPoint.y) : this._pathConfig.xMirror ? (this.bodySpr.angle = 360 - this._pathPoint.alpha, this.bodySpr.x = r.worldDims.width - this._pathPoint.x) : this._pathConfig.yMirror ? (this.bodySpr.angle = 180 - this._pathPoint.alpha, this.bodySpr.y = r.worldDims.height - this._pathPoint.y) : this.bodySpr.angle = this._pathPoint.alpha + 180, this.bodySpr.x += this._pathOffsets.x, this.bodySpr.y += this._pathOffsets.y))
        }, c.prototype.updateMissileMode = function(t) {
            h.isDefined(this.target) ? (this.rotationTowardsTarget = Phaser.Math.Angle.BetweenPoints(this.bodySpr, this.target), this.rotateToTargetRotation(t), this.scene.physics.velocityFromRotation(this.bodySpr.rotation, this.velocityMagnitude, this._velocities), this.bodySpr.setVelocity(this._velocities.x, this._velocities.y)) : this.startNormalUpdates(null, null, this.velocityMagnitude)
        }, c.prototype.rotateToTargetRotation = function(t) {
            this.bodySpr.rotation !== this.rotationTowardsTarget && (this.missileRotationDelta = this.rotationTowardsTarget - this.bodySpr.rotation, this.missileRotationDelta > Math.PI && (this.missileRotationDelta -= Phaser.Math.PI2), this.missileRotationDelta < -Math.PI && (this.missileRotationDelta += Phaser.Math.PI2), 0 < this.missileRotationDelta ? this.bodySpr.rotation += this.turnRate * (t / r.MED_TIME_FRAME) : this.bodySpr.rotation -= this.turnRate * (t / r.MED_TIME_FRAME), Math.abs(this.missileRotationDelta) < this.turnRate && (this.bodySpr.rotation = this.rotationTowardsTarget))
        }, c.prototype.updateShielderMode = function(t) {
            this.bodySpr.x = Math.cos(this.shieldRotation) * this.shieldRadius + this.shieldTarget.x, this.bodySpr.y = Math.sin(this.shieldRotation) * this.shieldRadius + this.shieldTarget.y, this.shieldRotation += this.shieldRotationSpeed * (t / r.MED_TIME_FRAME), this.shieldRotation > Math.PI && (this.shieldRotation -= Phaser.Math.PI2), this.shieldRotation < -Math.PI && (this.shieldRotation += Phaser.Math.PI2)
        }, c.prototype.applySettings = function(t) {
            if (this.faction = t.faction, this.updateMode = t.updateMode, this.hitPoints = this.maxHitPoints = t.hp, this.scoreValue = t.scoreValue, h.isDefined(t.squadronId) && (this.squadronId = t.squadronId), h.isDefined(t.detonationTime) && (this.detonationTime = t.detonationTime), h.isDefined(t.pathModeConfig)) this.startPathMode(t.pathModeConfig);
            else if (h.isDefined(t.missileModeConfig)) {
                var e = t.missileModeConfig;
                this.startMissileMode(e.target, e.startRotation, e.turnRate, t.velocityMagnitude, e.missileModeDuration)
            } else if (h.isDefined(t.normalModeConfig)) {
                var i = t.normalModeConfig;
                this.startNormalUpdates(i.x, i.y, t.velocityMagnitude, i.startRotation, i.turn_rate)
            } else if (h.isDefined(t.shielderModeConfig)) {
                var s = t.shielderModeConfig;
                if (this.shieldRotation = s.initialRotation, this.shieldRadius = s.shieldRadius, this.shieldRotationSpeed = s.shieldRotationSpeed, this._shieldDuration = s.shielderModeDuration, this.turnRate = s.turnRate, h.isDefined(this.turnRate) || (this.turnRate = Phaser.Math.DegToRad(2)), this.shieldTarget = s.shieldTarget, this.updateMode = r.UPDATE_MODEL_TYPE.SHIELDER, !h.isDefined(this._shieldDuration) || this._shieldDuration <= 0) return;
                this.scene.time.delayedCall(this._shieldDuration, function() {
                    if (this.bodySpr.active)
                        if (h.isDefined(s.missileModeConfig)) {
                            var e = s.missileModeConfig;
                            this.startMissileMode(e.target, null, e.turnRate, t.velocityMagnitude, e.missileModeDuration)
                        } else this.startNormalUpdates()
                }, null, this)
            } else this.startNormalUpdates(null, null, t.velocityMagnitude, null)
        }, Object.defineProperty(c.prototype, "detonationTime", {
            set: function(t) {
                this._detonationTimerEvent = this.scene.time.delayedCall(t, this.hit, [this.hitPoints + this.maxHitPoints], this)
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.applyWeaponSettings = function(t) {
            this._weaponSettings = t, h.isDefined(this._weaponSettings) && this.startWeapon()
        }, c.prototype.startWeapon = function() {
            h.isDefined(this._weaponSettings.startDelay) && 0 < this._weaponSettings.startDelay ? this._shotStartDelayTimerEvent = this.scene.time.delayedCall(this._weaponSettings.startDelay, this.doNextShoot, null, this) : this.doNextShoot()
        }, Object.defineProperty(c.prototype, "weaponSettings", {
            get: function() {
                return this._weaponSettings
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.doNextShoot = function() {
            if (!(h.isDefined(this._weaponSettings.numShots) && (this._weaponSettings.numShots--, this._weaponSettings.numShots < 0))) {
                switch (this._weaponSettings.shootingType) {
                    case r.SHOOTING_TYPE.NONE:
                        break;
                    case r.SHOOTING_TYPE.AT_ANGLE:
                        this.shoot();
                        break;
                    case r.SHOOTING_TYPE.AT_OR_NEAR_TARGET:
                        this._shootAtTargetConfig = this._weaponSettings.shootAtTargetConfig, h.isDefined(this._shootAtTargetConfig) || (this._shootAtTargetConfig = {
                            offset_min_x: 0,
                            offset_max_x: 0,
                            offset_min_y: 0,
                            offset_max_y: 0,
                            target: this.scene.playerShip
                        }), this.shootAtTarget(this._shootAtTargetConfig.target.x + Phaser.Math.RND.between(this._shootAtTargetConfig.offset_min_x, this._shootAtTargetConfig.offset_max_x), this._shootAtTargetConfig.target.y + Phaser.Math.RND.between(this._shootAtTargetConfig.offset_min_y, this._shootAtTargetConfig.offset_max_y));
                        break;
                    case r.SHOOTING_TYPE.FROM_ROTATION:
                        this.shootFromCurrentRotation();
                        break;
                    case r.SHOOTING_TYPE.SPREAD:
                        this._shootSpreadConfig = this._weaponSettings.shotSpreadConfig, h.isDefined(this._shootSpreadConfig) || (this._shootSpreadConfig = {
                            numBullets: 3,
                            fromBodyRotation: !0,
                            angleRadiansBettween: .15 * Math.PI
                        }), this.shootSpreadAtAngle(this._shootSpreadConfig)
                }
                0 < this._weaponSettings.numShots && (this._doNextShotTimerEvent = this.scene.time.delayedCall(this._weaponSettings.fireRate, this.doNextShoot, null, this))
            }
        }, c.prototype.shootFromCurrentRotation = function() {
            this._weaponSettings.angleInRadians = this.bodySpr.rotation, this.shoot()
        }, c.prototype.shoot = function() {
            this.bodySpr.active && (this._weaponSettings.x = this.bodySpr.x, this._weaponSettings.y = this.bodySpr.y, this.scene.bulletsMng.shootBulletAtAngle(this.faction, this._weaponSettings))
        }, c.prototype.shootAtTarget = function(t, e) {
            this._weaponSettings.angleInRadians = Math.atan2(e - this.bodySpr.y, t - this.bodySpr.x), this.shoot()
        }, c.prototype.shootNearTarget = function(t, e, i, s, a) {
            this.shootAtTarget(t.x + Phaser.Math.RND.between(e, i), t.y + Phaser.Math.RND.between(s, a))
        }, c.prototype.shootSpreadAtAngle = function(t) {
            var e = 0;
            e = t.fromBodyRotation ? this.bodySpr.rotation + (t.numBullets - 1) * t.angleRadiansBettween / 2 : (h.isDefined(this._weaponSettings.angleInRadians) || (console.warn("When shooting spread at angle a _weaponSettings.angleInRadians should be defined!"), this._weaponSettings.angleInRadians = 0), this._weaponSettings.angleInRadians + (t.numBullets - 1) * t.angleRadiansBettween / 2);
            for (var i = this._weaponSettings.angleInRadians, s = 0; s < t.numBullets; s++) this._weaponSettings.angleInRadians = e, this.shoot(), e -= t.angleRadiansBettween;
            this._weaponSettings.angleInRadians = i
        }, c.prototype.setActive = function(t) {
            this.bodySpr.setActive(t), this.armature && this.armature.setActive(t)
        }, c.prototype.setVisible = function(t) {
            this.armature ? this.armature.setVisible(t) : this.bodySpr.setVisible(t)
        }, c.prototype.reset = function() {
            n.prototype.reset.call(this), this.setActive(!1), this.setVisible(!1), this.resetVelocities(), this.hitPoints = this.maxHitPoints = 100, this.updateMode = r.UPDATE_MODEL_TYPE.NORMAL, this._pathConfig = null, this._movePath = null, this._pathOffsets.setTo(0, 0), this._pathPoint = null, this._movePathIndex = 0, this._missileModeDuration = -1, this.missileRotationDelta = 0, this.turnRate = 1 * Phaser.Math.DEG_TO_RAD, this.target = null, this.bodySpr.setScale(1).setAlpha(1), h.isDefined(this.armature) && this.armature.setAlpha(1).setScale(1), h.isDefined(this._doNextShotTimerEvent) && this._doNextShotTimerEvent.remove(), h.isDefined(this._startNormalUpdateTimerEvent) && this._startNormalUpdateTimerEvent.remove(), h.isDefined(this._resetTintTimerEvent) && this._resetTintTimerEvent.remove(!0), h.isDefined(this._shotStartDelayTimerEvent) && this._shotStartDelayTimerEvent.remove(), h.isDefined(this._detonationTimerEvent) && this._detonationTimerEvent.remove(), l.TweenMax.killTweensOf(this), this.resetTint(), this.resetWeaponSettings()
        }, c.prototype.resetVelocities = function() {
            this.velocityMagnitude = 200, this._velocities.set(0, 0), this.bodySpr.setVelocity(0, 0), this.bodySpr.setAcceleration(0, 0)
        }, c.prototype.hit = function(t) {
            n.prototype.hit.call(this, t), 0 < this.hitPoints && (this.setArmatureTint(16716032), this._resetTintTimerEvent = this.scene.time.delayedCall(200, this.resetTint, null, this)), this.faction == r.FACTION.BADDIES && this._canDoSplatter && this._startSplatter(e.SPLATTER_ANIM_KEYS[Phaser.Math.RND.between(0, e.SPLATTER_ANIM_KEYS.length - 1)], this.bodySpr.x, this.bodySpr.y - 20, .7, Phaser.Math.RND.between(-15, 15) * Phaser.Math.DEG_TO_RAD)
        }, c.prototype.doDefeatedExplosion = function() {
            this.scene.effectsMng.addEffect(r.KEYS.ANIMS.EXPLO1, this.bodySpr.x, this.bodySpr.y, this.bodySpr.scaleX, Phaser.Math.RND.rotation())
        }, c.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), this.doDefeatedExplosion(), h.isDefined(this.onDefeatedMore) && (h.isDefined(this.onDefeatedMoreScope) ? this.onDefeatedMore.apply(this.onDefeatedMoreScope, this.onDefeatedMoreParams) : this.onDefeatedMore()), this.clear()
        }, c.prototype.clear = function() {
            this.setActive(!1), this.setVisible(!1), this.toBePooledBack = !0, l.TweenMax.killTweensOf(this), l.TweenMax.killTweensOf(this.bodySpr)
        }, c.prototype.resetTint = function() {
            if (this.armature) {
                for (var t = this.armature.list.length, e = 0; e < t; e++) this._slotImage = this.armature.list[e], this._slotImage.setTint(16777215);
                this._slotImage = null
            } else this.bodySpr.setTint(16777215)
        }, c.prototype.resetWeaponSettings = function() {
            h.isDefined(this._weaponSettings) && (this._weaponSettings.angleInRadians = .5 * Math.PI, this._weaponSettings.barrelLength = 30, this._weaponSettings.fireRate = 1, this._weaponSettings.numShots = -1, this._weaponSettings.shootAtTargetConfig = void 0, this._weaponSettings.shootingType = void 0, this._weaponSettings.shotSpreadConfig = void 0, this._weaponSettings.startDelay = 0, this._weaponSettings.velocity = 0, this._weaponSettings.x = 0, this._weaponSettings.y = 0)
        }, c.prototype.setArmatureTint = function(t) {
            if (this.armature) {
                for (var e = this.armature.list.length, i = 0; i < e; i++) this._slotImage = this.armature.list[i], this._slotImage.tintFill = !1, this._slotImage.setTint(16777215, 16777215, t, t);
                this._slotImage = null
            } else this.bodySpr.setTint(16777215, 16777215, t, t)
        }, c.prototype.startPathMode = function(t) {
            this._pathConfig = t, this._movePath = t.pathArr, this._movePathIndex = 0, h.isDefined(t.pathOffsets) && this._pathOffsets.setTo(t.pathOffsets.x, t.pathOffsets.y), this._pathConfig = t, this._movePath = t.pathArr, this._movePathIndex = 0, this._pathTween = this.scene.tweens.addCounter({
                from: 0,
                to: this._movePath.length,
                duration: 1e3 * t.pathTravelTime
            })
        }, c.prototype.startMissileMode = function(t, e, i, s, a) {
            void 0 === a && (a = -1), this.target = t, this.updateMode = r.UPDATE_MODEL_TYPE.MISSILE, h.isDefined(e) && (this.bodySpr.rotation = e), h.isDefined(i) && (this.turnRate = i), h.isDefined(s) && (this.velocityMagnitude = s), this._missileModeDuration = a, -1 != this._missileModeDuration && (this._startNormalUpdateTimerEvent = this.scene.time.delayedCall(this._missileModeDuration, this.startNormalUpdates, null, this))
        }, c.prototype.startNormalUpdates = function(t, e, i, s, a) {
            void 0 === t && (t = null), void 0 === e && (e = null), void 0 === i && (i = 200), void 0 === s && (s = null), void 0 === a && (a = null), this.target = null, h.isDefined(t) && (this.bodySpr.x = t), h.isDefined(e) && (this.bodySpr.y = e), this.velocityMagnitude = i, h.isDefined(s) && (this.bodySpr.rotation = s), h.isDefined(a) && (this.turnRate = a), this.scene.physics.velocityFromRotation(this.bodySpr.rotation, this.velocityMagnitude, this._velocities), this.bodySpr.setVelocity(this._velocities.x, this._velocities.y), h.isDefined(s) && (this.bodySpr.rotation = s), this.bodySpr.active && (this.updateMode = r.UPDATE_MODEL_TYPE.NORMAL)
        }, c.prototype.playArmatureAnim = function(t, e, i) {
            void 0 === e && (e = -1), void 0 === i && (i = 1), h.isDefined(this.armature) && (this.armature.animation.play(t, e), this.armature.animation.timeScale = i)
        }, c.prototype.enableAnimationCompleteListeners = function() {
            h.isDefined(this.armature) && (this.armature.addDBEventListener(dragonBones.EventObject.COMPLETE, this._onArmatureAnimComplete, this), this.armature.addDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this._onArmatureAnimLoopComplete, this))
        }, c.prototype.disbleAnimationCompleteListeners = function() {
            h.isDefined(this.armature) && (this.armature.removeDBEventListener(dragonBones.EventObject.COMPLETE, this._onArmatureAnimComplete, this), this.armature.removeDBEventListener(dragonBones.EventObject.LOOP_COMPLETE, this._onArmatureAnimLoopComplete, this))
        }, c.prototype._onArmatureAnimComplete = function(t) {
            this.armature.animation.play(r.BADDIE_ANIMS.FLY), this.armature.animation.timeScale = 1
        }, c.prototype._onArmatureAnimLoopComplete = function(t) {
            this.armature.animation.play(r.BADDIE_ANIMS.FLY), this.armature.animation.timeScale = 1
        }, c.prototype._startSplatter = function(t, e, i, s, a) {
            var o = this;
            this.scene.effectsMng.addEffect(t, e, i, s, a, 0, -80).bodySpr.scaleX = 0 == Phaser.Math.RND.between(0, 1) ? -s : s, this._canDoSplatter = !1, this.scene.time.delayedCall(500, function() {
                o._canDoSplatter = !0
            }, null, this)
        }, c.prototype.destroy = function() {}, Object.defineProperty(c.prototype, "depth", {
            get: function() {
                return h.isDefined(this.armature) ? this.armature.depth : this.bodySpr.depth
            },
            set: function(t) {
                this.bodySpr.depth = t, h.isDefined(this.armature) && (this.armature.depth = t)
            },
            enumerable: !0,
            configurable: !0
        }), c.prototype.setLookAtPoint = function(t, e) {
            h.isDefined(this.lookAtPoint) ? (this.lookAtPoint.x = t, this.lookAtPoint.y = e) : this.lookAtPoint = {
                x: t,
                y: e
            }
        }, c);

    function c(t) {
        var e = n.call(this, t) || this;
        return e.updateMode = r.UPDATE_MODEL_TYPE.NORMAL, e.armatureId = -1, e._movePathIndex = 0, e.turnRate = 1 * Phaser.Math.DEG_TO_RAD, e.velocityMagnitude = 200, e._velocities = new Phaser.Math.Vector2, e._missileModeDuration = -1, e.__halfPi = .5 * Math.PI, e._canDoSplatter = !0, e.bodySpr = t.physics.add.sprite(-1e3, -1e3, r.KEYS.GAME_TEX_SS1, r.KEYS.GREEN_SQUARE_64), e.body = e.bodySpr.body, e.bodySpr.visible = !1, e._movePath = null, e._pathOffsets = new Phaser.Geom.Point(0, 0), e._weaponSettings = {
            shootingType: r.SHOOTING_TYPE.NONE,
            angleInRadians: Phaser.Math.DegToRad(90),
            x: 0,
            y: 0,
            velocity: 0,
            barrelLength: 0,
            fireRate: 1e3,
            numShots: 0,
            startDelay: 0,
            bulletSettings: d.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID)
        }, e
    }
    e.Actor = _, e.SPLATTER_ANIM_KEYS = ["Splat1", "Splat2"]
}, , function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = (Object.defineProperty(a, "Instance", {
        get: function() {
            return this._instance || (this._instance = new this)
        },
        enumerable: !0,
        configurable: !0
    }), a.prototype.createPredefinedArmature = function(t, e, i) {
        return t.add.armature(e, i)
    }, a);

    function a() {}
    e.DBArmatureFactory = s
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(31),
        o = s(i(1)),
        n = (r.getBulletSettingsCopy = function(t) {
            var e = r._predefinedBulletSettings[t];
            return {
                frameKey: e.frameKey,
                animKey: e.animKey,
                exploKey: e.exploKey,
                scale: e.scale,
                hp: e.hp,
                hitBox: e.hitBox,
                origin: e.origin
            }
        }, r.prototype.addBullet = function(t, e) {
            var i;
            switch (0 < this._bullets.length ? ((i = this._bullets.pop()).applySettings(e.bulletSettings), i.bodySpr.setActive(!0), i.bodySpr.setVisible(!0), i.toBePooledBack = !1) : ((i = new a.Bullet(this._scene, e.bulletSettings)).bodySpr.depth = o.BASE_DEPTH.BULLET + this._bullets.length, console.log("new bullet needed ... faction:", t)), t) {
                case o.FACTION.PLAYER:
                    this._scene.playerBullets.push(i);
                    break;
                case o.FACTION.BADDIES:
                    this._scene.baddieBullets.push(i)
            }
            return i
        }, r.prototype.addTestBullet = function(t, e) {
            var i;
            switch (0 < this._bullets.length ? ((i = this._bullets.pop()).applySettings(e), i.bodySpr.setActive(!0), i.bodySpr.setVisible(!0), i.toBePooledBack = !1) : i = new a.Bullet(this._scene, e), t) {
                case o.FACTION.PLAYER:
                    this._scene.playerBullets.push(i);
                    break;
                case o.FACTION.BADDIES:
                    this._scene.baddieBullets.push(i)
            }
            return i
        }, r.prototype.shootBulletAtAngle = function(t, e) {
            this._bullet = this.addBullet(t, e), this._vec2.reset(), this._vec2.setToPolar(e.angleInRadians, e.barrelLength), this._velFromRotation = this._scene.physics.velocityFromRotation(e.angleInRadians, e.velocity), this._bullet.bodySpr.setVelocity(this._velFromRotation.x, this._velFromRotation.y), this._bullet.bodySpr.setRotation(e.angleInRadians), this._bullet.bodySpr.x = e.x + this._vec2.x, this._bullet.bodySpr.y = e.y + this._vec2.y
        }, r.prototype.poolBullet = function(t) {
            t.reset(), this._bullets.push(t)
        }, r.prototype.printDebug = function() {
            console.log("%cPools Debug Print", "background: #DD55FF;"), console.log("%c_bullets.length: " + this._bullets.length, "background: #ff9999;")
        }, r._predefinedBulletSettings = [{
            animKey: o.KEYS.ANIMS.ACID_BULLET,
            exploKey: o.KEYS.ANIMS.BADDIE_BULLET_EX,
            scale: 1,
            hp: 3,
            hitBox: new Phaser.Geom.Rectangle(32, 16, 22, 22),
            origin: new Phaser.Geom.Point(.6, .5)
        }, {
            animKey: o.KEYS.ANIMS.FLAME_BULLET,
            exploKey: o.KEYS.ANIMS.BADDIE_BULLET_EX,
            scale: 1,
            hp: 3,
            hitBox: new Phaser.Geom.Rectangle(36, 6, 18, 18),
            origin: new Phaser.Geom.Point(.72, .48)
        }], r);

    function r(t) {
        this.bulletsPoolSize = 120, this._velFromRotation = new Phaser.Math.Vector2, this._vec2 = new Phaser.Math.Vector2(0, 0), this._scene = t, this._bullets = [];
        for (var e = 0; e < this.bulletsPoolSize; e++) {
            var i = new a.Bullet(this._scene, {
                frameKey: o.KEYS.BULLET.BULLET1,
                exploKey: o.KEYS.ANIMS.EXPLO2,
                scale: 1,
                hp: 35,
                hitBox: new Phaser.Geom.Rectangle(15, 0, 18, 30)
            });
            i.bodySpr.setActive(!1), i.bodySpr.setVisible(!1), i.bodySpr.depth = o.BASE_DEPTH.BULLET + this._bullets.length, this._bullets.push(i)
        }
    }
    e.BulletsManager = n
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(4),
        a = (o.prototype.setXY = function(t, e) {
            this.bg.x = t - .5 * (this.bg.displayWidth - this._meterMaxW), this.meter.x = t, this.bg.y = e - .5 * (this.bg.displayHeight - this.meter.displayHeight), this.meter.y = e
        }, o.prototype.applyRatio = function(t) {
            this._ratio = t, this.bg.setScale(t, t), this.meter.setScale(this._percent * t, t), this._meterMaxW = Math.floor(this._meterOrigW * t)
        }, Object.defineProperty(o.prototype, "fixedOnCamera", {
            set: function(t) {
                1 == t ? (this.bg.setScrollFactor(0), this.meter.setScrollFactor(0)) : (this.bg.setScrollFactor(1), this.meter.setScrollFactor(1))
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(o.prototype, "depth", {
            set: function(t) {
                this.bg.depth = t, this.meter.depth = t + 1
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(o.prototype, "percent", {
            get: function() {
                return this._percent
            },
            set: function(t) {
                t < 0 && (t = 0), 1 < t && (t = 1), this._percent = t, s.TweenMax.to(this.meter, .25, {
                    scaleX: this._percent * this._ratio
                })
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(o.prototype, "alpha", {
            get: function() {
                return this.meter.alpha
            },
            set: function(t) {
                this.bg.alpha = t, this.meter.alpha = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(o.prototype, "visible", {
            get: function() {
                return this.bg.visible
            },
            set: function(t) {
                this.bg.visible = t, this.meter.visible = t
            },
            enumerable: !0,
            configurable: !0
        }), o.prototype.destroy = function() {
            this.bg.destroy(), this.meter.destroy(), s.TweenMax.killTweensOf(this.meter)
        }, o);

    function o(t, e, i, s, a, o) {
        this._percent = 1, this._meterOrigW = 120, this._meterMaxW = 120, this._ratio = 1, this.scene = t, this.bg = this.scene.add.image(0, 0, s, a), this.bg.setOrigin(0, 0), this.meter = t.add.image(0, 0, s, o), this.meter.setOrigin(0, 0), this.setXY(e, i), this._meterOrigW = this.meter.displayWidth, this._meterMaxW = this._meterOrigW
    }
    e.LifeBar = a
}, , function(t, e, i) {
    "use strict";
    var s = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        },
        a = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(2),
        n = s(i(37)),
        r = a(i(1)),
        h = (Object.defineProperty(l, "Instance", {
            get: function() {
                return o.isDefined(this._instance) || (this._instance = new this), this._instance
            },
            enumerable: !0,
            configurable: !0
        }), l.prototype.getPath = function(t) {
            return o.isDefined(this._paths) || this._initPaths(), this._paths[t]
        }, l.prototype._initPaths = function() {
            o.isDefined(this._paths) || (this._paths = []);
            var t = "M114.4-211c-52.6,52.6-52.6,137.9,0,190.5s52.6,137.9,0,190.5s-52.6,137.9,0,190.5s137.9,52.6,190.5,0s137.9-52.6,190.5,0s52.6,137.9,0,190.5s-52.6,137.9,0,190.5s52.6,137.9,0,190.5h-0.3c-52.6,52.6-52.6,137.9,0,190.5";
            this._paths.push(this._getPathPoints(t)), t = "M0-23.74V139.13C0,246.44,87,333.42,194.29,333.42s194.29,87,194.29,194.29S301.6,722,194.29,722,0,635,0,527.71,87,333.42,194.29,333.42s194.29-87,194.29-194.29-.83-163.7-.83-163.7", this._paths.push(this._getPathPoints(t))
        }, l.prototype._getPathPoints = function(t, e, i) {
            void 0 === e && (e = 3), void 0 === i && (i = !0);
            var s, a = [],
                o = 0,
                h = n.default.path.getTotalLength(t);
            if (0 == r.SETTINGS.IS_TOUCH_SCREEN && (e = 1), i)
                for (; o <= h; o += e)(s = n.default.path.getPointAtLength(t, o)).x = Math.round(s.x), s.y = Math.round(s.y), s.alpha = s.alpha, a.push(s);
            else
                for (; o <= h; o += e) s = n.default.path.getPointAtLength(t, o), a.push(s);
            return a
        }, l);

    function l() {}
    e.PathsManager = h
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(2),
        l = i(4),
        p = (a(d, n = Phaser.Physics.Arcade.Sprite), d.prototype.setTravelDirection = function(t, e, i) {
            void 0 === i && (i = void 0), this.velocityMagnitude = e, this.scene.physics.velocityFromRotation(t, e, this.velocity), h.isDefined(i) && (this.acceleration.x = i.x, this.acceleration.y = i.y)
        }, d.prototype.update = function(t) {
            this.velocity.x += this.acceleration.x * t / r.MED_TIME_FRAME, this.velocity.y += this.acceleration.y * t / r.MED_TIME_FRAME, this.x += this.velocity.x * t / r.MED_TIME_FRAME, this.y += this.velocity.y * t / r.MED_TIME_FRAME, this.x < 0 ? this.velocity.x = Math.abs(this.velocity.x) : this.x > r.worldDims.width && (this.velocity.x = -Math.abs(this.velocity.x)), this.y < 0 ? this.velocity.y = Math.abs(this.velocity.y) : this.y > r.worldDims.height && (this.velocity.y = -Math.abs(this.velocity.y))
        }, d.prototype.onPickedUp = function() {
            this.__alreadyPicked || (l.TweenMax.killTweensOf(this), this.toBePooledBack = !0, this.__alreadyPicked = !0)
        }, d.prototype.reset = function() {
            this.toBePooledBack = !1, this.__alreadyPicked = !1, this.velocity.set(0, 0), this.acceleration.set(0, 0), h.isDefined(this.body) && (this.setCollideWorldBounds(!1), this.setAcceleration(0, 0), this.setVelocity(0, 0), this.body.x = -1e3, this.body.y = -1e3), this.setX(-1e3), this.setY(-1e3), this.setScale(1), this.setDamping(!1), this.setVisible(!1), this.setActive(!1)
        }, d);

    function d(t, e, i, s, a, o) {
        var r = n.call(this, e, i, s, a, o) || this;
        return r.toBePooledBack = !1, r.velocityMagnitude = 300, r.hpHealAmount = 100, r.gameItemType = -1, r.__alreadyPicked = !1, r.scene.add.existing(r), r.scene.physics.add.existing(r), r.velocity = new Phaser.Math.Vector2, r.acceleration = new Phaser.Math.Vector2, r.gameItemType = t, r.reset(), r
    }
    e.GameItem = p, e.GAME_ITEM_TYPE = {
        STAR: 0,
        PLAYER_POW_UP: 1
    }
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
        return (s = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function(t, e) {
        function i() {
            this.constructor = t
        }
        s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o, n = i(3),
        r = i(2),
        h = (a(l, o = n.Actor), l.prototype.attachTo = function(t) {
            this.parentActor = t
        }, l.prototype.update = function(t) {
            this._point.x = this.parentActor.x + this.offsets.x, this._point.y = this.parentActor.y + this.offsets.y, Phaser.Math.RotateAround(this._point, this.parentActor.x, this.parentActor.y, this.parentActor.rotation), this.bodySpr.x = this._point.x, this.bodySpr.y = this._point.y, this.bodySpr.rotation = this.parentActor.rotation + this.rotationOffset, o.prototype.update.call(this, t)
        }, l.prototype.setWeaponReload = function(t, e, i, s, a, o) {
            this.bodySpr.active && (this.weaponReload.numShots = t, this.weaponReload.fireRate = e, this.weaponReload.barrelLength = 80, this.weaponReload.velocity = i, this.weaponReload.startDelay = s, this.weaponReload.bulletSettings = o, this.weaponReload.barrelLength = a)
        }, l.prototype.reloadWeapon = function(t) {
            void 0 === t && (t = !1), this.weaponSettings.numShots = this.weaponReload.numShots, this.weaponSettings.fireRate = this.weaponReload.fireRate, this.weaponSettings.barrelLength = this.weaponReload.barrelLength, this.weaponSettings.velocity = this.weaponReload.velocity, this.weaponSettings.startDelay = this.weaponReload.startDelay, this.weaponSettings.bulletSettings = this.weaponReload.bulletSettings, 1 == t && this.startWeapon()
        }, l);

    function l(t, e, i) {
        var s = o.call(this, t) || this;
        return s.parentActor = e, s.faction = s.parentActor.faction, r.isDefined(s.faction) || console.warn("Factionless Gun, this could lead to problems?!"), s.offsets = new Phaser.Geom.Point(i.x, i.y), s.rotationOffset = r.isDefined(i.angleInRadians) ? i.angleInRadians : 0, s.bodySpr.x = s.parentActor.x + s.offsets.x, s.bodySpr.y = s.parentActor.y + s.offsets.y, s._point = new Phaser.Geom.Point(0, 0), r.isDefined(i) ? (r.copyInto(s._weaponSettings, i), s.weaponReload = Phaser.Utils.Objects.Clone(i)) : s.weaponReload = Phaser.Utils.Objects.Clone(s.weaponSettings), s.reloadWeapon(), s
    }
    e.Gun = h
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(2),
        a = (o.prototype.countSquadronActor = function(t) {
            this.numActorsLeft--, this.lastActorLocation.x = t.bodySpr.x, this.lastActorLocation.y = t.bodySpr.y, this.numActorsLeft <= 0 && this._onSquadronCountComplete()
        }, o.prototype._onSquadronCountComplete = function() {
            s.isDefined(this._onSquadronComplete) && (s.isDefined(this._onSquadronCompleteScope) ? this._onSquadronComplete.call(this._onSquadronCompleteScope, this._onSquadronCompleteParams) : this._onSquadronComplete.call(this, this._onSquadronCompleteParams))
        }, o);

    function o(t, e, i, s, a) {
        void 0 === s && (s = void 0), void 0 === a && (a = void 0), this.squadronId = "none_set", this.numActors = -1, this.numActorsLeft = -1, this.squadronId = t, this.numActors = e, this.numActorsLeft = e, this.lastActorLocation = new Phaser.Geom.Point(-1e3, -1e3), this._onSquadronComplete = i, this._onSquadronCompleteParams = s, this._onSquadronCompleteScope = a
    }
    e.default = a
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(2),
        o = s(i(1)),
        n = (Object.defineProperty(r.prototype, "onDefeatedAlreadyCalled", {
            get: function() {
                return this._onDefeatedAlreadyCalled
            },
            set: function(t) {
                this._onDefeatedAlreadyCalled = t
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.update = function(t) {}, r.prototype.hit = function(t) {
            this.hitPoints -= t, this.hitPoints <= 0 && !this._onDefeatedAlreadyCalled && (this._onDefeatedAlreadyCalled = !0, this.onDefeated()), this.onHealthChanged()
        }, r.prototype.heal = function(t) {
            this.hitPoints += t, this.hitPoints > this.maxHitPoints && (this.hitPoints = this.maxHitPoints), this.onHealthChanged()
        }, r.prototype.onHealthChanged = function() {}, r.prototype.onDefeated = function() {
            a.isDefined, null != this.squadronId && o.squadronKeeper.countSquadronActor(this)
        }, Object.defineProperty(r.prototype, "x", {
            get: function() {
                return this.bodySpr.x
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "y", {
            get: function() {
                return this.bodySpr.y
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "rotation", {
            get: function() {
                return this.bodySpr.rotation
            },
            enumerable: !0,
            configurable: !0
        }), r.prototype.setXYA = function(t, e, i) {
            void 0 === i && (i = void 0), this.bodySpr.x = t, this.bodySpr.y = e, a.isDefined(i) && (this.bodySpr.angle = i)
        }, r.prototype.reset = function() {
            this.toBePooledBack = !1, this.isOverlapEnabled = !0, this.squadronId = void 0, this._onDefeatedAlreadyCalled = !1, a.isDefined(this.bodySpr) && (this.bodySpr.setActive(!1), this.bodySpr.x = -1e3, this.bodySpr.y = -1e3, this.bodySpr.body, this.bodySpr.setVelocity(0, 0), this.bodySpr.setScale(1))
        }, r);

    function r(t) {
        this.hitPoints = 3, this.maxHitPoints = 3, this.toBePooledBack = !1, this.isUniqueInstance = !1, this._onDefeatedAlreadyCalled = !1, this.scoreValue = 0, this.distance = 9999999, this.isOverlapEnabled = !0, this.isSmallTypeActor = !0, this.squadronId = void 0, this.scene = t, this.faction = o.FACTION.BADDIES
    }
    e.BaseActor = n
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(2),
        o = s(i(1)),
        n = i(4),
        r = (h.prototype.setPriceBt = function(t) {
            this.priceBt = t, this.cont.add(this.priceBt)
        }, h.prototype.setNameBt = function(t) {
            this.nameBt = t, this.cont.add(this.nameBt)
        }, h.prototype.setXY = function(t, e) {
            this._prevSegment = this.segments[0], a.isDefined(this._prevSegment) && (this._prevSegment.x = this._segmentConfig.offsets.x, this._prevSegment.y = this._segmentConfig.offsets.y);
            for (var i = 1; i < this.segments.length; i++) this._segment = this.segments[i], this._segment.x = this._prevSegment.x + this._segmentConfig.width, this._segment.y = this._prevSegment.y, this._prevSegment = this.segments[i];
            return this.cont.x = t, this.cont.y = e, this
        }, h.prototype._refreshXY = function() {
            this.setXY(this.cont.x, this.cont.y)
        }, h.prototype.setScale = function(t) {
            return this.cont.setScale(t, t), this
        }, h.prototype.addToContainer = function(t) {
            a.isDefined(t) ? t.add(this.cont) : console.warn("Cannot add a SegmentedBar to an undefined container. Call ignored!")
        }, h.prototype.setNumActiveSegments = function(t) {
            if (t < 0 && (t = 0), t > this._segmentConfig.maxNumSegments && (t = this._segmentConfig.maxNumSegments), this._numActiveSegments = t, this.segments.length < t) {
                for (var e = t - this.segments.length, i = 0; i < e; i++) this._segment = this.scene.add.sprite(0, 0, this._tex_key, this._segmentConfig.on), this._segment.setOrigin(0, 0), this.cont.add(this._segment), this.segments.push(this._segment);
                this._refreshXY()
            }
            for (i = 0; i < this.segments.length; i++) this._segment = this.segments[i], i < this._numActiveSegments ? this._segment.setFrame(this._segmentConfig.on) : this._segment.setFrame(this._segmentConfig.off);
            return this
        }, h.prototype.setMaxNumActiveSegments = function(t, e) {
            return void 0 === e && (e = !0), this._segmentConfig.maxNumSegments = t, 1 == e ? this.setNumActiveSegments(t) : this.setNumActiveSegments(this._numActiveSegments), this
        }, h.prototype.startUpgAvailableAnim = function() {
            this.upgAvalableImg.x = this._upgAvalableOffsets.x, this.upgAvalableImg.y = this._upgAvalableOffsets.y, this.upgAvalableImg.setScale(1), this.upgAvalableImg.alpha = 1, n.TweenMax.to(this.upgAvalableImg, .75, {
                y: this.upgAvalableImg.y - 10,
                scaleX: 1.2,
                scaleY: 1.2,
                yoyo: !0,
                repeat: -1,
                ease: n.Power1.easeInOut
            })
        }, h.prototype.stopUpgAvailableAnim = function() {
            this.upgAvalableImg.x = this._upgAvalableOffsets.x, this.upgAvalableImg.y = this._upgAvalableOffsets.y, this.upgAvalableImg.setScale(1), this.upgAvalableImg.alpha = 1, n.TweenMax.killTweensOf(this.upgAvalableImg)
        }, Object.defineProperty(h.prototype, "numActiveSegments", {
            get: function() {
                return this._numActiveSegments
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(h.prototype, "visible", {
            get: function() {
                return this.cont.visible
            },
            set: function(t) {
                this.cont.visible = t
            },
            enumerable: !0,
            configurable: !0
        }), h);

    function h(t, e, i, s, n, r, h) {
        this._numActiveSegments = 0, this._tex_key = s, this._segmentConfig = h, this.scene = t, this.cont = this.scene.add.container(e, i), this.bgImg = this.scene.add.sprite(0, 0, s, r), this.bgImg.setOrigin(0, 0), this.bgImg.setInteractive({
            useHandCursor: !0
        }), this.cont.add(this.bgImg), a.isDefined(n) && (this.img = this.scene.add.sprite(0, 0, s, n).setOrigin(.5, .5), this.img.x = 68, this.img.y = 92, this.cont.add(this.img)), this.segments = [], this._numActiveSegments = h.maxNumSegments;
        for (var l = 0; l < this._numActiveSegments; l++) this._segment = this.scene.add.sprite(0, 0, s, h.on), this._segment.setOrigin(0, 0), this.cont.add(this._segment), this.segments.push(this._segment);
        this._upgAvalableOffsets = new Phaser.Geom.Point(320, 22), this.upgAvalableImg = this.scene.add.sprite(this._upgAvalableOffsets.x, this._upgAvalableOffsets.y, o.KEYS.MENUS_TEX_SS2, o.KEYS.UI.UPGRADE_AVAILABLE), this.upgAvalableImg.setOrigin(0, 0).setVisible(!1), this.cont.add(this.upgAvalableImg), this.setXY(e, i)
    }
    e.SegmentedBar = r
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = i(16),
        n = i(2),
        r = (h.prototype.checkStoredUpdateLevels = function() {
            var t = a.getStoredData();
            if (n.isDefined(t) && n.isDefined(t.upgrade_levels)) {
                var i = t.upgrade_levels;
                this.playerHpUpgrade.setLevel(i[e.UPGRADE_INDEX.PLAYER_HP]), this.playerGunsUpgrade.setLevel(i[e.UPGRADE_INDEX.PLAYER_GUNS]), this.playerSpeedUpgrade.setLevel(i[e.UPGRADE_INDEX.PLAYER_SPEED]), this.playerMagnetUpgrade.setLevel(i[e.UPGRADE_INDEX.PLAYER_MAGNET]), this.botsNumUpgrade.setLevel(i[e.UPGRADE_INDEX.PLAYER_BOTS_NUM]), this.botsStatsUpgrade.setLevel(i[e.UPGRADE_INDEX.PLAYER_BOTS_STATS]), this.bigLazorUpgrade.setLevel(i[e.UPGRADE_INDEX.BIG_LAZOR]), this.missilesNumUpgrade.setLevel(i[e.UPGRADE_INDEX.MISSILES_NUM]), this.missilesStatsUpgrade.setLevel(i[e.UPGRADE_INDEX.MISSILES_STATS]), this.dropChanceUpgrade.setLevel(i[e.UPGRADE_INDEX.DROP_CHANCES])
            }
        }, h.prototype.getUpgradeLevels = function() {
            var t = [];
            return t[e.UPGRADE_INDEX.PLAYER_HP] = this.playerHpUpgrade.level, t[e.UPGRADE_INDEX.PLAYER_GUNS] = this.playerGunsUpgrade.level, t[e.UPGRADE_INDEX.PLAYER_SPEED] = this.playerSpeedUpgrade.level, t[e.UPGRADE_INDEX.PLAYER_MAGNET] = this.playerMagnetUpgrade.level, t[e.UPGRADE_INDEX.PLAYER_BOTS_NUM] = this.botsNumUpgrade.level, t[e.UPGRADE_INDEX.PLAYER_BOTS_STATS] = this.botsStatsUpgrade.level, t[e.UPGRADE_INDEX.BIG_LAZOR] = this.bigLazorUpgrade.level, t[e.UPGRADE_INDEX.MISSILES_NUM] = this.missilesNumUpgrade.level, t[e.UPGRADE_INDEX.MISSILES_STATS] = this.missilesStatsUpgrade.level, t[e.UPGRADE_INDEX.DROP_CHANCES] = this.dropChanceUpgrade.level, t
        }, h);

    function h() {
        this.playerHpUpgrade = new o.UpgradeInfo(0, 7, "Sturdier, healthier,\n'die hard-ier'! An\nextra life point to\nfurther kick\nshmonster behinds,\nfor only @PH[cost] points!", [0, 0, 0, 0, 500, 750, 1500, 2500]), this.playerHpUpgrade.setLevel(3), this.playerGunsUpgrade = new o.UpgradeInfo(0, 8, "One trully can't get\nenough of glorifying\npew-pews!\nThe sweetest of\nupgrades! Increases\nthe damage per\nsecond from @PH[prev-gain] to\n@PH[gain] for @PH[cost] points!", [0, 250, 350, 500, 700, 1250, 2e3, 2500, 3e3], [150, 200, 250, 300, 350, 400, 475, 550]), this.botsNumUpgrade = new o.UpgradeInfo(1, 3, "Sturdy little ai\ncontrolled bots\nthat may one day\ntake the fight to the\nspace threat by\nthemselves!\nUnlock a new one\nfor @PH[cost] points!", [0, 0, 2e3, 4e3]), this.botsStatsUpgrade = new o.UpgradeInfo(0, 5, "The little guys\nalso pack a punch!\nUpgrade the bots'\nguns power and\nattack rate\nfor @PH[cost] points.", [0, 500, 750, 1e3, 2e3, 3e3]), this.bigLazorUpgrade = new o.UpgradeInfo(0, 5, "Increase the capacity\nof big lazors we can\nstore by 1 and\nthe damage per\nsecond from\n@PH[prev-gain] to @PH[gain],\nfor @PH[cost] points!", [0, 0, 0, 500, 1250, 2500], [300, 300, 400, 550, 750, 1e3]), this.bigLazorUpgrade.setLevel(2), this.missilesNumUpgrade = new o.UpgradeInfo(0, 3, "Shoot an extra\nmissile for @PH[cost]\npoints. Missiles\npierce through and\ntake out enemy\nbullets too!", [0, 0, 1e3, 3e3]), this.missilesNumUpgrade.setLevel(1), this.missilesStatsUpgrade = new o.UpgradeInfo(0, 5, "Improves the\nperformance of the\nmissles through\nbetter aerodynamics,\ndeployment times,\nand hitPoints\nfor @PH[cost] points.", [0, 250, 500, 750, 1500, 2500]), this.playerSpeedUpgrade = new o.UpgradeInfo(0, 5, "Lightning Mc'Snap!\nBecause who\ndoesn't love a\nfast space craft?\nIncrease the ship's\nspeed for\n@PH[cost] points.", [0, 100, 150, 250, 450, 1e3]), this.playerMagnetUpgrade = new o.UpgradeInfo(0, 5, "Grab those shiny\nstars with even\nmore ease!\nRange increased\n from @PH[prev-gain] to @PH[gain]\nfor @PH[cost] points.", [0, 100, 200, 400, 600, 800], [90, 100, 110, 120, 130, 140]), this.dropChanceUpgrade = new o.UpgradeInfo(0, 5, "Increase the amount\nof research material\nenemies drop (stars),\nmaking it easier to\nreap the rewards\nand buy new upgrades\nfor @PH[cost] points.", [0, 1e3, 1500, 2250, 3250, 4500])
    }
    e.Upgrades = r, e.UPGRADE_INDEX = {
        PLAYER_HP: 0,
        PLAYER_GUNS: 1,
        PLAYER_SPEED: 2,
        PLAYER_MAGNET: 3,
        PLAYER_BOTS_NUM: 4,
        PLAYER_BOTS_STATS: 5,
        BIG_LAZOR: 6,
        MISSILES_NUM: 7,
        MISSILES_STATS: 8,
        DROP_CHANCES: 9
    }
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(2),
        a = (o.prototype.setLevel = function(t) {
            t < 0 && (t = 0), t > this.maxLevel && (t = this.maxLevel), this.level = t, s.isDefined(this.gains) ? this.amount = this.gains[this.level] : this.amount = this.level
        }, o.prototype.upgrade = function() {
            this.canBeUpgraded() && this.setLevel(this.level + 1)
        }, o.prototype.canBeUpgraded = function() {
            return this.level < this.maxLevel
        }, o.prototype.getMessage = function() {
            var t = this.message_template.replace("@PH[cost]", "" + this.getCost());
            return t = (t = t.replace("@PH[count]", "" + this.amount)).replace("@PH[level]", "" + this.level), s.isDefined(this.gains) && (t = t.replace("@PH[gain]", "" + this.gains[this.level + 1]), -1 < this.level && (t = t.replace("@PH[prev-gain]", "" + this.gains[this.level]))), t
        }, o.prototype.getCost = function() {
            return this.costs[this.level + 1]
        }, o.prototype.getCostString = function() {
            return console.log("this.level", this.level, "this.maxLevel", this.maxLevel), this.level < this.maxLevel ? "" + this.getCost() : "MAX"
        }, o.prototype.getNextAmount = function() {
            return s.isDefined(this.gains) ? this.gains[this.level + 1] : this.level + 1
        }, o.prototype.isMaxed = function() {
            return this.level >= this.maxLevel
        }, o);

    function o(t, e, i, s, a) {
        void 0 === a && (a = void 0), this.amount = 0, this.level = 0, this.maxLevel = 0, this.maxLevel = e, this.costs = s, this.message_template = i, this.gains = a, this.setLevel(t)
    }
    e.UpgradeInfo = a
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
        return (s = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            })(t, e)
    }, function(t, e) {
        function i() {
            this.constructor = t
        }
        s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
    });
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o, n = (a(r, o = Phaser.Events.EventEmitter), r.prototype.onToggled = function() {
        this._onImg.disableInteractive(), this._offImg.disableInteractive(), this._onImg.visible = !this._onImg.visible, this._offImg.visible = !this._offImg.visible, this._onImg.visible ? (this._onImg.setInteractive(), this._isOn = !0) : (this._offImg.setInteractive(), this._isOn = !1), this.emit("toggled")
    }, r.prototype.setState = function(t) {
        this._isOn = t, this.visible && (1 == this._isOn ? (this._onImg.visible = !0, this._onImg.setInteractive(), this._offImg.visible = !1) : (this._onImg.visible = !1, this._offImg.visible = !0, this._offImg.setInteractive()))
    }, r.prototype.refreshState = function() {
        this.setState(this._isOn)
    }, r.prototype.isOn = function() {
        return this._onImg.visible
    }, Object.defineProperty(r.prototype, "onImg", {
        get: function() {
            return this._onImg
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r.prototype, "offImg", {
        get: function() {
            return this._offImg
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r.prototype, "displayWidth", {
        get: function() {
            return this._onImg.displayWidth
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r.prototype, "displayHeight", {
        get: function() {
            return this._onImg.displayHeight
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r.prototype, "x", {
        get: function() {
            return this._onImg.x
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r.prototype, "y", {
        get: function() {
            return this._onImg.y
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r.prototype, "depth", {
        set: function(t) {
            this._onImg.depth = t, this._offImg.depth = t
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(r.prototype, "visible", {
        get: function() {
            return this._onImg.visible || this._offImg.visible
        },
        set: function(t) {
            1 == t ? (this._onImg.visible = !0, this._offImg.visible = !0, this.setState(this._isOn)) : (this._onImg.visible = !1, this._offImg.visible = !1)
        },
        enumerable: !0,
        configurable: !0
    }), r.prototype.setOrigin = function(t, e) {
        this.onImg.setOrigin(t, e), this.offImg.setOrigin(t, e)
    }, r.prototype.setXY = function(t, e) {
        this._onImg.setX(t), this._offImg.setX(t), this._onImg.setY(e), this._offImg.setY(e)
    }, r.prototype.setScale = function(t) {
        this._onImg.setScale(t), this._offImg.setScale(t)
    }, r);

    function r(t, e) {
        var i = o.call(this) || this;
        return i._isOn = !0, i._onImg = t, i._offImg = e, i._onImg.setInteractive({
            useHandCursor: !0
        }), i._onImg.on("pointerup", i.onToggled, i), i._onImg.visible = !0, i._offImg.setInteractive({
            useHandCursor: !0
        }), i._offImg.on("pointerup", i.onToggled, i), i._offImg.visible = !1, i._offImg.disableInteractive(), i._isOn = !0, i
    }
    e.ToggleButton = n
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(19),
        o = i(24),
        n = i(25),
        r = i(26),
        h = i(66),
        l = i(72),
        p = i(73),
        d = s(i(1)),
        _ = i(8),
        c = (S.prototype.initGA = function() {
            _.gameanalytics.GameAnalytics.setEnabledInfoLog(!0), _.gameanalytics.GameAnalytics.setEnabledVerboseLog(!0), _.gameanalytics.GameAnalytics.configureBuild("0.0.70-beta"), _.gameanalytics.GameAnalytics.configureAvailableResourceCurrencies(["stars"]), _.gameanalytics.GameAnalytics.configureAvailableResourceItemTypes(["shipUpgrade", "boost", "bounty"]), _.gameanalytics.GameAnalytics.initialize("714a5c3b51182ef1e84b1905ada864aa", "efb8147012b8d0b476a5918042451efea01581a4")
        }, S);

    function S() {
        var t = {
            type: Phaser.AUTO,
            width: window.innerWidth,
            height: window.innerHeight,
            parent: document.getElementById("gameArea"),
            physics: {
                default: "arcade",
                arcade: {
                    fps: 60,
                    gravity: {
                        y: 0
                    }
                }
            },
            render: {
                clearBeforeRender: !1,
                transparent: !1,
                roundPixels: !1
            },
            disableContextMenu: !1,
            plugins: {
                scene: [{
                    key: "DragonBones",
                    plugin: dragonBones.phaser.plugin.DragonBonesScenePlugin,
                    mapping: "dragonbone"
                }]
            },
            scene: [o.PreloadScene, a.LoadScene, n.TitleScene, l.StoryIntro, r.GameScene, h.GameUi, p.EndGameScene]
        };
        new Phaser.Game(t), window.addEventListener("resize", function(t) {
            d.onWindowResize(window.innerWidth, window.innerHeight)
        }, !1), d.GAME_ANALYTHICS_ENABLED && (this.initGA(), d.isDevSupportEnabled() ? _.gameanalytics.GameAnalytics.addDesignEvent("allowsAds", 1) : _.gameanalytics.GameAnalytics.addDesignEvent("allowsAds", 0)), d.isDevSupportEnabled() ? console.log("User cares about game developers support ♥!") : console.log("User doens't care about game developers support ...")
    }
    e.Shmupnage = c;
    for (var u = ["http://cptest.xp3.biz", "http://192.168.2.15", "http://192.168.2.14", "http://192.168.2.13", "http://192.168.2.12", "http://localhost", "http://127.0.0.1", "localhost"], g = window.location != window.parent.location ? document.referrer : document.location.href, y = 0; y < u.length && !(-1 < g.indexOf(u[y])); y++);
    window.onload = function() {
        new c
    }
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = i(4),
        h = i(2),
        l = o(i(1)),
        p = (a(d, n = Phaser.Scene), d.prototype.init = function() {
            this._greenBg = this.add.image(0, 0, l.KEYS.GREEN_BG).setOrigin(0, 0), this.cam = this.cameras.main, this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight;
            var t = Math.round(.88 * this.screenWidth),
                e = Math.round(.02 * this.screenHeight),
                i = this.make.graphics();
            i.fillStyle(13381648), i.fillRect(0, 0, t, e), i.generateTexture("load_bar_bg", t, e), i.destroy(), this.loadBarBg = this.add.image(.5 * l.worldDims.width, 680, "load_bar_bg");
            var s = Math.round(.86 * this.screenWidth),
                a = Math.round(.01 * this.screenHeight),
                o = this.make.graphics();
            o.fillStyle(15122215), o.fillRect(0, 0, s, a), o.generateTexture("load_bar", s, a), o.destroy(), this.loadBar = this.add.image(.5 * l.worldDims.width, 680, "load_bar"), this.load.on("progress", this.onLoadProgress, this), this.fit()
        }, d.prototype.preload = function() {
            this.load.atlas(l.KEYS.GAME_TEX_SS1, "./assets/img/Ex4ceBeginningsSS2.png", "./assets/img/Ex4ceBeginningsSS2.json"), this.load.atlas(l.KEYS.MENUS_TEX_SS2, "./assets/img/ScreensAndUiSS.png", "./assets/img/ScreensAndUiSS.json"), this.load.xml(l.FONTS.SPACE_RANGER_BI + "_xml", "./assets/fonts/SpaceRanger.xml"), this.loadDragonBones(), this.load.audio("Sfx", ["assets/sfx/Ex4ceSfxSprite.mp3"]), this.load.audio("LaserLoopSfx", ["assets/sfx/SfxPlayerLaserLoop3.mp3"]), this.load.audio("ExplosSfx", ["assets/sfx/ExplosSfxSprite.mp3"]), this.load.audio("SmAndMdSfx", ["assets/sfx/SmAndMdEnemySplatSfxSprite.mp3"]), this.load.audio("LgAndBossSfx", ["assets/sfx/LargeAndBossEnemySplatsSprite.mp3"]), this.load.audio("BigLazorsSfx", ["assets/sfx/BigLazorsSfxSprite.mp3"]), this.load.audio(l.KEYS.GAME_MUSIC, ["assets/music/EX4CE_Music.mp3"]), this.load.video("agVideo", "./assets/img/648x432_v1.m4v")
        }, d.prototype.loadDragonBones = function() {
            this.load.dragonbone(l.DB_FILE_NAME, "./assets/dragonbones/" + l.DRAGONBONES.TEX_IMG, "./assets/dragonbones/" + l.DRAGONBONES.TEX_JSON, "./assets/dragonbones/" + l.DRAGONBONES.SKE_JSON, void 0, void 0)
        }, d.prototype.create = function() {
            console.log("this.sys.game.device.os.pixelRatio", this.sys.game.device.os.pixelRatio), console.log("this.sys.game.device.fullscreen.available", this.sys.game.device.fullscreen.available), console.log("this.sys.game.device.features.webGL", this.sys.game.device.features.webGL), console.log("this.sys.game.device.features.canvas", this.sys.game.device.features.canvas), console.log("this.sys.game.device.browser.chrome", this.sys.game.device.browser.chrome), console.log("this.sys.game.device.browser.firefox", this.sys.game.device.browser.firefox), console.log("this.sys.game.device.browser.safari", this.sys.game.device.browser.safari), console.log("this.sys.game.device.browser.trident", this.sys.game.device.browser.trident), console.log("this.sys.game.device.browser.ie", this.sys.game.device.browser.ie), console.log("this.sys.game.renderer.width", this.sys.game.renderer.width), console.log("this.sys.game.renderer.height", this.sys.game.renderer.height), Phaser.GameObjects.BitmapText.ParseFromAtlas(this, l.FONTS.SPACE_RANGER_BI, l.KEYS.GAME_TEX_SS1, l.FONTS.SPACE_RANGER_FRAME, l.FONTS.SPACE_RANGER_BI + "_xml"), this.sys.game.device.os.desktop ? (l.SETTINGS.IS_TOUCH_SCREEN = !1, l.setNumConcurentSfxSprites(16), l.setNumConcurentSmMdSfxSprites(12), l.setNumConcurentLgBossSfxSprites(4), l.setNumConcurentBigLazorSfxSprites(2), l.SETTINGS.SCREEN_OFFSET_Y = 10, l.SETTINGS.SKIP_TEXT = l.SETTINGS.SKIP_TEXT_DESKTOP) : (l.SETTINGS.IS_TOUCH_SCREEN = !0, l.SETTINGS.PLAYER_FOLLOWS_POINTER = !0, l.setNumConcurentSfxSprites(4), l.setNumConcurentSmMdSfxSprites(2), l.setNumConcurentLgBossSfxSprites(1), l.setNumConcurentBigLazorSfxSprites(1), l.SETTINGS.SKIP_TEXT = l.SETTINGS.SKIP_TEXT_TOUCH_SCREEN, l.SETTINGS.SCREEN_OFFSET_Y = 60), this.tapScreenPromptBT = this.add.bitmapText(0, 0, l.FONTS.SPACE_RANGER_BI, "[     CLICK To Begin     ]", 38), l.SETTINGS.IS_TOUCH_SCREEN ? this.tapScreenPromptBT.text = "Loading Complete!\nTouch To Start" : this.tapScreenPromptBT.text = "Loading Complete!\nClick To Start", this.tapScreenPromptBT.setLeftAlign(), this.tapScreenPromptBT.setOrigin(0, 0), this.tapScreenPromptBT.visible = !1, this.tapScreenPromptBT.setInteractive({
                useHandCursor: !0
            }), this.tapScreenPromptBT.once("pointerup", this._onScenePointerUp, this), this.tapScreenPromptBT.visible = !0, this.tapScreenPromptBT.alpha = 0, r.TweenMax.to(this.tapScreenPromptBT, 1, {
                alpha: 1
            }), this.screenWidth = this.game.renderer.width, this.screenHeight = this.game.renderer.height, this.enableResizeListener(), this.fit();
            for (var t = [], e = 0; e < l.numConcurentSfxSprites; e++) t.push(this.createSfxSprite());
            var i = [];
            for (e = 0; e < l.numConcurentSmMdSfxSprites; e++) i.push(this.createSmallAndMediumSfxSprite());
            var s = [];
            for (e = 0; e < l.numConcurentLgBossSfxSprites; e++) s.push(this.createLargeAndBossSfxSprite());
            var a = [];
            for (e = 0; e < l.numConcurentExplosSfxSprites; e++) a.push(this.createExplosSfxSprite());
            var o = [];
            for (e = 0; e < l.numConcurentExplosSfxSprites; e++) o.push(this.createBigLazorsSfxSprite());
            l.setSfxSprites(t), l.setSmMdSfxSprites(i), l.setLgBossSfxSprites(s), l.setExplosSfxSprites(a), l.setBigLazorSfxSprites(o), l.addMusicSound(this.sound.add(l.KEYS.GAME_MUSIC, {
                loop: !0,
                volume: l.MENU_MUSIC_VOLUME
            })), l.setLastSceneId(l.KEYS.SCENE.LOAD), this.input.once("pointerup", this._onScenePointerUp, this), this.onResize()
        }, d.prototype._onScenePointerUp = function(t) {
            var e = {
                message: "Load Scene Complete!",
                fromScene: l.KEYS.SCENE.LOAD
            };
            this.tapScreenPromptBT.visible = !1, this.time.delayedCall(50, function() {
                this.disableResizeListener(), this.scene.start(l.KEYS.SCENE.TITLE, e)
            }, null, this)
        }, d.prototype.createSfxSprite = function() {
            for (var t = l.sfxSpriteMarkers, e = this.sound.add("Sfx"), i = 0; i < t.length; i++) {
                var s = t[i];
                e.addMarker(s)
            }
            return e
        }, d.prototype.createSmallAndMediumSfxSprite = function() {
            for (var t = l.smallAndMediumEnemiesSpriteMarkers, e = this.sound.add("SmAndMdSfx"), i = 0; i < t.length; i++) {
                var s = t[i];
                e.addMarker(s)
            }
            return e
        }, d.prototype.createLargeAndBossSfxSprite = function() {
            for (var t = l.largeAndBossEnemiesSpriteMarkers, e = this.sound.add("LgAndBossSfx"), i = 0; i < t.length; i++) {
                var s = t[i];
                e.addMarker(s)
            }
            return e
        }, d.prototype.createExplosSfxSprite = function() {
            for (var t = l.explosSfxSpriteMarkers, e = this.sound.add("ExplosSfx"), i = 0; i < t.length; i++) {
                var s = t[i];
                e.addMarker(s)
            }
            return e
        }, d.prototype.createBigLazorsSfxSprite = function() {
            for (var t = l.bigLazorsSfxSpriteMarkers, e = this.sound.add("BigLazorsSfx"), i = 0; i < t.length; i++) {
                var s = t[i];
                e.addMarker(s)
            }
            return e
        }, d.prototype.onLoadProgress = function(t) {
            this.lastLoadPercent = t, this.fit()
        }, d.prototype.enableResizeListener = function() {
            l.setCurrentScene(this)
        }, d.prototype.disableResizeListener = function() {
            l.setCurrentScene(null)
        }, d.prototype.onResize = function() {
            this.fit()
        }, d.prototype.fit = function() {
            this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight;
            var t = this.screenHeight / l.worldDims.width * .5,
                e = this.screenHeight / l.worldDims.height,
                i = Math.floor(Math.min(l.worldDims.width * e, window.innerWidth)),
                s = window.innerHeight;
            this._greenBg.setScale(1);
            var a = Math.max(i / this._greenBg.displayWidth, this.cam.height / this._greenBg.displayHeight);
            this._greenBg.setScale(a), this._greenBg.x = Math.floor(.5 * (i - this._greenBg.displayWidth)), this._greenBg.y = Math.floor(.5 * (s - this._greenBg.displayHeight)), this.cameras.resize(i, s);
            var o = document.getElementById("gameArea");
            o.style.width = i + "px";
            var n = Math.floor(.5 * (window.innerWidth - i));
            o.style.marginLeft = n + "px", h.isDefined(this.tapScreenPromptBT) && (this.tapScreenPromptBT.setScale(1), t = s / this.tapScreenPromptBT.height * .1, this.tapScreenPromptBT.setScale(t), this.tapScreenPromptBT.y = .7 * s, this.tapScreenPromptBT.width > .8 * i && (this.tapScreenPromptBT.setScale(1), t = i / this.tapScreenPromptBT.width * .8, this.tapScreenPromptBT.setScale(t), this.tapScreenPromptBT.y = .7 * s), this.tapScreenPromptBT.x = .5 * (i - this.tapScreenPromptBT.width)), this.loadBarBg.displayWidth = Math.round(.88 * i), this.loadBarBg.displayHeight = Math.round(.02 * s), this.loadBarBg.x = .5 * i, this.loadBarBg.y = .9 * s - .01 * s, this.loadBar.displayWidth = Math.round(.86 * i * this.lastLoadPercent), this.loadBar.displayHeight = Math.round(.01 * s), this.loadBar.x = .5 * i, this.loadBar.y = .9 * s - .01 * s
        }, d);

    function d() {
        var t = n.call(this, {
            key: l.KEYS.SCENE.LOAD
        }) || this;
        return t.lastLoadPercent = 0, t.screenWidth = 800, t.screenHeight = 600, t
    }
    e.LoadScene = p
}, , , function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = (n.prototype.rollStar = function() {
            return this._rndVal = Phaser.Math.RND.realInRange(0, 1), this._rndVal < this.starChance
        }, n.prototype.roll2Star = function() {
            return this._rndVal = Phaser.Math.RND.realInRange(0, 1), this._rndVal < this.star2Chance
        }, n.prototype.roll5Star = function() {
            return this._rndVal = Phaser.Math.RND.realInRange(0, 1), this._rndVal < this.star5Chance
        }, n.prototype.roll10Star = function() {
            return this._rndVal = Phaser.Math.RND.realInRange(0, 1), this._rndVal < this.star10Chance
        }, n.prototype.roll20Star = function() {
            return this._rndVal = Phaser.Math.RND.realInRange(0, 1), this._rndVal < this.star20Chance
        }, n.prototype.rollDoublePowUpChance = function() {
            return this._rndVal = Phaser.Math.RND.realInRange(0, 1), this._rndVal < this.doublePowUpDropChance
        }, n.prototype.pickRandPowUp = function() {
            if (this._powUpIds.length < 1)
                for (var t = 0; t < 4; t++) this._powUpIds.push(a.KEYS.GAME_ITEM.BIG_LAZOR), this._powUpIds.push(a.KEYS.GAME_ITEM.MAIN_GUN), this._powUpIds.push(a.KEYS.GAME_ITEM.HEALTH), this._powUpIds.push(a.KEYS.GAME_ITEM.ENERGY);
            return Phaser.Math.RND.shuffle(this._powUpIds), this._powUpIds.pop()
        }, n.prototype.rollStars = function(t) {
            this._rndVal = Phaser.Math.RND.realInRange(0, 1), t[0] = this._rndVal < this.starChance, this._rndVal = Phaser.Math.RND.realInRange(0, 1), t[1] = this._rndVal < this.star2Chance, this._rndVal = Phaser.Math.RND.realInRange(0, 1), t[2] = this._rndVal < this.star5Chance, this._rndVal = Phaser.Math.RND.realInRange(0, 1), t[3] = this._rndVal < this.star10Chance
        }, n.prototype.setUpgradeLevel = function(t) {
            switch (console.log("new upgrades level:", t), t) {
                case 0:
                    this.starChance = .125, this.star2Chance = .1, this.star5Chance = .025, this.star10Chance = .02, this.star20Chance = .002, this.doublePowUpDropChance = .25;
                    break;
                case 1:
                    this.starChance = .5, this.star2Chance = .125, this.star5Chance = .04, this.star10Chance = .04, this.star20Chance = .004, this.doublePowUpDropChance = .32;
                    break;
                case 2:
                    this.starChance = .2, this.star2Chance = .15, this.star5Chance = .06, this.star10Chance = .06, this.star20Chance = .008, this.doublePowUpDropChance = .35;
                    break;
                case 3:
                    this.starChance = .25, this.star2Chance = .175, this.star5Chance = .08, this.star10Chance = .075, this.star20Chance = .012, this.doublePowUpDropChance = .4;
                    break;
                case 4:
                    this.starChance = .3, this.star2Chance = .2, this.star5Chance = .1, this.star10Chance = .1, this.star20Chance = .02, this.doublePowUpDropChance = .5;
                    break;
                case 5:
                    this.starChance = .35, this.star2Chance = .25, this.star5Chance = .15, this.star10Chance = .15, this.star20Chance = .05, this.doublePowUpDropChance = .65;
                    break;
                default:
                    this.setUpgradeLevel(0)
            }
        }, n);

    function n() {
        this.level = 0, this.maxLevel = 5, this.starChance = 0, this.star2Chance = 0, this.star5Chance = 0, this.star10Chance = 0, this.star20Chance = 0, this.doublePowUpDropChance = 0, this._rndVal = -1, this.setUpgradeLevel(0), this._powUpIds = []
    }
    e.default = o
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(2),
        a = (o.prototype.addSquadronInfo = function(t) {
            s.isDefined(this._squadrons[t.squadronId]) && console.warn("SquadronInfo", this._squadrons[t.squadronId], "already exists for id", t.squadronId, ", it will be replaced by the new squadron info:", t), this._squadrons[t.squadronId] = t
        }, o.prototype.removeSquadronInfo = function(t) {
            s.isDefined(this._squadrons[t.squadronId]) ? delete this._squadrons[t.squadronId] : console.warn("SquadrinInfo", this._squadrons[t.squadronId], "is not tracked. Nothing to remove!")
        }, o.prototype.countSquadronActor = function(t) {
            s.isDefined(this._squadrons[t.squadronId]) && this._squadrons[t.squadronId].countSquadronActor(t)
        }, o);

    function o() {
        this._squadrons = {}
    }
    e.default = a
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = (a(l, n = Phaser.Scene), l.prototype.init = function() {}, l.prototype.preload = function() {
            this.load.image(r.KEYS.GREEN_BG, "./assets/img/GreenBg.png")
        }, l.prototype.create = function() {
            var t = {
                message: "Preload Scene Complete!",
                fromScene: r.KEYS.SCENE.PRELOAD
            };
            r.setLastSceneId(r.KEYS.SCENE.PRELOAD), this.scene.start(r.KEYS.SCENE.LOAD, t)
        }, l);

    function l() {
        return n.call(this, {
            key: r.KEYS.SCENE.PRELOAD
        }) || this
    }
    e.PreloadScene = h
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(17),
        l = i(2),
        p = (a(d, n = Phaser.Scene), d.prototype.init = function() {}, d.prototype.create = function() {
            this._greenBg = this.add.image(0, 0, r.KEYS.GREEN_BG).setOrigin(0, 0), this.cont = this.add.container(0, 0), this.cam = this.cameras.main, this._bg = this.add.image(0, 0, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.TITLE_BG), this._bg.setOrigin(0, 0), this._sfxToggleBtn = new h.ToggleButton(this.add.image(38, 162, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.SFX_ON), this.add.image(38, 162, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.SFX_OFF)), this._sfxToggleBtn.setOrigin(0, 0), this._sfxToggleBtn.setState(r.isSoundOn), this._sfxToggleBtn.on("toggled", this.onSfxToggle, this), this._sfxToggleBtn.depth = 100, this._musicToggleBtn = new h.ToggleButton(this.add.image(306, 162, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.MUSIC_ON), this.add.image(306, 162, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.MUSIC_OFF)), this._musicToggleBtn.setOrigin(0, 0), this._musicToggleBtn.setState(r.isMusicOn), this._musicToggleBtn.on("toggled", this.onMusicToggle, this), this._musicToggleBtn.depth = 101, this._startBtn = this.add.image(285, 385, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.START_BTN), this._startBtn.setOrigin(1, 0).setInteractive({
                useHandCursor: !0
            }).setScale(.75).on("pointerup", function(t) {
                var e = r.getStoredData();
                l.isDefined(e) ? this.showProgressStartFreshPrompt() : this._gotoStoryScene()
            }, this), this._continueBtn = this.add.image(300, 385, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.CONTINUE_BTN), this._continueBtn.setOrigin(0, 0).setInteractive({
                useHandCursor: !0
            }).setScale(.75).on("pointerup", this._gotoStoryScene, this);
            var t = r.getStoredData();
            l.isDefined(t) || (this._continueBtn.disableInteractive(), this._continueBtn.setAlpha(.5), r.setIsFirstRun(!0)), this.supportUs = this.add.image(280, 550, r.KEYS.GAME_TEX_SS1, r.KEYS.GAME_UI.SUPPORT_US), this.supportUs.setOrigin(.5, 0), this.supportUs.setInteractive({
                useHandCursor: !0
            }), this.supportUs.on("pointerup", function(t) {
                window.open("#", "_blank")
            }, this), this.onResize(), this.enableResizeListener(), this._startFreshBT = this.add.bitmapText(140, 260, r.FONTS.SPACE_RANGER_BI, "", 32), this._startFreshBT.setCenterAlign(), this._startFreshBT.text = "This will erase\nthe local save\nYou will lose\nall of your\nprevious\nprogress!\nAre you sure\nyou want to\nstart fresh?", this._confirmBtn = this.add.image(140, 530, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.APPLY_BTN), this._confirmBtn.setInteractive({
                useHandCursor: !0
            }).setOrigin(0, 0).on("pointerup", this._onConfirmProgressErase, this), this._cancelBtn = this.add.image(300, 530, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.CANCEL_BTN), this._cancelBtn.setInteractive({
                useHandCursor: !0
            }).setOrigin(0, 0).on("pointerup", this._onCancelProgressErase, this), this.cont.add([this._bg, this._sfxToggleBtn.onImg, this._sfxToggleBtn.offImg, this._musicToggleBtn.onImg, this._musicToggleBtn.offImg, this._startBtn, this._continueBtn, this._startFreshBT, this._confirmBtn, this._cancelBtn, this.supportUs]), r.setMusic(r.KEYS.GAME_MUSIC), this.showStartMenu()
        }, d.prototype.onResize = function() {
            var t = this.cam.height / r.worldDims.height,
                e = 1.1 * this._bg.width,
                i = 1.1 * this._bg.height,
                s = Math.min(r.worldDims.width * t, window.innerWidth),
                a = window.innerHeight,
                o = Math.min(s / e, a / i);
            this.cont.setScale(o), this.cont.x = .5 * (s - e / 1.1 * o), this.cont.y = .5 * (a - i / 1.1 * o), this._greenBg.setScale(1);
            var n = Math.max(s / this._greenBg.displayWidth, this.cam.height / this._greenBg.displayHeight);
            this._greenBg.setScale(n), this._greenBg.x = Math.floor(.5 * (s - this._greenBg.displayWidth)), this._greenBg.y = Math.floor(.5 * (a - this._greenBg.displayHeight));
            var h = document.getElementById("gameArea");
            h.style.width = s + "px";
            var l = Math.floor(.5 * (window.innerWidth - s));
            h.style.marginLeft = l + "px"
        }, d.prototype.showProgressStartFreshPrompt = function() {
            this._sfxToggleBtn.visible = !1, this._musicToggleBtn.visible = !1, this._startBtn.visible = !1, this._continueBtn.visible = !1, this.supportUs.visible = !1, this._startFreshBT.visible = !0, this._confirmBtn.visible = !0, this._cancelBtn.visible = !0
        }, d.prototype.showStartMenu = function() {
            this._sfxToggleBtn.visible = !0, this._musicToggleBtn.visible = !0, this._startBtn.visible = !0, this._continueBtn.visible = !0, this.supportUs.visible = !0, this._startFreshBT.visible = !1, this._confirmBtn.visible = !1, this._cancelBtn.visible = !1
        }, d.prototype.onSfxToggle = function() {
            r.setIsSoundOn(this._sfxToggleBtn.isOn())
        }, d.prototype.onMusicToggle = function() {
            r.setIsMusicOn(this._musicToggleBtn.isOn())
        }, d.prototype._onConfirmProgressErase = function() {
            r.deleteStoredData(), this._gotoStoryScene(), r.setIsFirstRun(!0)
        }, d.prototype._onCancelProgressErase = function() {
            this.showStartMenu()
        }, d.prototype.enableResizeListener = function() {
            r.setCurrentScene(this), this.scale.on("resize", this.onResize, this)
        }, d.prototype.disableResizeListener = function() {
            r.setCurrentScene(null), this.scale.off("resize", this.onResize, this)
        }, d.prototype._gotoStoryScene = function() {
            this.disableResizeListener(), this.scene.stop(r.KEYS.SCENE.TITLE), this.scene.start(r.KEYS.SCENE.STORY_INTRO, {
                fromScene: r.KEYS.SCENE.STORY_INTRO
            }), this.cleanUp()
        }, d.prototype.cleanUp = function() {}, d);

    function d() {
        return n.call(this, {
            key: r.KEYS.SCENE.TITLE
        }) || this
    }
    e.TitleScene = p
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(4),
        l = i(27),
        p = i(30),
        d = i(3),
        _ = i(6),
        c = i(33),
        S = i(2),
        u = i(9),
        g = i(39),
        y = i(61),
        m = (a(f, n = Phaser.Scene), f.prototype.addScore = function(t) {
            0 < t && (this._score += t, this.gameUi.updateScore(this._score))
        }, f.prototype.awardPlayerHealthLeftScore = function(t) {
            var e = this.playerShip.hitPoints / this.playerShip.maxHitPoints,
                i = Math.ceil(e * t);
            this.addScore(i)
        }, f.prototype.addDamageDealt = function(t) {
            0 < t && (this._damageDealt += t)
        }, f.prototype.scoreBaddieKill = function(t) {
            S.isDefined(t) && (t.isUniqueInstance || (0 < t.scoreValue && this._baddiesKilled++, this.addScore(t.scoreValue)))
        }, f.prototype.addBaddiesTotal = function(t) {
            void 0 === t && (t = 1), 0 < t && (this._baddiesTotal += t)
        }, f.prototype.init = function(t) {
            this._scene = this.scene.scene
        }, f.prototype.loadDragonBones = function() {
            this.load.dragonbone("MathSolve", "./assets/dragonbones/" + r.DRAGONBONES.TEX_IMG, "./assets/dragonbones/" + r.DRAGONBONES.TEX_JSON, "./assets/dragonbones/" + r.DRAGONBONES.SKE_JSON, void 0, void 0)
        }, f.prototype.preload = function() {
            this.loadDragonBones()
        }, f.prototype.create = function() {
            this.scene.launch(r.KEYS.SCENE.GAME_UI), this.gameUi = this.scene.manager.getScene(r.KEYS.SCENE.GAME_UI), this.scene.manager.sendToBack(r.KEYS.SCENE.GAME), this.scene.manager.bringToTop(r.KEYS.SCENE.GAME_UI), this.scene.manager.bringToTop(r.KEYS.SCENE.GAME_SHOP), this.scene.manager.bringToTop(r.KEYS.SCENE.GAME_PAUSED), this.background = new l.GameBackground(this), this._createAnims(), this.particles = this.add.particles(r.KEYS.GAME_TEX_SS1), this.particles.depth = r.BASE_DEPTH.SHIP - 5, this.actorsMng = new g.ActorsManager(this), this.bulletsMng = new _.BulletsManager(this), this.effectsMng = new c.EffectsManager(this), this.playerShip = new p.PlayerShip(this), r.setPlayerShipReference(this.playerShip), this.physics.world.setBounds(0, 0, r.worldDims.width, r.worldDims.height - r.SETTINGS.SCREEN_OFFSET_Y), this.camTarget = this.add.image(.5 * r.worldDims.width, .95 * r.worldDims.height, r.KEYS.GAME_TEX_SS1, r.KEYS.GREEN_SQUARE_64), this.camTarget.visible = !1, this._cam = this.cameras.main, this.cameras.resize(this.game.renderer.width, this.game.renderer.height), this._cam.setFollowOffset(0, 0), this._cam.setDeadzone(Math.floor(.4 * window.innerWidth), 0), this._cam.fade(50, 0, 0, 0, !0), r.SETTINGS.PLAYER_FOLLOWS_POINTER && (this._cam.startFollow(this.camTarget, !0, .5, .5), this._enablePointers()), this._cam.setLerp(r.SETTINGS.CAM_FOLLOW_LERP), this.levelsMng = new y.LevelsManager(this), u.PathsManager.Instance.getPath(r.PATHS.P2), this.time.delayedCall(250, this._doDelayedInits, null, this), this.onResize(), this.enableResizeListener(), this._stars = 0;
            var t = r.getStoredData();
            S.isDefined(t) && S.isDefined(t.numStars) && (this._stars = t.numStars, this.maxBossLevelDefeated = t.maxBossLevelDefeated, S.isDefined(this.gameUi) && S.isDefined(t.lastTimeShownSupportRequest) && !isNaN(t.lastTimeShownSupportRequest) && (this.gameUi.lastTimeShownSupportRequest = t.lastTimeShownSupportRequest)), S.isDefined(this.gameUi) && this.gameUi.updateStars(this._stars), this.__isGameOver = !1, this.playerShip.doStartSpawn()
        }, f.prototype._doDelayedInits = function() {
            this.onResize(), this.startGame()
        }, f.prototype.startGame = function() {
            this.__isGameOver = !1, this.levelsMng.startLevel(0), this.background.setActiveBgIndex(0), this.background.setCloudsTint(16777215), this._score = 0, this._baddiesKilled = 0, this._baddiesTotal = 0, this._damageDealt = 0, this.playerShip.doStartSpawn(), this.startSecondsCountTimer(), this.savePersitentGameData(), this.resumeGamePlay(), this._cam.fadeIn(1e3), r.setMusic(r.KEYS.GAME_MUSIC), r.fadeCurrentMusic(this.gameUi, r.GAME_MUSIC_VOLUME, 1e3)
        }, f.prototype.pauseGamePlay = function() {
            h.TweenMax.pauseAll(), r.setIsGamePaused(!0), this.playerShip.onGamePaused(), this.scene.pause(r.KEYS.SCENE.GAME), this.savePersitentGameData(), r.fadeCurrentMusic(this.gameUi, r.MENU_MUSIC_VOLUME, 250)
        }, f.prototype.resumeGamePlay = function() {
            h.TweenMax.resumeAll(), r.setIsGamePaused(!1), this.playerShip.onGameResumed(), this.scene.resume(r.KEYS.SCENE.GAME), r.fadeCurrentMusic(this.gameUi, r.GAME_MUSIC_VOLUME, 250)
        }, f.prototype.exitGamePlay = function() {
            this.playerShip.hit(100, !0)
        }, f.prototype.doDevBullets = function() {
            this._devRotateTowardsPlayer = [];
            for (var t = 0; t < 3; t++) {
                var e = this.bulletsMng.addBullet(r.FACTION.BADDIES, {
                    shootingType: r.SHOOTING_TYPE.SPREAD,
                    velocity: 0,
                    angleInRadians: Phaser.Math.DegToRad(45 + 45 * t),
                    fireRate: 500,
                    numShots: 1,
                    x: 200 + 200 * t,
                    y: 600,
                    startDelay: 0,
                    bulletSettings: _.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
                    barrelLength: 100,
                    shotSpreadConfig: {
                        angleRadiansBettween: Phaser.Math.DegToRad(30),
                        fromBodyRotation: !1,
                        numBullets: 3
                    }
                });
                e.bodySpr.x = 300 + 100 * t, e.bodySpr.y = 300, this._devRotateTowardsPlayer.push(e)
            }
            for (t = 0; t < 3; t++) {
                var i = this.actorsMng.addActor(r.ARMATURE_IDS.PLAYER_MISSILE_S, {
                    faction: r.FACTION.PLAYER,
                    scoreValue: 0,
                    hp: 30,
                    updateMode: r.UPDATE_MODEL_TYPE.MISSILE,
                    velocityMagnitude: 0,
                    missileModeConfig: {
                        missileModeDuration: -1,
                        turnRate: Phaser.Math.DegToRad(2),
                        target: null,
                        aoeDmg: 30,
                        aoeRange: 80
                    }
                });
                i.bodySpr.x = 300 + 100 * t, i.bodySpr.y = 430, this._devRotateTowardsPlayer.push(i)
            }
        }, f.prototype.doDevSplatter = function() {
            this.effectsMng.addEffect(d.SPLATTER_ANIM_KEYS[0], 500, 500, .5, Phaser.Math.RND.rotation())
        }, f.prototype.doDevMediumExplosionTrail = function(t, e) {
            this.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 2, 3, 100, {
                x: t,
                y: e
            }, {
                x: -50,
                y: 50
            }, {
                x: 80,
                y: 80
            })
        }, f.prototype._enableDevKeyControls = function() {
            var t = this;
            this._keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q), this._keyQ.on("up", function() {
                t.pauseGamePlay()
            }, this), this._keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W), this._keyW.on("up", function() {
                r.playRandMedBaddieDefeatedSfx()
            }, this), this._keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S), this._keyS.on("up", function() {
                r.playRandSmallBaddieDefeatedSfx()
            }, this), this._keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E), this._keyE.on("up", function(t) {}, this)
        }, f.prototype.doEndGame = function() {
            var t = {
                message: "End Game Reached!",
                fromScene: r.KEYS.SCENE.GAME
            };
            console.log("End Game Reached!"), this.disableResizeListener(), this.playerShip.stopAutoShoot(), this.gameUi.scene.stop(), this.scene.start(r.KEYS.SCENE.END_GAME, t)
        }, f.prototype._onPlayerToBaddieOverlap = function(t, e) {
            if (t.bodySpr.active) {
                if (this._baddieHitpoint = e.hitPoints, 0 < this._baddieHitpoint) {
                    var i = e.isSmallTypeActor ? 1 : 2;
                    t.hit(i)
                }
                if (e.hitPoints <= 0) return;
                e.hit(10 * t.maxHitPoints), this.addDamageDealt(10 * t.maxHitPoints), e.hitPoints <= 0 && this.scoreBaddieKill(e)
            }
        }, f.prototype._onPlayerBulletToBaddieOverlap = function(t, e) {
            e.hitPoints <= 0 || (0 < t.hitPoints && (e.hit(t.hitPoints), this.addDamageDealt(t.hitPoints)), t.hit(t.hitPoints), r.playRandHitSfx(), e.hitPoints <= 0 && this.scoreBaddieKill(e))
        }, f.prototype._onPlayerActorToBaddieOverlap = function(t, e) {
            this._baddieHitpoint = e.hitPoints, this._baddieHitpoint < 0 && (this._baddieHitpoint = 0), e.hitPoints <= 0 || (e.hit(t.maxHitPoints), this.addDamageDealt(t.maxHitPoints), t.hit(this._baddieHitpoint), e.hitPoints <= 0 && this.scoreBaddieKill(e))
        }, f.prototype._onBaddieBulletToPlayerOverlap = function(t, e) {
            if (e.bodySpr.active && 0 < t.hitPoints) {
                t.hit(t.hitPoints);
                var i = t.isSmallTypeActor ? 1 : 2;
                e.hit(i)
            }
        }, f.prototype._onPlayerGameItemPickup = function(t, e) {
            switch (t.onPickedUp(), t.frame.name) {
                case r.KEYS.GAME_ITEM.STAR:
                    this._stars++, this.gameUi.updateStars(this._stars);
                    break;
                case r.KEYS.GAME_ITEM.STAR_2:
                    this._stars += 2, this.gameUi.updateStars(this._stars);
                    break;
                case r.KEYS.GAME_ITEM.STAR_5:
                    this._stars += 5, this.gameUi.updateStars(this._stars);
                    break;
                case r.KEYS.GAME_ITEM.STAR_10:
                    this._stars += 10, this.gameUi.updateStars(this._stars);
                    break;
                case r.KEYS.GAME_ITEM.STAR_20:
                    this._stars += 20, this.gameUi.updateStars(this._stars);
                    break;
                case r.KEYS.GAME_ITEM.HEALTH:
                    this.playerShip.onHealthPickedUp(t);
                    break;
                case r.KEYS.GAME_ITEM.BIG_LAZOR:
                    this.playerShip.onBigLazoPickedUp(t);
                    break;
                case r.KEYS.GAME_ITEM.MAIN_GUN:
                    this.playerShip.onGunPowPickedUp();
                    break;
                case r.KEYS.GAME_ITEM.ENERGY:
                    this.playerShip.onEnergyPickedUp(t)
            }
        }, f.prototype.enableResizeListener = function() {
            r.setCurrentScene(this), this.scale.on("resize", this.onResize, this)
        }, f.prototype.disableResizeListener = function() {
            r.setCurrentScene(null), this.scale.off("resize", this.onResize, this)
        }, f.prototype.onResize = function() {
            this.fit()
        }, f.prototype.fit = function() {
            var t, e = this.cameras.main,
                i = e.height / r.worldDims.height,
                s = window.innerWidth,
                a = window.innerHeight,
                o = Math.min(r.worldDims.width * i, window.innerWidth),
                n = window.innerHeight;
            this.cameras.resize(o, n), e.setZoom(1), t = e.height / r.worldDims.height, s > r.worldDims.width * t ? e.setViewport(0, 0, r.worldDims.width * t, e.height) : e.setViewport(0, 0, s, a), e.setZoom(t), e.setPosition(0, 0), e.setBounds(0, 0, r.worldDims.width, Math.min(n, r.worldDims.height)), S.isDefined(this.gameUi) && this.gameUi.resizeFor(e.width, e.height, t);
            var h = document.getElementById("gameArea");
            h.style.width = o + "px";
            var l = Math.floor(.5 * (window.innerWidth - o));
            h.style.marginLeft = l + "px"
        }, f.prototype._enablePointers = function() {
            this.input.on("pointerdown", this._onPointerDown, this), this.input.on("pointerup", this._onPointerUp, this), this.input.on("pointermove", this._onPointerMove, this), this.input.on("pointerout", this._onPointerOut, this)
        }, f.prototype._onPointerDown = function(t) {
            r.isGamePaused || (this.time.now - this._lastPointerDowTime < this._doubleTapMaxTime && this.playerShip.startBigLazor(), this._lastPointerDowTime = this.time.now)
        }, f.prototype._onPointerUp = function(t) {}, f.prototype._onPointerOut = function(t) {
            this.playerShip.followsCamTarget && this.playerShip.moveToCoord(.5 * r.worldDims.width, .9 * r.worldDims.height)
        }, f.prototype._onPointerMove = function(t) {
            this._doCamTargetMoveOnPointer()
        }, f.prototype._doShipFollowCamTarget = function() {
            this.playerShip.followsCamTarget && this.playerShip.moveToCoord(this.input.activePointer.x / this._cam.zoom + this._cam.worldView.x, this.input.activePointer.y / this._cam.zoom + this._cam.worldView.y)
        }, f.prototype._doCamTargetMoveOnPointer = function() {
            this.camTarget.x = this.input.activePointer.x / this._cam.zoom + this._cam.worldView.x, this.camTarget.y = this.input.activePointer.y / this._cam.zoom + this._cam.worldView.y
        }, f.prototype.update = function(t, e) {
            if (!r.isGamePaused) {
                r.SETTINGS.PLAYER_FOLLOWS_POINTER && this._doShipFollowCamTarget(), this.background.update(e), this.playerShip.update(e);
                for (var i = 0; i < this.baddieShips.length; i++) this._baddieActor = this.baddieShips[i], this._baddieActor.toBePooledBack && this._tbr.push(this._baddieActor), this._baddieActor.update(e);
                for (; 0 < this._tbr.length;) this._baddieActor = this._tbr.pop(), this.baddieShips.splice(this.baddieShips.indexOf(this._baddieActor), 1), this._baddieActor.isUniqueInstance ? this._baddieActor.destroy() : this.actorsMng.poolActor(this._baddieActor);
                for (i = 0; i < this.playerShips.length; i++) this._playerActor = this.playerShips[i], this._playerActor.toBePooledBack && this._tbr.push(this._playerActor), this._playerActor.update(e);
                for (; 0 < this._tbr.length;) this._playerActor = this._tbr.pop(), this.playerShips.splice(this.playerShips.indexOf(this._playerActor), 1), this._playerActor.isUniqueInstance || this.actorsMng.poolActor(this._playerActor);
                for (i = 0; i < this.playerBullets.length; i++) this._playerBullet = this.playerBullets[i], this._playerBullet.update(e), this._playerBullet.toBePooledBack && this._tbr.push(this._playerBullet);
                for (; 0 < this._tbr.length;) this._playerBullet = this._tbr.pop(), this.playerBullets.splice(this.playerBullets.indexOf(this._playerBullet), 1), this.bulletsMng.poolBullet(this._playerBullet);
                for (i = 0; i < this.baddieBullets.length; i++) this._baddieBullet = this.baddieBullets[i], this._baddieBullet.update(e), this._baddieBullet.toBePooledBack && this._tbr.push(this._baddieBullet);
                for (; 0 < this._tbr.length;) this._baddieBullet = this._tbr.pop(), this.baddieBullets.splice(this.baddieBullets.indexOf(this._baddieBullet), 1), this.bulletsMng.poolBullet(this._baddieBullet);
                for (i = 0; i < this.explos.length; i++) this._explo = this.explos[i], this._explo.update(e), this._explo.toBePooledBack && this._tbr.push(this._explo);
                for (; 0 < this._tbr.length;) this._explo = this._tbr.pop(), this.explos.splice(this.explos.indexOf(this._explo), 1), this.effectsMng.poolExplo(this._explo);
                for (i = 0; i < this.gameItems.length; i++) this._gi = this.gameItems[i], this._gi.update(e), this._gi.toBePooledBack && this._tbr.push(this._gi);
                for (; 0 < this._tbr.length;) this._gi = this._tbr.pop(), this.gameItems.splice(this.gameItems.indexOf(this._gi), 1), this.effectsMng.poolGameItem(this._gi);
                this._checkOverlaps(e)
            }
        }, f.prototype._checkOverlaps = function(t) {
            var e = 0,
                i = 0;
            for (e = 0; e < this.baddieShips.length; e++) this._baddieActor = this.baddieShips[e], this._baddieActor.isOverlapEnabled && this.playerShip.isOverlapEnabled && this.physics.overlap(this.playerShip, this._baddieActor) && this._onPlayerToBaddieOverlap(this.playerShip, this._baddieActor);
            for (e = 0; e < this.playerBullets.length; e++)
                for (this._playerBullet = this.playerBullets[e], i = 0; i < this.baddieShips.length; i++) this._baddieActor = this.baddieShips[i], this._baddieActor.isOverlapEnabled && this.physics.overlap(this._playerBullet, this._baddieActor) && this._onPlayerBulletToBaddieOverlap(this._playerBullet, this._baddieActor);
            for (e = 0; e < this.baddieBullets.length; e++) this._baddieBullet = this.baddieBullets[e], this.playerShip.isOverlapEnabled && this.physics.overlap(this._baddieBullet, this.playerShip) && this._onBaddieBulletToPlayerOverlap(this._baddieBullet, this.playerShip);
            for (e = 0; e < this.gameItems.length; e++) this._gi = this.gameItems[e], this.physics.overlap(this._gi, this.playerShip) && this._onPlayerGameItemPickup(this._gi, this.playerShip);
            for (e = 0; e < this.playerShips.length; e++)
                for (this._playerActor = this.playerShips[e], i = 0; i < this.baddieShips.length; i++) this._baddieActor = this.baddieShips[i], this._baddieActor.isOverlapEnabled && this._playerActor.isOverlapEnabled && this.physics.overlap(this._playerActor, this._baddieActor) && this._onPlayerActorToBaddieOverlap(this._playerActor, this._baddieActor);
            for (e = 0; e < this.playerShips.length; e++)
                for (this._playerActor = this.playerShips[e], i = 0; i < this.baddieBullets.length; i++) this._baddieBullet = this.baddieBullets[i], this._playerActor.isOverlapEnabled && this._playerActor.isOverlapEnabled && this.physics.overlap(this._playerActor, this._baddieBullet) && this._onPlayerActorToBaddieOverlap(this._playerActor, this._baddieBullet);
            if (this.playerShip.bigLazor.isOverlapEnabled) {
                for (e = 0; e < this.baddieBullets.length; e++) this._baddieBullet = this.baddieBullets[e], this.playerShip.bigLazor.checkOverlapsAgainst(this.physics, this._baddieBullet, t), this._baddieBullet.hitPoints <= 0 && this.rollStarDropChance(this._baddieBullet.bodySpr.x, this._baddieBullet.bodySpr.y);
                for (e = 0; e < this.baddieShips.length; e++) this._baddieActor = this.baddieShips[e], 0 < this._baddieActor.hitPoints && (this.playerShip.bigLazor.checkOverlapsAgainst(this.physics, this._baddieActor, t), this._baddieActor.hitPoints <= 0 && this.scoreBaddieKill(this._baddieActor))
            }
        }, f.prototype._createAnims = function() {
            var t = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.SHIP_EXHAUST,
                end: 5,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.SHIP_EXHAUST,
                frames: t,
                frameRate: 30,
                repeat: -1
            });
            var e = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.ACID_BULLET,
                end: 13,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.ACID_BULLET,
                frames: e,
                repeat: -1,
                frameRate: 24
            }), e = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.FLAME_BULLET,
                end: 8,
                zeroPad: 4
            }), this.anims.create({
                key: r.KEYS.ANIMS.FLAME_BULLET,
                frames: e,
                repeat: -1,
                frameRate: 24
            });
            var i = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.BADDIE_BULLET_EX,
                end: 8,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.BADDIE_BULLET_EX,
                frames: i,
                frameRate: 24
            });
            var s = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.EXPLO1,
                end: 18,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.EXPLO1,
                frames: s,
                frameRate: 24
            });
            var a = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.EXPLO2,
                end: 18,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.EXPLO2,
                frames: a,
                frameRate: 24
            });
            var o = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.POW_UP_PICKED,
                end: 7,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.POW_UP_PICKED,
                frames: o,
                frameRate: 48
            });
            var n = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.PLAYER_BOT,
                end: 5,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.PLAYER_BOT,
                frames: n,
                frameRate: 48,
                repeat: -1
            });
            var h = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.PLAYER_MISSILE_S,
                end: 5,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.PLAYER_MISSILE_S,
                frames: h,
                frameRate: 24,
                repeat: -1
            });
            var l = this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                prefix: r.KEYS.ANIMS.PLAYER_MISSILE_L,
                end: 5,
                zeroPad: 4
            });
            this.anims.create({
                key: r.KEYS.ANIMS.PLAYER_MISSILE_L,
                frames: l,
                frameRate: 24,
                repeat: -1
            }), this.anims.create({
                key: r.KEYS.ANIMS.BIG_LAZOR,
                frames: this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                    prefix: r.KEYS.ANIMS.BIG_LAZOR,
                    start: 0,
                    end: 4,
                    zeroPad: 4
                }),
                frameRate: 12,
                repeat: -1
            }), this.anims.create({
                key: r.KEYS.ANIMS.BADDIE_BIG_LAZOR,
                frames: this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                    prefix: r.KEYS.ANIMS.BIG_LAZOR,
                    start: 0,
                    end: 1,
                    zeroPad: 4
                }),
                frameRate: 24,
                repeat: -1
            }), this.anims.create({
                key: r.KEYS.ANIMS.LAZOR_CIRCULAR_BURST,
                frames: this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                    prefix: r.KEYS.ANIMS.LAZOR_CIRCULAR_BURST,
                    start: 0,
                    end: 7,
                    zeroPad: 4
                }),
                frameRate: 12
            }), this.anims.create({
                key: r.KEYS.ANIMS.SPLATTER1,
                frames: this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                    prefix: r.KEYS.ANIMS.SPLATTER1,
                    start: 0,
                    end: 18,
                    zeroPad: 4
                }),
                frameRate: 32
            }), this.anims.create({
                key: r.KEYS.ANIMS.SPLATTER2,
                frames: this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                    prefix: r.KEYS.ANIMS.SPLATTER2,
                    start: 0,
                    end: 18,
                    zeroPad: 4
                }),
                frameRate: 32
            }), this.anims.create({
                key: r.KEYS.ANIMS.FLARE1,
                frames: this.anims.generateFrameNames(r.KEYS.GAME_TEX_SS1, {
                    prefix: r.KEYS.ANIMS.FLARE1,
                    start: 0,
                    end: 9,
                    zeroPad: 4
                }),
                frameRate: 48
            })
        }, f.prototype.clearBaddies = function(t) {
            void 0 === t && (t = !1);
            for (var e = 0; e < this.baddieShips.length; e++) this._baddieActor = this.baddieShips[e], t ? this._baddieActor.toBePooledBack = !0 : this._baddieActor.hit(this._baddieActor.maxHitPoints);
            for (e = 0; e < this.baddieBullets.length; e++) this._baddieBullet = this.baddieBullets[e], t ? this._baddieBullet.toBePooledBack = !0 : this._baddieBullet.hit(this._baddieBullet.maxHitPoints)
        }, f.prototype.clearPlayerActors = function(t) {
            void 0 === t && (t = !1);
            for (var e = 0; e < this.playerShips.length; e++) this._playerActor = this.playerShips[e], t ? this._playerActor.toBePooledBack = !0 : this._playerActor.hit(this._playerActor.maxHitPoints);
            for (e = 0; e < this.playerBullets.length; e++) this._playerBullet = this.playerBullets[e], t ? this._playerBullet.toBePooledBack = !0 : this._playerBullet.hit(this._playerBullet.maxHitPoints);
            for (e = 0; e < this.gameItems.length; e++) this._gi = this.gameItems[e], this._gi.toBePooledBack = !0
        }, f.prototype.doLevelWon = function() {
            this.clearBaddies(), this.clearPlayerActors(), this.time.clearPendingEvents(), this.time.removeAllEvents(), this.playerShip.stopAutoShoot()
        }, f.prototype.doNextLevel = function() {
            if (this.levelsMng.isLastLevel()) this.doEndGame();
            else {
                this.levelsMng.doNextLevel();
                var t = this.background.getActiveBackgroundIndex();
                t < this.background.maxLevelIndex && this.background.doBgChangeTransition(t + 1)
            }
        }, f.prototype.startGameLost = function() {
            this._cam.fadeOut(1e3), this.time.delayedCall(1e3, this._doGameLost, null, this), this.__isGameOver = !0, this.clearPlayerActors(!0)
        }, f.prototype._doGameLost = function() {
            this.clearBaddies(!0), this.clearPlayerActors(!0), this.time.clearPendingEvents(), this.time.removeAllEvents(), this.gameUi.updateScore(this._score), this.gameUi.showGameLostText(this._baddiesKilled, this._baddiesTotal, this._score)
        }, f.prototype.rollStarDropChance = function(t, e) {
            r.dropsKeeper.rollStars(this._dropChancesResult), 1 == this._dropChancesResult[0] && this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR, t, e, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector1), 1 == this._dropChancesResult[1] && this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_2, t, e, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector2), 1 == this._dropChancesResult[2] && this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_5, t, e, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector2), 1 == this._dropChancesResult[3] && this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_10, t, e, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector3)
        }, f.prototype.rollMedStarBunch2 = function(t, e) {
            var i = 0,
                s = 0;
            i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_10, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector2), r.dropsKeeper.roll5Star() && (i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_5, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector2));
            for (var a = 0; a < 10; a++) r.dropsKeeper.roll2Star() ? (i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_2, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector1)) : r.dropsKeeper.rollStar() && (i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 2, this._starAccVector1));
            if (r.dropsKeeper.rollDoublePowUpChance()) {
                var o = (Phaser.Math.RND.pick([135, 45]), Phaser.Math.RND.between(-10, 10));
                o = Phaser.Math.RND.pick([135, 45]) + Phaser.Math.RND.between(-10, 10), this.effectsMng.addPlayerPowerUp(r.dropsKeeper.pickRandPowUp(), t, e, Phaser.Math.DegToRad(o), Phaser.Math.RND.between(4, 6))
            }
        }, f.prototype.rollMedStarBunch = function(t, e) {
            var i = 0,
                s = 0;
            i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_20, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector3), i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_10, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector2), r.dropsKeeper.roll5Star() && (i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_5, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector2));
            for (var a = 0; a < 10; a++) r.dropsKeeper.roll2Star() ? (i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_2, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector1)) : r.dropsKeeper.rollStar() && (i = Phaser.Math.RND.between(-50, 50), s = Phaser.Math.RND.between(-50, 50), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 2, this._starAccVector1));
            var o = Phaser.Math.RND.pick([135, 45]) + Phaser.Math.RND.between(-10, 10);
            this.effectsMng.addPlayerPowerUp(r.dropsKeeper.pickRandPowUp(), t, e, Phaser.Math.DegToRad(o), Phaser.Math.RND.between(4, 6)), r.dropsKeeper.rollDoublePowUpChance() && (o = Phaser.Math.RND.pick([135, 45]) + Phaser.Math.RND.between(-10, 10), this.effectsMng.addPlayerPowerUp(r.dropsKeeper.pickRandPowUp(), t, e, Phaser.Math.DegToRad(o), Phaser.Math.RND.between(4, 6)))
        }, f.prototype.rollHighBunchStars = function(t, e) {
            for (var i = 0, s = 0, a = 0; a < 5; a++) i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_20, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1.25, this._starAccVector3), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_10, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1.5, this._starAccVector2);
            for (a = 0; a < 10; a++) r.dropsKeeper.roll5Star() && (i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_5, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector2));
            for (a = 0; a < 20; a++) r.dropsKeeper.roll2Star() ? (i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_2, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 1, this._starAccVector1)) : r.dropsKeeper.rollStar() && (i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR, t + i, e + s, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 2, this._starAccVector1));
            for (a = 0; a < 5; a++) {
                i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100);
                var o = Phaser.Math.RND.pick([135, 45]) + Phaser.Math.RND.between(-10, 10);
                this.effectsMng.addPlayerPowerUp(r.dropsKeeper.pickRandPowUp(), t + i, e + s, Phaser.Math.DegToRad(o), Phaser.Math.RND.between(4, 6))
            }
        }, f.prototype.giveFreePowerupsBundle = function(t, e) {
            for (var i, s, a, o = 0; o < 2; o++) i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100), a = Phaser.Math.RND.pick([135, 45]) + Phaser.Math.RND.between(-10, 10), this.effectsMng.addPlayerPowerUp(r.KEYS.GAME_ITEM.HEALTH, t + i, e + s, Phaser.Math.DegToRad(a), Phaser.Math.RND.between(4, 6));
            i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100), a = Phaser.Math.RND.pick([135, 45]) + Phaser.Math.RND.between(-10, 10), this.effectsMng.addPlayerPowerUp(r.KEYS.GAME_ITEM.BIG_LAZOR, t + i, e + s, Phaser.Math.DegToRad(a), Phaser.Math.RND.between(4, 6)), i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100), a = Phaser.Math.RND.pick([135, 45]) + Phaser.Math.RND.between(-10, 10), this.effectsMng.addPlayerPowerUp(r.KEYS.GAME_ITEM.ENERGY, t + i, e + s, Phaser.Math.DegToRad(a), Phaser.Math.RND.between(4, 6)), i = Phaser.Math.RND.between(-100, 100), s = Phaser.Math.RND.between(-100, 100), a = Phaser.Math.RND.pick([135, 45]) + Phaser.Math.RND.between(-10, 10), this.effectsMng.addPlayerPowerUp(r.KEYS.GAME_ITEM.MAIN_GUN, t + i, e + s, Phaser.Math.DegToRad(a), Phaser.Math.RND.between(4, 6))
        }, f.prototype.awardSmallSquadronWipeReward = function(t) {
            this.addScore(10 * t.numActors), this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_5, t.lastActorLocation.x, t.lastActorLocation.y, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 0, this._starAccVector2)
        }, f.prototype.awardMedSquadronWipeReward = function(t) {
            this.effectsMng.addStar(r.KEYS.GAME_ITEM.STAR_10, t.lastActorLocation.x, t.lastActorLocation.y, Phaser.Math.DegToRad(Phaser.Math.RND.between(80, 100)), 0, this._starAccVector3)
        }, f.prototype.resetLevel = function() {
            this.clearBaddies(!0), this.time.clearPendingEvents(), this.time.removeAllEvents(), h.TweenMax.killAll(), this.playerShip.reset(), this.gameUi.hideStatsText(), this.__isGameOver = !1, this._cam.fadeIn(1e3), this.gameUi.updateScore(this._score)
        }, Object.defineProperty(f.prototype, "numStars", {
            get: function() {
                return this._stars
            },
            enumerable: !0,
            configurable: !0
        }), f.prototype.awardStars = function(t) {
            isNaN(t) || (this._stars += t, this.gameUi.updateStars(this._stars))
        }, f.prototype.applyCost = function(t) {
            this._stars -= t
        }, f.prototype.startSecondsCountTimer = function() {
            this._seconds = 0, S.isDefined(this._secondsTimer) && this._secondsTimer.remove(), this._secondsTimer = this.time.addEvent({
                delay: 1e3,
                callback: this._count1Second,
                callbackScope: this,
                loop: !0
            })
        }, f.prototype._count1Second = function() {
            this._seconds++, this._seconds % 15 == 0 && this.savePersitentGameData()
        }, f.prototype.savePersitentGameData = function() {
            var t = 0;
            S.isDefined(this.gameUi) && (t = this.gameUi.lastTimeShownSupportRequest), r.setStoredData({
                numStars: this._stars,
                maxBossLevelDefeated: this.maxBossLevelDefeated,
                bounty_levels: this.gameUi.gameBounties.getBountyLevels(),
                upgrade_levels: r.upgrades.getUpgradeLevels(),
                lastTimeShownSupportRequest: t
            })
        }, f.prototype.__setCustomPersistentGameData = function(t, e, i, s, a) {
            void 0 === i && (i = null), void 0 === s && (s = null), isNaN(t) && (t = 0), isNaN(e) && (e = 0), S.isDefined(i) || (i = this.gameUi.gameBounties.getBountyLevels()), S.isDefined(s) || (s = r.upgrades.getUpgradeLevels()), r.setStoredData({
                numStars: t,
                maxBossLevelDefeated: e,
                bounty_levels: i,
                upgrade_levels: s,
                lastTimeShownSupportRequest: a
            })
        }, f.prototype.collectPlayerPerformanceData = function() {
            return {
                damageDealt: Math.floor(this._damageDealt),
                maxBossLevelDefeated: this.maxBossLevelDefeated,
                numSecondsSurvived: this._seconds,
                numBaddiesDefeated: this._baddiesKilled
            }
        }, Object.defineProperty(f.prototype, "secondsElapsed", {
            get: function() {
                return this._seconds
            },
            enumerable: !0,
            configurable: !0
        }), f);

    function f() {
        var t = n.call(this, {
            key: r.KEYS.SCENE.GAME
        }) || this;
        return t.playerBullets = [], t.playerShips = [], t.baddieBullets = [], t.baddieShips = [], t.explos = [], t.gameItems = [], t._tbr = [], t._lastPointerDowTime = 0, t._doubleTapMaxTime = 250, t.__isGameOver = !1, t._score = 0, t._baddiesKilled = 0, t._baddiesTotal = 0, t._damageDealt = 0, t.maxBossLevelDefeated = 0, t._seconds = 0, t._stars = 0, t._baddieHitpoint = 0, t._dropChancesResult = [!1, !1, !1], t._starAccVector1 = new Phaser.Math.Vector2(0, .02943), t._starAccVector2 = new Phaser.Math.Vector2(0, .0981 * .4), t._starAccVector3 = new Phaser.Math.Vector2(0, .04905), t
    }
    e.GameScene = m
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        },
        a = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = i(2),
        n = s(i(1)),
        r = a(i(28)),
        h = a(i(29)),
        l = i(4),
        p = (d.prototype.doBgChangeTransition = function(t) {
            switch (this._transitionImg.setXY(0, -this._transitionImg.texHeight), this._transitionImg.visible = !0, l.TweenMax.to(this._transitionImg.anchor, 2.5, {
                y: 0,
                onComplete: this._onBgChangeCoverReady,
                onCompleteParams: [t],
                onCompleteScope: this,
                ease: l.Power0.easeNone
            }), t) {
                case 0:
                    this.tweenCloudsTint(16777215, 1, 1, 3);
                    break;
                case 1:
                    this.tweenCloudsTint(14614522, 1, 1, 3);
                    break;
                case 2:
                    this.tweenCloudsTint(15727359, 1, 1, 3);
                    break;
                case 3:
                    this.tweenCloudsTint(10910701, 1, 1, 3);
                    break;
                default:
                    this.tweenCloudsTint(16777215, 1, 1, 3)
            }
        }, d.prototype._onBgChangeCoverReady = function(t) {
            this.setActiveBgIndex(t), l.TweenMax.to(this._transitionImg.anchor, 2.5, {
                y: this._transitionImg.texHeight,
                onComplete: this._onBgCoverOutComplete,
                onCompleteScope: this,
                ease: l.Power0.easeNone
            })
        }, d.prototype._onBgCoverOutComplete = function() {
            this._transitionImg.setXY(-1e3, 0), this._transitionImg.visible = !1
        }, d.prototype.setActiveBgIndex = function(t) {
            (!o.isDefined(t) || t < 0 || t >= this._farBgs.length) && (t = 0);
            for (var e = 0; e < this._farBgs.length; e++) this._farBgs[e].enabled = !1;
            this._currFarBg = this._farBgs[t], this._currFarBg.enabled = !0
        }, d.prototype.tweenCloudsTint = function(t, e, i, s) {
            void 0 === s && (s = 0), l.TweenMax.to(this, e, {
                _tweenedCloudsAlpha: 0,
                onUpdate: this.__updateCloudsTintAlpha,
                onUpdateScope: this,
                onComplete: this.setCloudsTint,
                onCompleteParams: [t],
                onCompleteScope: this
            }), l.TweenMax.to(this, i, {
                _tweenedCloudsAlpha: 1,
                delay: e + s,
                onUpdate: this.__updateCloudsTintAlpha,
                onUpdateScope: this,
                onComplete: this.setCloudsTint,
                onCompleteParams: [t],
                onCompleteScope: this
            })
        }, d.prototype.__updateCloudsTintAlpha = function() {
            for (var t = 0; t < this._cloudBobs.length; t++) this._bob = this._cloudBobs[t], this._bob.alpha = this._tweenedCloudsAlpha
        }, d.prototype.getCloudsAlpha = function() {
            return this._cloudsAlpha
        }, d.prototype.setCloudsAlpha = function(t) {
            this._cloudsAlpha = t;
            for (var e = 0; e < this._cloudBobs.length; e++) this._bob = this._cloudBobs[e], this._bob.alpha = t
        }, d.prototype.setCloudsTint = function(t) {
            for (var e = 0; e < this._cloudBobs.length; e++) this._bob = this._cloudBobs[e], this._bob.tint = t
        }, d.prototype.getActiveBackgroundIndex = function() {
            return this._currFarBg.bgIndex
        }, d.prototype.update = function(t) {
            this._currFarBg.update(t);
            for (var e = 0; e < this._cloudBobs.length; e++) this._bob = this._cloudBobs[e], this._bob.y = this._bob.y + this.farCloudsSpeed * t, 1600 < this._bob.y && (this._bob.x = Phaser.Math.RND.between(-200, 568), this._bob.y = this._bob.y - 1600 - this._bob.frame.height);
            this._transitionImg.visible && this._transitionImg.updateXY()
        }, d.prototype._createClouds = function() {
            var t = [n.KEYS.CLOUDS.MID_CLOUD1, n.KEYS.CLOUDS.MID_CLOUD2, n.KEYS.CLOUDS.MID_CLOUD3, n.KEYS.CLOUDS.MID_CLOUD4, n.KEYS.CLOUDS.LARGE_CLOUD1, n.KEYS.CLOUDS.LARGE_CLOUD2, n.KEYS.CLOUDS.LARGE_CLOUD3, n.KEYS.CLOUDS.LARGE_CLOUD4];
            this._cloudBobs = [];
            for (var e = 0; e < t.length; e++) this._cloudBobs.push(this._blitter.create(0, 100 * e, t[e]));
            for (Phaser.Math.RND.shuffle(this._cloudBobs), e = 0; e < this._cloudBobs.length; e++) {
                var i = this._cloudBobs[e];
                i.x = Phaser.Math.RND.between(-100, 500), i.y = 200 * e
            }
        }, Object.defineProperty(d.prototype, "maxLevelIndex", {
            get: function() {
                return this._farBgs.length - 1
            },
            enumerable: !0,
            configurable: !0
        }), d);

    function d(t) {
        this.farBackgroundSpeed = .025, this.farCloudsSpeed = .075, this.nearCloudsSpeed = .2, this._cloudsAlpha = 1, this._tweenedCloudsAlpha = 1, this._scene = t, this._blitter = this._scene.add.blitter(0, 0, n.KEYS.GAME_TEX_SS1), this._blitter.depth = n.BASE_DEPTH.BACKGROUND + 1, this._farBg1 = new r.default(this._blitter, this._scene, {
            index: 0,
            imageTextureKey: n.KEYS.GAME_TEX_SS1,
            imageFrameKey: n.KEYS.BACKGROUND.FAR_FRAME_1,
            chunkFrameWidth: 32,
            chunkFrameHeight: 32,
            scrollHeight: n.worldDims.height,
            scrollSpeed: this.farBackgroundSpeed
        }), this._farBg2 = new r.default(this._blitter, this._scene, {
            index: 1,
            imageTextureKey: n.KEYS.GAME_TEX_SS1,
            imageFrameKey: n.KEYS.BACKGROUND.FAR_FRAME_2,
            chunkFrameWidth: 32,
            chunkFrameHeight: 32,
            scrollHeight: n.worldDims.height,
            scrollSpeed: this.farBackgroundSpeed
        }), this._farBg3 = new r.default(this._blitter, this._scene, {
            index: 2,
            imageTextureKey: n.KEYS.GAME_TEX_SS1,
            imageFrameKey: n.KEYS.BACKGROUND.FAR_FRAME_3,
            chunkFrameWidth: 32,
            chunkFrameHeight: 32,
            scrollHeight: n.worldDims.height,
            scrollSpeed: this.farBackgroundSpeed
        }), this._farBg4 = new r.default(this._blitter, this._scene, {
            index: 3,
            imageTextureKey: n.KEYS.GAME_TEX_SS1,
            imageFrameKey: n.KEYS.BACKGROUND.FAR_FRAME_4,
            chunkFrameWidth: 32,
            chunkFrameHeight: 32,
            scrollHeight: n.worldDims.height,
            scrollSpeed: this.farBackgroundSpeed
        }), this._transitionImg = new h.default(this._blitter, this._scene, {
            imageTextureKey: n.KEYS.GAME_TEX_SS1,
            imageFrameKey: n.KEYS.BACKGROUND.TRANSITION_CLOUDS,
            chunkFrameWidth: 256,
            chunkFrameHeight: 256
        }), this._transitionImg.setXY(-1e3, 0), this._transitionImg.visible = !1, this._farBgs = [this._farBg1, this._farBg2, this._farBg3, this._farBg4], this.setActiveBgIndex(0), this._createClouds()
    }
    e.GameBackground = p
}, function(t, e, i) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var s = i(2),
        a = (o.prototype.update = function(t) {
            if (this._isEnabled) {
                this._anchor.y += t * this._scrollSpeed;
                for (var e = 0; e < this._bobs.length; e++) this._bob = this._bobs[e], this._bob.y = this._anchor.y + this._bob.data.row * this._frameHeight, this._bob.y > this._scrollHeight && (this._bob.y = this._anchor.y - (this._numRows - this._bob.data.row) * this._frameHeight + 1), this._bob.y < -this._frameHeight ? this._bob.visible = !1 : this._bob.visible = !0;
                this._anchor.y = this._bobs[0].y
            }
        }, Object.defineProperty(o.prototype, "enabled", {
            set: function(t) {
                if (this._isEnabled = t, this._isEnabled)
                    for (var e = 0; e < this._bobs.length; e++) this._bob = this._bobs[e], this._bob.visible = !0, this._bob.x = this._bob.data.col * this._frameWidth;
                else
                    for (e = 0; e < this._bobs.length; e++) this._bob = this._bobs[e], this._bob.visible = !1, this._bob.x = -this._frameWidth, this._bob.y = -this._frameHeight
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(o.prototype, "bobs", {
            get: function() {
                return this._bobs
            },
            enumerable: !0,
            configurable: !0
        }), o);

    function o(t, e, i) {
        if (this._frameWidth = 64, this._frameHeight = 64, this._scrollHeight = 640, this._scrollSpeed = 0, this._numRows = 0, this._numCols = 0, this._isEnabled = !0, s.isDefined(i)) {
            this.bgIndex = i.index, this._scene = e, this.blitter = t, this._bobs = [], s.isDefined(i.chunkFrameWidth) && (this._frameWidth = i.chunkFrameWidth), s.isDefined(i.chunkFrameHeight) && (this._frameHeight = i.chunkFrameHeight), s.isDefined(i.scrollHeight) && (this._scrollHeight = i.scrollHeight), s.isDefined(i.scrollSpeed) && (this._scrollSpeed = i.scrollSpeed);
            var a = i.imageTextureKey;
            if (s.isDefined(i.imageFrameKey)) {
                var o = i.imageFrameKey.indexOf("0");
                a = -1 < o ? i.imageFrameKey.slice(0, o) : i.imageFrameKey
            }
            var n, r, h, l = this._scene.textures.get(i.imageTextureKey),
                p = l.getSourceImage().width,
                d = l.getSourceImage().height,
                _ = new Phaser.Geom.Point(0, 0);
            s.isDefined(i.imageFrameKey) && s.isDefined(l.frames[i.imageFrameKey]) && (p = l.frames[i.imageFrameKey].width, d = l.frames[i.imageFrameKey].height, _.x = l.frames[i.imageFrameKey].cutX, _.y = l.frames[i.imageFrameKey].cutY), d < this._scrollHeight && (console.warn("Cannot have a scroll height larger than the image, scroll height will be limited to the image height."), this._scrollHeight = d), this._numCols = p / this._frameWidth, this._numRows = d / this._frameHeight;
            for (var c = 0; c < this._numRows; c++)
                for (var S = 0; S < this._numCols; S++) n = a + this.bgIndex + "_" + c + "_" + S, r = _.x + S * this._frameWidth, h = _.y + c * this._frameHeight, l.add(n, 0, r, h, this._frameWidth, this._frameHeight), this._bob = t.create(r - _.x, h - _.y, n), this._bob.data = {
                    row: c,
                    col: S
                }, this._bobs.push(this._bob);
            this._anchor = new Phaser.Geom.Point, this._isEnabled = !0
        } else console.warn("Can't work with a null or undefined config object. Instantiation ignored!")
    }
    e.default = a
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(2),
        o = s(i(1)),
        n = (r.prototype._buildFrames = function(t) {
            a.isDefined(t.chunkFrameWidth) && (this._frameWidth = t.chunkFrameWidth), a.isDefined(t.chunkFrameHeight) && (this._frameHeight = t.chunkFrameHeight);
            var e = t.imageTextureKey;
            a.isDefined(t.framesSuffix) ? e = t.framesSuffix : a.isDefined(t.imageFrameKey) && (e = t.imageFrameKey);
            var i = this._scene.textures.get(t.imageTextureKey);
            this._texWidth = i.getSourceImage().width, this._texHeight = i.getSourceImage().height;
            var s, o, n, r = new Phaser.Geom.Point(0, 0);
            a.isDefined(t.imageFrameKey) && a.isDefined(i.frames[t.imageFrameKey]) && (this._texWidth = i.frames[t.imageFrameKey].cutWidth, this._texHeight = i.frames[t.imageFrameKey].cutHeight, r.x = i.frames[t.imageFrameKey].cutX, r.y = i.frames[t.imageFrameKey].cutY), this._numCols = Math.ceil(this._texWidth / this._frameWidth), this._numRows = Math.ceil(this._texHeight / this._frameHeight), this._lastFrameWidth = this._texWidth - (this._numCols - 1) * this._frameWidth, this._lastFrameHeight = this._texHeight - (this._numRows - 1) * this._frameHeight;
            for (var h = 0; h < this._numRows; h++)
                for (var l = 0; l < this._numCols; l++) {
                    s = e + "_" + h + "_" + l, o = r.x + l * this._frameWidth, n = r.y + h * this._frameHeight;
                    var p = this._frameWidth;
                    l > this._numCols - 2 && (p = this._lastFrameWidth);
                    var d = this._frameHeight;
                    h > this._numRows - 2 && (d = this._lastFrameHeight), i.add(s, 0, o, n, p, d), this._bob = this.blitter.create(o - r.x, n - r.y, s), this._bob.data = {
                        row: h,
                        col: l
                    }, this._bobs.push(this._bob)
                }
            this.anchor = new Phaser.Geom.Point
        }, r.prototype.setXY = function(t, e) {
            this.anchor.x = t, this.anchor.y = e;
            for (var i = 0; i < this._bobs.length; i++) this._bob = this._bobs[i], this._bob.x = t + this._bob.data.col * this._frameWidth, this._bob.y = e + this._bob.data.row * this._frameHeight, this._bob.x > this._gameDims.width || this._bob.y > this._gameDims.height || this._bob.x < -this._bob.frame.width || this._bob.y < -this._bob.frame.height ? this._bob.visible = !1 : this._bob.visible || (this._bob.visible = !0)
        }, r.prototype.updateXY = function() {
            this.setXY(this.anchor.x, this.anchor.y)
        }, Object.defineProperty(r.prototype, "bobs", {
            get: function() {
                return this._bobs
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "x", {
            get: function() {
                return this.anchor.x
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "y", {
            get: function() {
                return this.anchor.y
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "texWidth", {
            get: function() {
                return this._texWidth
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "texHeight", {
            get: function() {
                return this._texHeight
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "alpha", {
            get: function() {
                return this._alpha
            },
            set: function(t) {
                this._alpha = t;
                for (var e = 0; e < this._bobs.length; e++) this._bob = this._bobs[e], this._bob.alpha = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "visible", {
            get: function() {
                return this._visible
            },
            set: function(t) {
                this._visible = t;
                for (var e = 0; e < this._bobs.length; e++) this._bob = this._bobs[e], this._bob.visible = this._visible;
                this._visible && this.setXY(this.anchor.x, this.anchor.y)
            },
            enumerable: !0,
            configurable: !0
        }), r);

    function r(t, e, i) {
        this._frameWidth = 64, this._frameHeight = 64, this._numRows = 0, this._numCols = 0, this.blitter = t, this._scene = e, this._bobs = [], this._gameDims = new Phaser.Geom.Rectangle(0, 0, o.worldDims.width, o.worldDims.height), this._buildFrames(i), this._visible = !0
    }
    e.default = n
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        },
        n = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r, h = o(i(1)),
        l = i(4),
        p = i(10),
        d = i(3),
        _ = i(2),
        c = n(i(32)),
        S = (a(u, r = d.Actor), u.prototype.checkBotsCountUpgrade = function() {
            if (_.isDefined(this.bots))
                for (; 0 < this.bots.length;)(s = this.bots.pop()).toBePooledBack = !0;
            var t = h.upgrades.botsNumUpgrade;
            this.bots = [];
            for (var e = 360 / t.level, i = 0; i < t.level; i++) {
                var s;
                (s = this._addBot({
                    faction: h.FACTION.PLAYER,
                    hp: 1e3,
                    scoreValue: 0,
                    updateMode: h.UPDATE_MODEL_TYPE.SHIELDER,
                    shielderModeConfig: {
                        shieldRadius: 80,
                        shieldTarget: this,
                        initialRotation: Phaser.Math.DegToRad(e * i),
                        shieldRotationSpeed: Phaser.Math.DegToRad(1)
                    }
                })).applyWeaponSettings({
                    bulletSettings: this._bulletSettingsCache[5],
                    barrelLength: 30,
                    fireRate: 350,
                    numShots: void 0,
                    velocity: 500,
                    shootingType: h.SHOOTING_TYPE.FROM_ROTATION,
                    x: 0,
                    y: 0,
                    startDelay: 0
                }), s.updateSettings()
            }
        }, u.prototype.updateBotsStatsUpgrade = function() {
            if (_.isDefined(this.bots)) {
                for (var t = this.bots[0], e = 0; e < this.bots.length; e++)(t = this.bots[e]).updateSettings();
                this._botShotTimerConfig.delay = t.weaponSettings.fireRate, this._nextBotShotTimer.reset(this._botShotTimerConfig)
            }
        }, u.prototype._setShowFlare = function(t, e) {
            void 0 === e && (e = !0), t.setActive(e), t.setVisible(e), e && (t.play(h.KEYS.ANIMS.FLARE1, !0, 0), t.setAngle(Phaser.Math.RND.between(-2, 2)))
        }, u.prototype.setMaxHp = function(t) {
            this.maxHitPoints = t, this.hitPoints = this.maxHitPoints
        }, u.prototype.setWeaponLevel = function(t) {
            void 0 === t && (t = 0), t < 0 && (t = 0), t > this._maxWeaponLevel && (t = this._maxWeaponLevel), this._weaponLevel = t
        }, u.prototype.upgradeWeapon = function() {
            this._weaponLevel++, this.setWeaponLevel(this._weaponLevel)
        }, u.prototype.downgradeWeapon = function() {
            this._weaponLevel--, this.setWeaponLevel(this._weaponLevel)
        }, u.prototype.setSpeedLevel = function(t) {
            t < 0 && (t = 0), t >= this._moveToSpeedMult.length ? this._isMoveToInstant = !0 : (this._currMoveToSpeedMultIndex = t, this._currMoveToSpeedMult = this._moveToSpeedMult[this._currMoveToSpeedMultIndex])
        }, u.prototype.upgradeSpeed = function() {
            this.setSpeedLevel(++this._currMoveToSpeedMultIndex)
        }, u.prototype.downgradeSpeed = function() {
            this.setSpeedLevel(--this._currMoveToSpeedMultIndex)
        }, u.prototype.updateMissiles = function() {
            this._numMissiles = h.upgrades.missilesNumUpgrade.level
        }, u.prototype.updateMissilesStats = function() {
            switch (h.upgrades.missilesStatsUpgrade.level) {
                case 0:
                    this._missilesSettings.hp = 30, this._missilesSettings.missileModeConfig.turnRate = Phaser.Math.DegToRad(2), this._missilesSettings.velocityMagnitude = 400, this._missileCooldown = 4e3;
                    break;
                case 1:
                    this._missilesSettings.hp = 40, this._missilesSettings.missileModeConfig.turnRate = Phaser.Math.DegToRad(2.5), this._missilesSettings.velocityMagnitude = 450, this._missileCooldown = 3800;
                    break;
                case 2:
                    this._missilesSettings.hp = 50, this._missilesSettings.missileModeConfig.turnRate = Phaser.Math.DegToRad(3), this._missilesSettings.velocityMagnitude = 500, this._missileCooldown = 3600;
                    break;
                case 3:
                    this._missilesSettings.hp = 60, this._missilesSettings.missileModeConfig.turnRate = Phaser.Math.DegToRad(3.5), this._missilesSettings.velocityMagnitude = 550, this._missileCooldown = 3400;
                    break;
                case 4:
                    this._missilesSettings.hp = 70, this._missilesSettings.missileModeConfig.turnRate = Phaser.Math.DegToRad(4), this._missilesSettings.velocityMagnitude = 600, this._missileCooldown = 3200;
                    break;
                case 5:
                    this._missilesSettings.hp = 80, this._missilesSettings.missileModeConfig.turnRate = Phaser.Math.DegToRad(5), this._missilesSettings.velocityMagnitude = 650, this._missileCooldown = 3e3
            }
        }, u.prototype.updateBigLazor = function() {
            this._maxBigLazor = h.upgrades.bigLazorUpgrade.level, this._numBigLazor = this._maxBigLazor, this._bigLazor.updateDps()
        }, u.prototype.updateItemMagnetRange = function() {
            var t = h.upgrades.playerMagnetUpgrade;
            this.itemPickupRangeSquared = t.amount * t.amount
        }, u.prototype.checkShootRequest = function() {
            if (this._shoot) {
                switch (this._weaponLevel) {
                    case 0:
                        this.doAutoShoot1();
                        break;
                    case 1:
                        this.doAutoShoot2();
                        break;
                    case 2:
                        this.doAutoShoot3();
                        break;
                    case 3:
                        this.doAutoShoot4();
                        break;
                    case 4:
                        this.doAutoShoot5();
                        break;
                    case 5:
                        this.doAutoShoot6();
                        break;
                    case 6:
                        this.doAutoShoot7();
                        break;
                    case 7:
                        this.doAutoShoot8();
                        break;
                    case 8:
                        this.doAutoShoot9();
                        break;
                    case 9:
                        this.doAutoShoot10();
                        break;
                    default:
                        this.doAutoShoot1()
                }!this._laserLoopSfx.isPlaying && h.isSoundOn && this.bodySpr.active && this._laserLoopSfx.play()
            }
        }, u.prototype.checkBotsShootRequest = function() {
            if (this._shoot)
                for (var t = 0; t < this.bots.length; t++) this.bots[t].doAutoShoot1()
        }, u.prototype.stopAutoShoot = function() {
            this._shoot = !1, this._laserLoopSfx.isPlaying && this._laserLoopSfx.stop()
        }, u.prototype.doAutoShoot1 = function() {
            1 != this._weaponShootMode ? (this._shotOffsets.set(-25, 40), this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y - 20, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 32, this._weaponSettings.y = this.bodySpr.y - 20, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 1) : this.doAutoShoot1_1()
        }, u.prototype.doAutoShoot1_1 = function() {
            this._weaponSettings.x = this.bodySpr.x + 3, this._weaponSettings.y = this.bodySpr.y - 20, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot2 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 20, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 32, this._weaponSettings.y = this.bodySpr.y + 20, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 1) : this.doAutoShoot2_1()
        }, u.prototype.doAutoShoot2_1 = function() {
            this._weaponSettings.x = this.bodySpr.x + -9, this._weaponSettings.y = this.bodySpr.y - 40, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 12, this._weaponSettings.y = this.bodySpr.y - 40, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot3 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x + 3, this._weaponSettings.y = this.bodySpr.y - 20, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 1) : this.doAutoShoot3_1()
        }, u.prototype.doAutoShoot3_1 = function() {
            this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 32, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot4 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x - 9, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 12, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 1) : this.doAutoShoot4_1()
        }, u.prototype.doAutoShoot4_1 = function() {
            this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 32, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot5 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x - 12, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 15, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 1) : this.doAutoShoot5_1()
        }, u.prototype.doAutoShoot5_1 = function() {
            this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 28, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot6 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x + 3, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[4], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 1) : this.doAutoShoot6_1()
        }, u.prototype.doAutoShoot6_1 = function() {
            this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[3], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 28, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[3], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot7 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x + 3, this._weaponSettings.y = this.bodySpr.y, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._weaponSettings.x = this.bodySpr.x - 12, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 15, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 1) : this.doAutoShoot7_1()
        }, u.prototype.doAutoShoot7_1 = function() {
            this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[3], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 28, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[3], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot8 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x - 12, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[4], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 15, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[4], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 1) : this.doAutoShoot8_1()
        }, u.prototype.doAutoShoot8_1 = function() {
            this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[3], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 28, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[3], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot9 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x - 12, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._weaponSettings.x = this.bodySpr.x - 12, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 15, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 15, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 1) : this.doAutoShoot9_1()
        }, u.prototype.doAutoShoot9_1 = function() {
            this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[4], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 28, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[4], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 0
        }, u.prototype.doAutoShoot10 = function() {
            1 != this._weaponShootMode ? (this._weaponSettings.x = this.bodySpr.x - 12, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._weaponSettings.x = this.bodySpr.x - 12, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 15, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[2], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 15, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[1], this.shoot(), this._setShowFlare(this._flareMid), this._weaponShootMode = 1) : this.doAutoShoot10_1()
        }, u.prototype.doAutoShoot10_1 = function() {
            this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi51Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[4], this.shoot(), this._weaponSettings.x = this.bodySpr.x - 25, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareL), this._weaponSettings.x = this.bodySpr.x + 28, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi49Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[4], this.shoot(), this._weaponSettings.x = this.bodySpr.x + 28, this._weaponSettings.y = this.bodySpr.y + 10, this._weaponSettings.angleInRadians = this.bodySpr.rotation - this._mathPi50Percent, this._weaponSettings.bulletSettings = this._bulletSettingsCache[0], this.shoot(), this._setShowFlare(this._flareR), this._weaponShootMode = 0
        }, u.prototype.shoot = function() {
            this.scene.bulletsMng.shootBulletAtAngle(h.FACTION.PLAYER, this._weaponSettings)
        }, u.prototype.update = function(t) {
            r.prototype.update.call(this, t), this.scene.input.activePointer.isDown && this._canUseMissiles && (this.deployMissiles(), this._missilesCooldownTimer = this.scene.time.delayedCall(this._missileCooldown, this._enableMissiles, null, this)), this.exhaustL.x = this.bodySpr.x - 22, this.exhaustL.y = this.bodySpr.y + 28, this.exhaustR.x = this.bodySpr.x + 25, this.exhaustR.y = this.bodySpr.y + 28, h.PLAYER_SHIP_EMITERS_ENABLED && (this.emiterL.setPosition(this.bodySpr.x - 32, this.bodySpr.y + 60), this.emiterR.setPosition(this.bodySpr.x + 35, this.bodySpr.y + 60)), this._flareL.active && (this._flareL.x = this.bodySpr.x + this._flareL_Offsets.x, this._flareL.y = this.bodySpr.y + this._flareL_Offsets.y), this._flareR.active && (this._flareR.x = this.bodySpr.x + this._flareR_Offsets.x, this._flareR.y = this.bodySpr.y + this._flareR_Offsets.y), this._flareMid.active && (this._flareMid.x = this.bodySpr.x + this._flareMidOffsets.x, this._flareMid.y = this.bodySpr.y + this._flareMidOffsets.y), this._gameItems = this.scene.gameItems;
            for (var e = 0; e < this._gameItems.length; e++) this._gi = this._gameItems[e], this._gi.gameItemType != p.GAME_ITEM_TYPE.STAR || this._gi.toBePooledBack || this._gi.x < 0 || this._gi.y < 0 || (this._distSquared = Phaser.Math.Distance.Squared(this._gi.x, this._gi.y, this.bodySpr.x, this.bodySpr.y), this._distSquared <= this.itemPickupRangeSquared && (this._gi.velocity.set(0, 0), l.TweenMax.to(this._gi, .2, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            })))
        }, u.prototype.onSetSoundOn = function(t) {
            0 == t || 1 == h.isGamePaused ? this._laserLoopSfx.isPlaying && this._laserLoopSfx.stop() : this._laserLoopSfx.isPlaying && this._laserLoopSfx.isPaused
        }, u.prototype.onGamePaused = function() {
            this._wasPlayingLaserLoop = !1, this._laserLoopSfx.isPlaying && (this._wasPlayingLaserLoop = !0, this._laserLoopSfx.stop())
        }, u.prototype.onGameResumed = function() {
            this._wasPlayingLaserLoop && _.isDefined(this._keyZ) && this._keyZ.isDown ? this._laserLoopSfx.play() : this.stopAutoShoot()
        }, u.prototype.moveToCoord = function(t, e) {
            if (!(!this._isInputEnabled || t < 40 || 728 < t || e < 140)) {
                if (this._lastestXY && (this._lastestXY.x = t, this._lastestXY.y = e), e -= this._followOffsetY, this.distance = Phaser.Math.Distance.Between(t, e, this.bodySpr.x, this.bodySpr.y), this._isMoveToInstant) return this.bodySpr.x = t, void(this.bodySpr.y = e);
                l.TweenMax.killTweensOf(this.bodySpr), l.TweenMax.to(this.bodySpr, this.distance * this._currMoveToSpeedMult, {
                    x: t,
                    y: e,
                    overwrite: "none",
                    ease: l.Power1.easeOut
                })
            }
        }, u.prototype.startShielderCheckIntervals = function() {
            _.isDefined(this._missilesCheckTimer) && this._missilesCheckTimer.destroy(), this._missilesCheckTimer = this.scene.time.delayedCall(500, this._checkMissiles, null, this)
        }, u.prototype._checkMissiles = function() {
            for (var t = 0; t < this.missiles.length; t++) this._actor = this.missiles[t], this._actor.bodySpr.active || this._tbr.push(this._actor);
            for (; 0 < this._tbr.length;) this._actor = this._tbr.pop(), this.missiles.splice(this.missiles.indexOf(this._actor), 1);
            for (this._missilesCheckTimer = this.scene.time.delayedCall(500, this._checkMissiles, null, this), this._baddieShips = this.scene.baddieShips, t = 0; t < this._baddieShips.length; t++) this._actor = this._baddieShips[t], this._actor.distance = Phaser.Math.Distance.Squared(this._actor.x, this._actor.y, this.bodySpr.x, this.bodySpr.y);
            if (this._baddieShips.sort(function(t, e) {
                    return t.distance - e.distance
                }), !(this._baddieShips.length < 1)) {
                for (t = this._baddieShipsIx = 0; t < this.missiles.length; t++) this._actor = this.missiles[t], _.isDefined(this._actor.target) || (this._actor.target = this._baddieShips[this._baddieShipsIx], this._baddieShipsIx++, this._baddieShipsIx >= this._baddieShips.length && (this._baddieShipsIx = 0));
                for (t = this._baddieShipsIx = 0; t < this.bots.length; t++) this._actor = this.bots[t], _.isDefined(this._actor.target) && (this._actor.target = null), this._actor.target = this._baddieShips[this._baddieShipsIx], this._baddieShipsIx++, this._baddieShipsIx >= this._baddieShips.length && (this._baddieShipsIx = 0)
            }
        }, u.prototype.hit = function(t, e) {
            void 0 === t && (t = 1), void 0 === e && (e = !1), (this.isOverlapEnabled || e) && (this.isOverlapEnabled = !1, this.bodySpr.alpha = .5, this.hitPoints -= t, this.scene.gameUi.updatePlayerLives(this.hitPoints), this.hitPoints < 1 ? this.onDefeated() : (this.bodySpr.setTint(16716049), this.scene.time.delayedCall(1e3, this.resetTint, null, this), h.playSfx("playerHit"), this.scene.time.delayedCall(1e3, this.activatePlayerShip, null, this), this.scene.add.tween({
                targets: [this.bodySpr, this.exhaustL, this.exhaustR],
                duration: 1e3,
                delay: 0,
                alpha: 1
            })))
        }, u.prototype.resetTint = function() {
            this.bodySpr.setTint(16777215)
        }, u.prototype.onDefeated = function() {
            this.scene.effectsMng.addEffect(h.KEYS.ANIMS.EXPLO2, this.bodySpr.x, this.bodySpr.y, this.bodySpr.scaleX, Phaser.Math.RND.rotation()), this.bodySpr.setActive(!1), this.exhaustL.setActive(!1), this.exhaustL.setVisible(!1), this.exhaustR.setActive(!1), this.exhaustR.setVisible(!1), this.stopAutoShoot(), this.scene.gameUi.updatePlayerLives(this.hitPoints), this._startDefeatedAnim(), this.followsCamTarget = !1, this.inputEnabled = !1, this.scene.__isGameOver = !0, this.scene.effectsMng.addExploEffectTrail(h.KEYS.ANIMS.EXPLO2, 2, 10, 100, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -40,
                y: 40
            }, {
                x: 40,
                y: 40
            })
        }, u.prototype._startDefeatedAnim = function() {
            this.bodySpr.setCollideWorldBounds(!1), l.TweenMax.to(this.bodySpr, 1, {
                y: this.bodySpr.y + 50,
                alpha: .01,
                scaleX: .1,
                scaleY: .1,
                onComplete: this._onDefeatedComplete,
                onCompleteScope: this,
                ease: l.Power1.easeIn
            }), this.bodySpr.setAcceleration(0, 0), this.stopAutoShoot(), this.bodySpr.active = !1
        }, u.prototype._onDefeatedComplete = function() {
            this.scene.startGameLost()
        }, u.prototype.activatePlayerShip = function() {
            this.bodySpr.setActive(!0), this.bodySpr.alpha = 1, this.isOverlapEnabled = !0
        }, u.prototype.deployMissiles = function() {
            switch (this._numMissiles) {
                case 1:
                    this._deployMissile(this.bodySpr.x, this.bodySpr.y + 20, -90);
                    break;
                case 2:
                    this._deployMissile(this.bodySpr.x - 20, this.bodySpr.y + 20, -95), this._deployMissile(this.bodySpr.x + 20, this.bodySpr.y + 20, -85);
                    break;
                case 3:
                    this._deployMissile(this.bodySpr.x, this.bodySpr.y + 20, -90), this._deployMissile(this.bodySpr.x - 20, this.bodySpr.y + 20, -95), this._deployMissile(this.bodySpr.x + 20, this.bodySpr.y + 20, -85);
                    break;
                default:
                    this._deployMissile(this.bodySpr.x, this.bodySpr.y + 20, -90)
            }
            h.playSfx(h.SFX_KEYS.MISSILE), this._canUseMissiles = !1
        }, u.prototype.startBigLazor = function() {
            0 < this._numBigLazor && this._canUseLazor && (this._bigLazor.start(), this._canUseLazor = !1, this._bigLazorCooldownTimer = this.scene.time.delayedCall(this._bigLazorCooldown, this._enableLazor, null, this), this._numBigLazor--, this.scene.gameUi.updateBigLazor(this._numBigLazor), h.playBigLazorSfx(h.SFX_KEYS.PLAYER_LAZOR))
        }, u.prototype._addBot = function(t) {
            var e = this.scene.actorsMng.addActor(h.ARMATURE_IDS.PLAYER_BOT, t);
            return e.toBePooledBack = !1, this.bots.push(e), e
        }, u.prototype._deployMissile = function(t, e, i) {
            var s = this.scene.actorsMng.addActor(h.ARMATURE_IDS.PLAYER_MISSILE_S, this._missilesSettings);
            s.bodySpr.rotation = Phaser.Math.DegToRad(i), s.bodySpr.x = t, s.bodySpr.y = e, this.missiles.push(s), s.setSmokeTrailEnabled(!0)
        }, u.prototype._enableMissiles = function() {
            this._canUseMissiles = !0
        }, u.prototype._enableLazor = function() {
            this._canUseLazor = !0
        }, u.prototype.onHealthPickedUp = function(t) {
            this.hitPoints < this.maxHitPoints && (this.hitPoints++, this.scene.gameUi.updatePlayerLives(this.hitPoints))
        }, u.prototype.onBigLazoPickedUp = function(t) {
            this._numBigLazor < this._maxBigLazor ? (this._numBigLazor++, this.scene.gameUi.updateBigLazor(this._numBigLazor)) : (this._numBigLazor = this._maxBigLazor + 1, this.startBigLazor())
        }, u.prototype.onEnergyPickedUp = function(t) {
            _.isDefined(this._speedOverloadTimer) ? this._speedOverloadTimer.hasDispatched ? (this.upgradeSpeed(), this._speedOverloadTimer = this.scene.time.delayedCall(this.__speedOverloadDuration, this.downgradeSpeed, null, this)) : this._speedOverloadTimer.reset({
                delay: this._speedOverloadTimer.delay + this.__speedOverloadDuration,
                startAt: this._speedOverloadTimer.getElapsed(),
                callback: this.downgradeSpeed,
                callbackScope: this
            }) : (this.upgradeSpeed(), this._speedOverloadTimer = this.scene.time.delayedCall(this.__speedOverloadDuration, this.downgradeSpeed, null, this))
        }, u.prototype.onGunPowPickedUp = function() {
            _.isDefined(this._mainGunOverloadTimer) ? this._mainGunOverloadTimer.hasDispatched ? (this.upgradeWeapon(), this._mainGunOverloadTimer = this.scene.time.delayedCall(this.__mainGunOverloadDuration, this.downgradeWeapon, null, this)) : this._mainGunOverloadTimer.reset({
                delay: this._mainGunOverloadTimer.delay + this.__mainGunOverloadDuration,
                startAt: this._mainGunOverloadTimer.getElapsed(),
                callback: this.downgradeWeapon,
                callbackScope: this
            }) : (this.upgradeWeapon(), this._mainGunOverloadTimer = this.scene.time.delayedCall(this.__mainGunOverloadDuration, this.downgradeWeapon, null, this))
        }, u.prototype.reset = function() {
            this._canUseMissiles = !0, this._numBigLazor = h.upgrades.bigLazorUpgrade.level, this._canUseLazor = !0, this.scene.gameUi.updateBigLazor(this._numBigLazor), this.bigLazor.reset(), this.doStartSpawn(), this.checkBotsCountUpgrade(), this.bodySpr.setScale(1), _.isDefined(this._mainGunOverloadTimer) && !this._mainGunOverloadTimer.hasDispatched && (this._mainGunOverloadTimer.remove(), this.downgradeWeapon())
        }, u.prototype.doStartSpawn = function() {
            this.isOverlapEnabled = !1, this.maxHitPoints = h.upgrades.playerHpUpgrade.amount, this.hitPoints = this.maxHitPoints, this.scene.gameUi.updatePlayerLives(this.hitPoints), this.stopAutoShoot(), this._enableMissiles(), this.startShielderCheckIntervals(), this._exploTrailActive = !1, _.isDefined(this._nextShotTimer) && this._nextShotTimer.remove(), this._nextShotTimer = this.scene.time.addEvent({
                delay: 100,
                callback: this.checkShootRequest,
                callbackScope: this,
                loop: !0
            }), _.isDefined(this._nextBotShotTimer) && this._nextBotShotTimer.remove(), this.checkBotsCountUpgrade(), this._botShotTimerConfig = {
                delay: this.bots[0].weaponSettings.fireRate,
                callback: this.checkBotsShootRequest,
                callbackScope: this,
                loop: !0
            }, this._nextBotShotTimer = this.scene.time.addEvent(this._botShotTimerConfig), this._spawnStep1()
        }, u.prototype._spawnStep1 = function() {
            this.bodySpr.setCollideWorldBounds(!1), this.bodySpr.y = h.worldDims.height + 100, this.bodySpr.alpha = .5, this.exhaustL.setActive(!0), this.exhaustL.setVisible(!0), this.exhaustR.setActive(!0), this.exhaustR.setVisible(!0), this.bodySpr.rotation = 0, this.bodySpr.setVelocity(0, 0), this.bodySpr.setAcceleration(0, 0), this._lastestXY.set(.5 * h.worldDims.width, .9 * h.worldDims.height), l.TweenMax.to(this.bodySpr, .5, {
                x: .5 * h.worldDims.width,
                onComplete: this._spawnStep2,
                onCompleteScope: this
            }), this.bodySpr.active = !1, this.stopAutoShoot()
        }, u.prototype._spawnStep2 = function() {
            l.TweenMax.to(this.bodySpr, .5, {
                y: .9 * h.worldDims.height,
                onComplete: this._onSpawnComplete,
                onCompleteScope: this
            }), this.inputEnabled = !0, h.SETTINGS.PLAYER_FOLLOWS_POINTER ? this.scene.input.activePointer.isDown && (this._shoot = !0) : _.isDefined(this._keyZ) && this._keyZ.isDown && (this._shoot = !0)
        }, u.prototype._onSpawnComplete = function() {
            this.bodySpr.setCollideWorldBounds(!0), this.scene.time.delayedCall(2e3, this.activatePlayerShip, null, this), this.bodySpr.alpha = .7, 1 == h.SETTINGS.PLAYER_FOLLOWS_POINTER && (this.followsCamTarget = !0), this.bodySpr.active = !0, this.onDefeatedAlreadyCalled = !1
        }, Object.defineProperty(u.prototype, "inputEnabled", {
            get: function() {
                return this._isInputEnabled
            },
            set: function(t) {
                this._isInputEnabled = t
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(u.prototype, "bigLazor", {
            get: function() {
                return this._bigLazor
            },
            enumerable: !0,
            configurable: !0
        }), u);

    function u(t) {
        var e = r.call(this, t) || this;
        return e._angleRotationSpeed = 2, e._rotDiff = 0, e._shoot = !1, e._exploTrailActive = !1, e._numMissiles = 1, e._followOffsetY = 0, e._canUseMissiles = !0, e._missileCooldown = 4e3, e._canUseLazor = !0, e._bigLazorCooldown = 2e3, e._numBigLazor = 0, e._maxBigLazor = 0, e._isInputEnabled = !0, e.followsCamTarget = !1, e._currMoveToSpeedMultIndex = 0, e._currMoveToSpeedMult = .01, e._isMoveToInstant = !1, e.__speedOverloadDuration = 2e4, e.itemPickupRangeSquared = 6400, e._distSquared = 0, e._weaponLevel = 0, e._maxWeaponLevel = 9, e.__mainGunOverloadDuration = 2e4, e._shotOffsets = new Phaser.Math.Vector2, e._bulletSettingsCache = [{
            frameKey: h.KEYS.BULLET.BULLET1,
            playSpeed: 1,
            exploKey: h.KEYS.ANIMS.EXPLO2,
            scale: 1,
            hp: 10,
            hitBox: new Phaser.Geom.Rectangle(57, 25, 18, 84)
        }, {
            frameKey: h.KEYS.BULLET.BULLET2,
            playSpeed: 1,
            exploKey: h.KEYS.ANIMS.EXPLO2,
            scale: 1,
            hp: 15,
            hitBox: new Phaser.Geom.Rectangle(66, 32, 22, 100)
        }, {
            frameKey: h.KEYS.BULLET.BULLET3,
            playSpeed: 1,
            exploKey: h.KEYS.ANIMS.EXPLO2,
            scale: 1,
            hp: 20,
            hitBox: new Phaser.Geom.Rectangle(70, 36, 24, 120)
        }, {
            frameKey: h.KEYS.BULLET.BULLET4,
            playSpeed: 1,
            exploKey: h.KEYS.ANIMS.EXPLO2,
            scale: 1,
            hp: 25,
            hitBox: new Phaser.Geom.Rectangle(58, 40, 28, 124)
        }, {
            frameKey: h.KEYS.BULLET.BULLET5,
            playSpeed: 1,
            exploKey: h.KEYS.ANIMS.EXPLO2,
            scale: 1,
            hp: 30,
            hitBox: new Phaser.Geom.Rectangle(65, 40, 28, 124)
        }, {
            frameKey: h.KEYS.BULLET.MINI1,
            playSpeed: 1,
            exploKey: h.KEYS.ANIMS.EXPLO2,
            scale: 1,
            hp: 10,
            hitBox: new Phaser.Geom.Rectangle(7, 7, 30, 30)
        }], e._mathPi50Percent = .5 * Math.PI, e._mathPi49Percent = .49 * Math.PI, e._mathPi51Percent = .51 * Math.PI, e._weaponShootMode = 0, e._wasPlayingLaserLoop = !1, e._tbr = [], e._baddieShipsIx = 0, e.bulletsManager = e.scene.bulletsMng, e.weaponSettings.x = 0, e.weaponSettings.y = 0, e.weaponSettings.barrelLength = 0, e.weaponSettings.velocity = 1800, e.weaponSettings.bulletSettings = e._bulletSettingsCache[0], e.weaponSettings.numShots = 1, e.weaponSettings.shootingType = h.SHOOTING_TYPE.AT_ANGLE, e.weaponSettings.angleInRadians = Phaser.Math.DegToRad(-90), e.weaponSettings.fireRate = 100, e.exhaustL = t.add.sprite(0, 0, h.KEYS.GAME_TEX_SS1), e.exhaustL.play(h.KEYS.ANIMS.SHIP_EXHAUST), e.exhaustL.setOrigin(.5, .5), e.exhaustL.depth = h.BASE_DEPTH.SHIP - 1, e.exhaustL.setAngle(20), e.exhaustR = t.add.sprite(0, 0, h.KEYS.GAME_TEX_SS1), e.exhaustR.play(h.KEYS.ANIMS.SHIP_EXHAUST), e.exhaustR.setOrigin(.5, .5), e.exhaustR.depth = h.BASE_DEPTH.SHIP - 1, e.exhaustR.setAngle(-20), e.bodySpr = t.physics.add.sprite(.5 * h.worldDims.width, .75 * h.worldDims.height, h.KEYS.GAME_TEX_SS1, h.KEYS.SHIP.PLAYER_SHIP1), e.body = e.bodySpr.body, e.bodySpr.setCollideWorldBounds(!0), e.bodySpr.setSize(24, 24), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 12, 18), e.bodySpr.depth = h.BASE_DEPTH.GFX, e._lastestXY = new Phaser.Math.Vector2(e.bodySpr.x, e.bodySpr.y), e._shoot = !1, e.setWeaponLevel(), e.hitPoints = e.maxHitPoints = 3, e.missiles = [], e._missilesSettings = {
            faction: h.FACTION.PLAYER,
            scoreValue: 0,
            hp: 30,
            updateMode: h.UPDATE_MODEL_TYPE.MISSILE,
            velocityMagnitude: 400,
            missileModeConfig: {
                missileModeDuration: -1,
                turnRate: Phaser.Math.DegToRad(2),
                target: null,
                aoeDmg: 30,
                aoeRange: 200
            }
        }, e.updateMissiles(), e.updateMissilesStats(), e._bigLazor = new c.default(e.scene), e._bigLazor.follow(e.bodySpr), e._maxBigLazor = h.upgrades.bigLazorUpgrade.level, e._numBigLazor = e._maxBigLazor, e.scene.gameUi.updateBigLazor(e._numBigLazor), e._followOffsetY = h.SETTINGS.SCREEN_OFFSET_Y, e._laserLoopSfx = e.scene.sound.add("LaserLoopSfx", {
            loop: !0,
            volume: .4
        }), h.SETTINGS.PLAYER_FOLLOWS_POINTER ? (e.scene.input.on("pointerdown", function() {
            e._shoot = !0
        }, e), e.scene.input.on("pointerup", function() {
            e.stopAutoShoot()
        }, e)) : (e._keyZ = e.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z), e._keyZ.on("down", function(t) {
            _.isDefined(t) && (t.originalEvent.stopPropagation(), t.originalEvent.stopImmediatePropagation())
        }, e), e._keyZ.on("up", function(t) {
            _.isDefined(t) && (t.originalEvent.stopPropagation(), t.originalEvent.stopImmediatePropagation()), e.stopAutoShoot()
        }, e)), e._moveToSpeedMult = [.0025, .002, .0015, .001, 5e-4], e.setSpeedLevel(0), 1 == h.PLAYER_SHIP_EMITERS_ENABLED && (e.emiterL = e.scene.particles.createEmitter({
            lifespan: 200,
            maxParticles: 50,
            frequency: 50,
            quantity: 1,
            frame: {
                frames: ["smokeParticles0000", "smokeParticles0001", "smokeParticles0002", "smokeParticles0003", "smokeParticles0004"],
                cycle: !1
            },
            x: -1e3,
            y: -1e3,
            scale: {
                start: .8,
                end: .1
            },
            speedX: -120,
            speedY: 1e3
        }), e.emiterR = e.scene.particles.createEmitter({
            lifespan: 200,
            maxParticles: 50,
            frequency: 50,
            quantity: 1,
            frame: {
                frames: ["smokeParticles0000", "smokeParticles0001", "smokeParticles0002", "smokeParticles0003", "smokeParticles0004"],
                cycle: !1
            },
            x: -1e3,
            y: -1e3,
            scale: {
                start: .8,
                end: .1
            },
            speedX: 120,
            speedY: 1e3
        })), e._flareL = e.scene.add.sprite(-1e3, -1e3, h.KEYS.GAME_TEX_SS1, h.KEYS.GREEN_SQUARE_64), e._flareL.depth = h.BASE_DEPTH.GFX + 1, e._flareL.setOrigin(.5, .97), e._flareL.scaleX = .5, e._flareL.scaleY = .4, e._flareR = e.scene.add.sprite(-1e3, -1e3, h.KEYS.GAME_TEX_SS1, h.KEYS.GREEN_SQUARE_64), e._flareR.depth = h.BASE_DEPTH.GFX + 1, e._flareR.setOrigin(.5, .97), e._flareR.scaleX = -.5, e._flareR.scaleY = .4, e._flareMid = e.scene.add.sprite(500, 500, h.KEYS.GAME_TEX_SS1, h.KEYS.GREEN_SQUARE_64), e._flareMid.depth = h.BASE_DEPTH.GFX + 1, e._flareMid.setOrigin(.5, .97), e._flareMid.scaleX = .6, e._flareMid.scaleY = .6, e._flareL.on("animationcomplete", function() {
            e._setShowFlare(e._flareL, !1)
        }, e), e._flareR.on("animationcomplete", function() {
            e._setShowFlare(e._flareR, !1)
        }, e), e._flareMid.on("animationcomplete", function() {
            e._setShowFlare(e._flareMid, !1)
        }, e), e._flareL_Offsets = new Phaser.Geom.Point(-24, 10), e._flareR_Offsets = new Phaser.Geom.Point(24, 10), e._flareMidOffsets = new Phaser.Geom.Point(2, 0), e._setShowFlare(e._flareL, !1), e._setShowFlare(e._flareR, !1), e._setShowFlare(e._flareMid, !1), e.checkBotsCountUpgrade(), e
    }
    e.PlayerShip = S
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = i(13),
        h = o(i(1)),
        l = i(2),
        p = (a(d, n = r.BaseActor), d.prototype.update = function(t) {
            (this.bodySpr.x < 0 || this.bodySpr.x > h.worldDims.width + 10 || this.bodySpr.y < 10 || this.bodySpr.y > h.worldDims.height + 10) && (this.toBePooledBack = !0)
        }, d.prototype.applySettings = function(t) {
            this.hitPoints = t.hp, this.maxHitPoints = t.hp, l.isDefined(t.animKey) ? this.animKey = t.animKey : l.isDefined(t.frameKey) && (this.frameKey = t.frameKey), l.isDefined(t.scale) && this.bodySpr.setScale(t.scale, t.scale), l.isDefined(t.exploKey) && (this._exploKey = t.exploKey), l.isDefined(t.origin) ? this.bodySpr.setOrigin(t.origin.x, t.origin.y) : this.bodySpr.setOrigin(.5, .5), l.isDefined(t.hitBox) ? (this.body.setSize(t.hitBox.width, t.hitBox.height), this.body.setOffset(t.hitBox.x, t.hitBox.y)) : (this.body.setSize(this.bodySpr.displayWidth, this.bodySpr.displayHeight), this.body.setOffset(0, 0)), l.isDefined(t.playSpeed) && (this.playSpeed = t.playSpeed), this.hitPoints = t.hp
        }, Object.defineProperty(d.prototype, "frameKey", {
            get: function() {
                return this._frameKey
            },
            set: function(t) {
                this._frameKey = t, this.bodySpr.setFrame(this._frameKey), this.bodySpr.anims.stop()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(d.prototype, "animKey", {
            get: function() {
                return this._animKey
            },
            set: function(t) {
                this._animKey = t, this.bodySpr.play(this._animKey)
            },
            enumerable: !0,
            configurable: !0
        }), d.prototype.hit = function(t) {
            this.scene.effectsMng.addEffect(this._exploKey, this.bodySpr.x, this.bodySpr.y, this._exploScale, Phaser.Math.RND.rotation(), .1 * this.body.velocity.x, .1 * this.body.velocity.y, this.playSpeed), this.hitPoints -= t, this.toBePooledBack = !0
        }, d.prototype.reset = function() {
            n.prototype.reset.call(this), this._frameKey = "", this._animKey = "", this._exploKey = "", this._exploScale = 1, this.playSpeed = 1
        }, d);

    function d(t, e) {
        var i = n.call(this, t) || this;
        return i.playSpeed = 1, i._frameKey = "", i._animKey = "", i._exploKey = "", i._exploScale = 1, i._frameKey = e.frameKey, i.bodySpr = t.physics.add.sprite(100, 100, h.KEYS.GAME_TEX_SS1, e.frameKey), i.body = i.bodySpr.body, i.applySettings(e), i.toBePooledBack = !1, i.isSmallTypeActor = !0, i
    }
    e.Bullet = p
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = i(4),
        n = (r.prototype.follow = function(t) {
            this._followSpr = t
        }, r.prototype.start = function() {
            var t = this;
            this.setActive(!0), this._x = this._followSpr.x, this._x = this._followSpr.x;
            for (var e = 0; e < this._visuals.length; e++) {
                var i = this._visuals[e];
                i.y = 1.5 * a.worldDims.height, i.visible = !1
            }
            o.TweenMax.to(this._spr1, .5, {
                scaleX: 2.2,
                scaleY: 10,
                alpha: 1,
                onStart: function() {
                    t._spr1.active = !0, t._spr1.visible = !0, t._spr1.play(a.KEYS.ANIMS.BIG_LAZOR, !1, 0), t._spr1.scaleX = .01, t._spr1.scaleY = .01, t._spr1.alpha = .95, t._spr1.x = t._x, t._hitArea1.x = t._spr1.x
                },
                onStartScope: this,
                onComplete: function() {
                    o.TweenMax.to(t._spr1, .5, {
                        scaleX: .01,
                        scaleY: 8.5,
                        alpha: .25,
                        onComplete: function() {
                            t._spr1.active = !1, t._spr1.visible = !1, t._spr1.scaleX = .2, t._spr1.scaleY = .01, t._spr1.alpha = .95
                        },
                        onCompleteScope: t,
                        ease: o.Bounce.easeOut
                    })
                },
                onCompleteScope: this,
                ease: o.RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), o.TweenMax.to(this._spr2, .5, {
                scaleX: 2.1,
                scaleY: 10,
                alpha: 1,
                delay: .5,
                onStart: function() {
                    t._spr2.active = !0, t._spr2.visible = !0, t._spr2.play(a.KEYS.ANIMS.BIG_LAZOR, !1, 1), t._spr2.scaleX = .01, t._spr2.scaleY = .01, t._spr2.alpha = .95, t._spr2.x = t._x - t._lazorColumnsPaddingX, t._hitArea1.x = t._spr2.x
                },
                onStartScope: this,
                onComplete: function() {
                    o.TweenMax.to(t._spr2, .5, {
                        scaleX: .01,
                        scaleY: 8.5,
                        alpha: .25,
                        onComplete: function() {
                            t._spr2.active = !1, t._spr2.visible = !1, t._spr2.scaleX = .01, t._spr2.scaleY = .01, t._spr2.alpha = .95
                        },
                        onCompleteScope: t,
                        ease: o.RoughEase.ease.config({
                            template: Power0.easeOut,
                            strength: 1,
                            points: 20,
                            taper: "none",
                            randomize: !0,
                            clamp: !1
                        })
                    })
                },
                onCompleteScope: this,
                ease: o.RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), o.TweenMax.to(this._spr3, .5, {
                scaleX: 2.1,
                scaleY: 10,
                alpha: 1,
                delay: .5,
                onStart: function() {
                    t._spr3.active = !0, t._spr3.visible = !0, t._spr3.play(a.KEYS.ANIMS.BIG_LAZOR, !1, 1), t._spr3.scaleX = .01, t._spr3.scaleY = .01, t._spr3.alpha = .95, t._spr3.x = t._x + t._lazorColumnsPaddingX, t._hitArea2.x = t._spr3.x
                },
                onStartScope: this,
                onComplete: function() {
                    o.TweenMax.to(t._spr3, .5, {
                        scaleX: .01,
                        scaleY: 8.5,
                        alpha: .25,
                        onComplete: function() {
                            t._spr3.active = !1, t._spr3.visible = !1, t._spr3.scaleX = .01, t._spr3.scaleY = .01, t._spr3.alpha = .95
                        },
                        onCompleteScope: t,
                        ease: o.RoughEase.ease.config({
                            template: Power0.easeOut,
                            strength: 1,
                            points: 20,
                            taper: "none",
                            randomize: !0,
                            clamp: !1
                        })
                    })
                },
                onCompleteScope: this,
                ease: o.RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), o.TweenMax.to(this._spr1, .5, {
                scaleX: 2,
                scaleY: 10,
                alpha: 1,
                delay: 1.01,
                onStart: function() {
                    t._spr1.active = !0, t._spr1.visible = !0, t._spr1.play(a.KEYS.ANIMS.BIG_LAZOR, !1, 3), t._spr1.scaleX = .01, t._spr1.scaleY = .01, t._spr1.alpha = .95, t._spr1.x = t._x - 2 * t._lazorColumnsPaddingX, t._hitArea1.x = t._spr1.x
                },
                onStartScope: this,
                onComplete: function() {
                    o.TweenMax.to(t._spr1, .5, {
                        scaleX: .01,
                        scaleY: 8.5,
                        alpha: .25,
                        onComplete: function() {
                            t._spr1.active = !1, t._spr1.visible = !1, t._spr1.scaleX = .01, t._spr1.scaleY = .01, t._spr1.alpha = .95
                        },
                        onCompleteScope: t,
                        ease: o.Bounce.easeOut
                    })
                },
                onCompleteScope: this,
                ease: o.RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), o.TweenMax.to(this._spr4, .5, {
                scaleX: 2,
                scaleY: 10,
                alpha: 1,
                delay: 1.01,
                onStart: function() {
                    t._spr4.active = !0, t._spr4.visible = !0, t._spr4.play(a.KEYS.ANIMS.BIG_LAZOR, !1, 3), t._spr4.scaleX = .01, t._spr4.scaleY = .01, t._spr4.alpha = .95, t._spr4.x = t._x + 2 * t._lazorColumnsPaddingX, t._hitArea2.x = t._spr4.x
                },
                onStartScope: this,
                onComplete: function() {
                    o.TweenMax.to(t._spr4, .5, {
                        scaleX: .01,
                        scaleY: 8.5,
                        alpha: .25,
                        onComplete: function() {
                            t._spr4.active = !1, t._spr4.visible = !1, t._spr4.scaleX = .01, t._spr4.scaleY = .01, t._spr4.alpha = .95
                        },
                        onCompleteScope: t,
                        ease: o.Bounce.easeOut
                    })
                },
                onCompleteScope: this,
                ease: o.RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), this.scene.time.delayedCall(2e3, this.stop, null, this), this.isOverlapEnabled = !0, this._startCircularBursts()
        }, r.prototype.stop = function() {
            this._spr1.alpha = 1, this.setActive(!1), this.isOverlapEnabled = !1, this._hitArea1.x = -1e3, this._hitArea2.x = -1e3
        }, r.prototype._startCircularBursts = function() {
            var t = 1.2,
                e = -600;
            this._startCircularBurst(this._x, .98 * a.worldDims.height, 1, t, e, 0), this._startCircularBurst(this._x, .78 * a.worldDims.height, 1, t, e, .15), this._startCircularBurst(this._x, .58 * a.worldDims.height, 1, t, e, .3), this._startCircularBurst(this._x, .38 * a.worldDims.height, 1, t, e, 3 * .15), this._startCircularBurst(this._x + this._lazorColumnsPaddingX, .98 * a.worldDims.height, 1, t, e, .5), this._startCircularBurst(this._x + this._lazorColumnsPaddingX, .78 * a.worldDims.height, 1, t, e, .65), this._startCircularBurst(this._x + this._lazorColumnsPaddingX, .58 * a.worldDims.height, 1, t, e, .8), this._startCircularBurst(this._x + this._lazorColumnsPaddingX, .38 * a.worldDims.height, 1, t, e, .95), this._startCircularBurst(this._x - this._lazorColumnsPaddingX, .98 * a.worldDims.height, 1, t, e, .5), this._startCircularBurst(this._x - this._lazorColumnsPaddingX, .78 * a.worldDims.height, 1, t, e, .65), this._startCircularBurst(this._x - this._lazorColumnsPaddingX, .58 * a.worldDims.height, 1, t, e, .8), this._startCircularBurst(this._x - this._lazorColumnsPaddingX, .38 * a.worldDims.height, 1, t, e, .95), this._startCircularBurst(this._x + 2 * this._lazorColumnsPaddingX, .98 * a.worldDims.height, 1, t, e, 1), this._startCircularBurst(this._x + 2 * this._lazorColumnsPaddingX, .78 * a.worldDims.height, 1, t, e, 1.15), this._startCircularBurst(this._x + 2 * this._lazorColumnsPaddingX, .58 * a.worldDims.height, 1, t, e, 1.3), this._startCircularBurst(this._x + 2 * this._lazorColumnsPaddingX, .38 * a.worldDims.height, 1, t, e, 1.45), this._startCircularBurst(this._x - 2 * this._lazorColumnsPaddingX, .98 * a.worldDims.height, 1, t, e, 1), this._startCircularBurst(this._x - 2 * this._lazorColumnsPaddingX, .78 * a.worldDims.height, 1, t, e, 1.15), this._startCircularBurst(this._x - 2 * this._lazorColumnsPaddingX, .58 * a.worldDims.height, 1, t, e, 1.3), this._startCircularBurst(this._x - 2 * this._lazorColumnsPaddingX, .38 * a.worldDims.height, 1, t, e, 1.45)
        }, r.prototype._startCircularBurst = function(t, e, i, s, n, r) {
            var h = this.scene.effectsMng.addEffect(a.KEYS.ANIMS.LAZOR_CIRCULAR_BURST, t, e, i, 0, 0, n);
            h.setActive(!1), h.setVisible(!1), h.bodySpr.alpha = .75, o.TweenMax.to(h.bodySpr, .75, {
                onStart: function() {
                    h.setActive(!0), h.setVisible(!0), h.setXY(t, e)
                },
                onStartScope: this,
                scaleX: s,
                scaleY: s,
                alpha: 1,
                delay: r
            })
        }, r.prototype.setActive = function(t) {
            void 0 === t && (t = !0);
            for (var e = 0; e < this._visuals.length; e++) {
                var i = this._visuals[e];
                i.setActive(t), i.setVisible(t)
            }
        }, r.prototype.hit = function(t) {}, r.prototype.checkOverlapsAgainst = function(t, e, i) {
            if (this.isOverlapEnabled && (t.overlap(this._hitArea1, e) || t.overlap(this._hitArea2, e)))
                if (e.isSmallTypeActor) e.hit(e.maxHitPoints), this.scene.addDamageDealt(e.maxHitPoints);
                else {
                    var s = this._dps * i / a.MED_TIME_FRAME / 60;
                    e.hit(s), this.scene.addDamageDealt(s)
                }
        }, r.prototype.updateDps = function() {
            this._dps = a.upgrades.bigLazorUpgrade.amount
        }, r.prototype.reset = function() {
            this.stop()
        }, r);

    function r(t) {
        this.isOverlapEnabled = !1, this._lazorColumnsPaddingX = 100, this._dps = 300, this.scene = t, this._hitArea1 = this.scene.physics.add.sprite(-1e3, 0, a.KEYS.GAME_TEX_SS1, a.KEYS.GREEN_SQUARE_64), this._hitArea1.setVisible(!1).setSize(140, 1e3).setOrigin(.5, 1).body.setOffset(-38, 0), this._hitArea2 = this.scene.physics.add.sprite(-1e3, 0, a.KEYS.GAME_TEX_SS1, a.KEYS.GREEN_SQUARE_64), this._hitArea2.setVisible(!1).setSize(140, 1e3).setOrigin(.5, 1).body.setOffset(-38, 0), this._spr1 = this.scene.add.sprite(-1e3, 0, a.KEYS.GAME_TEX_SS1, a.KEYS.GREEN_SQUARE_64), this._spr1.depth = a.BASE_DEPTH.GFX - 1, this._spr1.setOrigin(.5, 1), this._spr2 = this.scene.add.sprite(-1e3, 0, a.KEYS.GAME_TEX_SS1, a.KEYS.GREEN_SQUARE_64), this._spr2.depth = a.BASE_DEPTH.GFX - 1, this._spr2.setOrigin(.5, 1), this._spr3 = this.scene.add.sprite(-1e3, 0, a.KEYS.GAME_TEX_SS1, a.KEYS.GREEN_SQUARE_64), this._spr3.depth = a.BASE_DEPTH.GFX - 1, this._spr3.setOrigin(.5, 1), this._spr4 = this.scene.add.sprite(-1e3, 0, a.KEYS.GAME_TEX_SS1, a.KEYS.GREEN_SQUARE_64), this._spr4.depth = a.BASE_DEPTH.GFX - 1, this._spr4.setOrigin(.5, 1), this._visuals = [this._spr1, this._spr2, this._spr3, this._spr4], this.stop()
    }
    e.default = n
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = i(34),
        n = i(10),
        r = i(35),
        h = i(36),
        l = (p.prototype.addEffect = function(t, e, i, s, a, o, n, r) {
            void 0 === s && (s = 1), void 0 === a && (a = 0), void 0 === o && (o = 0), void 0 === n && (n = 0), void 0 === r && (r = 1);
            var h = null;
            return (h = 0 < this._explos.length ? this._explos.pop() : (console.info("Explo1 pool size exceeded, creating a new explo1 Sprite!"), this.createNewExploEffect())).setActive(!0), h.setVisible(!0), h.setXY(e, i), h.setScale(s, s), h.bodySpr.setVelocity(o, n), h.setRotation(a), h.play(t, r), this._scene.explos.push(h), h
        }, p.prototype.addExploEffectTrail = function(t, e, i, s, a, o, n) {
            for (var r, h, l, p, d, _ = this, c = 0; c < i; c++) this._scene.time.delayedCall(c * s, function() {
                for (var i = 0; i < e; i++) r = Phaser.Math.RND.between(-o.x, o.x), h = Phaser.Math.RND.between(-o.y, o.y), l = Phaser.Math.RND.rotation(), p = Phaser.Math.RND.between(-n.x, n.x), d = Phaser.Math.RND.between(-n.y, n.y), _.addEffect(t, a.x + r, a.y + h, 1, l, p, d)
            }, null, this)
        }, p.prototype.addPlayerPowerUp = function(t, e, i, s, a) {
            var o = null;
            return (o = 0 < this._playerPowUps.length ? this._playerPowUps.pop() : (console.info("Game Items pool size exceeded, creating a new PowUp Sprite!"), this.createNewPlayerPowUp())).setFrame(t), o.setActive(!0), o.setVisible(!0), o.setX(e), o.setY(i), o.setTravelDirection(s, a), this._scene.gameItems.push(o), o
        }, p.prototype.addStar = function(t, e, i, s, a, o) {
            var n = null;
            return (n = 0 < this._stars.length ? this._stars.pop() : (console.info("Game Items pool size exceeded, creating a new PowUp Sprite!"), this.createNewStar())).setFrame(t), n.setActive(!0), n.setVisible(!0), n.setX(e), n.setY(i), n.setTravelDirection(s, a, o), this._scene.gameItems.push(n), n
        }, p.prototype.poolExplo = function(t) {
            t.reset(), this._explos.push(t)
        }, p.prototype.poolGameItem = function(t) {
            switch (t.reset(), t.gameItemType) {
                case n.GAME_ITEM_TYPE.STAR:
                    this._stars.push(t);
                    break;
                case n.GAME_ITEM_TYPE.PLAYER_POW_UP:
                default:
                    this._playerPowUps.push(t)
            }
        }, p.prototype.createNewExploEffect = function() {
            var t = new o.ExploGfx(this._scene);
            return t.setDepth(a.BASE_DEPTH.GFX + this._explos.length), t
        }, p.prototype.createNewPlayerPowUp = function() {
            var t = new r.PlayerPowUp(this._scene, -1e3, -1e3, a.KEYS.GAME_TEX_SS1, a.KEYS.GAME_ITEM.HEALTH);
            return t.setDepth(a.BASE_DEPTH.ITEM + this._stars.length), t
        }, p.prototype.createNewStar = function() {
            var t = new h.Star(this._scene, -1e3, -1e3, a.KEYS.GAME_TEX_SS1, a.KEYS.GAME_ITEM.STAR);
            return t.setDepth(a.BASE_DEPTH.ITEM + this._stars.length), t
        }, p);

    function p(t) {
        this.exploPoolSize = 200, this.playerPowUpPoolSize = 20, this.starsPoolSize = 100, this._scene = t, this._explos = [], this._playerPowUps = [], this._stars = [];
        for (var e = 0; e < this.exploPoolSize; e++) {
            var i = this.createNewExploEffect();
            this._explos.push(i)
        }
        for (e = 0; e < this.playerPowUpPoolSize; e++) {
            var s = this.createNewPlayerPowUp();
            this._playerPowUps.push(s)
        }
        for (e = 0; e < this.starsPoolSize; e++) {
            var a = this.createNewStar();
            this._stars.push(a)
        }
    }
    e.EffectsManager = l
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = i(13),
        h = o(i(1)),
        l = (a(p, n = r.BaseActor), p.prototype.play = function(t, e) {
            void 0 === e && (e = 1), "" != t ? (this.setVisible(!0), this.bodySpr.play(t), this.bodySpr.anims.setTimeScale(e)) : this.toBePooledBack = !0
        }, p.prototype.setRotation = function(t) {
            this.bodySpr.rotation = t
        }, p.prototype.setActive = function(t) {
            this.bodySpr.setActive(t)
        }, p.prototype.setVisible = function(t) {
            this.bodySpr.setVisible(t)
        }, p.prototype.setXY = function(t, e) {
            this.bodySpr.x = t, this.bodySpr.y = e
        }, p.prototype.setScale = function(t, e) {
            this.bodySpr.setScale(t, e)
        }, p.prototype.onAnimComplete = function() {
            this.toBePooledBack = !0
        }, p.prototype.setDepth = function(t) {
            this.bodySpr.setDepth(t)
        }, p.prototype.reset = function() {
            n.prototype.reset.call(this), this.setXY(-1e3, -1e3), this.setActive(!1), this.setVisible(!1), this.bodySpr.setAcceleration(0), this.bodySpr.setVelocity(0)
        }, p);

    function p(t, e, i) {
        void 0 === e && (e = 0), void 0 === i && (i = 0);
        var s = n.call(this, t) || this;
        return s.bodySpr = t.physics.add.sprite(e, i, h.KEYS.GAME_TEX_SS1, h.KEYS.ANIMS.EXPLO1 + "0000"), s.bodySpr.on("animationcomplete", s.onAnimComplete, s), s.reset(), s.toBePooledBack = !1, s
    }
    e.ExploGfx = l
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = i(10),
        h = o(i(1)),
        l = (a(p, n = r.GameItem), p.prototype.onPickedUp = function() {
            n.prototype.onPickedUp.call(this), this.scene.effectsMng.addEffect(h.KEYS.ANIMS.POW_UP_PICKED, this.x, this.y, this.scaleX), h.playSfx(h.SFX_KEYS.POW_UP)
        }, p);

    function p(t, e, i, s, a) {
        return n.call(this, r.GAME_ITEM_TYPE.PLAYER_POW_UP, t, e, i, s, a) || this
    }
    e.PlayerPowUp = l
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = i(10),
        h = o(i(1)),
        l = (a(p, n = r.GameItem), p.prototype.update = function(t) {
            this.velocity.x += this.acceleration.x * t / h.MED_TIME_FRAME, this.velocity.y += this.acceleration.y * t / h.MED_TIME_FRAME, this.x += this.velocity.x * t / h.MED_TIME_FRAME, this.y += this.velocity.y * t / h.MED_TIME_FRAME, this.x < 0 ? this.velocity.x = Math.abs(this.velocity.x) : this.x > h.worldDims.width && (this.velocity.x = -Math.abs(this.velocity.x)), this.y > h.worldDims.height && (this.toBePooledBack = !0, this.__alreadyPicked = !0)
        }, p.prototype.onPickedUp = function() {
            n.prototype.onPickedUp.call(this), h.playRandStarSfx()
        }, p);

    function p(t, e, i, s, a) {
        return n.call(this, r.GAME_ITEM_TYPE.STAR, t, e, i, s, a) || this
    }
    e.Star = l
}, , , function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = i(40),
        o = i(41),
        n = i(42),
        r = s(i(1)),
        h = i(2),
        l = i(43),
        p = i(44),
        d = i(45),
        _ = i(46),
        c = i(47),
        S = i(48),
        u = i(49),
        g = i(50),
        y = i(51),
        m = i(52),
        f = i(53),
        E = i(54),
        A = i(55),
        T = i(56),
        w = i(57),
        M = i(58),
        b = i(59),
        D = i(60),
        R = (B.prototype.createNewActor = function(t) {
            var e;
            switch (t) {
                case r.ARMATURE_IDS.B1:
                    e = new a.Baddie1(this._scene);
                    break;
                case r.ARMATURE_IDS.B2:
                    e = new o.Baddie2(this._scene);
                    break;
                case r.ARMATURE_IDS.B3:
                    e = new l.Baddie3(this._scene);
                    break;
                case r.ARMATURE_IDS.B4:
                    e = new n.Baddie4(this._scene);
                    break;
                case r.ARMATURE_IDS.B5:
                    e = new p.Baddie5(this._scene);
                    break;
                case r.ARMATURE_IDS.B5_1:
                    e = new E.Baddie5_1(this._scene);
                    break;
                case r.ARMATURE_IDS.B5_2:
                    e = new A.Baddie5_2(this._scene);
                    break;
                case r.ARMATURE_IDS.B5_3:
                    e = new T.Baddie5_3(this._scene);
                    break;
                case r.ARMATURE_IDS.B6:
                    e = new d.Baddie6(this._scene);
                    break;
                case r.ARMATURE_IDS.B7:
                    e = new g.Baddie7(this._scene);
                    break;
                case r.ARMATURE_IDS.B8:
                    e = new y.Baddie8(this._scene);
                    break;
                case r.ARMATURE_IDS.B9:
                    e = new m.Baddie9(this._scene);
                    break;
                case r.ARMATURE_IDS.MD_B1:
                    e = new c.MediumBaddie1(this._scene);
                    break;
                case r.ARMATURE_IDS.MD_B2:
                    e = new u.MediumBaddie2(this._scene);
                    break;
                case r.ARMATURE_IDS.MD_B3:
                    e = new f.MediumBaddie3(this._scene);
                    break;
                case r.ARMATURE_IDS.BOSS1:
                    e = new w.Boss1(this._scene);
                    break;
                case r.ARMATURE_IDS.BOSS2:
                    e = new M.Boss2(this._scene);
                    break;
                case r.ARMATURE_IDS.BOSS3:
                    e = new b.Boss3(this._scene);
                    break;
                case r.ARMATURE_IDS.BOSS4:
                    e = new D.Boss4(this._scene);
                    break;
                case r.ARMATURE_IDS.PLAYER_BOT:
                    e = new _.PlayerBot(this._scene);
                    break;
                case r.ARMATURE_IDS.PLAYER_MISSILE_S:
                case r.ARMATURE_IDS.PLAYER_MISSILE_L:
                    e = new S.PlayerMissile(this._scene)
            }
            if (h.isDefined(e.armature)) {
                var i = this.computeNextActorDepth();
                e.armature.depth = i, e.bodySpr.depth = i
            } else h.isDefined(e.bodySpr) && (e.bodySpr.depth = this.computeNextActorDepth());
            return h.isDefined(e) && e.reset(), e
        }, B.prototype.computeNextActorDepth = function() {
            for (var t = r.BASE_DEPTH.SHIP, e = 0; e < this._pools.length; e++) h.isDefined(this._pools[e]) && (t += this._pools[e].length);
            return t
        }, B.prototype.addActor = function(t, e) {
            var i = this._pools[t].pop();
            if (h.isDefined(i) || (i = this.createNewActor(t), console.log("Pool for armature_id", t, "empty, creating a new actor..."), h.isDefined(i))) return i.applySettings(e), e.faction == r.FACTION.BADDIES ? (this._scene.baddieShips.push(i), 0 < i.scoreValue && this._scene.addBaddiesTotal(1)) : e.faction === r.FACTION.PLAYER ? this._scene.playerShips.push(i) : this._scene.baddieShips.push(i), i.setActive(!0), i.setVisible(!0), i;
            console.error("Could not create new baddie, armature_id:", t, ". Check pools and baddie type creation.")
        }, B.prototype.poolActor = function(t) {
            this._pools[t.armatureId].push(t), t.reset()
        }, B);

    function B(t) {
        this.b1PoolSize = 20, this.b2PoolSize = 8, this.b3PoolSize = 20, this.b4PoolSize = 20, this.b5PoolSize = 10, this.b5_1PoolSize = 10, this.b5_2PoolSize = 10, this.b5_3PoolSize = 10, this.b6PoolSize = 20, this.b7PoolSize = 8, this.b8PoolSize = 24, this.b9PoolSize = 8, this.mdB1PoolSize = 3, this.mdB2PoolSize = 3, this.mdB3PoolSize = 3, this.playerBotSize = 3, this.playerMissilesSize = 3, this._scene = t, this._pools = [], this._pools[r.ARMATURE_IDS.B1] = [], this._pools[r.ARMATURE_IDS.B2] = [], this._pools[r.ARMATURE_IDS.B3] = [], this._pools[r.ARMATURE_IDS.B4] = [], this._pools[r.ARMATURE_IDS.B5] = [], this._pools[r.ARMATURE_IDS.B5_1] = [], this._pools[r.ARMATURE_IDS.B5_2] = [], this._pools[r.ARMATURE_IDS.B5_3] = [], this._pools[r.ARMATURE_IDS.B6] = [], this._pools[r.ARMATURE_IDS.B7] = [], this._pools[r.ARMATURE_IDS.B8] = [], this._pools[r.ARMATURE_IDS.B9] = [], this._pools[r.ARMATURE_IDS.MD_B1] = [], this._pools[r.ARMATURE_IDS.MD_B2] = [], this._pools[r.ARMATURE_IDS.MD_B3] = [], this._pools[r.ARMATURE_IDS.BOSS1] = [], this._pools[r.ARMATURE_IDS.BOSS2] = [], this._pools[r.ARMATURE_IDS.BOSS3] = [], this._pools[r.ARMATURE_IDS.BOSS4] = [], this._pools[r.ARMATURE_IDS.PLAYER_BOT] = [], this._pools[r.ARMATURE_IDS.PLAYER_MISSILE_S] = [], this._pools[r.ARMATURE_IDS.PLAYER_MISSILE_L] = [];
        for (var e = 0; e < this.b1PoolSize; e++) this._pools[r.ARMATURE_IDS.B1].push(this.createNewActor(r.ARMATURE_IDS.B1));
        for (e = 0; e < this.b2PoolSize; e++) this._pools[r.ARMATURE_IDS.B2].push(this.createNewActor(r.ARMATURE_IDS.B2));
        for (e = 0; e < this.b3PoolSize; e++) this._pools[r.ARMATURE_IDS.B3].push(this.createNewActor(r.ARMATURE_IDS.B3));
        for (e = 0; e < this.b4PoolSize; e++) this._pools[r.ARMATURE_IDS.B4].push(this.createNewActor(r.ARMATURE_IDS.B4));
        for (e = 0; e < this.b5PoolSize; e++) this._pools[r.ARMATURE_IDS.B5].push(this.createNewActor(r.ARMATURE_IDS.B5));
        for (e = 0; e < this.b5_1PoolSize; e++) this._pools[r.ARMATURE_IDS.B5_1].push(this.createNewActor(r.ARMATURE_IDS.B5_1));
        for (e = 0; e < this.b5_2PoolSize; e++) this._pools[r.ARMATURE_IDS.B5_2].push(this.createNewActor(r.ARMATURE_IDS.B5_2));
        for (e = 0; e < this.b5_3PoolSize; e++) this._pools[r.ARMATURE_IDS.B5_3].push(this.createNewActor(r.ARMATURE_IDS.B5_3));
        for (e = 0; e < this.b6PoolSize; e++) this._pools[r.ARMATURE_IDS.B6].push(this.createNewActor(r.ARMATURE_IDS.B6));
        for (e = 0; e < this.b8PoolSize; e++) this._pools[r.ARMATURE_IDS.B8].push(this.createNewActor(r.ARMATURE_IDS.B8));
        for (e = 0; e < this.b7PoolSize; e++) this._pools[r.ARMATURE_IDS.B7].push(this.createNewActor(r.ARMATURE_IDS.B7));
        for (e = 0; e < this.b9PoolSize; e++) this._pools[r.ARMATURE_IDS.B9].push(this.createNewActor(r.ARMATURE_IDS.B9));
        for (e = 0; e < this.mdB1PoolSize; e++) this._pools[r.ARMATURE_IDS.MD_B1].push(this.createNewActor(r.ARMATURE_IDS.MD_B1));
        for (e = 0; e < this.mdB2PoolSize; e++) this._pools[r.ARMATURE_IDS.MD_B2].push(this.createNewActor(r.ARMATURE_IDS.MD_B2));
        for (e = 0; e < this.mdB3PoolSize; e++) this._pools[r.ARMATURE_IDS.MD_B3].push(this.createNewActor(r.ARMATURE_IDS.MD_B3));
        for (this._pools[r.ARMATURE_IDS.BOSS1].push(this.createNewActor(r.ARMATURE_IDS.BOSS1)), this._pools[r.ARMATURE_IDS.BOSS2].push(this.createNewActor(r.ARMATURE_IDS.BOSS2)), this._pools[r.ARMATURE_IDS.BOSS3].push(this.createNewActor(r.ARMATURE_IDS.BOSS3)), this._pools[r.ARMATURE_IDS.BOSS4].push(this.createNewActor(r.ARMATURE_IDS.BOSS4)), e = 0; e < this.playerBotSize; e++) this._pools[r.ARMATURE_IDS.PLAYER_BOT].push(this.createNewActor(r.ARMATURE_IDS.PLAYER_BOT));
        for (e = 0; e < this.playerMissilesSize; e++) this._pools[r.ARMATURE_IDS.PLAYER_MISSILE_S].push(this.createNewActor(r.ARMATURE_IDS.PLAYER_MISSILE_S));
        for (e = 0; e < this.playerMissilesSize; e++) this._pools[r.ARMATURE_IDS.PLAYER_MISSILE_L].push(this.createNewActor(r.ARMATURE_IDS.PLAYER_MISSILE_L))
    }
    e.ActorsManager = R
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = (a(d, n = h.Actor), d.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), r.playRandSmallBaddieDefeatedSfx(), this.scene.rollStarDropChance(this.bodySpr.x, this.bodySpr.y)
        }, d);

    function d(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B1, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B1, e
    }
    e.Baddie1 = p
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(4),
        d = i(2),
        _ = (a(c, n = h.Actor), c.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), r.playRandSmallBaddieDefeatedSfx(), this.scene.rollStarDropChance(this.bodySpr.x, this.bodySpr.y), this.scene.rollStarDropChance(this.bodySpr.x, this.bodySpr.y)
        }, c.prototype.startAct1 = function(t) {
            this.bodySpr.active && (p.TweenMax.to(this.bodySpr, t.travelToSpotTime / 1e3, {
                x: t.spotX,
                y: t.spotY,
                ease: p.Back.easeOut,
                onComplete: this._shootFromSpotThenExit,
                onCompleteScope: this,
                onCompleteParams: [t]
            }), d.isDefined(t.spotAngle) ? p.TweenMax.to(this.bodySpr, t.travelToSpotTime / 1e3, {
                angle: t.spotAngle,
                ease: p.Power2.easeInOut
            }) : (this.target = this.scene.playerShip, this.lookAtPoint = null))
        }, c.prototype._shootFromSpotThenExit = function(t) {
            this.bodySpr.active && (this.target = this.scene.playerShip, this.playArmatureAnim(r.BADDIE_ANIMS.ATTACK), this.weaponSettings.startDelay = 0, this.startWeapon(), this.scene.time.delayedCall(t.spotTime, this._act1_2, [t], this))
        }, c.prototype._act1_2 = function(t) {
            this.bodySpr.active && (p.TweenMax.to(this.bodySpr, 1, {
                x: t.exitX,
                y: t.exitY,
                ease: p.Power2.easeIn,
                onComplete: this._endAct,
                onCompleteScope: this
            }), d.isDefined(t.exitAngle) ? p.TweenMax.to(this.bodySpr, t.travelToSpotTime / 1e3, {
                angle: t.exitAngle,
                ease: p.Power2.easeInOut
            }) : (this.target = void 0, this.setLookAtPoint(t.exitX, t.exitY)))
        }, c.prototype.startAct2 = function(t) {
            this.bodySpr.active && (this.isOverlapEnabled = !1, this.armature.scale = .1, this.armature.alpha = .01, p.TweenMax.to(this.armature, t.travelToSpotTime / 1e3, {
                scale: 1,
                alpha: 1,
                ease: p.Power2.easeOut
            }), p.TweenMax.to(this.bodySpr, t.travelToSpotTime / 1e3, {
                x: t.spotX,
                y: t.spotY,
                ease: p.Power2.easeOut,
                onComplete: this._act2ShotFromSpotThenExit,
                onCompleteScope: this,
                onCompleteParams: [t]
            }), d.isDefined(t.spotAngle) ? p.TweenMax.to(this.bodySpr, t.travelToSpotTime / 1e3, {
                angle: t.spotAngle,
                ease: p.Power2.easeInOut
            }) : (this.target = this.scene.playerShip, this.lookAtPoint = null))
        }, c.prototype._act2ShotFromSpotThenExit = function(t) {
            this.bodySpr.active && (this.isOverlapEnabled = !0, this.scene.time.delayedCall(t.spotTime, this._act1_2, [t], this), this.playArmatureAnim(r.BADDIE_ANIMS.ATTACK), this.weaponSettings.startDelay = 250, this.startWeapon())
        }, c.prototype._endAct = function() {
            this.bodySpr.active && this.clear()
        }, c);

    function c(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B2, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B2, e.enableAnimationCompleteListeners(), e
    }
    e.Baddie2 = _
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = (a(d, n = h.Actor), d.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), r.playRandSmallBaddieDefeatedSfx()
        }, d);

    function d(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B4, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B4, e
    }
    e.Baddie4 = p
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(7),
        d = (a(_, n = h.Actor), _.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), r.playRandSmallBaddieDefeatedSfx(), this.scene.rollStarDropChance(this.bodySpr.x, this.bodySpr.y)
        }, _);

    function _(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B3, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B3, e.lifebar = new p.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e
    }
    e.Baddie3 = d
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(6),
        d = (a(_, n = h.Actor), _.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), r.playRandMedBaddieDefeatedSfx()
        }, _.prototype.customMedB2Shielder1Weapon = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 10, this.weaponSettings.velocity = 350, this.weaponSettings.fireRate = 200, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 500, this.weaponSettings.barrelLength = 40, this.startWeapon()
        }, _.prototype.customMed1Spawn1Weapon = function(t) {
            var e = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME);
            this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.numShots = 1, this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.velocity = 300, this.weaponSettings.fireRate = 250, this.weaponSettings.startDelay = 1750 + 150 * t, this.weaponSettings.barrelLength = 20, this.weaponSettings.bulletSettings = e, this.startWeapon()
        }, _.prototype.update = function(t) {
            n.prototype.update.call(this, t)
        }, _.prototype.updateShielderMode = function(t) {
            n.prototype.updateShielderMode.call(this, t), this.bodySpr.rotation = this.shieldRotation
        }, _);

    function _(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B5, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B5, e
    }
    e.Baddie5 = d
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(6),
        d = i(4),
        _ = (a(c, n = h.Actor), c.prototype.customBoss1Shielder1 = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.SPREAD, this.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: Phaser.Math.DegToRad(30),
                numBullets: 3,
                fromBodyRotation: !0
            }, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID), this.weaponSettings.numShots = 3, this.weaponSettings.velocity = 300, this.weaponSettings.fireRate = 250, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1500, this.weaponSettings.barrelLength = 40, this.startWeapon()
        }, c.prototype.customBoss1Shielder2 = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 8, this.weaponSettings.velocity = 400, this.weaponSettings.fireRate = 500, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1e3, this.weaponSettings.barrelLength = 40, this.startWeapon()
        }, c.prototype.customBoss1Shielder3 = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.SPREAD, this.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: Phaser.Math.DegToRad(30),
                numBullets: 3,
                fromBodyRotation: !0
            }, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 1, this.weaponSettings.velocity = 400, this.weaponSettings.fireRate = 100, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1500, this.weaponSettings.barrelLength = 40, this.startWeapon()
        }, c.prototype.customBoss1Shielder4 = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.SPREAD, this.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: Phaser.Math.DegToRad(45),
                numBullets: 3,
                fromBodyRotation: !0
            }, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 1, this.weaponSettings.velocity = 400, this.weaponSettings.fireRate = 500, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 750, this.weaponSettings.barrelLength = 20, this.startWeapon()
        }, c.prototype.customBoss1Guard1R = function(t) {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 5, this.weaponSettings.velocity = 300, this.weaponSettings.fireRate = 250, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1500, this.weaponSettings.barrelLength = 40, this.startWeapon(), this.bodySpr.setVelocity(0), this.bodySpr.rotation = Phaser.Math.DegToRad(180), this.updateMode = r.UPDATE_MODEL_TYPE.CUSTOM, d.TweenMax.to(this.bodySpr, 1, {
                x: .9 * r.worldDims.width,
                y: t,
                onComplete: this._boss1Guard1R_act2,
                onCompleteScope: this
            })
        }, c.prototype._boss1Guard1R_act2 = function() {
            this.updateMode = r.UPDATE_MODEL_TYPE.NORMAL, this.bodySpr.setVelocity(-200, -50), this.target = this.scene.playerShip
        }, c.prototype.customBoss1Guard1L = function(t) {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 5, this.weaponSettings.velocity = 300, this.weaponSettings.fireRate = 250, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1500, this.weaponSettings.barrelLength = 40, this.startWeapon(), this.bodySpr.setVelocity(0), this.bodySpr.rotation = Phaser.Math.DegToRad(0), this.updateMode = r.UPDATE_MODEL_TYPE.CUSTOM, d.TweenMax.to(this.bodySpr, 1, {
                x: .1 * r.worldDims.width,
                y: t,
                onComplete: this._boss1Guard1L_act2,
                onCompleteScope: this
            })
        }, c.prototype._boss1Guard1L_act2 = function() {
            this.updateMode = r.UPDATE_MODEL_TYPE.NORMAL, this.bodySpr.setVelocity(200, -50), this.target = this.scene.playerShip
        }, c.prototype.customBoss1CornerTL = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 6, this.weaponSettings.velocity = 400, this.weaponSettings.fireRate = 500, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1750, this.weaponSettings.barrelLength = 40, this.startWeapon(), this.bodySpr.setVelocity(0), this.bodySpr.rotation = Phaser.Math.DegToRad(90), d.TweenMax.to(this.bodySpr, 1.5, {
                x: .1 * r.worldDims.width,
                y: .1 * r.worldDims.height,
                onComplete: this._customBoss1CornerTL_act2,
                onCompleteScope: this
            })
        }, c.prototype._customBoss1CornerTL_act2 = function() {
            this.updateMode = r.UPDATE_MODEL_TYPE.NORMAL, this.bodySpr.setVelocity(200, 0), this.target = null
        }, c.prototype.customBoss1CornerTR = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 6, this.weaponSettings.velocity = 400, this.weaponSettings.fireRate = 500, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1750, this.weaponSettings.barrelLength = 40, this.startWeapon(), this.bodySpr.setVelocity(0), this.bodySpr.rotation = Phaser.Math.DegToRad(180), d.TweenMax.to(this.bodySpr, 1.5, {
                x: .9 * r.worldDims.width,
                y: .1 * r.worldDims.height,
                onComplete: this._customBoss1CornerTR_act2,
                onCompleteScope: this
            })
        }, c.prototype._customBoss1CornerTR_act2 = function() {
            this.updateMode = r.UPDATE_MODEL_TYPE.NORMAL, this.bodySpr.setVelocity(0, 200), this.target = null
        }, c.prototype.customBoss1CornerBL = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 6, this.weaponSettings.velocity = 400, this.weaponSettings.fireRate = 500, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1750, this.weaponSettings.barrelLength = 40, this.startWeapon(), this.bodySpr.setVelocity(0), this.bodySpr.rotation = Phaser.Math.DegToRad(0), d.TweenMax.to(this.bodySpr, 1.5, {
                x: .1 * r.worldDims.width,
                y: .9 * r.worldDims.height,
                onComplete: this._customBoss1CornerBL_act2,
                onCompleteScope: this
            })
        }, c.prototype._customBoss1CornerBL_act2 = function() {
            this.updateMode = r.UPDATE_MODEL_TYPE.NORMAL, this.bodySpr.setVelocity(0, -200), this.target = null
        }, c.prototype.customBoss1CornerBR = function() {
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.bulletSettings = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME), this.weaponSettings.numShots = 6, this.weaponSettings.velocity = 400, this.weaponSettings.fireRate = 500, this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.bulletSettings.scale = 1, this.weaponSettings.startDelay = 1750, this.weaponSettings.barrelLength = 40, this.startWeapon(), this.bodySpr.setVelocity(0), this.bodySpr.rotation = Phaser.Math.DegToRad(-90), d.TweenMax.to(this.bodySpr, 1.5, {
                x: .9 * r.worldDims.width,
                y: .9 * r.worldDims.height,
                onComplete: this._customBoss1CornerBR_act2,
                onCompleteScope: this
            })
        }, c.prototype._customBoss1CornerBR_act2 = function() {
            this.updateMode = r.UPDATE_MODEL_TYPE.NORMAL, this.bodySpr.setVelocity(-200, 0), this.target = null
        }, c.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), r.playRandMedBaddieDefeatedSfx(), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 3, 2, 70, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -50,
                y: 50
            }, {
                x: 80,
                y: 80
            })
        }, c);

    function c(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B6, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B6, e.bodySpr.setSize(72, 72), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 36, -10), e
    }
    e.Baddie6 = _
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(2),
        p = (a(d, n = h.Actor), d.prototype.updateSettings = function() {
            switch (r.upgrades.botsStatsUpgrade.level) {
                case 0:
                    this._weaponSettings.fireRate = 400, this._weaponSettings.velocity = 750;
                    break;
                case 1:
                    this._weaponSettings.fireRate = 350, this._weaponSettings.velocity = 800;
                    break;
                case 2:
                    this._weaponSettings.fireRate = 300, this._weaponSettings.velocity = 850;
                    break;
                case 3:
                    this._weaponSettings.fireRate = 250, this._weaponSettings.velocity = 900;
                    break;
                case 4:
                    this._weaponSettings.fireRate = 200, this._weaponSettings.velocity = 950;
                    break;
                case 5:
                    this._weaponSettings.fireRate = 150, this._weaponSettings.velocity = 1e3
            }
        }, d.prototype.updateShielderMode = function(t) {
            n.prototype.updateShielderMode.call(this, t), this.rotationTowardsTarget = this._defaultRotation, l.isDefined(this.target) && (this.target.x < 0 || this.target.y < 0 ? this.target = null : this.rotationTowardsTarget = Phaser.Math.Angle.BetweenPoints(this.bodySpr, this.target)), this.rotateToTargetRotation(t)
        }, d.prototype.doAutoShoot1 = function() {
            this.shootFromCurrentRotation()
        }, d.prototype.doDefeatedExplosion = function() {
            this.scene.effectsMng.addEffect(r.KEYS.ANIMS.EXPLO2, this.bodySpr.x, this.bodySpr.y, this.bodySpr.scaleX, Phaser.Math.RND.rotation())
        }, d.prototype.reset = function() {
            n.prototype.reset.call(this), this.isOverlapEnabled = !1
        }, d);

    function d(t) {
        var e = n.call(this, t) || this;
        return l.isDefined(e.bodySpr) && e.bodySpr.destroy(), e._defaultRotation = Phaser.Math.DegToRad(-90), e.bodySpr = e.scene.physics.add.sprite(0, 0, r.KEYS.GAME_TEX_SS1, r.KEYS.SHIP.PLAYER_BOT), e.bodySpr.play(r.KEYS.ANIMS.PLAYER_BOT), e.body = e.bodySpr.body, e.armatureId = r.ARMATURE_IDS.PLAYER_BOT, e.updateMode = r.UPDATE_MODEL_TYPE.SHIELDER, e.bodySpr.depth = r.BASE_DEPTH.SHIP - 2, e.reset(), e
    }
    e.PlayerBot = p
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(4),
        d = i(7),
        _ = (a(c, n = h.Actor), c.prototype.startCustomBehavior1 = function(t) {
            void 0 === t && (t = !1), this.bodySpr.active && (this.turnRate = 1 * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400, this.weaponSettings.barrelLength = 50, this.setLookAtPoint(t ? .2 * r.worldDims.width : .8 * r.worldDims.width, .3 * r.worldDims.height), this.bodySpr.angle = 90, this.bodySpr.x = t ? .4 * r.worldDims.width : .6 * r.worldDims.width, this.bodySpr.y = -100, p.TweenMax.to(this.bodySpr, 3, {
                x: t ? .2 * r.worldDims.width : .8 * r.worldDims.width,
                y: .3 * r.worldDims.height,
                onComplete: this._act1_1,
                onCompleteScope: this,
                onCompleteParams: [t]
            }), this._readyLifeBar())
        }, c.prototype._act1_1 = function(t) {
            var e = this;
            if (this.bodySpr.active) {
                this.setLookAtPoint(.5 * r.worldDims.width, .75 * r.worldDims.height);
                for (var i = {
                        fromBodyRotation: !0,
                        numBullets: 4,
                        angleRadiansBettween: 45 * Phaser.Math.DEG_TO_RAD
                    }, s = function(t) {
                        a.scene.time.delayedCall(300 * t, function() {
                            i.numBullets = t % 3 + 4, i.angleRadiansBettween = (60 - 3 * t) * Phaser.Math.DEG_TO_RAD, this.shootSpreadAtAngle(i)
                        }, null, a)
                    }, a = this, o = 0; o < 10; o++) s(o);
                this.playArmatureAnim(r.BADDIE_ANIMS.ATTACK), this.scene.time.delayedCall(3500, this._act1_2, [t], this), this.scene.time.delayedCall(2500, function() {
                    e.playArmatureAnim(r.BADDIE_ANIMS.FLY)
                }, null, this)
            }
        }, c.prototype._act1_2 = function(t) {
            var e = this;
            if (this.bodySpr.active) {
                p.TweenMax.to(this.bodySpr, 2, {
                    x: t ? .45 * r.worldDims.width : .55 * r.worldDims.width,
                    y: .2 * r.worldDims.height,
                    onComplete: this._act1_3,
                    onCompleteScope: this
                }), this.setLookAtPoint(this.scene.playerShip.bodySpr.x, this.scene.playerShip.bodySpr.y);
                for (var i = {
                        fromBodyRotation: !0,
                        numBullets: 4,
                        angleRadiansBettween: 30 * Phaser.Math.DEG_TO_RAD
                    }, s = function(t) {
                        a.scene.time.delayedCall(500 * t, function() {
                            i.angleRadiansBettween = (40 - 2 * t) * Phaser.Math.DEG_TO_RAD, this.weaponSettings.angleInRadians = this.bodySpr.rotation, this.weaponSettings.velocity = 350 + 10 * t, this.shootSpreadAtAngle(i)
                        }, null, a)
                    }, a = this, o = 0; o < 10; o++) s(o);
                this.playArmatureAnim(r.BADDIE_ANIMS.ATTACK), this.scene.time.delayedCall(3e3, function() {
                    e.playArmatureAnim(r.BADDIE_ANIMS.FLY)
                }, null, this)
            }
        }, c.prototype._act1_3 = function() {
            this.bodySpr.active && (this.setLookAtPoint(.5 * r.worldDims.width, 1.1 * r.worldDims.height), p.TweenMax.to(this.bodySpr, 5, {
                x: .5 * r.worldDims.width,
                y: 1.15 * r.worldDims.height,
                onComplete: this._endAct,
                onCompleteScope: this,
                ease: p.Back.easeIn.config(1.7)
            }))
        }, c.prototype.startCustomBehavior2 = function(t) {
            this.bodySpr.active && (this.turnRate = Phaser.Math.DegToRad(1), this.weaponSettings.velocity = 300, this.weaponSettings.barrelLength = 40, this.setLookAtPoint(t ? .75 * r.worldDims.width : .25 * r.worldDims.width, .9 * r.worldDims.height), this.bodySpr.angle = 90, this.bodySpr.x = .6 * r.worldDims.width, this.bodySpr.y = -100, p.TweenMax.to(this.bodySpr, 1.5, {
                x: t ? .2 * r.worldDims.width : .8 * r.worldDims.width,
                y: .2 * r.worldDims.height,
                onComplete: this._act2_1,
                onCompleteScope: this,
                onCompleteParams: [t]
            }), this._readyLifeBar())
        }, c.prototype._act2_1 = function(t) {
            if (this.bodySpr.active) {
                for (var e = 1; e < 4; e++) this.scene.time.delayedCall(500 * e, function(t) {
                    var e = {
                        fromBodyRotation: !0,
                        numBullets: 5 + t,
                        angleRadiansBettween: Phaser.Math.DegToRad(60 / t)
                    };
                    this.weaponSettings.velocity = 250, this.shootSpreadAtAngle(e), e = {
                        fromBodyRotation: !0,
                        numBullets: 3 + t,
                        angleRadiansBettween: Phaser.Math.DegToRad(90 / t)
                    }, this.weaponSettings.velocity = 350, this.shootSpreadAtAngle(e), e = {
                        fromBodyRotation: !0,
                        numBullets: 1 % t,
                        angleRadiansBettween: Phaser.Math.DegToRad(30 / t)
                    }, this.weaponSettings.velocity = 400, this.shootSpreadAtAngle(e)
                }, [e], this);
                p.TweenMax.to(this.bodySpr, 2, {
                    x: t ? .3 * r.worldDims.width : .7 * r.worldDims.width,
                    y: .3 * r.worldDims.height
                }), this._actTimer = this.scene.time.delayedCall(2e3, this._act2_2, null, this)
            }
        }, c.prototype._act2_2 = function() {
            if (this.bodySpr.active) {
                this.setLookAtPoint(.5 * r.worldDims.width, r.worldDims.height + 1e3), this._missile1Settings = {
                    faction: r.FACTION.BADDIES,
                    scoreValue: 50,
                    hp: 60,
                    updateMode: r.UPDATE_MODEL_TYPE.MISSILE,
                    velocityMagnitude: 200,
                    missileModeConfig: {
                        startRotation: .5 * -Math.PI,
                        turnRate: Phaser.Math.DegToRad(2),
                        target: this.scene.playerShip,
                        missileModeDuration: 3e3
                    }
                };
                for (var t = function(t) {
                        e.scene.time.delayedCall(250 * t, function(e) {
                            if (this.bodySpr.active) {
                                var i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B5, this._missile1Settings);
                                i.bodySpr.x = this.bodySpr.x + 20, i.bodySpr.y = this.bodySpr.y - 40, i.bodySpr.rotation = Phaser.Math.DegToRad(-45 - 5 * t), i.customMed1Spawn1Weapon(t)
                            }
                        }, [t], e)
                    }, e = this, i = 0; i < 4; i++) t(i);
                var s = function(t) {
                        a.scene.time.delayedCall(250 * t, function(e) {
                            if (this.bodySpr.active) {
                                var i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B5, this._missile1Settings);
                                i.bodySpr.x = this.bodySpr.x + 20, i.bodySpr.y = this.bodySpr.y - 40, i.bodySpr.rotation = Phaser.Math.DegToRad(5 * t - 135), i.customMed1Spawn1Weapon(t)
                            }
                        }, [t], a)
                    },
                    a = this;
                for (i = 0; i < 4; i++) s(i);
                this._actTimer = this.scene.time.delayedCall(1500, this._act2_3, null, this)
            }
        }, c.prototype._act2_3 = function() {
            this.bodySpr.active && p.TweenMax.to(this.bodySpr, 6, {
                x: .5 * r.worldDims.width,
                y: r.worldDims.height + 200,
                onComplete: this._endAct,
                onCompleteScope: this,
                ease: p.Back.easeIn.config(1.7)
            })
        }, c.prototype._endAct = function() {
            this.bodySpr.active && (this.toBePooledBack = !0, 0 < this.hitPoints && this.onDefeated())
        }, c.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), this.lifebar.visible = !1, this.hitPoints <= 0 && (r.playRandLgBaddieDefeatedSfx(), this.scene.rollMedStarBunch(this.bodySpr.x, this.bodySpr.y), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 3, 2, 70, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -50,
                y: 50
            }, {
                x: 80,
                y: 80
            }))
        }, c.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.lifebar.setXY(this.bodySpr.x - 60, this.bodySpr.y - 70)
        }, c.prototype.hit = function(t) {
            n.prototype.hit.call(this, t), this.lifebar.percent = this.hitPoints / this.maxHitPoints
        }, c.prototype.reset = function() {
            n.prototype.reset.call(this), this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.visible = !1, this.lifebar.setXY(-100, -100)
        }, c.prototype._readyLifeBar = function() {
            this.lifebar.percent = 1, this.lifebar.depth = this.armature.depth + 10, this.lifebar.alpha = 1, this.lifebar.visible = !0
        }, c);

    function c(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.MD_B1, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.MD_B1, e.lifebar = new d.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e.bodySpr.setSize(100, 60), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 50, -10), e.bodySpr.setVelocity(0), e.isSmallTypeActor = !1, e
    }
    e.MediumBaddie1 = _
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(2),
        p = (a(d, n = h.Actor), d.prototype.updateMissileMode = function(t) {
            if (l.isDefined(this.target)) {
                if (!this.target.bodySpr.active) return this.startNormalUpdates(null, null, this.velocityMagnitude), void(this.target = null);
                this.rotationTowardsTarget = Phaser.Math.Angle.BetweenPoints(this.bodySpr, this.target), this.rotateToTargetRotation(t), this.scene.physics.velocityFromRotation(this.bodySpr.rotation, this.velocityMagnitude, this._velocities), this.bodySpr.setVelocity(this._velocities.x, this._velocities.y)
            } else this.startNormalUpdates(null, null, this.velocityMagnitude), this.target = null
        }, d.prototype.updateNormal = function(t) {
            n.prototype.updateNormal.call(this, t), l.isDefined(this.target) && this.startMissileMode(this.target, null, null, null, -1)
        }, d.prototype.updateSmokeTrail = function() {
            this.emiter.setPosition(this.bodySpr.x, this.bodySpr.y), this.emiter.setSpeedX(.75 * -this.bodySpr.body.velocity.x), this.emiter.setSpeedY(.75 * -this.bodySpr.body.velocity.y)
        }, d.prototype.doDefeatedExplosion = function() {
            this.scene.effectsMng.addEffect(r.KEYS.ANIMS.EXPLO2, this.bodySpr.x, this.bodySpr.y, this.bodySpr.scaleX, Phaser.Math.RND.rotation())
        }, d.prototype.setSmokeTrailEnabled = function(t) {
            void 0 === t && (t = !0), this.emiter.on = t
        }, d.prototype.reset = function() {
            n.prototype.reset.call(this), this.setSmokeTrailEnabled(!1)
        }, d);

    function d(t) {
        var e = n.call(this, t) || this;
        return l.isDefined(e.bodySpr) && e.bodySpr.destroy(), e.bodySpr = e.scene.physics.add.sprite(0, 0, r.KEYS.GAME_TEX_SS1, r.KEYS.MISSILE.SMALL), e.bodySpr.play(r.KEYS.ANIMS.PLAYER_MISSILE_S), e.body = e.bodySpr.body, e.bodySpr.setOrigin(.7, .5), e.bodySpr.setSize(28, 28), e.bodySpr.setOffset(28, 8), e.armatureId = r.ARMATURE_IDS.PLAYER_MISSILE_S, e.emiter = e.scene.particles.createEmitter({
            lifespan: 250,
            maxParticles: 50,
            frequency: 50,
            quantity: 1,
            frame: {
                frames: ["smokeParticles0000", "smokeParticles0001", "smokeParticles0002", "smokeParticles0003", "smokeParticles0004"],
                cycle: !1
            },
            x: .5 * r.worldDims.width,
            y: .5 * r.worldDims.height,
            scale: {
                start: .4,
                end: .1
            }
        }), e.bodySpr.depth = r.BASE_DEPTH.SHIP - 2, e.setSmokeTrailEnabled(!1), e.reset(), e
    }
    e.PlayerMissile = p
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(4),
        d = i(7),
        _ = (a(c, n = h.Actor), c.prototype.startCustomBehavior1 = function(t) {
            void 0 === t && (t = !1), this.bodySpr.active && (this.turnRate = 2 * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400, this.weaponSettings.barrelLength = 80, this.bodySpr.angle = 90, this.bodySpr.x = t ? -.2 * r.worldDims.width : 1.2 * r.worldDims.width, this.bodySpr.y = -100, p.TweenMax.to(this.bodySpr, 3, {
                x: t ? .4 * r.worldDims.width : .6 * r.worldDims.width,
                y: .2 * r.worldDims.height,
                onComplete: this._act1_1,
                onCompleteScope: this,
                onCompleteParams: [t]
            }), this._readyLifeBar())
        }, c.prototype._act1_1 = function(t) {
            if (this.bodySpr.active) {
                this.target = this.scene.playerShip;
                var e = {
                    fromBodyRotation: !0,
                    numBullets: 7,
                    angleRadiansBettween: Phaser.Math.DegToRad(30)
                };
                this.weaponSettings.velocity = 300;
                for (var i = function(t) {
                        s.scene.time.delayedCall(200 * t, function() {
                            e.numBullets = t % 4 + 4, e.angleRadiansBettween = (60 - 5 * t) * Phaser.Math.DEG_TO_RAD, this.shootSpreadAtAngle(e)
                        }, null, s)
                    }, s = this, a = 0; a < 8; a++) i(a);
                this.scene.time.delayedCall(2e3, this._act1_2, [t], this)
            }
        }, c.prototype._act1_2 = function(t) {
            if (this.bodySpr.active) {
                p.TweenMax.to(this.bodySpr, 2, {
                    x: t ? .45 * r.worldDims.width : .55 * r.worldDims.width,
                    y: .2 * r.worldDims.height,
                    onComplete: this._act1_3,
                    onCompleteScope: this
                }), this.target = this.scene.playerShip, this.weaponSettings.shootingType = r.SHOOTING_TYPE.SPREAD, this.weaponSettings.numShots = 2, this.weaponSettings.fireRate = 500, this.weaponSettings.startDelay = 500, this.weaponSettings.velocity = 400, this.weaponSettings.shotSpreadConfig = {
                    angleRadiansBettween: Phaser.Math.DegToRad(20),
                    numBullets: 3,
                    fromBodyRotation: !0
                }, this.startWeapon(), this._shielderSettings.shielderModeConfig.missileModeConfig = {
                    missileModeDuration: 2e3,
                    turnRate: Phaser.Math.DegToRad(2),
                    target: this.scene.playerShip
                };
                for (var e = 0; e < 4; e++) {
                    var i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B5, this._shielderSettings);
                    i.shieldRotation = Phaser.Math.DegToRad(90 * e), i.shieldRadius = 10, p.TweenMax.to(i, 1, {
                        shieldRadius: this._shielderSettings.shielderModeConfig.shieldRadius
                    }), i.bodySpr.rotation = i.shieldRotation, i.customMedB2Shielder1Weapon()
                }
            }
        }, c.prototype._act1_3 = function() {
            this.bodySpr.active && (this.setLookAtPoint(.5 * r.worldDims.width, 1.1 * r.worldDims.height), p.TweenMax.to(this.bodySpr, 6, {
                x: .5 * r.worldDims.width,
                y: 1.1 * r.worldDims.height,
                onComplete: this._endAct,
                onCompleteScope: this,
                ease: p.Back.easeIn.config(1.7)
            }))
        }, c.prototype.startCustomBehavior2 = function(t) {
            void 0 === t && (t = !1), this.bodySpr.active && (this.turnRate = 2 * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400, this.weaponSettings.barrelLength = 80, this.bodySpr.angle = 90, this.bodySpr.x = t ? -.2 * r.worldDims.width : 1.2 * r.worldDims.width, this.bodySpr.y = -100, p.TweenMax.to(this.bodySpr, 3, {
                x: t ? .4 * r.worldDims.width : .6 * r.worldDims.width,
                y: .2 * r.worldDims.height,
                onComplete: this._act2_1,
                onCompleteScope: this,
                onCompleteParams: [t]
            }), this._readyLifeBar())
        }, c.prototype._act2_1 = function(t) {
            if (this.bodySpr.active) {
                this.target = this.scene.playerShip;
                var e = {
                    fromBodyRotation: !0,
                    numBullets: 7,
                    angleRadiansBettween: Phaser.Math.DegToRad(20)
                };
                this.weaponSettings.velocity = 500;
                for (var i = function(t) {
                        s.scene.time.delayedCall(100 * t, function() {
                            e.numBullets = t % 2 + 5, e.angleRadiansBettween = (60 - 6 * t) * Phaser.Math.DEG_TO_RAD, this.shootSpreadAtAngle(e)
                        }, null, s)
                    }, s = this, a = 0; a < 8; a++) i(a);
                this.scene.time.delayedCall(1e3, this._act2_2, [t], this)
            }
        }, c.prototype._act2_2 = function(t) {
            if (this.bodySpr.active) {
                p.TweenMax.to(this.bodySpr, 2, {
                    x: t ? .45 * r.worldDims.width : .55 * r.worldDims.width,
                    y: .2 * r.worldDims.height,
                    onComplete: this._act2_3,
                    onCompleteScope: this
                }), this.target = this.scene.playerShip, this.weaponSettings.shootingType = r.SHOOTING_TYPE.SPREAD, this.weaponSettings.numShots = 4, this.weaponSettings.fireRate = 200, this.weaponSettings.startDelay = 500, this.weaponSettings.velocity = 500, this.weaponSettings.shotSpreadConfig = {
                    angleRadiansBettween: Phaser.Math.DegToRad(20),
                    numBullets: 4,
                    fromBodyRotation: !0
                }, this.startWeapon(), this._shielderSettings.shielderModeConfig.missileModeConfig = {
                    missileModeDuration: 2e3,
                    turnRate: Phaser.Math.DegToRad(2),
                    target: this.scene.playerShip
                };
                for (var e = 0; e < 6; e++) {
                    this._shielderSettings2.shielderModeConfig.missileModeConfig.target = this.scene.playerShip;
                    var i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_1, this._shielderSettings2);
                    i.shieldRotation = Phaser.Math.DegToRad(60 * e), i.shieldRadius = 10, p.TweenMax.to(i, 1, {
                        shieldRadius: this._shielderSettings2.shielderModeConfig.shieldRadius
                    }), i.bodySpr.rotation = i.shieldRotation, i.customMed1Spawn2Weapon(e)
                }
            }
        }, c.prototype._act2_3 = function() {
            this.bodySpr.active && (this.setLookAtPoint(.5 * r.worldDims.width, 1.1 * r.worldDims.height), p.TweenMax.to(this.bodySpr, 3, {
                x: .5 * r.worldDims.width,
                y: 1.1 * r.worldDims.height,
                onComplete: this._endAct,
                onCompleteScope: this,
                ease: p.Back.easeIn.config(1.7)
            }))
        }, c.prototype._endAct = function() {
            this.bodySpr.active && (this.toBePooledBack = !0, 0 < this.hitPoints && this.onDefeated())
        }, c.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), this.lifebar.visible = !1, this.hitPoints <= 0 && (r.playRandLgBaddieDefeatedSfx(), this.scene.rollMedStarBunch(this.bodySpr.x, this.bodySpr.y), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 3, 2, 70, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -50,
                y: 50
            }, {
                x: 80,
                y: 80
            }))
        }, c.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.lifebar.setXY(this.bodySpr.x - 60, this.bodySpr.y - 70)
        }, c.prototype.hit = function(t) {
            n.prototype.hit.call(this, t), this.lifebar.percent = this.hitPoints / this.maxHitPoints
        }, c.prototype.reset = function() {
            n.prototype.reset.call(this), this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.visible = !1, this.lifebar.setXY(-100, -100)
        }, c.prototype._readyLifeBar = function() {
            this.lifebar.percent = 1, this.lifebar.depth = this.armature.depth + 10, this.lifebar.alpha = 1, this.lifebar.visible = !0
        }, c);

    function c(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.MD_B2, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.MD_B2, e.lifebar = new d.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e.bodySpr.setSize(100, 60), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 50, -10), e.bodySpr.setVelocity(0), e.isSmallTypeActor = !1, e._shielderSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 100,
            hp: 120,
            updateMode: r.UPDATE_MODEL_TYPE.SHIELDER,
            velocityMagnitude: 300,
            shielderModeConfig: {
                shieldRadius: 80,
                shieldRotationSpeed: Phaser.Math.DegToRad(2),
                shielderModeDuration: 2e3,
                shieldTarget: e,
                initialRotation: Phaser.Math.DegToRad(90)
            }
        }, e._shielderSettings2 = {
            faction: r.FACTION.BADDIES,
            scoreValue: 100,
            detonationTime: 2500,
            hp: 120,
            updateMode: r.UPDATE_MODEL_TYPE.SHIELDER,
            velocityMagnitude: 300,
            shielderModeConfig: {
                shieldRadius: 100,
                shieldRotationSpeed: Phaser.Math.DegToRad(2),
                shielderModeDuration: 1e3,
                shieldTarget: e,
                initialRotation: Phaser.Math.DegToRad(90),
                missileModeConfig: {
                    missileModeDuration: 2e3,
                    target: void 0,
                    turnRate: Phaser.Math.DegToRad(2)
                }
            }
        }, e
    }
    e.MediumBaddie2 = _
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(2),
        d = i(7),
        _ = (a(c, n = h.Actor), c.prototype.start = function() {
            return this._readyLifeBar(), this
        }, c.prototype.attachB8Turret = function(t) {
            return this.turret = t, this.turret.turnRate = Phaser.Math.DegToRad(2), this.turret.target = this.scene.playerShip, this.turret.depth = this.depth + 1, this
        }, c.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), r.playRandLgBaddieDefeatedSfx(), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 3, 2, 70, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -50,
                y: 50
            }, {
                x: 80,
                y: 80
            }), this.scene.rollMedStarBunch2(this.bodySpr.x, this.bodySpr.y)
        }, c.prototype.clear = function() {
            n.prototype.clear.call(this), p.isDefined(this.turret) && this.turret.clear()
        }, c.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.lifebar.setXY(this.bodySpr.x - 60, this.bodySpr.y - 70), this.turret.bodySpr.x = this.bodySpr.x, this.turret.bodySpr.y = this.bodySpr.y
        }, c.prototype.hit = function(t) {
            n.prototype.hit.call(this, t), this.lifebar.percent = this.hitPoints / this.maxHitPoints
        }, c.prototype.reset = function() {
            n.prototype.reset.call(this), this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.visible = !1, this.lifebar.setXY(-100, -100), p.isDefined(this.turret) && this.turret.reset()
        }, c.prototype._readyLifeBar = function() {
            this.lifebar.percent = 1, this.lifebar.depth = this.armature.depth + 10, this.lifebar.alpha = 1, this.lifebar.visible = !0
        }, c);

    function c(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B7, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B7, e.lifebar = new d.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e.bodySpr.setSize(80, 80), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 40, -4), e
    }
    e.Baddie7 = _
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = (a(d, n = h.Actor), d.prototype.loadWeapon = function(t, e, i, s, a) {
            this.bodySpr.active && (this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.numShots = t, this.weaponSettings.fireRate = e, this.weaponSettings.barrelLength = 80, this.weaponSettings.velocity = i, this.weaponSettings.startDelay = s, this.weaponSettings.bulletSettings = a, this.startWeapon())
        }, d);

    function d(t) {
        var e = n.call(this, t) || this;
        return e._numReloads = -1, e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B8, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B8, e.bodySpr.setVelocity(0), e.bodySpr.setSize(40, 40), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 20, -40), e
    }
    e.Baddie8 = p
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(4),
        d = i(2),
        _ = (a(c, n = h.Actor), c.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), r.playRandMedBaddieDefeatedSfx(), this.scene.rollStarDropChance(this.bodySpr.x, this.bodySpr.y), this.scene.rollStarDropChance(this.bodySpr.x, this.bodySpr.y)
        }, c.prototype.startStrafesAndShootAct = function(t) {
            if (this.bodySpr.active) {
                this.isOverlapEnabled = !1, this._numStrafes = t.numStrafes, this.bodySpr.x = Phaser.Math.RND.between(0, r.worldDims.width), this.bodySpr.x = this._pickStrafeRandX(t), this.bodySpr.y = this._pickRandY(t), this.playArmatureAnim(r.BADDIE_ANIMS.FLY);
                var e = Phaser.Math.RND.between(t.travelToSpotTimeMin, t.travelToSpotTimeMax) / 1e3;
                this.armature.scale = 1.4, this.armature.alpha = .1, p.TweenMax.to(this.armature, e, {
                    scale: 1,
                    alpha: 1,
                    ease: p.Power2.easeOut,
                    onCompleteScope: this,
                    onCompleteParams: [t],
                    onComplete: this._shoot
                }), this.target = this.scene.playerShip, this.lookAtPoint = null, d.isDefined(t.weaponReload) ? this._weaponReload = t.weaponReload : (this._weaponReload = Phaser.Utils.Objects.Clone(this.weaponSettings), d.copyInto(this._weaponReload, this.weaponSettings))
            }
        }, c.prototype._shoot = function(t) {
            if (this.bodySpr.active) {
                this.isOverlapEnabled = !0, this.reloadWeapon();
                var e = Phaser.Math.RND.between(t.spotTimeMin, t.spotTimeMax);
                this.scene.time.delayedCall(e, this._strafe, [t], this), this.playArmatureAnim(r.BADDIE_ANIMS.ATTACK)
            }
        }, c.prototype._strafe = function(t) {
            if (console.log("this._numStrafes", this._numStrafes), this._numStrafes--, this._numStrafes < 0) this._exit(t);
            else {
                this.playArmatureAnim(r.BADDIE_ANIMS.FLY);
                var e = Phaser.Math.RND.between(t.travelToSpotTimeMin, t.travelToSpotTimeMax) / 1e3;
                p.TweenMax.to(this.bodySpr, e, {
                    x: this._pickStrafeRandX(t),
                    y: this._pickRandY(t),
                    ease: p.Power2.easeOut,
                    onCompleteScope: this,
                    onCompleteParams: [t],
                    onComplete: this._shoot
                })
            }
        }, c.prototype._exit = function(t) {
            if (this.bodySpr.active) {
                this.playArmatureAnim(r.BADDIE_ANIMS.FLY);
                var e = this.bodySpr.x < r.worldDims.centerX ? .2 * -r.worldDims.width : 1.2 * r.worldDims.width,
                    i = this._pickRandY(t),
                    s = Phaser.Math.RND.between(t.travelToSpotTimeMin, t.travelToSpotTimeMax) / 1e3;
                p.TweenMax.to(this.bodySpr, s, {
                    x: e,
                    y: i,
                    ease: p.Power2.easeIn,
                    onComplete: this._endAct,
                    onCompleteScope: this
                }), this.target = void 0, this.setLookAtPoint(e, this.bodySpr.y)
            }
        }, c.prototype._endAct = function() {
            this.bodySpr.active && this.clear()
        }, c.prototype.reloadWeapon = function() {
            this.weaponSettings.numShots = this._weaponReload.numShots, this.weaponSettings.fireRate = this._weaponReload.fireRate, this.weaponSettings.barrelLength = this._weaponReload.barrelLength, this.weaponSettings.velocity = this._weaponReload.velocity, this.weaponSettings.startDelay = this._weaponReload.startDelay, this.weaponSettings.bulletSettings = this._weaponReload.bulletSettings, this.startWeapon()
        }, c.prototype.loadWeapon = function(t, e, i, s, a) {
            this.bodySpr.active && (this.weaponSettings.numShots = t, this.weaponSettings.fireRate = e, this.weaponSettings.barrelLength = 80, this.weaponSettings.velocity = i, this.weaponSettings.startDelay = s, this.weaponSettings.bulletSettings = a, this.startWeapon())
        }, c.prototype._pickStrafeRandX = function(t) {
            return this.bodySpr.x < r.worldDims.centerX ? Phaser.Math.RND.between(t.rightPosMin, t.rightPosMax) : Phaser.Math.RND.between(t.leftPosMin, t.leftPosMax)
        }, c.prototype._pickRandY = function(t) {
            return Phaser.Math.RND.between(t.minY, t.maxY)
        }, c);

    function c(t) {
        var e = n.call(this, t) || this;
        return e._numStrafes = 0, e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B9, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B9, e.enableAnimationCompleteListeners(), e.isOverlapEnabled = !1, e
    }
    e.Baddie9 = _
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(7),
        d = i(11),
        _ = i(6),
        c = i(4),
        S = i(2),
        u = (a(g, n = h.Actor), g.prototype.startCustomBehavior1 = function(t) {
            void 0 === t && (t = !1), this.bodySpr.active && (this.turnRate = 2 * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400, this.weaponSettings.barrelLength = 80, this.target = this.scene.playerShip, this.bodySpr.angle = 90, this.bodySpr.x = t ? -.2 * r.worldDims.width : 1.2 * r.worldDims.width, this.bodySpr.y = -100, this._readyLifeBar(), this._gun1.setActive(!0), this._gun2.setActive(!0), this._numStrafes = 3, this._weaponSettings = {
                x: 0,
                y: 0,
                barrelLength: 40,
                fireRate: 200,
                velocity: 500,
                numShots: 5,
                startDelay: 0,
                bulletSettings: _.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
                shootingType: r.SHOOTING_TYPE.SPREAD,
                angleInRadians: Phaser.Math.DegToRad(90),
                shotSpreadConfig: {
                    angleRadiansBettween: Phaser.Math.DegToRad(30),
                    numBullets: 4,
                    fromBodyRotation: !1
                }
            }, this._weaponReload = Phaser.Utils.Objects.Clone(this.weaponSettings), S.copyInto(this._weaponReload, this.weaponSettings), c.TweenMax.to(this.bodySpr, 1, {
                x: t ? .3 * r.worldDims.width : .7 * r.worldDims.width,
                y: .2 * r.worldDims.height,
                onComplete: this._shoot,
                onCompleteScope: this
            }))
        }, g.prototype._shoot = function() {
            if (this.bodySpr.active) {
                this.isOverlapEnabled = !0, this.reloadWeapon(0), this._gun1.reloadWeapon(), this._gun1.startWeapon(), this._gun2.reloadWeapon(), this._gun2.startWeapon();
                var t = Phaser.Math.RND.between(this._spotTimeMin, this._spotTimeMax);
                this.scene.time.delayedCall(t, this._strafe, null, this)
            }
        }, g.prototype.reloadWeapon = function(t) {
            var e = this._weaponReload;
            this.weaponSettings.numShots = e.numShots, this.weaponSettings.fireRate = e.fireRate, this.weaponSettings.barrelLength = e.barrelLength, this.weaponSettings.velocity = e.velocity, this.weaponSettings.startDelay = e.startDelay, this.weaponSettings.bulletSettings = e.bulletSettings, this.startWeapon()
        }, g.prototype._strafe = function() {
            if (console.log("this._numStrafes", this._numStrafes), this._numStrafes--, this._numStrafes < 0) this._exit();
            else {
                var t = Phaser.Math.RND.between(this._travelToSpotTimeMin, this._travelToSpotTimeMax) / 1e3;
                c.TweenMax.to(this.bodySpr, t, {
                    x: this._pickStrafeRandX(),
                    y: this._pickRandY(),
                    ease: c.Power2.easeOut,
                    onCompleteScope: this,
                    onCompleteParams: [],
                    onComplete: this._shoot
                })
            }
        }, g.prototype._exit = function() {
            if (this.bodySpr.active) {
                var t = 1.2 * r.worldDims.height,
                    e = Phaser.Math.RND.between(this._travelToSpotTimeMin, this._travelToSpotTimeMax) / 1e3;
                c.TweenMax.to(this.bodySpr, 2 * e, {
                    x: r.worldDims.centerX,
                    y: t,
                    ease: c.Back.easeIn,
                    onComplete: this._endAct,
                    onCompleteScope: this
                }), this.target = void 0, this.setLookAtPoint(r.worldDims.centerX, t)
            }
        }, g.prototype._endAct = function() {
            this.bodySpr.active && (this.toBePooledBack = !0, 0 < this.hitPoints && this.onDefeated())
        }, g.prototype._pickStrafeRandX = function() {
            return this.bodySpr.x < r.worldDims.centerX ? Phaser.Math.RND.between(this._rightPosMin, this._rightPosMax) : Phaser.Math.RND.between(this._leftPosMin, this._leftPosMax)
        }, g.prototype._pickRandY = function() {
            return Phaser.Math.RND.between(this._minY, this._maxY)
        }, g.prototype.onDefeated = function() {
            n.prototype.onDefeated.call(this), this.lifebar.visible = !1, this.hitPoints <= 0 && (r.playRandLgBaddieDefeatedSfx(), this.scene.rollMedStarBunch(this.bodySpr.x, this.bodySpr.y), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 3, 2, 70, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -50,
                y: 50
            }, {
                x: 80,
                y: 80
            }), this.scene.rollMedStarBunch(this.bodySpr.x, this.bodySpr.y), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 3, 2, 70, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -50,
                y: 50
            }, {
                x: 80,
                y: 80
            })), this._gun1.setActive(!1), this._gun2.setActive(!1)
        }, g.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.lifebar.setXY(this.bodySpr.x - 60, this.bodySpr.y - 70), this._gun1.update(t), this._gun2.update(t)
        }, g.prototype.hit = function(t) {
            n.prototype.hit.call(this, t), this.lifebar.percent = this.hitPoints / this.maxHitPoints
        }, g.prototype.reset = function() {
            n.prototype.reset.call(this), this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.visible = !1, this.lifebar.setXY(-100, -100)
        }, g.prototype._readyLifeBar = function() {
            this.lifebar.percent = 1, this.lifebar.depth = this.armature.depth + 10, this.lifebar.alpha = 1, this.lifebar.visible = !0
        }, g);

    function g(t) {
        var e = n.call(this, t) || this;
        return e._numStrafes = 0, e._leftPosMin = 0, e._leftPosMax = 0, e._rightPosMin = 0, e._rightPosMax = 0, e._minY = 0, e._maxY = 0, e._travelToSpotTimeMin = 1e3, e._travelToSpotTimeMax = 1500, e._spotTimeMin = 1250, e._spotTimeMax = 1500, e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.MD_B3, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.MD_B3, e.lifebar = new p.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e.bodySpr.setSize(100, 60), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 50, -10), e.bodySpr.setVelocity(0), e.isSmallTypeActor = !1, e._gun1 = new d.Gun(e.scene, e, {
            x: 10,
            y: -50,
            angleInRadians: Phaser.Math.DegToRad(5),
            barrelLength: 0,
            velocity: 600,
            bulletSettings: _.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 100,
            numShots: 5,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION,
            startDelay: 250
        }), e._gun2 = new d.Gun(e.scene, e, {
            x: 10,
            y: 50,
            angleInRadians: Phaser.Math.DegToRad(-5),
            barrelLength: 0,
            velocity: 600,
            bulletSettings: _.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 100,
            numShots: 5,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION,
            startDelay: 250
        }), e._leftPosMin = .2 * r.worldDims.width, e._leftPosMax = .4 * r.worldDims.width, e._rightPosMin = .6 * r.worldDims.width, e._rightPosMax = .8 * r.worldDims.width, e._minY = .15 * r.worldDims.height, e._maxY = .25 * r.worldDims.height, e._travelToSpotTimeMin = 750, e._travelToSpotTimeMax = 1e3, e._spotTimeMin = 1250, e._spotTimeMax = 1500, e
    }
    e.MediumBaddie3 = u
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(6),
        d = (a(_, n = h.Actor), _.prototype.onDefeated = function() {
            this.weaponSettings.angleInRadians = r.DIRECTION_RAD.UP + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.DOWN + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.RIGHT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.LEFT + this.bodySpr.rotation, this.shoot(), n.prototype.onDefeated.call(this), r.playRandSmallBaddieDefeatedSfx()
        }, _.prototype.customMed1Spawn2Weapon = function(t) {
            var e = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME);
            this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.numShots = 2, this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.velocity = 500, this.weaponSettings.fireRate = 200, this.weaponSettings.startDelay = 1e3 + 250 * t, this.weaponSettings.barrelLength = 20, this.weaponSettings.bulletSettings = e, this.startWeapon()
        }, _.prototype.update = function(t) {
            n.prototype.update.call(this, t)
        }, _.prototype.updateShielderMode = function(t) {
            n.prototype.updateShielderMode.call(this, t), this.bodySpr.rotation = this.shieldRotation
        }, _);

    function _(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B5_1, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B5_1, e
    }
    e.Baddie5_1 = d
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = (a(d, n = h.Actor), d.prototype.onDefeated = function() {
            this.weaponSettings.angleInRadians = r.DIRECTION_RAD.UP_RIGHT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.UP_LEFT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.DOWN_RIGHT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.DOWN_LEFT + this.bodySpr.rotation, this.shoot(), n.prototype.onDefeated.call(this), r.playRandSmallBaddieDefeatedSfx()
        }, d.prototype.update = function(t) {
            n.prototype.update.call(this, t)
        }, d.prototype.updateShielderMode = function(t) {
            n.prototype.updateShielderMode.call(this, t), this.bodySpr.rotation = this.shieldRotation
        }, d);

    function d(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B5_2, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B5_2, e
    }
    e.Baddie5_2 = p
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(6),
        d = (a(_, n = h.Actor), _.prototype.onDefeated = function() {
            this.weaponSettings.angleInRadians = r.DIRECTION_RAD.UP + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.DOWN + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.RIGHT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.LEFT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.UP_RIGHT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.UP_LEFT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.DOWN_RIGHT + this.bodySpr.rotation, this.shoot(), this.weaponSettings.angleInRadians = r.DIRECTION_RAD.DOWN_LEFT + this.bodySpr.rotation, this.shoot(), n.prototype.onDefeated.call(this), r.playRandMedBaddieDefeatedSfx()
        }, _.prototype.customMed1Spawn2Weapon = function(t) {
            var e = p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME);
            this.weaponSettings.x = this.bodySpr.x, this.weaponSettings.y = this.bodySpr.y, this.weaponSettings.numShots = 2, this.weaponSettings.shootingType = r.SHOOTING_TYPE.FROM_ROTATION, this.weaponSettings.velocity = 500, this.weaponSettings.fireRate = 200, this.weaponSettings.startDelay = 1e3 + 250 * t, this.weaponSettings.barrelLength = 20, this.weaponSettings.bulletSettings = e, this.startWeapon()
        }, _.prototype.update = function(t) {
            n.prototype.update.call(this, t)
        }, _.prototype.updateShielderMode = function(t) {
            n.prototype.updateShielderMode.call(this, t), this.bodySpr.rotation = this.shieldRotation
        }, _);

    function _(t) {
        var e = n.call(this, t) || this;
        return e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.B5_3, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.B5_3, e
    }
    e.Baddie5_3 = d
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(4),
        d = i(7),
        _ = i(2),
        c = i(8),
        S = (a(u, n = h.Actor), u.prototype.start = function() {
            this.bodySpr.active && (this.turnRate = 3 * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400, this.weaponSettings.barrelLength = 50, this.lookAtPoint = {
                x: .5 * r.worldDims.width,
                y: .9 * r.worldDims.height
            }, this.bodySpr.angle = 90, this.bodySpr.x = .5 * r.worldDims.width, this.bodySpr.y = -200, p.TweenMax.to(this.bodySpr, 1, {
                x: .5 * r.worldDims.width,
                y: .25 * r.worldDims.height,
                onComplete: this._doNextRandomActStart,
                onCompleteScope: this
            }), this._readyLifeBar(), this._defeated = !1)
        }, u.prototype._doNextRandomActStart = function() {
            this.bodySpr.active && (this._acts.length <= 0 && (this._acts = [this._act1, this._act2, this._act3, this._act4, this._act5, this._act6], Phaser.Utils.Array.Shuffle(this._acts)), this._acts.pop().call(this))
        }, u.prototype._act1 = function() {
            if (this.bodySpr.active) {
                p.TweenMax.to(this.bodySpr, 2, {
                    x: .5 * r.worldDims.width,
                    y: .3 * r.worldDims.height
                }), this.lookAtPoint = {
                    x: .5 * r.worldDims.width,
                    y: .75 * r.worldDims.height
                };
                for (var t = {
                        fromBodyRotation: !0,
                        numBullets: 4,
                        angleRadiansBettween: Phaser.Math.DegToRad(45)
                    }, e = function(e) {
                        i.weaponSettings.velocity = 500, i.scene.time.delayedCall(200 * e, function() {
                            t.numBullets = e % 3 + 4, t.angleRadiansBettween = (60 - 3 * e) * Phaser.Math.DEG_TO_RAD, this.shootSpreadAtAngle(t)
                        }, null, i)
                    }, i = this, s = 0; s < 15; s++) e(s);
                this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, u.prototype._act2 = function() {
            if (this.bodySpr.active) {
                p.TweenMax.to(this.bodySpr, 2, {
                    x: .4 * r.worldDims.width,
                    y: .2 * r.worldDims.height
                }), this.target = this.scene.playerShip;
                for (var t = {
                        fromBodyRotation: !0,
                        numBullets: 7,
                        angleRadiansBettween: Phaser.Math.DegToRad(40)
                    }, e = function(e) {
                        i.scene.time.delayedCall(300 * e, function() {
                            t.angleRadiansBettween = (40 - 3 * e) * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400 + 20 * e, this.shootSpreadAtAngle(t)
                        }, null, i)
                    }, i = this, s = 0; s < 10; s++) e(s);
                this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, u.prototype._act3 = function() {
            if (this.bodySpr.active) {
                p.TweenMax.to(this.bodySpr, 2, {
                    x: .6 * r.worldDims.width,
                    y: .2 * r.worldDims.height
                }), this.target = this.scene.playerShip;
                for (var t = {
                        fromBodyRotation: !0,
                        numBullets: 7,
                        angleRadiansBettween: Phaser.Math.DegToRad(40)
                    }, e = function(e) {
                        i.scene.time.delayedCall(300 * e, function() {
                            t.angleRadiansBettween = (40 - 3 * e) * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400 + 20 * e, this.shootSpreadAtAngle(t)
                        }, null, i)
                    }, i = this, s = 0; s < 10; s++) e(s);
                this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, u.prototype._act4 = function() {
            if (this.bodySpr.active) {
                this.lookAtPoint = {
                    x: .5 * r.worldDims.width,
                    y: .9 * r.worldDims.height
                };
                for (var t = 0; t < 6; t++) {
                    var e = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._mediumShielderSettings);
                    e.shieldRotation = Phaser.Math.DegToRad(60 * t), e.shieldRadius = 10, p.TweenMax.to(e, 1, {
                        shieldRadius: this._mediumShielderSettings.shielderModeConfig.shieldRadius
                    }), e.bodySpr.rotation = Phaser.Math.DegToRad(90), t % 3 == 0 ? e.customBoss1Shielder1() : e.customBoss1Shielder2()
                }
                this.scene.time.delayedCall(5e3, this._doNextRandomActStart, null, this)
            }
        }, u.prototype._act5 = function() {
            if (this.bodySpr.active) {
                this.setLookAtPoint(.5 * r.worldDims.width, .9 * r.worldDims.height);
                for (var t = 0; t < 3; t++)(e = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings)).bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), e.customBoss1Guard1R(.4 * r.worldDims.height + t * r.worldDims.height * .2);
                for (t = 0; t < 3; t++) {
                    var e;
                    (e = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings)).bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), e.customBoss1Guard1L(.4 * r.worldDims.height + t * r.worldDims.height * .2)
                }
                this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, u.prototype._act6 = function() {
            if (this.bodySpr.active) {
                p.TweenMax.to(this.bodySpr, 2, {
                    x: .5 * r.worldDims.width,
                    y: .4 * r.worldDims.height
                });
                var t = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings);
                t.bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), t.customBoss1CornerTL();
                var e = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings);
                e.bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), e.customBoss1CornerTR();
                var i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings);
                i.bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), i.customBoss1CornerBL();
                var s = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings);
                s.bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), s.customBoss1CornerBR(), this.scene.time.delayedCall(5e3, this._doNextRandomActStart, null, this)
            }
        }, u.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.lifebar.setXY(this.bodySpr.x - 60, this.bodySpr.y - 70)
        }, u.prototype.hit = function(t) {
            this.isOverlapEnabled && (n.prototype.hit.call(this, t), this.lifebar.percent = this.hitPoints / this.maxHitPoints)
        }, u.prototype.reset = function() {
            n.prototype.reset.call(this), this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.visible = !1, this.lifebar.setXY(-100, -100), this.isOverlapEnabled = !0, this._defeated = !1
        }, u.prototype._readyLifeBar = function() {
            this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.depth = this.armature.depth + 10, this.lifebar.visible = !0
        }, u.prototype.onDefeated = function() {
            this._defeated || (this._defeated = !0, this.scene.maxBossLevelDefeated < 1 && (this.scene.maxBossLevelDefeated = 1, r.GAME_ANALYTHICS_ENABLED && c.gameanalytics.GameAnalytics.addResourceEvent(c.gameanalytics.EGAResourceFlowType.Source, "stars", 0, "bounty", "boss1"), this.scene.savePersitentGameData()), this.bodySpr.setActive(!1), this.isOverlapEnabled = !1, this._startDefeatedAnim(), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 5, 12, 250, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -80,
                y: 80
            }, {
                x: 80,
                y: 80
            }), r.playLgBossSfx(r.SFX_KEYS.BOSS1_DEFEATED), this.lifebar.visible = !1, this.scene.rollHighBunchStars(this.bodySpr.x, this.bodySpr.y), this.scene.clearBaddies(), this.scene.awardPlayerHealthLeftScore(1e4))
        }, u.prototype._startDefeatedAnim = function() {
            this.bodySpr.setCollideWorldBounds(!1), p.TweenMax.to(this.bodySpr, 3, {
                y: this.bodySpr.y + 100
            }), p.TweenMax.to(this.armature, 3, {
                alpha: .01,
                scaleX: .5,
                scaleY: .5
            }), this.bodySpr.setAcceleration(0, 0), this.scene.time.delayedCall(4e3, this._onDefeatedAnimComplete, null, this)
        }, u.prototype._onDefeatedAnimComplete = function() {
            console.log("Boss1 on defeated complete..."), this.scene.doNextLevel(), this.toBePooledBack = !0, _.isDefined(this.onDefeatedMore) && (_.isDefined(this.onDefeatedMoreScope) ? this.onDefeatedMore.apply(this.onDefeatedMoreScope, this.onDefeatedMoreParams) : this.onDefeatedMore())
        }, u);

    function u(t) {
        var e = n.call(this, t) || this;
        return e._defeated = !1, e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.BOSS1, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.BOSS1, e.lifebar = new d.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e.bodySpr.setSize(160, 140), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 80, -60), e._mediumShielderSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 0,
            hp: 160,
            updateMode: r.UPDATE_MODEL_TYPE.SHIELDER,
            velocityMagnitude: 200,
            shielderModeConfig: {
                shieldRadius: 200,
                shieldRotationSpeed: Phaser.Math.DegToRad(1),
                shielderModeDuration: 6e3,
                shieldTarget: e,
                initialRotation: Phaser.Math.DegToRad(90)
            }
        }, e._b6GuardSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 0,
            hp: 160,
            updateMode: r.UPDATE_MODEL_TYPE.CUSTOM,
            velocityMagnitude: 200
        }, e.isSmallTypeActor = !1, e._acts = [], e
    }
    e.Boss1 = S
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(6),
        d = i(4),
        _ = i(7),
        c = i(2),
        S = i(8),
        u = i(11),
        g = (a(y, n = h.Actor), y.prototype.start = function() {
            this.bodySpr.active && (this.turnRate = Phaser.Math.DegToRad(1), this.weaponSettings.velocity = 400, this.weaponSettings.barrelLength = 20, this.lookAtPoint = {
                x: .5 * r.worldDims.width,
                y: .9 * r.worldDims.height
            }, this.bodySpr.angle = 90, this.bodySpr.x = .5 * r.worldDims.width, this.bodySpr.y = -200, d.TweenMax.to(this.bodySpr, 1, {
                x: .5 * r.worldDims.width,
                y: .25 * r.worldDims.height,
                onComplete: this._doNextRandomActStart,
                onCompleteScope: this
            }), this._readyLifeBar(), this._gun1.setActive(!0), this._gun2.setActive(!0), this._defeated = !1)
        }, y.prototype._doNextRandomActStart = function() {
            this.bodySpr.active && (this._acts.length <= 0 && (this._acts = [this._act1, this._act2, this._act2m, this._act3, this._act3m, this._act4, this._act5], Phaser.Utils.Array.Shuffle(this._acts)), this._acts.pop().call(this))
        }, y.prototype._act1 = function() {
            if (this.bodySpr.active) {
                d.TweenMax.to(this.bodySpr, 2, {
                    x: .5 * r.worldDims.width,
                    y: .2 * r.worldDims.height
                }), this.lookAtPoint = {
                    x: .5 * r.worldDims.width,
                    y: .75 * r.worldDims.height
                };
                var t = {
                    fromBodyRotation: !0,
                    numBullets: 4,
                    angleRadiansBettween: Phaser.Math.DegToRad(45)
                };
                this.weaponSettings.velocity = 450;
                for (var e = function(e) {
                        i.scene.time.delayedCall(150 * e, function() {
                            t.numBullets = e % 2 + 3, t.angleRadiansBettween = (70 - 3 * e) * Phaser.Math.DEG_TO_RAD, this.shootSpreadAtAngle(t)
                        }, null, i)
                    }, i = this, s = 0; s < 20; s++) e(s);
                this.scene.time.delayedCall(Phaser.Math.RND.between(3e3, 3500), this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act2 = function() {
            this.bodySpr.active && (d.TweenMax.to(this.bodySpr, Phaser.Math.RND.realInRange(1.75, 2.25), {
                x: r.worldDims.width * Phaser.Math.RND.realInRange(.25, .45),
                y: r.worldDims.height * Phaser.Math.RND.realInRange(.15, .25)
            }), this.target = this.scene.playerShip, this.lookAtPoint = null, this.reloadWeapon(1), this._gun1.reloadWeapon(!0), this._gun2.reloadWeapon(!0), this.scene.time.delayedCall(Phaser.Math.RND.between(2750, 3250), this._doNextRandomActStart, null, this))
        }, y.prototype._act2m = function() {
            this.bodySpr.active && (d.TweenMax.to(this.bodySpr, Phaser.Math.RND.realInRange(1.75, 2.25), {
                x: r.worldDims.width * Phaser.Math.RND.realInRange(.55, .75),
                y: r.worldDims.height * Phaser.Math.RND.realInRange(.15, .25)
            }), this.target = this.scene.playerShip, this.lookAtPoint = null, this.reloadWeapon(1), this._gun1.reloadWeapon(), this._gun1.startWeapon(), this._gun2.reloadWeapon(), this._gun2.startWeapon(), this.scene.time.delayedCall(Phaser.Math.RND.between(2750, 3250), this._doNextRandomActStart, null, this))
        }, y.prototype._act3 = function() {
            if (this.bodySpr.active) {
                d.TweenMax.to(this.bodySpr, Phaser.Math.RND.realInRange(1.75, 2.25), {
                    x: r.worldDims.width * Phaser.Math.RND.realInRange(.25, .45),
                    y: r.worldDims.height * Phaser.Math.RND.realInRange(.15, .25)
                }), this.target = this.scene.playerShip;
                for (var t = {
                        fromBodyRotation: !0,
                        numBullets: 7,
                        angleRadiansBettween: Phaser.Math.DegToRad(40)
                    }, e = function(e) {
                        i.scene.time.delayedCall(300 * e, function() {
                            t.angleRadiansBettween = (40 - 3 * e) * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 450 + 10 * e, this.shootSpreadAtAngle(t)
                        }, null, i)
                    }, i = this, s = 7; s < 10; s++) e(s);
                this.scene.time.delayedCall(2500, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act3m = function() {
            if (this.bodySpr.active) {
                d.TweenMax.to(this.bodySpr, Phaser.Math.RND.realInRange(1.75, 2.25), {
                    x: r.worldDims.width * Phaser.Math.RND.realInRange(.55, .75),
                    y: r.worldDims.height * Phaser.Math.RND.realInRange(.15, .25)
                }), this.target = this.scene.playerShip;
                for (var t = {
                        fromBodyRotation: !0,
                        numBullets: 7,
                        angleRadiansBettween: Phaser.Math.DegToRad(40)
                    }, e = function(e) {
                        i.scene.time.delayedCall(300 * e, function() {
                            t.angleRadiansBettween = (40 - 3 * e) * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 450 + 10 * e, this.shootSpreadAtAngle(t)
                        }, null, i)
                    }, i = this, s = 7; s < 10; s++) e(s);
                this.scene.time.delayedCall(2500, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act4 = function() {
            if (this.bodySpr.active) {
                this.lookAtPoint = {
                    x: .5 * r.worldDims.width,
                    y: .9 * r.worldDims.height
                };
                for (var t = 0; t < 8; t++) {
                    var e = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._mediumShielderSettings);
                    e.shieldRotation = Phaser.Math.DegToRad(45 * t), e.shieldRadius = 10, d.TweenMax.to(e, 1, {
                        shieldRadius: this._mediumShielderSettings.shielderModeConfig.shieldRadius
                    }), e.bodySpr.rotation = Phaser.Math.DegToRad(90), e.customBoss1Shielder3()
                }
                this.scene.time.delayedCall(3e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act5 = function() {
            var t = this;
            if (this.bodySpr.active) {
                this.lookAtPoint = {
                    x: .5 * r.worldDims.width,
                    y: .9 * r.worldDims.height
                };
                var e = Phaser.Math.DegToRad(45);
                this._mediumShielderSettings2.shielderModeConfig.shieldRotationSpeed = Phaser.Math.DegToRad(-.5);
                for (var i = 0; i < 8; i++) {
                    var s = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._mediumShielderSettings2);
                    s.shieldRotation = i * e, s.shieldRadius = 8, d.TweenMax.to(s, 15, {
                        shieldRadius: 1e3
                    }), s.bodySpr.rotation = Phaser.Math.DegToRad(90), s.customBoss1Shielder4()
                }
                this.scene.time.delayedCall(2e3, function() {
                    t._mediumShielderSettings2.shielderModeConfig.shieldRotationSpeed = Phaser.Math.DegToRad(.5);
                    for (var i = 0; i < 8; i++) {
                        var s = t.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, t._mediumShielderSettings2);
                        s.shieldRotation = i * e, s.shieldRadius = 8, d.TweenMax.to(s, 15, {
                            shieldRadius: 1e3
                        }), s.bodySpr.rotation = Phaser.Math.DegToRad(90), s.customBoss1Shielder4()
                    }
                }, null, this), this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.lifebar.setXY(this.bodySpr.x - 60, this.bodySpr.y - 70), this._gun1.update(t), this._gun2.update(t)
        }, y.prototype.hit = function(t) {
            this.isOverlapEnabled && (n.prototype.hit.call(this, t), this.lifebar.percent = this.hitPoints / this.maxHitPoints)
        }, y.prototype.reset = function() {
            n.prototype.reset.call(this), this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.visible = !1, this.lifebar.setXY(-100, -100), this.isOverlapEnabled = !0, this._defeated = !1
        }, y.prototype.reloadWeapon = function(t) {
            var e = this._weaponReload1;
            this.weaponSettings.shootingType = r.SHOOTING_TYPE.AT_OR_NEAR_TARGET, this.weaponSettings.shootAtTargetConfig = {
                target: this.scene.playerShip,
                offset_min_x: -40,
                offset_max_x: 40,
                offset_min_y: -20,
                offset_max_y: 20
            }, this.weaponSettings.numShots = e.numShots, this.weaponSettings.fireRate = e.fireRate, this.weaponSettings.barrelLength = e.barrelLength, this.weaponSettings.velocity = e.velocity, this.weaponSettings.startDelay = e.startDelay, this.weaponSettings.bulletSettings = e.bulletSettings, this.startWeapon()
        }, y.prototype._readyLifeBar = function() {
            this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.depth = this.armature.depth + 10, this.lifebar.visible = !0
        }, y.prototype.onDefeated = function() {
            this._defeated || (this._defeated = !0, this.scene.maxBossLevelDefeated < 2 && (this.scene.maxBossLevelDefeated = 2, r.GAME_ANALYTHICS_ENABLED && S.gameanalytics.GameAnalytics.addResourceEvent(S.gameanalytics.EGAResourceFlowType.Source, "stars", 0, "bounty", "boss2"), this.scene.savePersitentGameData()), this.bodySpr.setActive(!1), this.isOverlapEnabled = !1, this._startDefeatedAnim(), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 5, 12, 250, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -80,
                y: 80
            }, {
                x: 80,
                y: 80
            }), r.playLgBossSfx(r.SFX_KEYS.BOSS2_DEFEATED), this.lifebar.visible = !1, this.scene.rollHighBunchStars(this.bodySpr.x, this.bodySpr.y), this.scene.clearBaddies(), this._gun1.setActive(!1), this._gun2.setActive(!1), this.scene.awardPlayerHealthLeftScore(15e3))
        }, y.prototype._startDefeatedAnim = function() {
            this.bodySpr.setCollideWorldBounds(!1), d.TweenMax.to(this.bodySpr, 3, {
                y: this.bodySpr.y + 100
            }), d.TweenMax.to(this.armature, 2, {
                alpha: .01,
                scaleX: .25,
                scaleY: .25
            }), this.bodySpr.setAcceleration(0, 0), this.scene.time.delayedCall(4e3, this._onDefeatedAnimComplete, null, this)
        }, y.prototype._onDefeatedAnimComplete = function() {
            console.log("Boss2 on defeated complete..."), this.scene.doNextLevel(), this.toBePooledBack = !0, c.isDefined(this.onDefeatedMore) && (c.isDefined(this.onDefeatedMoreScope) ? this.onDefeatedMore.apply(this.onDefeatedMoreScope, this.onDefeatedMoreParams) : this.onDefeatedMore())
        }, y);

    function y(t) {
        var e = n.call(this, t) || this;
        return e._defeated = !1, e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.BOSS2, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.BOSS2, e.lifebar = new _.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e.bodySpr.setSize(180, 140), e.bodySpr.body.setOffset(.5 * e.bodySpr.displayWidth - 90, -120), e._mediumShielderSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 0,
            hp: 200,
            updateMode: r.UPDATE_MODEL_TYPE.SHIELDER,
            velocityMagnitude: 300,
            shielderModeConfig: {
                shieldRadius: 240,
                shieldRotationSpeed: Phaser.Math.DegToRad(1),
                shielderModeDuration: 6e3,
                shieldTarget: e,
                initialRotation: Phaser.Math.DegToRad(90)
            }
        }, e._mediumShielderSettings2 = {
            faction: r.FACTION.BADDIES,
            scoreValue: 0,
            hp: 200,
            updateMode: r.UPDATE_MODEL_TYPE.SHIELDER,
            velocityMagnitude: 400,
            shielderModeConfig: {
                shieldRadius: 160,
                shieldRotationSpeed: Phaser.Math.DegToRad(.5),
                shielderModeDuration: 2e4,
                shieldTarget: e,
                initialRotation: Phaser.Math.DegToRad(90)
            }
        }, e._b6GuardSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 0,
            hp: 160,
            updateMode: r.UPDATE_MODEL_TYPE.CUSTOM,
            velocityMagnitude: 200
        }, e.isSmallTypeActor = !1, e._acts = [], e._weaponReload1 = {
            velocity: 500,
            fireRate: 100,
            numShots: 5,
            startDelay: 250,
            barrelLength: 20,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            x: 0,
            y: 0,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION
        }, e._gun1 = new u.Gun(e.scene, e, {
            x: 30,
            y: -70,
            angleInRadians: Phaser.Math.DegToRad(15),
            barrelLength: 0,
            velocity: 500,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 250,
            numShots: 10,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION,
            startDelay: 250
        }), e._gun2 = new u.Gun(e.scene, e, {
            x: 30,
            y: 70,
            angleInRadians: Phaser.Math.DegToRad(-15),
            barrelLength: 0,
            velocity: 500,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 250,
            numShots: 10,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION,
            startDelay: 250
        }), e
    }
    e.Boss2 = g
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(6),
        d = i(4),
        _ = i(7),
        c = i(2),
        S = i(8),
        u = i(11),
        g = (a(y, n = h.Actor), y.prototype.start = function() {
            this.bodySpr.active && (this.turnRate = 3 * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400, this.weaponSettings.barrelLength = 50, this.lookAtPoint = null, this.bodySpr.angle = 90, this.bodySpr.x = .5 * r.worldDims.width, this.bodySpr.y = -200, d.TweenMax.to(this.bodySpr, 1, {
                x: .5 * r.worldDims.width,
                y: .25 * r.worldDims.height,
                onComplete: this._doNextRandomActStart,
                onCompleteScope: this
            }), this._readyLifeBar(), this._midGunL.setActive(!0), this._midGunR.setActive(!0), this._shoulderGun1L.setActive(!0), this._shoulderGun2L.setActive(!0), this._shoulderGun3L.setActive(!0), this._shoulderGun1R.setActive(!0), this._shoulderGun2R.setActive(!0), this._shoulderGun3R.setActive(!0), this._defeated = !1)
        }, y.prototype._startLazors = function(t) {
            void 0 === t && (t = 0), 0 < t ? this.scene.time.delayedCall(t, this.__startImmediateLazors, null, this) : this.__startImmediateLazors()
        }, y.prototype.__startImmediateLazors = function() {
            this.bodySpr.active && (this.armature.animation.fadeIn(r.BADDIE_ANIMS.BOSS_LAZOR_CHARGE, .25, 1), this.armature.once(dragonBones.EventObject.COMPLETE, this._shootLazors, this), r.playBigLazorSfx(r.SFX_KEYS.BADDIE_LAZOR))
        }, y.prototype._moveToPlayerSide = function(t, e) {
            0 < t ? this.scene.time.delayedCall(t, this.__moveToPlayerSideNow, [e], this) : this.__moveToPlayerSideNow(e)
        }, y.prototype.__moveToPlayerSideNow = function(t) {
            if (this.bodySpr.active) {
                var e = this.scene.playerShip.x < r.worldDims.centerX ? .25 * r.worldDims.width : .75 * r.worldDims.width,
                    i = Math.floor(r.worldDims.height * Phaser.Math.RND.realInRange(.15, .25));
                d.TweenMax.to(this.bodySpr, t / 1e3, {
                    x: e,
                    y: i
                })
            }
        }, y.prototype._moveToOtherSide = function(t, e) {
            0 < t ? this.scene.time.delayedCall(t, this.__moveToOtherSideNow, [e], this) : this.__moveToOtherSideNow(e)
        }, y.prototype.__moveToOtherSideNow = function(t) {
            var e = this.bodySpr.x < r.worldDims.centerX ? .75 * r.worldDims.width : .25 * r.worldDims.width,
                i = Math.floor(r.worldDims.height * Phaser.Math.RND.realInRange(.15, .25));
            d.TweenMax.to(this.bodySpr, t / 1e3, {
                x: e,
                y: i
            })
        }, y.prototype._moveToMidPosition = function(t, e) {
            void 0 === t && (t = 0), 0 < t ? this.scene.time.delayedCall(t, this.__moveToMidPositionNow, [e], this) : this.__moveToMidPositionNow(e)
        }, y.prototype.__moveToMidPositionNow = function(t) {
            if (this.bodySpr.active) {
                var e = Math.floor(r.worldDims.height * Phaser.Math.RND.realInRange(.1, .2));
                d.TweenMax.to(this.bodySpr, t / 1e3, {
                    x: .5 * r.worldDims.width,
                    y: e,
                    ease: d.Power2.easeInOut
                })
            }
        }, y.prototype._shootLazors = function() {
            this._bigLazorL.depth = this.bodySpr.depth - 1, this._bigLazorL.active = !0, this._bigLazorL.visible = !0, this._bigLazorL.play(r.KEYS.ANIMS.BADDIE_BIG_LAZOR, !1, 0), this._bigLazorL.scaleX = .1, this._bigLazorL.scaleY = .1, this._bigLazorL.alpha = .75, d.TweenMax.to(this._bigLazorL, .25, {
                scaleX: 1,
                scaleY: 4,
                alpha: 1,
                ease: RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), this._bigLazorR.depth = this.bodySpr.depth - 1, this._bigLazorR.active = !0, this._bigLazorR.visible = !0, this._bigLazorR.play(r.KEYS.ANIMS.BADDIE_BIG_LAZOR, !1, 0), this._bigLazorR.scaleX = .1, this._bigLazorR.scaleY = .1, this._bigLazorR.alpha = .75, d.TweenMax.to(this._bigLazorR, .25, {
                scaleX: 1,
                scaleY: 4,
                alpha: 1,
                ease: RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), this.scene.time.delayedCall(1e3, this._stopLazors, null, this)
        }, y.prototype._stopLazors = function() {
            var t = this;
            d.TweenMax.to(this._bigLazorL, .1, {
                scaleX: .1,
                scaleY: 4.5,
                alpha: .1,
                onComplete: function() {
                    t._bigLazorL.active = !0, t._bigLazorL.visible = !1, t._bigLazorL.scaleX = 1, t._bigLazorL.scaleY = 1, t._bigLazorL.alpha = 1
                },
                onCompleteScope: this,
                ease: d.Bounce.easeOut
            }), d.TweenMax.to(this._bigLazorR, .1, {
                scaleX: .1,
                scaleY: 4.5,
                alpha: .1,
                onComplete: function() {
                    t._bigLazorR.active = !0, t._bigLazorR.visible = !1, t._bigLazorR.scaleX = 1, t._bigLazorR.scaleY = 1, t._bigLazorR.alpha = 1
                },
                onCompleteScope: this,
                ease: d.Bounce.easeOut
            }), this.armature.animation.fadeIn(r.BADDIE_ANIMS.FLY, .25)
        }, y.prototype._doNextRandomActStart = function() {
            this.bodySpr.active && (this._acts.length <= 0 && (this._acts = [this._act1, this._act2, this._act3, this._act4, this._act5, this._act6, this._act7], Phaser.Utils.Array.Shuffle(this._acts)), this._acts.pop().call(this))
        }, y.prototype._act1 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(1250, 1500);
                this._moveToMidPosition(0, t), this._shoulderGun1L.reloadWeapon(!0), this._shoulderGun1R.reloadWeapon(!0), this._startLazors(1250), this._moveToPlayerSide(t, Phaser.Math.RND.between(1250, 1500)), this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act2 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(1250, 1500);
                this._moveToMidPosition(0, t), this._shoulderGun2L.reloadWeapon(!0), this._shoulderGun2R.reloadWeapon(!0), this._startLazors(1e3), this._moveToPlayerSide(t, Phaser.Math.RND.between(1250, 1500)), this.scene.time.delayedCall(3500, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act3 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(1e3, 1250);
                this._moveToMidPosition(0, t), this._shoulderGun3L.weaponSettings.shootAtTargetConfig.target = this.scene.playerShip, this._shoulderGun3L.reloadWeapon(!0), this._shoulderGun3R.weaponSettings.shootAtTargetConfig.target = this.scene.playerShip, this._shoulderGun3R.reloadWeapon(!0), this._startLazors(1250), this._moveToPlayerSide(t, Phaser.Math.RND.between(1250, 1500)), this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act4 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(800, 1200);
                this._moveToMidPosition(0, t), this._midGunL.reloadWeapon(!0), this._midGunR.reloadWeapon(!0), this._startLazors(1e3), this._moveToPlayerSide(t, Phaser.Math.RND.between(1250, 1500)), this.scene.time.delayedCall(3500, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act5 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(800, 1200);
                this._moveToMidPosition(0, t);
                for (var e = 0; e < 3; e++)(i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings)).bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), i.customBoss1Guard1R(.4 * r.worldDims.height + e * r.worldDims.height * .2);
                for (e = 0; e < 3; e++) {
                    var i;
                    (i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings)).bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), i.customBoss1Guard1L(.4 * r.worldDims.height + e * r.worldDims.height * .2)
                }
                this._startLazors(t), this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act6 = function() {
            var t = this;
            if (this.bodySpr.active) {
                var e = Phaser.Math.RND.between(800, 1200);
                this._moveToPlayerSide(0, e), this._moveToOtherSide(e + 500, Math.floor(2.5 * e)), this._startLazors(e);
                for (var i = [], s = r.worldDims.width / 13, a = 0; a < 12; a++) i.push(a);
                Phaser.Utils.Array.Shuffle(i);
                var o = function(e) {
                        n.scene.time.delayedCall(200 * i[e], function(i) {
                            t._bombSpawn1Settings.normalModeConfig.x = s * (i + 1), t._bombSpawn1Settings.normalModeConfig.y = -50, (e % 2 == 0 ? t.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_1, t._bombSpawn1Settings) : t.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_2, t._bombSpawn1Settings)).weaponSettings.velocity = 400
                        }, [e], n)
                    },
                    n = this;
                for (a = 0; a < 12; a++) o(a);
                this.scene.time.delayedCall(5e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act7 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(800, 1200);
                this._moveToPlayerSide(0, t), this._startLazors(0), this._moveToOtherSide(t + 250, Math.floor(2.5 * t)), this._mediumShielderSettings.shielderModeConfig.missileModeConfig.target = this.scene.playerShip;
                for (var e = 0; e < 8; e++) {
                    var i = void 0;
                    (i = e % 2 == 0 ? this.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_1, this._mediumShielderSettings) : this.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_2, this._mediumShielderSettings)).shieldRotation = Phaser.Math.DegToRad(45 * e), i.weaponSettings.velocity = 400, i.shieldRadius = 10, d.TweenMax.to(i, 1, {
                        shieldRadius: this._mediumShielderSettings.shielderModeConfig.shieldRadius
                    })
                }
                this.scene.time.delayedCall(5e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.lifebar.setXY(this.bodySpr.x - 60, this.bodySpr.y - 10), this._bigLazorL.x = this.bodySpr.x + 120, this._bigLazorL.y = this.bodySpr.y - 40, this._bigLazorL.visible && (this._bigLazorL.y += Phaser.Math.RND.between(-100, 100) * this._bigLazorL.scaleY), this._bigLazorR.x = this.bodySpr.x - 120, this._bigLazorR.y = this.bodySpr.y - 40, this._bigLazorR.visible && (this._bigLazorR.y += Phaser.Math.RND.between(-100, 100) * this._bigLazorR.scaleY), this.bodySpr.active && (this._checkLazorsVsPlayerOverlaps(), this._checkLazorsVsPlayerBulletsOverlaps(), this._checkLazorsVsPlayerShipsOverlaps()), this._midGunL.update(t), this._midGunR.update(t), this._shoulderGun1L.update(t), this._shoulderGun2L.update(t), this._shoulderGun3L.update(t), this._shoulderGun1R.update(t), this._shoulderGun2R.update(t), this._shoulderGun3R.update(t)
        }, y.prototype._checkLazorsVsPlayerOverlaps = function() {
            this._playerShipBodySpr = this.scene.playerShip.bodySpr, this._physics = this.scene.physics, this._bigLazorL.active && this._bigLazorR.active && (this._physics.overlap(this._playerShipBodySpr, this._bigLazorL) || this._physics.overlap(this._playerShipBodySpr, this._bigLazorR)) && this.scene.playerShip.hit()
        }, y.prototype._checkLazorsVsPlayerBulletsOverlaps = function() {
            if (this._playerBullets = this.scene.playerBullets, this._physics = this.scene.physics, this._bigLazorL.active && this._bigLazorR.active)
                for (var t = 0; t < this._playerBullets.length; t++) this._playerBullet = this._playerBullets[t], this._physics.overlap(this._playerBullet.bodySpr, this._bigLazorL) ? (this._playerBullet.hit(this._playerBullet.maxHitPoints), this._bigLazorL.visible || this.hit(this._playerBullet.maxHitPoints)) : this._physics.overlap(this._playerBullet.bodySpr, this._bigLazorR) && (this._playerBullet.hit(this._playerBullet.maxHitPoints), this._bigLazorR.visible || this.hit(this._playerBullet.maxHitPoints))
        }, y.prototype._checkLazorsVsPlayerShipsOverlaps = function() {
            if (this._playerBullets = this.scene.playerShips, this._physics = this.scene.physics, this._bigLazorL.active && this._bigLazorR.active)
                for (var t = 0; t < this._playerBullets.length; t++) this._playerBullet = this._playerBullets[t], this._playerBullet.isOverlapEnabled && (this._physics.overlap(this._playerBullet.bodySpr, this._bigLazorL) ? (this._playerBullet.hit(this._playerBullet.maxHitPoints), this._bigLazorL.visible || this.hit(this._playerBullet.maxHitPoints)) : this._physics.overlap(this._playerBullet.bodySpr, this._bigLazorR) && (this._playerBullet.hit(this._playerBullet.maxHitPoints), this._bigLazorR.visible || this.hit(this._playerBullet.maxHitPoints)))
        }, y.prototype.hit = function(t) {
            this.isOverlapEnabled && (n.prototype.hit.call(this, t), this.lifebar.percent = this.hitPoints / this.maxHitPoints)
        }, y.prototype.reset = function() {
            n.prototype.reset.call(this), this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.visible = !1, this.lifebar.setXY(-100, -100), this.isOverlapEnabled = !0, this._defeated = !1, this._stopLazors()
        }, y.prototype._readyLifeBar = function() {
            this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.depth = this.armature.depth + 10, this.lifebar.visible = !0
        }, y.prototype.onDefeated = function() {
            this._defeated || (this._defeated = !0, this.scene.maxBossLevelDefeated < 3 && (this.scene.maxBossLevelDefeated = 3, r.GAME_ANALYTHICS_ENABLED && S.gameanalytics.GameAnalytics.addResourceEvent(S.gameanalytics.EGAResourceFlowType.Source, "stars", 0, "bounty", "boss3"), this.scene.savePersitentGameData()), this.bodySpr.setActive(!1), this.isOverlapEnabled = !1, this._startDefeatedAnim(), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 5, 12, 250, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -80,
                y: 80
            }, {
                x: 80,
                y: 80
            }), r.playLgBossSfx(r.SFX_KEYS.BOSS3_DEFEATED), this.lifebar.visible = !1, this.scene.rollHighBunchStars(this.bodySpr.x, this.bodySpr.y), this.scene.clearBaddies(), this._stopLazors(), this._bigLazorL.active = !1, this._bigLazorR.active = !1, this._midGunL.setActive(!1), this._midGunR.setActive(!1), this._shoulderGun1L.setActive(!1), this._shoulderGun2L.setActive(!1), this._shoulderGun3L.setActive(!1), this._shoulderGun1R.setActive(!1), this._shoulderGun2R.setActive(!1), this._shoulderGun3R.setActive(!1), this.scene.awardPlayerHealthLeftScore(2e4))
        }, y.prototype._startDefeatedAnim = function() {
            this.bodySpr.setCollideWorldBounds(!1), d.TweenMax.to(this.bodySpr, 3, {
                y: this.bodySpr.y + 100
            }), d.TweenMax.to(this.armature, 2, {
                alpha: .01,
                scaleX: .25,
                scaleY: .25
            }), this.bodySpr.setAcceleration(0, 0), this.scene.time.delayedCall(4e3, this._onDefeatedAnimComplete, null, this)
        }, y.prototype._onDefeatedAnimComplete = function() {
            console.log("Boss3 on defeated complete..."), this.scene.doNextLevel(), this.toBePooledBack = !0, c.isDefined(this.onDefeatedMore) && (c.isDefined(this.onDefeatedMoreScope) ? this.onDefeatedMore.apply(this.onDefeatedMoreScope, this.onDefeatedMoreParams) : this.onDefeatedMore())
        }, y);

    function y(t) {
        var e = n.call(this, t) || this;
        return e._defeated = !1, e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.BOSS3, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.BOSS3, e.lifebar = new _.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e.bodySpr.setSize(320, 140).setOffset(.5 * (e.bodySpr.displayWidth - 320), -60), e._mediumShielderSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 100,
            detonationTime: 3e3,
            hp: 80,
            updateMode: r.UPDATE_MODEL_TYPE.SHIELDER,
            velocityMagnitude: 240,
            shielderModeConfig: {
                shieldRadius: 180,
                shieldRotationSpeed: Phaser.Math.DegToRad(2),
                shielderModeDuration: 2e3,
                shieldTarget: e,
                initialRotation: Phaser.Math.DegToRad(90),
                missileModeConfig: {
                    missileModeDuration: 2e3,
                    target: void 0,
                    turnRate: Phaser.Math.DegToRad(2)
                }
            }
        }, e._b6GuardSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 0,
            hp: 160,
            updateMode: r.UPDATE_MODEL_TYPE.CUSTOM,
            velocityMagnitude: 300
        }, e._bombSpawn1Settings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 100,
            detonationTime: 750,
            hp: 120,
            updateMode: r.UPDATE_MODEL_TYPE.NORMAL,
            velocityMagnitude: 300,
            normalModeConfig: {
                startRotation: r.DIRECTION_RAD.DOWN,
                y: -50
            }
        }, e.isSmallTypeActor = !1, e._acts = [], e._bigLazorL = e.scene.physics.add.sprite(0, 0, r.KEYS.GAME_TEX_SS1, r.KEYS.ANIMS.BIG_LAZOR + "0000"), e._bigLazorL.setSize(80, 256).setOrigin(.5, 0).setOffset(40, 0).setActive(!0).setVisible(!1), e._bigLazorR = e.scene.physics.add.sprite(0, 0, r.KEYS.GAME_TEX_SS1, r.KEYS.ANIMS.BIG_LAZOR + "0000"), e._bigLazorR.setSize(80, 256).setOrigin(.5, 0).setOffset(40, 0).setActive(!0).setVisible(!1), e._midGunL = new u.Gun(e.scene, e, {
            x: 120,
            y: -20,
            angleInRadians: Phaser.Math.DegToRad(0),
            barrelLength: 0,
            velocity: 600,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 50,
            numShots: 10,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION,
            startDelay: 0
        }), e._midGunR = new u.Gun(e.scene, e, {
            x: 120,
            y: 20,
            angleInRadians: Phaser.Math.DegToRad(0),
            barrelLength: 0,
            velocity: 600,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 50,
            numShots: 10,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION,
            startDelay: 0
        }), e._shoulderGun1L = new u.Gun(e.scene, e, {
            x: 12,
            y: -110,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 500,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            fireRate: 250,
            numShots: 3,
            shootingType: r.SHOOTING_TYPE.SPREAD,
            startDelay: 0,
            shotSpreadConfig: {
                angleRadiansBettween: Phaser.Math.DegToRad(12),
                fromBodyRotation: !1,
                numBullets: 7
            }
        }), e._shoulderGun2L = new u.Gun(e.scene, e, {
            x: 9,
            y: -141,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 400,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            fireRate: 250,
            numShots: 3,
            shootingType: r.SHOOTING_TYPE.SPREAD,
            startDelay: 0,
            shotSpreadConfig: {
                angleRadiansBettween: Phaser.Math.DegToRad(15),
                fromBodyRotation: !1,
                numBullets: 24
            }
        }), e._shoulderGun3L = new u.Gun(e.scene, e, {
            x: 5,
            y: -175,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 600,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 50,
            numShots: 10,
            shootingType: r.SHOOTING_TYPE.AT_OR_NEAR_TARGET,
            startDelay: 0,
            shootAtTargetConfig: {
                target: e.scene.playerShip,
                offset_min_x: 0,
                offset_max_x: 0,
                offset_min_y: 0,
                offset_max_y: 0
            }
        }), e._shoulderGun1R = new u.Gun(e.scene, e, {
            x: 12,
            y: 110,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 500,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            fireRate: 250,
            numShots: 3,
            shootingType: r.SHOOTING_TYPE.SPREAD,
            startDelay: 0,
            shotSpreadConfig: {
                angleRadiansBettween: Phaser.Math.DegToRad(12),
                fromBodyRotation: !1,
                numBullets: 7
            }
        }), e._shoulderGun2R = new u.Gun(e.scene, e, {
            x: 9,
            y: 141,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 400,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            fireRate: 250,
            numShots: 3,
            shootingType: r.SHOOTING_TYPE.SPREAD,
            startDelay: 0,
            shotSpreadConfig: {
                angleRadiansBettween: Phaser.Math.DegToRad(15),
                fromBodyRotation: !1,
                numBullets: 24
            }
        }), e._shoulderGun3R = new u.Gun(e.scene, e, {
            x: 5,
            y: 175,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 600,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 50,
            numShots: 10,
            shootingType: r.SHOOTING_TYPE.AT_OR_NEAR_TARGET,
            startDelay: 0,
            shootAtTargetConfig: {
                target: e.scene.playerShip,
                offset_min_x: 0,
                offset_max_x: 0,
                offset_min_y: 0,
                offset_max_y: 0
            }
        }), e
    }
    e.Boss3 = g
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(3),
        l = i(5),
        p = i(6),
        d = i(4),
        _ = i(7),
        c = i(2),
        S = i(8),
        u = i(11),
        g = (a(y, n = h.Actor), y.prototype.start = function() {
            this.bodySpr.active && (this.turnRate = 3 * Phaser.Math.DEG_TO_RAD, this.weaponSettings.velocity = 400, this.weaponSettings.barrelLength = 50, this.lookAtPoint = null, this.bodySpr.angle = 90, this.bodySpr.x = .5 * r.worldDims.width, this.bodySpr.y = -200, d.TweenMax.to(this.bodySpr, 1, {
                x: .5 * r.worldDims.width,
                y: .25 * r.worldDims.height,
                onComplete: this._doNextRandomActStart,
                onCompleteScope: this
            }), this._readyLifeBar(), this._midGunL.setActive(!0), this._midGunR.setActive(!0), this._shoulderGun1L.setActive(!0), this._shoulderGun2L.setActive(!0), this._shoulderGun3L.setActive(!0), this._shoulderGun1R.setActive(!0), this._shoulderGun2R.setActive(!0), this._shoulderGun3R.setActive(!0), this._defeated = !1)
        }, y.prototype._startLazors = function(t) {
            void 0 === t && (t = 0), 0 < t ? this.scene.time.delayedCall(t, this.__startImmediateLazors, null, this) : this.__startImmediateLazors()
        }, y.prototype.__startImmediateLazors = function() {
            this.bodySpr.active && (this.armature.animation.fadeIn(r.BADDIE_ANIMS.BOSS_LAZOR_CHARGE, .25, 1), this.armature.once(dragonBones.EventObject.COMPLETE, this._shootLazors, this), r.playBigLazorSfx(r.SFX_KEYS.BADDIE_LAZOR))
        }, y.prototype._moveToPlayerSide = function(t, e) {
            0 < t ? this.scene.time.delayedCall(t, this.__moveToPlayerSideNow, [e], this) : this.__moveToPlayerSideNow(e)
        }, y.prototype.__moveToPlayerSideNow = function(t) {
            if (this.bodySpr.active) {
                var e = this.scene.playerShip.x < r.worldDims.centerX ? .25 * r.worldDims.width : .75 * r.worldDims.width,
                    i = Math.floor(r.worldDims.height * Phaser.Math.RND.realInRange(.15, .25));
                d.TweenMax.to(this.bodySpr, t / 1e3, {
                    x: e,
                    y: i
                })
            }
        }, y.prototype._moveToOtherSide = function(t, e) {
            0 < t ? this.scene.time.delayedCall(t, this.__moveToOtherSideNow, [e], this) : this.__moveToOtherSideNow(e)
        }, y.prototype.__moveToOtherSideNow = function(t) {
            var e = this.bodySpr.x < r.worldDims.centerX ? .75 * r.worldDims.width : .25 * r.worldDims.width,
                i = Math.floor(r.worldDims.height * Phaser.Math.RND.realInRange(.15, .25));
            d.TweenMax.to(this.bodySpr, t / 1e3, {
                x: e,
                y: i
            })
        }, y.prototype._moveToMidPosition = function(t, e) {
            void 0 === t && (t = 0), 0 < t ? this.scene.time.delayedCall(t, this.__moveToMidPositionNow, [e], this) : this.__moveToMidPositionNow(e)
        }, y.prototype.__moveToMidPositionNow = function(t) {
            if (this.bodySpr.active) {
                var e = Math.floor(r.worldDims.height * Phaser.Math.RND.realInRange(.1, .2));
                d.TweenMax.to(this.bodySpr, t / 1e3, {
                    x: .5 * r.worldDims.width,
                    y: e,
                    ease: d.Power2.easeInOut
                })
            }
        }, y.prototype._shootLazors = function() {
            this._bigLazorL.depth = this.bodySpr.depth - 1, this._bigLazorL.active = !0, this._bigLazorL.visible = !0, this._bigLazorL.play(r.KEYS.ANIMS.BADDIE_BIG_LAZOR, !1, 0), this._bigLazorL.scaleX = .1, this._bigLazorL.scaleY = .1, this._bigLazorL.alpha = .75, d.TweenMax.to(this._bigLazorL, .25, {
                scaleX: 1,
                scaleY: 4,
                alpha: 1,
                ease: RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), this._bigLazorR.depth = this.bodySpr.depth - 1, this._bigLazorR.active = !0, this._bigLazorR.visible = !0, this._bigLazorR.play(r.KEYS.ANIMS.BADDIE_BIG_LAZOR, !1, 0), this._bigLazorR.scaleX = .1, this._bigLazorR.scaleY = .1, this._bigLazorR.alpha = .75, d.TweenMax.to(this._bigLazorR, .25, {
                scaleX: 1,
                scaleY: 4,
                alpha: 1,
                ease: RoughEase.ease.config({
                    template: Power0.easeOut,
                    strength: 1,
                    points: 20,
                    taper: "none",
                    randomize: !0,
                    clamp: !1
                })
            }), this.scene.time.delayedCall(1e3, this._stopLazors, null, this)
        }, y.prototype._stopLazors = function() {
            var t = this;
            d.TweenMax.to(this._bigLazorL, .1, {
                scaleX: .1,
                scaleY: 4.5,
                alpha: .1,
                onComplete: function() {
                    t._bigLazorL.active = !0, t._bigLazorL.visible = !1, t._bigLazorL.scaleX = 1, t._bigLazorL.scaleY = 1, t._bigLazorL.alpha = 1
                },
                onCompleteScope: this,
                ease: d.Bounce.easeOut
            }), d.TweenMax.to(this._bigLazorR, .1, {
                scaleX: .1,
                scaleY: 4.5,
                alpha: .1,
                onComplete: function() {
                    t._bigLazorR.active = !0, t._bigLazorR.visible = !1, t._bigLazorR.scaleX = 1, t._bigLazorR.scaleY = 1, t._bigLazorR.alpha = 1
                },
                onCompleteScope: this,
                ease: d.Bounce.easeOut
            }), this.armature.animation.fadeIn(r.BADDIE_ANIMS.FLY, .25)
        }, y.prototype._doNextRandomActStart = function() {
            this.bodySpr.active && (this._acts.length <= 0 && (this._acts = [this._act1, this._act2, this._act3, this._act4, this._act5, this._act6, this._act7], Phaser.Utils.Array.Shuffle(this._acts)), this._acts.pop().call(this))
        }, y.prototype._act1 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(1250, 1500);
                this._moveToMidPosition(0, t), this._shoulderGun1L.reloadWeapon(!0), this._shoulderGun1R.reloadWeapon(!0), this._startLazors(1250), this._moveToPlayerSide(t, Phaser.Math.RND.between(1250, 1500)), this.scene.time.delayedCall(3500, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act2 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(1250, 1500);
                this._moveToMidPosition(0, t), this._shoulderGun2L.reloadWeapon(!0), this._shoulderGun2R.reloadWeapon(!0), this._startLazors(1e3), this._moveToPlayerSide(t, Phaser.Math.RND.between(1250, 1500)), this.scene.time.delayedCall(3250, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act3 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(1e3, 1250);
                this._moveToMidPosition(0, t), this._shoulderGun3L.weaponSettings.shootAtTargetConfig.target = this.scene.playerShip, this._shoulderGun3L.reloadWeapon(!0), this._shoulderGun3R.weaponSettings.shootAtTargetConfig.target = this.scene.playerShip, this._shoulderGun3R.reloadWeapon(!0), this._startLazors(1250), this._moveToPlayerSide(t, Phaser.Math.RND.between(1250, 1500)), this.scene.time.delayedCall(3500, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act4 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(800, 1200);
                this._moveToMidPosition(0, t), this._midGunL.reloadWeapon(!0), this._midGunR.reloadWeapon(!0), this._startLazors(1e3), this._moveToPlayerSide(t, Phaser.Math.RND.between(1250, 1500)), this.scene.time.delayedCall(3250, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act5 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(800, 1200);
                this._moveToMidPosition(0, t);
                for (var e = 0; e < 4; e++)(i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings)).bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), i.customBoss1Guard1R(.3 * r.worldDims.height + e * r.worldDims.height * .15);
                for (e = 0; e < 4; e++) {
                    var i;
                    (i = this.scene.actorsMng.addActor(r.ARMATURE_IDS.B6, this._b6GuardSettings)).bodySpr.setX(this.bodySpr.x).setY(this.bodySpr.y), i.weaponSettings.velocity = 400, i.customBoss1Guard1L(.3 * r.worldDims.height + e * r.worldDims.height * .15)
                }
                this._startLazors(t), this.scene.time.delayedCall(3500, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act6 = function() {
            var t = this;
            if (this.bodySpr.active) {
                var e = Phaser.Math.RND.between(800, 1200);
                this._moveToPlayerSide(0, e), this._moveToOtherSide(e + 500, Math.floor(2.5 * e)), this._startLazors(e);
                for (var i = [], s = r.worldDims.width / 13, a = 0; a < 12; a++) i.push(a);
                Phaser.Utils.Array.Shuffle(i);
                var o = function(e) {
                        n.scene.time.delayedCall(200 * i[e], function(i) {
                            t._bombSpawn1Settings.normalModeConfig.x = s * (i + 1), t._bombSpawn1Settings.normalModeConfig.y = -50, (e % 2 == 0 ? t.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_1, t._bombSpawn1Settings) : t.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_2, t._bombSpawn1Settings)).weaponSettings.velocity = 400
                        }, [e], n)
                    },
                    n = this;
                for (a = 0; a < 12; a++) o(a);
                this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype._act7 = function() {
            if (this.bodySpr.active) {
                var t = Phaser.Math.RND.between(1200, 1500);
                this._moveToPlayerSide(0, t), this._startLazors(0), this._moveToOtherSide(t + 500, Math.floor(2.5 * t)), this._mediumShielderSettings.shielderModeConfig.missileModeConfig.target = this.scene.playerShip;
                for (var e = 0; e < 10; e++) {
                    var i = void 0;
                    (i = e % 2 == 0 ? this.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_1, this._mediumShielderSettings) : this.scene.actorsMng.addActor(r.ARMATURE_IDS.B5_2, this._mediumShielderSettings)).shieldRotation = Phaser.Math.DegToRad(45 * e), i.weaponSettings.velocity = 500, i.shieldRadius = 10, d.TweenMax.to(i, 1, {
                        shieldRadius: this._mediumShielderSettings.shielderModeConfig.shieldRadius
                    })
                }
                this.scene.time.delayedCall(4e3, this._doNextRandomActStart, null, this)
            }
        }, y.prototype.update = function(t) {
            n.prototype.update.call(this, t), this.lifebar.setXY(this.bodySpr.x - 60, this.bodySpr.y - 10), this._bigLazorL.x = this.bodySpr.x + 120, this._bigLazorL.y = this.bodySpr.y - 40, this._bigLazorL.visible && (this._bigLazorL.y += Phaser.Math.RND.between(-100, 100) * this._bigLazorL.scaleY), this._bigLazorR.x = this.bodySpr.x - 120, this._bigLazorR.y = this.bodySpr.y - 40, this._bigLazorR.visible && (this._bigLazorR.y += Phaser.Math.RND.between(-100, 100) * this._bigLazorR.scaleY), this.bodySpr.active && (this._checkLazorsVsPlayerOverlaps(), this._checkLazorsVsPlayerBulletsOverlaps(), this._checkLazorsVsPlayerShipsOverlaps()), this._midGunL.update(t), this._midGunR.update(t), this._shoulderGun1L.update(t), this._shoulderGun2L.update(t), this._shoulderGun3L.update(t), this._shoulderGun1R.update(t), this._shoulderGun2R.update(t), this._shoulderGun3R.update(t)
        }, y.prototype._checkLazorsVsPlayerOverlaps = function() {
            this._playerShipBodySpr = this.scene.playerShip.bodySpr, this._physics = this.scene.physics, this._bigLazorL.active && this._bigLazorR.active && (this._physics.overlap(this._playerShipBodySpr, this._bigLazorL) || this._physics.overlap(this._playerShipBodySpr, this._bigLazorR)) && this.scene.playerShip.hit()
        }, y.prototype._checkLazorsVsPlayerBulletsOverlaps = function() {
            if (this._playerBullets = this.scene.playerBullets, this._physics = this.scene.physics, this._bigLazorL.active && this._bigLazorR.active)
                for (var t = 0; t < this._playerBullets.length; t++) this._playerBullet = this._playerBullets[t], this._physics.overlap(this._playerBullet.bodySpr, this._bigLazorL) ? (this._playerBullet.hit(this._playerBullet.maxHitPoints), this._bigLazorL.visible || this.hit(this._playerBullet.maxHitPoints)) : this._physics.overlap(this._playerBullet.bodySpr, this._bigLazorR) && (this._playerBullet.hit(this._playerBullet.maxHitPoints), this._bigLazorR.visible || this.hit(this._playerBullet.maxHitPoints))
        }, y.prototype._checkLazorsVsPlayerShipsOverlaps = function() {
            if (this._playerBullets = this.scene.playerShips, this._physics = this.scene.physics, this._bigLazorL.active && this._bigLazorR.active)
                for (var t = 0; t < this._playerBullets.length; t++) this._playerBullet = this._playerBullets[t], this._playerBullet.isOverlapEnabled && (this._physics.overlap(this._playerBullet.bodySpr, this._bigLazorL) ? (this._playerBullet.hit(this._playerBullet.maxHitPoints), this._bigLazorL.visible || this.hit(this._playerBullet.maxHitPoints)) : this._physics.overlap(this._playerBullet.bodySpr, this._bigLazorR) && (this._playerBullet.hit(this._playerBullet.maxHitPoints), this._bigLazorR.visible || this.hit(this._playerBullet.maxHitPoints)))
        }, y.prototype.hit = function(t) {
            this.isOverlapEnabled && (n.prototype.hit.call(this, t), this.lifebar.percent = this.hitPoints / this.maxHitPoints)
        }, y.prototype.reset = function() {
            n.prototype.reset.call(this), this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.visible = !1, this.lifebar.setXY(-100, -100), this.isOverlapEnabled = !0, this._defeated = !1, this._stopLazors()
        }, y.prototype._readyLifeBar = function() {
            this.lifebar.percent = 1, this.lifebar.alpha = 1, this.lifebar.depth = this.armature.depth + 10, this.lifebar.visible = !0
        }, y.prototype.onDefeated = function() {
            this._defeated || (this._defeated = !0, this.scene.maxBossLevelDefeated < 4 && (this.scene.maxBossLevelDefeated = 4, r.GAME_ANALYTHICS_ENABLED && S.gameanalytics.GameAnalytics.addResourceEvent(S.gameanalytics.EGAResourceFlowType.Source, "stars", 0, "bounty", "boss4"), this.scene.savePersitentGameData()), this.bodySpr.setActive(!1), this.isOverlapEnabled = !1, this._startDefeatedAnim(), this.scene.effectsMng.addExploEffectTrail(r.KEYS.ANIMS.EXPLO1, 5, 12, 250, {
                x: this.bodySpr.x,
                y: this.bodySpr.y
            }, {
                x: -80,
                y: 80
            }, {
                x: 80,
                y: 80
            }), r.playLgBossSfx(r.SFX_KEYS.BOSS3_DEFEATED), this.lifebar.visible = !1, this.scene.rollHighBunchStars(this.bodySpr.x, this.bodySpr.y), this.scene.clearBaddies(), this._stopLazors(), this._bigLazorL.active = !1, this._bigLazorR.active = !1, this._midGunL.setActive(!1), this._midGunR.setActive(!1), this._shoulderGun1L.setActive(!1), this._shoulderGun2L.setActive(!1), this._shoulderGun3L.setActive(!1), this._shoulderGun1R.setActive(!1), this._shoulderGun2R.setActive(!1), this._shoulderGun3R.setActive(!1), this.scene.awardPlayerHealthLeftScore(25e3))
        }, y.prototype._startDefeatedAnim = function() {
            this.bodySpr.setCollideWorldBounds(!1), d.TweenMax.to(this.bodySpr, 3, {
                y: this.bodySpr.y + 100
            }), d.TweenMax.to(this.armature, 2, {
                alpha: .01,
                scaleX: .25,
                scaleY: .25
            }), this.bodySpr.setAcceleration(0, 0), this.scene.time.delayedCall(4e3, this._onDefeatedAnimComplete, null, this)
        }, y.prototype._onDefeatedAnimComplete = function() {
            console.log("boss4 defeated complete..."), this.scene.doNextLevel(), this.toBePooledBack = !0, c.isDefined(this.onDefeatedMore) && (c.isDefined(this.onDefeatedMoreScope) ? this.onDefeatedMore.apply(this.onDefeatedMoreScope, this.onDefeatedMoreParams) : this.onDefeatedMore())
        }, y);

    function y(t) {
        var e = n.call(this, t) || this;
        return e._defeated = !1, e.armature = l.DBArmatureFactory.Instance.createPredefinedArmature(t, r.ARMATURE_NAMES.BOSS4, r.DB_FILE_NAME), e.armature.x = e.bodySpr.x, e.armature.y = e.bodySpr.y, e.armature.visible = !0, e.armature.animation.play(r.BADDIE_ANIMS.FLY), e.armatureId = r.ARMATURE_IDS.BOSS4, e.lifebar = new _.LifeBar(e.scene, -100, -100, r.KEYS.GAME_TEX_SS1, r.KEYS.HP_BAR.BG, r.KEYS.HP_BAR.METER), e.bodySpr.setSize(320, 140).setOffset(.5 * (e.bodySpr.displayWidth - 320), -60), e._mediumShielderSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 100,
            detonationTime: 3e3,
            hp: 80,
            updateMode: r.UPDATE_MODEL_TYPE.SHIELDER,
            velocityMagnitude: 240,
            shielderModeConfig: {
                shieldRadius: 180,
                shieldRotationSpeed: Phaser.Math.DegToRad(2),
                shielderModeDuration: 2e3,
                shieldTarget: e,
                initialRotation: Phaser.Math.DegToRad(90),
                missileModeConfig: {
                    missileModeDuration: 2e3,
                    target: void 0,
                    turnRate: Phaser.Math.DegToRad(2)
                }
            }
        }, e._b6GuardSettings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 0,
            hp: 160,
            updateMode: r.UPDATE_MODEL_TYPE.CUSTOM,
            velocityMagnitude: 300
        }, e._bombSpawn1Settings = {
            faction: r.FACTION.BADDIES,
            scoreValue: 100,
            detonationTime: 750,
            hp: 120,
            updateMode: r.UPDATE_MODEL_TYPE.NORMAL,
            velocityMagnitude: 300,
            normalModeConfig: {
                startRotation: r.DIRECTION_RAD.DOWN,
                y: -50
            }
        }, e.isSmallTypeActor = !1, e._acts = [], e._bigLazorL = e.scene.physics.add.sprite(0, 0, r.KEYS.GAME_TEX_SS1, r.KEYS.ANIMS.BIG_LAZOR + "0000"), e._bigLazorL.setSize(80, 256).setOrigin(.5, 0).setOffset(40, 0).setActive(!0).setVisible(!1), e._bigLazorR = e.scene.physics.add.sprite(0, 0, r.KEYS.GAME_TEX_SS1, r.KEYS.ANIMS.BIG_LAZOR + "0000"), e._bigLazorR.setSize(80, 256).setOrigin(.5, 0).setOffset(40, 0).setActive(!0).setVisible(!1), e._midGunL = new u.Gun(e.scene, e, {
            x: 120,
            y: -20,
            angleInRadians: Phaser.Math.DegToRad(0),
            barrelLength: 0,
            velocity: 700,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 75,
            numShots: 10,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION,
            startDelay: 0
        }), e._midGunR = new u.Gun(e.scene, e, {
            x: 120,
            y: 20,
            angleInRadians: Phaser.Math.DegToRad(0),
            barrelLength: 0,
            velocity: 700,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 75,
            numShots: 10,
            shootingType: r.SHOOTING_TYPE.FROM_ROTATION,
            startDelay: 0
        }), e._shoulderGun1L = new u.Gun(e.scene, e, {
            x: 12,
            y: -110,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 400,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            fireRate: 350,
            numShots: 4,
            shootingType: r.SHOOTING_TYPE.SPREAD,
            startDelay: 0,
            shotSpreadConfig: {
                angleRadiansBettween: Phaser.Math.DegToRad(12),
                fromBodyRotation: !1,
                numBullets: 7
            }
        }), e._shoulderGun2L = new u.Gun(e.scene, e, {
            x: 9,
            y: -141,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 600,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            fireRate: 250,
            numShots: 4,
            shootingType: r.SHOOTING_TYPE.SPREAD,
            startDelay: 0,
            shotSpreadConfig: {
                angleRadiansBettween: Phaser.Math.DegToRad(15),
                fromBodyRotation: !1,
                numBullets: 24
            }
        }), e._shoulderGun3L = new u.Gun(e.scene, e, {
            x: 5,
            y: -175,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 700,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 75,
            numShots: 12,
            shootingType: r.SHOOTING_TYPE.AT_OR_NEAR_TARGET,
            startDelay: 0,
            shootAtTargetConfig: {
                target: e.scene.playerShip,
                offset_min_x: -40,
                offset_max_x: 40,
                offset_min_y: -20,
                offset_max_y: 20
            }
        }), e._shoulderGun1R = new u.Gun(e.scene, e, {
            x: 12,
            y: 110,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 400,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            fireRate: 350,
            numShots: 4,
            shootingType: r.SHOOTING_TYPE.SPREAD,
            startDelay: 0,
            shotSpreadConfig: {
                angleRadiansBettween: Phaser.Math.DegToRad(12),
                fromBodyRotation: !1,
                numBullets: 7
            }
        }), e._shoulderGun2R = new u.Gun(e.scene, e, {
            x: 9,
            y: 141,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 600,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_ACID),
            fireRate: 250,
            numShots: 4,
            shootingType: r.SHOOTING_TYPE.SPREAD,
            startDelay: 0,
            shotSpreadConfig: {
                angleRadiansBettween: Phaser.Math.DegToRad(15),
                fromBodyRotation: !1,
                numBullets: 24
            }
        }), e._shoulderGun3R = new u.Gun(e.scene, e, {
            x: 5,
            y: 175,
            angleInRadians: Phaser.Math.DegToRad(90),
            barrelLength: 0,
            velocity: 700,
            bulletSettings: p.BulletsManager.getBulletSettingsCopy(r.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
            fireRate: 75,
            numShots: 12,
            shootingType: r.SHOOTING_TYPE.AT_OR_NEAR_TARGET,
            startDelay: 0,
            shootAtTargetConfig: {
                target: e.scene.playerShip,
                offset_min_x: -40,
                offset_max_x: 40,
                offset_min_y: -20,
                offset_max_y: 20
            }
        }), e
    }
    e.Boss4 = g
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importDefault || function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(62)),
        o = s(i(63)),
        n = s(i(64)),
        r = s(i(65)),
        h = (l.prototype.startLevel = function(t) {
            this._setLevelIndex(t), this._levels[this._levelIndex].start()
        }, l.prototype._setLevelIndex = function(t) {
            t < 0 ? this._levelIndex = 0 : t >= this._levels.length ? this._levelIndex = this._levels.length - 1 : this._levelIndex = t
        }, l.prototype.isLastLevel = function() {
            return this._levelIndex > this._levels.length - 2
        }, l.prototype.doNextLevel = function() {
            this.isLastLevel() || this.startLevel(this._levelIndex + 1)
        }, l.prototype.resetLevel = function() {
            this._levels[this._levelIndex].start()
        }, l);

    function l(t) {
        this._levelIndex = 0, this._levels = [], this._s = t, this._levels[0] = new a.default(t), this._levels[1] = new o.default(t), this._levels[2] = new n.default(t), this._levels[3] = new r.default(t)
    }
    e.LevelsManager = h
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        },
        a = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = s(i(1)),
        n = i(9),
        r = i(6),
        h = i(2),
        l = a(i(12)),
        p = (d.prototype.start = function() {
            1 <= this.gameScene.maxBossLevelDefeated ? this.gameScene.time.delayedCall(500, this._doQuickSpawn, null, this) : this.gameScene.time.delayedCall(1e3, this._doNormalSpawn, null, this)
        }, d.prototype._doNormalSpawn = function() {
            var t = this;
            this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 30, this._stopAutoSpawn = !1, this.gui.onPortraitHidden = null, h.isDefined(this._nextSpawnTimer) && (this._nextSpawnTimer.remove(!1), this._nextSpawnTimer.destroy()), this._nextSpawnTimer = this.gameScene.time.delayedCall(1e3, function() {
                t._doNextSpawn()
            }, null, this)
        }, d.prototype._doQuickSpawn = function() {
            var t = this;
            this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 10, this._stopAutoSpawn = !1, this.gui.onPortraitHidden = null, h.isDefined(this._nextSpawnTimer) && (this._nextSpawnTimer.remove(!1), this._nextSpawnTimer.destroy()), this._nextSpawnTimer = this.gameScene.time.delayedCall(1e3, function() {
                t._doNextSpawn()
            }, null, this), this._spawnTime1Min = 1500, this._spawnTime1Max = 2500, this._spawnTime2Min = 3500, this._spawnTime2Max = 4500
        }, d.prototype._doNextSpawn = function() {
            if (!this._stopAutoSpawn) {
                if (this._numSpawnFunctionCalls++, this._numSpawnFunctionCalls % 5 == 0) return this._numSpawnFunctionCalls >= this._totalNumSpawnFunctionCalls ? this._Boss1Spawn() : this._randMedSpawn(), void(this._nextSpawnTimer = this.gameScene.time.delayedCall(Phaser.Math.RND.between(this._spawnTime2Min, this._spawnTime2Max), this._doNextSpawn, null, this));
                this._randEasySpawn(), this._nextSpawnTimer = this.gameScene.time.delayedCall(Phaser.Math.RND.between(this._spawnTime1Min, this._spawnTime1Max), this._doNextSpawn, null, this)
            }
        }, d.prototype._randEasySpawn = function() {
            this.gameScene.__isGameOver || (this._easySpawnFunctions.length < 1 && (this._easySpawnFunctions.push(this._smallBaddiesPathSpawn1, this._smallBaddiesBunchSpawn1, this._smallBaddiesBunchSpawn2, this._smallBaddiesBunchSpawn3, this._smallBaddiesSequenceSpawn1, this._turretB8Spawn1), Phaser.Math.RND.shuffle(this._easySpawnFunctions)), this._easySpawnFunctions.pop().call(this))
        }, d.prototype._randMedSpawn = function() {
            this.gameScene.__isGameOver || (this._medSpawnFunctions.length < 1 && (this._medSpawnFunctions.push(this._mediumBaddieSpawn1_1, this._mediumBaddieSpawn1_2, this._mediumBaddieSpawn2_1), Phaser.Math.RND.shuffle(this._medSpawnFunctions)), this._medSpawnFunctions.pop().call(this))
        }, d.prototype._mediumBaddieSpawn1_1 = function() {
            var t = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    hp: 1e3,
                    scoreValue: 1e3
                },
                e = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B1, t),
                i = 0 < Phaser.Math.RND.between(0, 1);
            e.startCustomBehavior1(i)
        }, d.prototype._mediumBaddieSpawn1_2 = function() {
            var t = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 1e3,
                scoreValue: 1e3
            };
            this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B1, t).startCustomBehavior2(!1)
        }, d.prototype._mediumBaddieSpawn2_1 = function() {
            var t = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    hp: 1e3,
                    scoreValue: 1e3
                },
                e = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B2, t),
                i = 0 < Phaser.Math.RND.between(0, 1);
            e.startCustomBehavior1(i)
        }, d.prototype._Boss1Spawn = function(t) {
            void 0 === t && (t = !0), this._stopAutoSpawn = !0;
            var e = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 1e4,
                scoreValue: 5e3
            };
            1 <= this.gameScene.maxBossLevelDefeated && (e.hp = 5e3);
            var i = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.BOSS1, e);
            return i.start(), t && this.gameScene.giveFreePowerupsBundle(.5 * o.worldDims.width, o.worldDims.height), i
        }, d.prototype._smallBaddiesSequenceSpawn1 = function() {
            var t = this;
            this.gui.onPortraitHidden = null;
            for (var e = [], i = 0; i < 15; i++) e.push(i);
            Phaser.Utils.Array.Shuffle(e);
            var s = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
                a = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    hp: 30,
                    scoreValue: 80,
                    velocityMagnitude: 300,
                    normalModeConfig: {
                        x: 0,
                        y: -50,
                        startRotation: 0
                    },
                    squadronId: "sq_" + this._numSpawnFunctionCalls
                };
            for (i = 0; i < 15; i++) this.gameScene.time.delayedCall(150 * e[i], function(e) {
                a.normalModeConfig.x = 748 + -36.4 * e, a.normalModeConfig.startRotation = Phaser.Math.DegToRad(150 + -6 * e);
                var i = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B3, a);
                e % 3 == 0 && (i.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, i.weaponSettings.velocity = 300, i.weaponSettings.barrelLength = 30, i.weaponSettings.numShots = 1, i.weaponSettings.startDelay = 1e3, i.weaponSettings.bulletSettings = s, i.weaponSettings.angleInRadians = .5 * Math.PI, i.weaponSettings.shotSpreadConfig = {
                    angleRadiansBettween: Phaser.Math.DegToRad(20),
                    fromBodyRotation: !1,
                    numBullets: 3
                }, i.startWeapon())
            }, [i], this);
            var n = new l.default("sq_" + this._numSpawnFunctionCalls, 15, function() {
                t.gameScene.awardSmallSquadronWipeReward(n)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(n), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(n)
            }, null, this)
        }, d.prototype._smallBaddiesBunchSpawn3 = function() {
            var t = this,
                e = {
                    faction: o.FACTION.BADDIES,
                    hp: 60,
                    scoreValue: 100,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(1)
                    }
                },
                i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
                s = o.worldDims.width * Phaser.Math.RND.realInRange(.2, .8),
                a = o.worldDims.width * Phaser.Math.RND.realInRange(.1, .4),
                n = 120,
                h = o.worldDims.width * (s < .5 * o.worldDims.width ? -.1 : 1.1),
                p = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            p.setXYA(h, a - 100 - n, 90), p.turnRate = 2 * Phaser.Math.DEG_TO_RAD, p.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, p.weaponSettings.numShots = 3, p.weaponSettings.fireRate = 100, p.weaponSettings.barrelLength = 30, p.weaponSettings.velocity = 300, p.weaponSettings.shootAtTargetConfig = {
                target: this.gameScene.playerShip,
                offset_min_x: -80,
                offset_max_x: 80,
                offset_min_y: -20,
                offset_max_y: 20
            }, p.weaponSettings.bulletSettings = i, p.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1750, 2250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: s,
                spotY: a,
                travelOutTime: Phaser.Math.RND.between(1750, 2250),
                exitX: h,
                exitY: -.1 * o.worldDims.height
            });
            var d = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            d.setXYA(h - n, a - 60, 90), d.turnRate = 2 * Phaser.Math.DEG_TO_RAD, d.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, d.weaponSettings.numShots = 2, d.weaponSettings.fireRate = 100, d.weaponSettings.barrelLength = 30, d.weaponSettings.velocity = 400, d.weaponSettings.bulletSettings = i, d.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1750, 2250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: s - n,
                spotY: 60 + a,
                travelOutTime: Phaser.Math.RND.between(1750, 2250),
                exitX: h,
                exitY: -.1 * o.worldDims.height
            });
            var _ = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            _.setXYA(h + n, a - 60, 90), _.turnRate = 2 * Phaser.Math.DEG_TO_RAD, _.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, _.weaponSettings.numShots = 2, _.weaponSettings.fireRate = 100, _.weaponSettings.barrelLength = 30, _.weaponSettings.velocity = 400, _.weaponSettings.bulletSettings = i, _.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1750, 2250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: s + n,
                spotY: 60 + a,
                travelOutTime: Phaser.Math.RND.between(1750, 2250),
                exitX: h,
                exitY: -.1 * o.worldDims.height
            });
            var c = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            c.setXYA(h, a - 100 + n, 90), c.turnRate = 2 * Phaser.Math.DEG_TO_RAD, c.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, c.weaponSettings.numShots = 3, c.weaponSettings.fireRate = 100, c.weaponSettings.barrelLength = 30, c.weaponSettings.velocity = 300, c.weaponSettings.shootAtTargetConfig = {
                target: this.gameScene.playerShip,
                offset_min_x: -80,
                offset_max_x: 80,
                offset_min_y: -20,
                offset_max_y: 20
            }, c.weaponSettings.bulletSettings = i, c.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1750, 2250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: s,
                spotY: a + n,
                travelOutTime: Phaser.Math.RND.between(1750, 2250),
                exitX: h,
                exitY: -.1 * o.worldDims.height
            });
            var S = new l.default("sq_" + this._numSpawnFunctionCalls, 4, function() {
                t.gameScene.awardSmallSquadronWipeReward(S)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(S), this.gameScene.time.delayedCall(7e3, function() {
                o.squadronKeeper.removeSquadronInfo(S)
            }, null, this)
        }, d.prototype._smallBaddiesBunchSpawn2 = function() {
            var t = this,
                e = {
                    faction: o.FACTION.BADDIES,
                    hp: 60,
                    scoreValue: 100,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(1)
                    }
                },
                i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
                s = o.worldDims.width * Phaser.Math.RND.realInRange(.2, .8),
                a = o.worldDims.width * Phaser.Math.RND.realInRange(.1, .4),
                n = 120,
                h = o.worldDims.width * (s < .5 * o.worldDims.width ? -.1 : 1.1),
                p = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            p.setXYA(s, a - 100, 90), p.turnRate = 3 * Phaser.Math.DEG_TO_RAD, p.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, p.weaponSettings.numShots = 3, p.weaponSettings.fireRate = 50, p.weaponSettings.barrelLength = 30, p.weaponSettings.velocity = 350, p.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: 25 * Phaser.Math.DEG_TO_RAD,
                fromBodyRotation: !0,
                numBullets: 3
            }, p.weaponSettings.bulletSettings = i, p.startAct2({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(750, 1250),
                spotX: s,
                spotY: a,
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: h,
                exitY: -.1 * o.worldDims.height
            });
            var d = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            d.setXYA(s - n, a - 60, 90), d.turnRate = 3 * Phaser.Math.DEG_TO_RAD, d.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, d.weaponSettings.numShots = 2, d.weaponSettings.fireRate = 50, d.weaponSettings.barrelLength = 30, d.weaponSettings.velocity = 400, d.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: 15 * Phaser.Math.DEG_TO_RAD,
                fromBodyRotation: !0,
                numBullets: 3
            }, d.weaponSettings.bulletSettings = i, d.startAct2({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(750, 1250),
                spotX: s - n,
                spotY: 60 + a,
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: h,
                exitY: -.1 * o.worldDims.height
            });
            var _ = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            _.setXYA(s + n, a - 60, 90), _.turnRate = 3 * Phaser.Math.DEG_TO_RAD, _.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, _.weaponSettings.numShots = 2, _.weaponSettings.fireRate = 50, _.weaponSettings.barrelLength = 30, _.weaponSettings.velocity = 400, _.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: 15 * Phaser.Math.DEG_TO_RAD,
                fromBodyRotation: !0,
                numBullets: 3
            }, _.weaponSettings.bulletSettings = i, _.startAct2({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(750, 1250),
                spotX: s + n,
                spotY: 60 + a,
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: h,
                exitY: -.1 * o.worldDims.height
            });
            var c = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            c.setXYA(s, a - 100 + n, 90), c.turnRate = 3 * Phaser.Math.DEG_TO_RAD, c.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, c.weaponSettings.numShots = 3, c.weaponSettings.fireRate = 50, c.weaponSettings.barrelLength = 30, c.weaponSettings.velocity = 350, c.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: 25 * Phaser.Math.DEG_TO_RAD,
                fromBodyRotation: !0,
                numBullets: 3
            }, c.weaponSettings.bulletSettings = i, c.startAct2({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(750, 1250),
                spotX: s,
                spotY: a + n,
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: h,
                exitY: -.1 * o.worldDims.height
            });
            var S = new l.default("sq_" + this._numSpawnFunctionCalls, 4, function() {
                t.gameScene.awardMedSquadronWipeReward(S)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(S), this.gameScene.time.delayedCall(5e3, function() {
                o.squadronKeeper.removeSquadronInfo(S)
            }, null, this)
        }, d.prototype._smallBaddiesBunchSpawn1 = function() {
            var t = this,
                e = {
                    faction: o.FACTION.BADDIES,
                    hp: 60,
                    scoreValue: 50,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(1)
                    }
                },
                i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
                s = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            s.setXYA(-.1 * o.worldDims.width, -100, 90), s.turnRate = 3 * Phaser.Math.DEG_TO_RAD, s.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, s.weaponSettings.numShots = 1, s.weaponSettings.fireRate = 250, s.weaponSettings.barrelLength = 30, s.weaponSettings.velocity = 400, s.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: 15 * Phaser.Math.DEG_TO_RAD,
                fromBodyRotation: !0,
                numBullets: 3
            }, s.weaponSettings.bulletSettings = i, s.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: .2 * o.worldDims.width,
                spotY: .4 * o.worldDims.width,
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: -.1 * o.worldDims.width,
                exitY: .4 * o.worldDims.width
            });
            var a = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            a.setXYA(.1 * o.worldDims.width, -100, 90), a.turnRate = 3 * Phaser.Math.DEG_TO_RAD, a.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, a.weaponSettings.numShots = 2, a.weaponSettings.fireRate = 200, a.weaponSettings.barrelLength = 30, a.weaponSettings.velocity = 500, a.weaponSettings.shootAtTargetConfig = {
                target: this.gameScene.playerShip,
                offset_min_x: -80,
                offset_max_x: -80,
                offset_min_y: -40,
                offset_max_y: -40
            }, a.weaponSettings.bulletSettings = i, a.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: .4 * o.worldDims.width,
                spotY: .3 * o.worldDims.width,
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: -.1 * o.worldDims.width,
                exitY: .4 * o.worldDims.width
            });
            var n = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            n.setXYA(.9 * o.worldDims.width, -100, 90), n.turnRate = 3 * Phaser.Math.DEG_TO_RAD, n.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, n.weaponSettings.numShots = 2, n.weaponSettings.fireRate = 200, n.weaponSettings.barrelLength = 30, n.weaponSettings.velocity = 500, n.weaponSettings.shootAtTargetConfig = {
                target: this.gameScene.playerShip,
                offset_min_x: -80,
                offset_max_x: -80,
                offset_min_y: -40,
                offset_max_y: -40
            }, n.weaponSettings.bulletSettings = i, n.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: .6 * o.worldDims.width,
                spotY: .3 * o.worldDims.width,
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: 1.1 * o.worldDims.width,
                exitY: .4 * o.worldDims.width
            });
            var h = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            h.setXYA(1.1 * o.worldDims.width, -100, 90), h.turnRate = 3 * Phaser.Math.DEG_TO_RAD, h.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, h.weaponSettings.numShots = 1, h.weaponSettings.fireRate = 250, h.weaponSettings.barrelLength = 30, h.weaponSettings.velocity = 400, h.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: 15 * Phaser.Math.DEG_TO_RAD,
                fromBodyRotation: !0,
                numBullets: 3
            }, h.weaponSettings.bulletSettings = i, h.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: .8 * o.worldDims.width,
                spotY: .4 * o.worldDims.width,
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: 1.1 * o.worldDims.width,
                exitY: .4 * o.worldDims.width
            });
            var p = new l.default("sq_" + this._numSpawnFunctionCalls, 4, function() {
                t.gameScene.awardSmallSquadronWipeReward(p)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(p), this.gameScene.time.delayedCall(5e3, function() {
                o.squadronKeeper.removeSquadronInfo(p)
            }, null, this)
        }, d.prototype._smallBaddiesPathSpawn1 = function() {
            for (var t = this, e = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), i = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 20,
                    scoreValue: 50,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P1),
                        pathTravelTime: 5.5,
                        pathOffsets: new Phaser.Geom.Point(100, 0),
                        xMirror: !1,
                        yMirror: !1
                    }
                }, s = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 20,
                    scoreValue: 50,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P1),
                        pathTravelTime: 5.5,
                        pathOffsets: new Phaser.Geom.Point(-100, 0),
                        xMirror: !0,
                        yMirror: !1
                    }
                }, a = function(a) {
                    h.gameScene.time.delayedCall(250 * a, function(n) {
                        var r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B1, i),
                            h = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B1, s);
                        n % 2 == 0 && (r.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, r.weaponSettings.angleInRadians = .25 * Math.PI, r.weaponSettings.numShots = 2, r.weaponSettings.fireRate = 250, r.weaponSettings.barrelLength = 30, r.weaponSettings.velocity = 400, r.weaponSettings.startDelay = 750 + 150 * a, r.weaponSettings.bulletSettings = e, r.startWeapon(), h.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, h.weaponSettings.angleInRadians = .25 * Math.PI, h.weaponSettings.numShots = 2, h.weaponSettings.fireRate = 250, h.weaponSettings.barrelLength = 30, h.weaponSettings.velocity = 400, h.weaponSettings.startDelay = 750 + 150 * a, h.weaponSettings.bulletSettings = e, h.startWeapon())
                    }, [a], h)
                }, h = this, p = 0; p < 10; p++) a(p);
            var d = new l.default("sq_" + this._numSpawnFunctionCalls, 20, function() {
                t.gameScene.awardMedSquadronWipeReward(d)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(d), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(d)
            }, null, this)
        }, d.prototype._turretB8Spawn1 = function() {
            var t = {
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    faction: o.FACTION.BADDIES,
                    hp: 320,
                    scoreValue: 100,
                    velocityMagnitude: 80,
                    normalModeConfig: {
                        x: .7 * o.worldDims.width,
                        y: -100,
                        startRotation: Phaser.Math.DegToRad(90)
                    }
                },
                e = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, t),
                i = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, t);
            e.attachB8Turret(i).start();
            for (var s = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), a = 0; a < 5; a++) this.gameScene.time.delayedCall(750 * a, function() {
                i.loadWeapon(3, 100, 300, 0, s)
            }, null, this);
            t = {
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                faction: o.FACTION.BADDIES,
                hp: 320,
                scoreValue: 100,
                velocityMagnitude: 80,
                normalModeConfig: {
                    x: .3 * o.worldDims.width,
                    y: -100,
                    startRotation: Phaser.Math.DegToRad(90)
                }
            };
            var n = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, t),
                h = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, t);
            for (n.attachB8Turret(h).start(), s = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), a = 0; a < 5; a++) this.gameScene.time.delayedCall(750 * a, function() {
                h.loadWeapon(3, 100, 300, 0, s)
            }, null, this)
        }, d);

    function d(t) {
        this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 10, this._stopAutoSpawn = !1, this._spawnTime1Min = 2500, this._spawnTime1Max = 4e3, this._spawnTime2Min = 4e3, this._spawnTime2Max = 5e3, this._easySpawnFunctions = [], this._medSpawnFunctions = [], this.gameScene = t, this.gui = t.gameUi
    }
    e.default = p
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        },
        a = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = s(i(1)),
        n = i(9),
        r = i(6),
        h = i(2),
        l = a(i(12)),
        p = (d.prototype.start = function() {
            2 <= this.gameScene.maxBossLevelDefeated ? this.gameScene.time.delayedCall(500, this._doQuickSpawn, null, this) : this.gameScene.time.delayedCall(1e3, this._doNormalSpawn, null, this)
        }, d.prototype._doNormalSpawn = function() {
            var t = this;
            this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 30, this._stopAutoSpawn = !1, this.gui.onPortraitHidden = null, h.isDefined(this._nextSpawnTimer) && (this._nextSpawnTimer.remove(!1), this._nextSpawnTimer.destroy()), this._nextSpawnTimer = this.gameScene.time.delayedCall(1e3, function() {
                t._doNextSpawn()
            }, null, this)
        }, d.prototype._doQuickSpawn = function() {
            var t = this;
            this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 10, this._stopAutoSpawn = !1, this.gui.onPortraitHidden = null, h.isDefined(this._nextSpawnTimer) && (this._nextSpawnTimer.remove(!1), this._nextSpawnTimer.destroy()), this._nextSpawnTimer = this.gameScene.time.delayedCall(1e3, function() {
                t._doNextSpawn()
            }, null, this), this._spawnTime1Min = 2250, this._spawnTime1Max = 3750, this._spawnTime2Min = 2350, this._spawnTime2Max = 2500
        }, d.prototype._doNextSpawn = function() {
            if (!this._stopAutoSpawn)
                if (this._numSpawnFunctionCalls++, this._numSpawnFunctionCalls >= this._totalNumSpawnFunctionCalls) this._Boss2Spawn();
                else {
                    if (this._numSpawnFunctionCalls % 4 == 0 || this._numSpawnFunctionCalls % 5 == 0) return this._randMedSpawn(), void(this._nextSpawnTimer = this.gameScene.time.delayedCall(Phaser.Math.RND.between(this._spawnTime2Min, this._spawnTime2Max), this._doNextSpawn, null, this));
                    this._randEasySpawn(), this._nextSpawnTimer = this.gameScene.time.delayedCall(Phaser.Math.RND.between(this._spawnTime1Min, this._spawnTime1Max), this._doNextSpawn, null, this)
                }
        }, d.prototype._randEasySpawn = function() {
            this.gameScene.__isGameOver || (this._easySpawnFunctions.length < 1 && (this._easySpawnFunctions.push(this._smallBaddiesPathSpawn1, this._smallBaddiesSequenceSpawn1, this._smallBaddiesSequenceSpawn2, this._smallBaddiesBunchSpawn3, this._smallBaddiesStrafeSpawn4, this._turretB8Spawn1), Phaser.Math.RND.shuffle(this._easySpawnFunctions)), this._easySpawnFunctions.pop().call(this))
        }, d.prototype._randMedSpawn = function() {
            this.gameScene.__isGameOver || (this._medSpawnFunctions.length < 1 && (this._medSpawnFunctions.push(this._mediumBaddieSpawn1_1, this._mediumBaddieSpawn1_2, this._mediumBaddieSpawn2_1), Phaser.Math.RND.shuffle(this._medSpawnFunctions)), this._medSpawnFunctions.pop().call(this))
        }, d.prototype._mediumBaddieSpawn1_1 = function() {
            var t = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    hp: 1e3,
                    scoreValue: 1e3
                },
                e = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B1, t),
                i = 0 < Phaser.Math.RND.between(0, 1);
            e.startCustomBehavior1(i)
        }, d.prototype._mediumBaddieSpawn1_2 = function() {
            var t = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 1e3,
                scoreValue: 1e3
            };
            this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B1, t).startCustomBehavior2(!1)
        }, d.prototype._mediumBaddieSpawn2_1 = function() {
            var t = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    hp: 1e3,
                    scoreValue: 1e3
                },
                e = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B2, t),
                i = 0 < Phaser.Math.RND.between(0, 1);
            e.startCustomBehavior1(i)
        }, d.prototype._Boss2Spawn = function(t) {
            void 0 === t && (t = !0), this._stopAutoSpawn = !0;
            var e = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 2e4,
                scoreValue: 1e4
            };
            2 <= this.gameScene.maxBossLevelDefeated && (e.hp = 1e4);
            var i = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.BOSS2, e);
            return i.start(), t && this.gameScene.giveFreePowerupsBundle(.5 * o.worldDims.width, o.worldDims.height), i
        }, d.prototype._smallBaddiesSequenceSpawn1 = function() {
            var t = this;
            this.gui.onPortraitHidden = null;
            for (var e = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), i = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    hp: 15,
                    scoreValue: 80,
                    velocityMagnitude: 250,
                    normalModeConfig: {
                        x: 0,
                        y: -50,
                        startRotation: 0
                    },
                    squadronId: "sq_" + this._numSpawnFunctionCalls
                }, s = o.worldDims.width - 80, a = (s - 80) / 18, n = 0; n < 18; n++) {
                i.normalModeConfig.x = s - a * n, i.normalModeConfig.startRotation = Phaser.Math.DegToRad(160 - 140 / 18 * n);
                var h = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B3, i);
                n % 3 == 0 && (h.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, h.weaponSettings.velocity = 300, h.weaponSettings.barrelLength = 30, h.weaponSettings.numShots = 1, h.weaponSettings.startDelay = 250, h.weaponSettings.bulletSettings = e, h.weaponSettings.angleInRadians = .5 * Math.PI, h.weaponSettings.shotSpreadConfig = {
                    angleRadiansBettween: Phaser.Math.DegToRad(20),
                    fromBodyRotation: !1,
                    numBullets: 3
                }, h.startWeapon())
            }
            var p = new l.default("sq_" + this._numSpawnFunctionCalls, 16, function() {
                t.gameScene.awardSmallSquadronWipeReward(p)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(p), this.gameScene.time.delayedCall(5e3, function() {
                o.squadronKeeper.removeSquadronInfo(p)
            }, null, this)
        }, d.prototype._smallBaddiesSequenceSpawn2 = function() {
            for (var t = this, e = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), i = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    hp: 20,
                    scoreValue: 90,
                    velocityMagnitude: 300,
                    normalModeConfig: {
                        x: 0,
                        y: -50,
                        startRotation: 0
                    },
                    squadronId: "sq_" + this._numSpawnFunctionCalls + "_wave2"
                }, s = o.worldDims.width - 80, a = (s - 80) / 15, n = 0; n < 15; n++) {
                i.normalModeConfig.x = s - a * n, i.normalModeConfig.startRotation = Phaser.Math.DegToRad(160 - 140 / 15 * n);
                var h = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B1, i);
                n % 3 == 0 && (h.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, h.weaponSettings.velocity = 350, h.weaponSettings.barrelLength = 30, h.weaponSettings.numShots = 1, h.weaponSettings.startDelay = 500, h.weaponSettings.bulletSettings = e, h.weaponSettings.angleInRadians = .5 * Math.PI, h.weaponSettings.shotSpreadConfig = {
                    angleRadiansBettween: Phaser.Math.DegToRad(20),
                    fromBodyRotation: !1,
                    numBullets: 4
                }, h.startWeapon())
            }
            var p = new l.default("sq_" + this._numSpawnFunctionCalls, 13, function() {
                t.gameScene.awardMedSquadronWipeReward(p)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(p), this.gameScene.time.delayedCall(5e3, function() {
                o.squadronKeeper.removeSquadronInfo(p)
            }, null, this)
        }, d.prototype._smallBaddiesPathSpawn1 = function() {
            for (var t = this, e = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), i = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 20,
                    scoreValue: 50,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P2),
                        pathTravelTime: 5.5,
                        pathOffsets: new Phaser.Geom.Point(100, 0),
                        xMirror: !1,
                        yMirror: !1
                    }
                }, s = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 20,
                    scoreValue: 50,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P2),
                        pathTravelTime: 5.5,
                        pathOffsets: new Phaser.Geom.Point(-100, 0),
                        xMirror: !0,
                        yMirror: !1
                    }
                }, a = function(a) {
                    h.gameScene.time.delayedCall(150 * a, function(n) {
                        var r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B1, i),
                            h = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B1, s);
                        n % 2 == 0 && (r.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, r.weaponSettings.angleInRadians = .25 * Math.PI, r.weaponSettings.numShots = 2, r.weaponSettings.fireRate = 250, r.weaponSettings.barrelLength = 30, r.weaponSettings.velocity = 400, r.weaponSettings.startDelay = 150 + 50 * a, r.weaponSettings.bulletSettings = e, r.startWeapon(), h.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, h.weaponSettings.angleInRadians = .25 * Math.PI, h.weaponSettings.numShots = 2, h.weaponSettings.fireRate = 250, h.weaponSettings.barrelLength = 30, h.weaponSettings.velocity = 400, h.weaponSettings.startDelay = 150 + 50 * a, h.weaponSettings.bulletSettings = e, h.startWeapon())
                    }, [a], h)
                }, h = this, p = 0; p < 15; p++) a(p);
            var d = new l.default("sq_" + this._numSpawnFunctionCalls, 28, function() {
                t.gameScene.awardMedSquadronWipeReward(d)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(d), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(d)
            }, null, this)
        }, d.prototype._smallBaddiesBunchSpawn3 = function() {
            var t = this,
                e = {
                    faction: o.FACTION.BADDIES,
                    hp: 60,
                    scoreValue: 100,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(1)
                    }
                },
                i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME),
                s = o.worldDims.width * Phaser.Math.RND.realInRange(.4, .6),
                a = o.worldDims.width * Phaser.Math.RND.realInRange(.1, .2),
                n = o.worldDims.width * (s < .5 * o.worldDims.width ? -.1 : 1.1),
                h = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            h.setXYA(n, a - 100 - 80, 90), h.turnRate = 3 * Phaser.Math.DEG_TO_RAD, h.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, h.weaponSettings.numShots = 5, h.weaponSettings.fireRate = 50, h.weaponSettings.barrelLength = 30, h.weaponSettings.velocity = 500, h.weaponSettings.shootAtTargetConfig = {
                target: this.gameScene.playerShip,
                offset_min_x: -20,
                offset_max_x: 20,
                offset_min_y: -20,
                offset_max_y: 20
            }, h.weaponSettings.bulletSettings = i, h.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1e3, 1250),
                spotTime: Phaser.Math.RND.between(150, 250),
                spotX: s,
                spotY: a,
                travelOutTime: Phaser.Math.RND.between(1250, 1500),
                exitX: n,
                exitY: -.1 * o.worldDims.height
            });
            var p = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            p.setXYA(n - 80, a - 80, 90), p.turnRate = 3 * Phaser.Math.DEG_TO_RAD, p.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, p.weaponSettings.numShots = 5, p.weaponSettings.fireRate = 50, p.weaponSettings.barrelLength = 30, p.weaponSettings.velocity = 400, p.weaponSettings.bulletSettings = i, p.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1e3, 1250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: s - 80,
                spotY: 40 + a,
                travelOutTime: Phaser.Math.RND.between(1250, 1500),
                exitX: n,
                exitY: -.1 * o.worldDims.height
            });
            var d = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            d.setXYA(80 + n, a - 80, 90), d.turnRate = 3 * Phaser.Math.DEG_TO_RAD, d.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, d.weaponSettings.numShots = 5, d.weaponSettings.fireRate = 50, d.weaponSettings.barrelLength = 30, d.weaponSettings.velocity = 400, d.weaponSettings.bulletSettings = i, d.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1e3, 1250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: 80 + s,
                spotY: 40 + a,
                travelOutTime: Phaser.Math.RND.between(1250, 1500),
                exitX: n,
                exitY: -.1 * o.worldDims.height
            });
            var _ = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            _.setXYA(n, a - 100 + 80, 90), _.turnRate = 3 * Phaser.Math.DEG_TO_RAD, _.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, _.weaponSettings.numShots = 5, _.weaponSettings.fireRate = 50, _.weaponSettings.barrelLength = 30, _.weaponSettings.velocity = 500, _.weaponSettings.shootAtTargetConfig = {
                target: this.gameScene.playerShip,
                offset_min_x: -80,
                offset_max_x: 80,
                offset_min_y: -20,
                offset_max_y: 20
            }, _.weaponSettings.bulletSettings = i, _.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1e3, 1250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: s,
                spotY: 80 + a,
                travelOutTime: Phaser.Math.RND.between(1250, 1500),
                exitX: n,
                exitY: -.1 * o.worldDims.height
            });
            var c = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            c.setXYA(n, a - 100 + 80, 90), c.turnRate = 3 * Phaser.Math.DEG_TO_RAD, c.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, c.weaponSettings.numShots = 3, c.weaponSettings.fireRate = 50, c.weaponSettings.barrelLength = 30, c.weaponSettings.velocity = 500, c.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: Phaser.Math.DegToRad(20),
                numBullets: 3,
                fromBodyRotation: !0
            }, c.weaponSettings.bulletSettings = i, c.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1e3, 1250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: 160 + s,
                spotY: a,
                travelOutTime: Phaser.Math.RND.between(1250, 1500),
                exitX: n,
                exitY: -.1 * o.worldDims.height
            });
            var S = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, e);
            S.setXYA(n, a - 100 + 80, 90), S.turnRate = 3 * Phaser.Math.DEG_TO_RAD, S.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, S.weaponSettings.numShots = 3, S.weaponSettings.fireRate = 50, S.weaponSettings.barrelLength = 30, S.weaponSettings.velocity = 500, S.weaponSettings.shotSpreadConfig = {
                angleRadiansBettween: Phaser.Math.DegToRad(20),
                numBullets: 3,
                fromBodyRotation: !0
            }, S.weaponSettings.bulletSettings = i, S.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1e3, 1250),
                spotTime: Phaser.Math.RND.between(250, 750),
                spotX: s - 160,
                spotY: a,
                travelOutTime: Phaser.Math.RND.between(1250, 1500),
                exitX: n,
                exitY: -.1 * o.worldDims.height
            });
            var u = new l.default("sq_" + this._numSpawnFunctionCalls, 4, function() {
                t.gameScene.awardMedSquadronWipeReward(u)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(u), this.gameScene.time.delayedCall(7e3, function() {
                o.squadronKeeper.removeSquadronInfo(u)
            }, null, this)
        }, d.prototype._smallBaddiesStrafeSpawn4 = function() {
            for (var t = this, e = {
                    faction: o.FACTION.BADDIES,
                    hp: 100,
                    scoreValue: 100,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: "sq_" + this._numSpawnFunctionCalls,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(3)
                    }
                }, i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_ACID), s = 0; s < 4; s++) this.gameScene.time.delayedCall(500 * s, function() {
                var s = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B9, e);
                s.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, s.weaponSettings.numShots = 3, s.weaponSettings.fireRate = 50, s.weaponSettings.barrelLength = 80, s.weaponSettings.velocity = 450, s.weaponSettings.startDelay = 250, s.weaponSettings.shootAtTargetConfig = {
                    target: t.gameScene.playerShip,
                    offset_min_x: -40,
                    offset_max_x: 40,
                    offset_min_y: -40,
                    offset_max_y: 40
                }, s.weaponSettings.bulletSettings = i, s.startStrafesAndShootAct({
                    numStrafes: 3,
                    spotTimeMin: 500,
                    spotTimeMax: 750,
                    travelToSpotTimeMin: 1250,
                    travelToSpotTimeMax: 1500,
                    leftPosMin: .05 * o.worldDims.width,
                    leftPosMax: .25 * o.worldDims.width,
                    rightPosMin: .75 * o.worldDims.width,
                    rightPosMax: .95 * o.worldDims.width,
                    minY: .1 * o.worldDims.height,
                    maxY: .3 * o.worldDims.height
                })
            }, null, this);
            var a = new l.default("sq_" + this._numSpawnFunctionCalls, 4, function() {
                t.gameScene.awardMedSquadronWipeReward(a)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(a), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(a)
            }, null, this)
        }, d.prototype._turretB8Spawn1 = function() {
            var t = this,
                e = {
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    faction: o.FACTION.BADDIES,
                    hp: 380,
                    scoreValue: 120,
                    velocityMagnitude: 80,
                    normalModeConfig: {
                        x: .8 * o.worldDims.width,
                        y: -100,
                        startRotation: Phaser.Math.DegToRad(90)
                    }
                },
                i = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                s = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
            i.attachB8Turret(s).start();
            for (var a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 5; n++) this.gameScene.time.delayedCall(750 * n, function() {
                s.loadWeapon(3, 50, 400, 0, a)
            }, null, this);
            e = {
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                faction: o.FACTION.BADDIES,
                hp: 380,
                scoreValue: 120,
                velocityMagnitude: 80,
                normalModeConfig: {
                    x: .2 * o.worldDims.width,
                    y: -100,
                    startRotation: Phaser.Math.DegToRad(90)
                }
            };
            var h = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                l = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
            for (h.attachB8Turret(l).start(), a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 5; n++) this.gameScene.time.delayedCall(750 * n, function() {
                l.loadWeapon(3, 50, 400, 0, a)
            }, null, this);
            this.gameScene.time.delayedCall(1e3, function() {
                var e = {
                        updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                        faction: o.FACTION.BADDIES,
                        hp: 380,
                        scoreValue: 120,
                        velocityMagnitude: 80,
                        normalModeConfig: {
                            x: .5 * o.worldDims.width,
                            y: -100,
                            startRotation: Phaser.Math.DegToRad(90)
                        }
                    },
                    i = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                    s = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
                i.attachB8Turret(s).start();
                for (var a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 5; n++) t.gameScene.time.delayedCall(750 * n, function() {
                    s.loadWeapon(3, 50, 400, 0, a)
                }, null, t)
            }, null, this)
        }, d);

    function d(t) {
        this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 10, this._stopAutoSpawn = !1, this._spawnTime1Min = 3250, this._spawnTime1Max = 4250, this._spawnTime2Min = 2350, this._spawnTime2Max = 2750, this._easySpawnFunctions = [], this._medSpawnFunctions = [], this.gameScene = t, this.gui = t.gameUi
    }
    e.default = p
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        },
        a = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = s(i(1)),
        n = i(9),
        r = i(6),
        h = i(2),
        l = a(i(12)),
        p = (d.prototype.start = function() {
            3 <= this.gameScene.maxBossLevelDefeated ? this.gameScene.time.delayedCall(500, this._doQuickSpawn, null, this) : this.gameScene.time.delayedCall(1e3, this._doNormalSpawn, null, this)
        }, d.prototype._doNormalSpawn = function() {
            var t = this;
            this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 20, this._stopAutoSpawn = !1, this.gui.onPortraitHidden = null, h.isDefined(this._nextSpawnTimer) && (this._nextSpawnTimer.remove(!1), this._nextSpawnTimer.destroy()), this._nextSpawnTimer = this.gameScene.time.delayedCall(1e3, function() {
                t._doNextSpawn()
            }, null, this)
        }, d.prototype._doQuickSpawn = function() {
            var t = this;
            this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 10, this._stopAutoSpawn = !1, this.gui.onPortraitHidden = null, h.isDefined(this._nextSpawnTimer) && (this._nextSpawnTimer.remove(!1), this._nextSpawnTimer.destroy()), this._nextSpawnTimer = this.gameScene.time.delayedCall(1e3, function() {
                t._doNextSpawn()
            }, null, this), this._spawnTime1Min = 3250, this._spawnTime1Max = 4e3, this._spawnTime2Min = 4e3, this._spawnTime2Max = 4500
        }, d.prototype._doNextSpawn = function() {
            if (!this._stopAutoSpawn)
                if (this._numSpawnFunctionCalls++, this._numSpawnFunctionCalls >= this._totalNumSpawnFunctionCalls) this._Boss3Spawn();
                else {
                    if (this._numSpawnFunctionCalls % 4 == 0 || this._numSpawnFunctionCalls % 5 == 0) return this._randMedSpawn(), void(this._nextSpawnTimer = this.gameScene.time.delayedCall(Phaser.Math.RND.between(this._spawnTime2Min, this._spawnTime2Max), this._doNextSpawn, null, this));
                    this._randEasySpawn(), this._nextSpawnTimer = this.gameScene.time.delayedCall(Phaser.Math.RND.between(this._spawnTime1Min, this._spawnTime1Max), this._doNextSpawn, null, this)
                }
        }, d.prototype._randEasySpawn = function() {
            this.gameScene.__isGameOver || (this._easySpawnFunctions.length < 1 && (this._easySpawnFunctions.push(this._smallBaddiesPathSpawn1, this._smallBaddiesPathSpawn2, this._smallBaddiesBunchSpawn3, this._smallBaddiesSequenceSpawn1, this._smallBaddiesSequenceSpawn2, this._smallBaddiesStrafeSpawn4, this._turretB8Spawn1), Phaser.Math.RND.shuffle(this._easySpawnFunctions)), this._easySpawnFunctions.pop().call(this))
        }, d.prototype._randMedSpawn = function() {
            this.gameScene.__isGameOver || (this._medSpawnFunctions.length < 1 && (this._medSpawnFunctions.push(this._mediumBaddieSpawn2, this._mediumBaddie3Spawn, this._mediumBaddieSpawn2m), Phaser.Math.RND.shuffle(this._medSpawnFunctions)), this._medSpawnFunctions.pop().call(this))
        }, d.prototype._mediumBaddie3Spawn = function() {
            var t = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    hp: 1800,
                    scoreValue: 1e3
                },
                e = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B3, t),
                i = 0 < Phaser.Math.RND.between(0, 1);
            e.startCustomBehavior1(i)
        }, d.prototype._mediumBaddieSpawn2 = function() {
            var t = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 1600,
                scoreValue: 1e3
            };
            this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B2, t).startCustomBehavior2(!1)
        }, d.prototype._mediumBaddieSpawn2m = function() {
            var t = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 1600,
                scoreValue: 1e3
            };
            this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B2, t).startCustomBehavior2(!0)
        }, d.prototype._Boss3Spawn = function(t) {
            void 0 === t && (t = !0), this._stopAutoSpawn = !0;
            var e = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 3e4,
                scoreValue: 15e3
            };
            2 <= this.gameScene.maxBossLevelDefeated && (e.hp = 15e3);
            var i = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.BOSS3, e);
            return i.start(), t && this.gameScene.giveFreePowerupsBundle(.5 * o.worldDims.width, o.worldDims.height), i
        }, d.prototype._smallBaddiesSequenceSpawn1 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), s = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    hp: 20,
                    scoreValue: 80,
                    velocityMagnitude: 250,
                    normalModeConfig: {
                        x: 0,
                        y: -50,
                        startRotation: 0
                    },
                    squadronId: e
                }, a = o.worldDims.width - 80, n = (a - 80) / 18, h = 0; h < 18; h++) {
                s.normalModeConfig.x = a - n * h, s.normalModeConfig.startRotation = Phaser.Math.DegToRad(160 - 140 / 18 * h);
                var p = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B3, s);
                h % 3 == 0 && (p.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, p.weaponSettings.velocity = 300, p.weaponSettings.barrelLength = 30, p.weaponSettings.numShots = 1, p.weaponSettings.startDelay = 250, p.weaponSettings.bulletSettings = i, p.weaponSettings.angleInRadians = .5 * Math.PI, p.weaponSettings.shotSpreadConfig = {
                    angleRadiansBettween: Phaser.Math.DegToRad(20),
                    fromBodyRotation: !1,
                    numBullets: 3
                }, p.startWeapon())
            }
            var d = new l.default(e, 16, function() {
                t.gameScene.awardSmallSquadronWipeReward(d)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(d), this.gameScene.time.delayedCall(5e3, function() {
                o.squadronKeeper.removeSquadronInfo(d)
            }, null, this)
        }, d.prototype._smallBaddiesSequenceSpawn2 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), s = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    hp: 20,
                    scoreValue: 90,
                    velocityMagnitude: 300,
                    normalModeConfig: {
                        x: 0,
                        y: -50,
                        startRotation: 0
                    },
                    squadronId: e
                }, a = o.worldDims.width - 80, n = (a - 80) / 15, h = 0; h < 15; h++) {
                s.normalModeConfig.x = a - n * h, s.normalModeConfig.startRotation = Phaser.Math.DegToRad(160 - 140 / 15 * h);
                var p = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B1, s);
                h % 3 == 0 && (p.weaponSettings.shootingType = o.SHOOTING_TYPE.SPREAD, p.weaponSettings.velocity = 350, p.weaponSettings.barrelLength = 30, p.weaponSettings.numShots = 1, p.weaponSettings.startDelay = 500, p.weaponSettings.bulletSettings = i, p.weaponSettings.angleInRadians = .5 * Math.PI, p.weaponSettings.shotSpreadConfig = {
                    angleRadiansBettween: Phaser.Math.DegToRad(20),
                    fromBodyRotation: !1,
                    numBullets: 4
                }, p.startWeapon())
            }
            var d = new l.default(e, 13, function() {
                t.gameScene.awardMedSquadronWipeReward(d)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(d), this.gameScene.time.delayedCall(5e3, function() {
                o.squadronKeeper.removeSquadronInfo(d)
            }, null, this)
        }, d.prototype._smallBaddiesPathSpawn1 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), s = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 50,
                    scoreValue: 80,
                    squadronId: e,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P2),
                        pathTravelTime: 10,
                        pathOffsets: new Phaser.Geom.Point(200, 0),
                        xMirror: !1,
                        yMirror: !1
                    }
                }, a = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 50,
                    scoreValue: 80,
                    squadronId: e,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P2),
                        pathTravelTime: 10,
                        pathOffsets: new Phaser.Geom.Point(-200, 0),
                        xMirror: !0,
                        yMirror: !1
                    }
                }, h = function(e) {
                    p.gameScene.time.delayedCall(250 * e, function(n) {
                        if (n % 2 == 0) {
                            var r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_1, s),
                                h = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_1, a);
                            r.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, r.weaponSettings.angleInRadians = .25 * Math.PI, r.weaponSettings.numShots = 2, r.weaponSettings.fireRate = 250, r.weaponSettings.barrelLength = 30, r.weaponSettings.velocity = 400, r.weaponSettings.startDelay = 500 + 150 * e, r.weaponSettings.bulletSettings = i, r.startWeapon(), r.detonationTime = 8e3, h.weaponSettings.velocity = 400, h.weaponSettings.bulletSettings = i, h.detonationTime = 8e3
                        } else r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_2, s), h = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_2, a), r.weaponSettings.velocity = 400, r.weaponSettings.bulletSettings = i, r.detonationTime = 8e3, h.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, h.weaponSettings.angleInRadians = .25 * Math.PI, h.weaponSettings.numShots = 2, h.weaponSettings.fireRate = 250, h.weaponSettings.barrelLength = 30, h.weaponSettings.velocity = 400, h.weaponSettings.startDelay = 500 + 150 * e, h.weaponSettings.bulletSettings = i, h.startWeapon(), h.detonationTime = 8e3
                    }, [e], p)
                }, p = this, d = 0; d < 10; d++) h(d);
            var _ = new l.default(e, 24, function() {
                t.gameScene.awardMedSquadronWipeReward(_)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(_), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(_)
            }, null, this)
        }, d.prototype._smallBaddiesPathSpawn2 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), s = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 50,
                    scoreValue: 80,
                    squadronId: e,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P1),
                        pathTravelTime: 7,
                        pathOffsets: new Phaser.Geom.Point(10, 0),
                        xMirror: !1,
                        yMirror: !1
                    }
                }, a = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 50,
                    scoreValue: 80,
                    squadronId: e,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P1),
                        pathTravelTime: 7,
                        pathOffsets: new Phaser.Geom.Point(10, 0),
                        xMirror: !0,
                        yMirror: !1
                    }
                }, h = 0; h < 10; h++) this.gameScene.time.delayedCall(250 * h, function(e) {
                if (e % 2 == 0) {
                    var n = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_1, s),
                        r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_1, a);
                    n.weaponSettings.barrelLength = 30, n.weaponSettings.velocity = 400, n.weaponSettings.bulletSettings = i, n.detonationTime = 5e3, r.weaponSettings.barrelLength = 30, r.weaponSettings.velocity = 400, r.weaponSettings.bulletSettings = i, r.detonationTime = 5e3
                } else n = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_2, s), r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_2, a), n.weaponSettings.barrelLength = 30, n.weaponSettings.velocity = 400, n.weaponSettings.bulletSettings = i, n.detonationTime = 5e3, r.weaponSettings.barrelLength = 30, r.weaponSettings.velocity = 400, r.weaponSettings.bulletSettings = i, r.detonationTime = 5e3
            }, [h], this);
            var p = new l.default(e, 24, function() {
                t.gameScene.awardMedSquadronWipeReward(p)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(p), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(p)
            }, null, this)
        }, d.prototype._smallBaddiesBunchSpawn3 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = {
                    faction: o.FACTION.BADDIES,
                    hp: 60,
                    scoreValue: 100,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: e,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(3)
                    }
                }, s = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), a = .1 * o.worldDims.width, n = o.worldDims.width * Phaser.Math.RND.realInRange(.1, .2), h = .11 * o.worldDims.width, p = -.1 * o.worldDims.width, d = 0; d < 8; d++)(_ = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, i)).setXYA(p + h * d, -.1 * o.worldDims.height, 90), _.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, _.weaponSettings.numShots = 5, _.weaponSettings.fireRate = 50, _.weaponSettings.barrelLength = 30, _.weaponSettings.velocity = 500, _.weaponSettings.shootAtTargetConfig = {
                target: this.gameScene.playerShip,
                offset_min_x: -100,
                offset_max_x: 100,
                offset_min_y: -20,
                offset_max_y: 20
            }, _.weaponSettings.bulletSettings = s, _.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(300, 500),
                spotX: a + h * d,
                spotY: n + Phaser.Math.RND.between(-40, 40),
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: p + h * d,
                exitY: -.1 * o.worldDims.height
            });
            for (d = 0; d < 8; d++) {
                var _;
                (_ = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, i)).setXYA(p + h * d, -.1 * o.worldDims.height, 90), _.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_ANGLE, _.weaponSettings.angleInRadians = o.DIRECTION_RAD.DOWN, _.weaponSettings.numShots = 10, _.weaponSettings.fireRate = 100, _.weaponSettings.barrelLength = 30, _.weaponSettings.velocity = 500, _.weaponSettings.bulletSettings = s, _.startAct1({
                    travelToSpotTime: Phaser.Math.RND.between(2e3, 2500),
                    spotTime: Phaser.Math.RND.between(1e3, 1500),
                    spotX: a + h * d,
                    spotY: n + 2 * h + Phaser.Math.RND.between(-40, 40),
                    travelOutTime: Phaser.Math.RND.between(2e3, 2500),
                    exitX: p + h * d,
                    exitY: -.1 * o.worldDims.height
                })
            }
            var c = new l.default(e, 10, function() {
                t.gameScene.awardMedSquadronWipeReward(c)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(c), this.gameScene.time.delayedCall(7e3, function() {
                o.squadronKeeper.removeSquadronInfo(c)
            }, null, this)
        }, d.prototype._smallBaddiesStrafeSpawn4 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = {
                    faction: o.FACTION.BADDIES,
                    hp: 100,
                    scoreValue: 100,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: e,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(3)
                    }
                }, s = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_ACID), a = 0; a < 8; a++) this.gameScene.time.delayedCall(500 * a, function() {
                var e = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B9, i);
                e.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, e.weaponSettings.numShots = 5, e.weaponSettings.fireRate = 50, e.weaponSettings.barrelLength = 80, e.weaponSettings.velocity = 500, e.weaponSettings.startDelay = 250, e.weaponSettings.shootAtTargetConfig = {
                    target: t.gameScene.playerShip,
                    offset_min_x: -40,
                    offset_max_x: 40,
                    offset_min_y: -40,
                    offset_max_y: 40
                }, e.weaponSettings.bulletSettings = s, e.startStrafesAndShootAct({
                    numStrafes: 3,
                    spotTimeMin: 500,
                    spotTimeMax: 750,
                    travelToSpotTimeMin: 1250,
                    travelToSpotTimeMax: 1500,
                    leftPosMin: .05 * o.worldDims.width,
                    leftPosMax: .25 * o.worldDims.width,
                    rightPosMin: .75 * o.worldDims.width,
                    rightPosMax: .95 * o.worldDims.width,
                    minY: .1 * o.worldDims.height,
                    maxY: .3 * o.worldDims.height
                })
            }, null, this);
            var n = new l.default(e, 4, function() {
                t.gameScene.awardMedSquadronWipeReward(n)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(n), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(n)
            }, null, this)
        }, d.prototype._turretB8Spawn1 = function() {
            var t = this,
                e = {
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    faction: o.FACTION.BADDIES,
                    hp: 380,
                    scoreValue: 120,
                    velocityMagnitude: 120,
                    normalModeConfig: {
                        x: 1.1 * o.worldDims.width,
                        y: .05 * o.worldDims.width,
                        startRotation: Phaser.Math.DegToRad(135)
                    }
                },
                i = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                s = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
            i.attachB8Turret(s).start();
            for (var a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 5; n++) this.gameScene.time.delayedCall(750 * n, function() {
                s.loadWeapon(3, 50, 500, 0, a)
            }, null, this);
            var h = {
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    faction: o.FACTION.BADDIES,
                    hp: 380,
                    scoreValue: 120,
                    velocityMagnitude: 120,
                    normalModeConfig: {
                        x: -.1 * o.worldDims.width,
                        y: .05 * o.worldDims.width,
                        startRotation: Phaser.Math.DegToRad(45)
                    }
                },
                l = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, h),
                p = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, h);
            for (l.attachB8Turret(p).start(), a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 5; n++) this.gameScene.time.delayedCall(750 * n, function() {
                p.loadWeapon(3, 50, 500, 0, a)
            }, null, this);
            this.gameScene.time.delayedCall(1e3, function() {
                var e = {
                        updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                        faction: o.FACTION.BADDIES,
                        hp: 380,
                        scoreValue: 120,
                        velocityMagnitude: 120,
                        normalModeConfig: {
                            x: .35 * o.worldDims.width,
                            y: -100,
                            startRotation: Phaser.Math.DegToRad(90)
                        }
                    },
                    i = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                    s = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
                i.attachB8Turret(s).start();
                for (var a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 3; n++) t.gameScene.time.delayedCall(500 * n, function() {
                    s.loadWeapon(4, 50, 500, 0, a)
                }, null, t)
            }, null, this), this.gameScene.time.delayedCall(1e3, function() {
                var e = {
                        updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                        faction: o.FACTION.BADDIES,
                        hp: 380,
                        scoreValue: 120,
                        velocityMagnitude: 120,
                        normalModeConfig: {
                            x: .65 * o.worldDims.width,
                            y: -100,
                            startRotation: Phaser.Math.DegToRad(90)
                        }
                    },
                    i = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                    s = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
                i.attachB8Turret(s).start();
                for (var a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 3; n++) t.gameScene.time.delayedCall(500 * n, function() {
                    s.loadWeapon(4, 50, 500, 0, a)
                }, null, t)
            }, null, this)
        }, d);

    function d(t) {
        this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 10, this._stopAutoSpawn = !1, this._spawnTime1Min = 3500, this._spawnTime1Max = 4250, this._spawnTime2Min = 4e3, this._spawnTime2Max = 4750, this._easySpawnFunctions = [], this._medSpawnFunctions = [], this.gameScene = t, this.gui = t.gameUi
    }
    e.default = p
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        },
        a = this && this.__importDefault || function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = s(i(1)),
        n = i(9),
        r = i(6),
        h = i(2),
        l = a(i(12)),
        p = (d.prototype.start = function() {
            this.gameScene.time.delayedCall(1e3, this._doQuickSpawn, null, this)
        }, d.prototype._doQuickSpawn = function() {
            var t = this;
            this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 10, this._stopAutoSpawn = !1, this.gui.onPortraitHidden = null, h.isDefined(this._nextSpawnTimer) && (this._nextSpawnTimer.remove(!1), this._nextSpawnTimer.destroy()), this._nextSpawnTimer = this.gameScene.time.delayedCall(1e3, function() {
                t._doNextSpawn()
            }, null, this), this._spawnTime1Min = 2750, this._spawnTime1Max = 3250, this._spawnTime2Min = 4e3, this._spawnTime2Max = 4500
        }, d.prototype._doNextSpawn = function() {
            if (!this._stopAutoSpawn)
                if (this._numSpawnFunctionCalls++, this._numSpawnFunctionCalls >= this._totalNumSpawnFunctionCalls) this._Boss4Spawn();
                else {
                    if (3 == this._numSpawnFunctionCalls || 5 == this._numSpawnFunctionCalls || 7 == this._numSpawnFunctionCalls) return this._randMedSpawn(), void(this._nextSpawnTimer = this.gameScene.time.delayedCall(Phaser.Math.RND.between(this._spawnTime2Min, this._spawnTime2Max), this._doNextSpawn, null, this));
                    this._randEasySpawn(), this._nextSpawnTimer = this.gameScene.time.delayedCall(Phaser.Math.RND.between(this._spawnTime1Min, this._spawnTime1Max), this._doNextSpawn, null, this)
                }
        }, d.prototype._randEasySpawn = function() {
            this.gameScene.__isGameOver || (this._easySpawnFunctions.length < 1 && (this._easySpawnFunctions.push(this._smallBaddiesPathSpawn1, this._smallBaddiesPathSpawn2, this._smallBaddiesBunchSpawn3, this._smallBaddiesSequenceSpawn1, this._smallBaddiesSequenceSpawn2, this._smallBaddiesStrafeSpawn4, this._turretB8Spawn1), Phaser.Math.RND.shuffle(this._easySpawnFunctions)), this._easySpawnFunctions.pop().call(this))
        }, d.prototype._randMedSpawn = function() {
            this.gameScene.__isGameOver || (this._medSpawnFunctions.length < 1 && (this._medSpawnFunctions.push(this._mediumBaddieSpawn2, this._mediumBaddie3Spawn, this._mediumBaddieSpawn2m), Phaser.Math.RND.shuffle(this._medSpawnFunctions)), this._medSpawnFunctions.pop().call(this))
        }, d.prototype._mediumBaddie3Spawn = function() {
            var t = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    hp: 1800,
                    scoreValue: 1e3
                },
                e = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B3, t),
                i = 0 < Phaser.Math.RND.between(0, 1);
            e.startCustomBehavior1(i)
        }, d.prototype._mediumBaddieSpawn2 = function() {
            var t = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 1600,
                scoreValue: 1e3
            };
            this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B2, t).startCustomBehavior2(!1)
        }, d.prototype._mediumBaddieSpawn2m = function() {
            var t = {
                faction: o.FACTION.BADDIES,
                updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                velocityMagnitude: 0,
                hp: 1600,
                scoreValue: 1e3
            };
            this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.MD_B2, t).startCustomBehavior2(!0)
        }, d.prototype._Boss4Spawn = function(t) {
            void 0 === t && (t = !0), this._stopAutoSpawn = !0;
            var e = {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    hp: 8e4,
                    scoreValue: 5e4
                },
                i = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.BOSS4, e);
            return i.start(), t && this.gameScene.giveFreePowerupsBundle(.5 * o.worldDims.width, o.worldDims.height), i
        }, d.prototype._smallBaddiesSequenceSpawn1 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = (r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    hp: 40,
                    scoreValue: 120,
                    velocityMagnitude: 400,
                    normalModeConfig: {
                        x: 0,
                        y: -50,
                        startRotation: 0
                    },
                    squadronId: e
                }), s = o.worldDims.width - 80, a = (s - 80) / 12, n = 0; n < 12; n++) {
                i.normalModeConfig.x = s - a * n, i.normalModeConfig.startRotation = Phaser.Math.DegToRad(160 - 140 / 12 * n);
                var h = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_1, i);
                h.detonationTime = 1e3, h.weaponSettings.velocity = 400
            }
            var p = new l.default(e, 10, function() {
                t.gameScene.awardSmallSquadronWipeReward(p)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(p), this.gameScene.time.delayedCall(5e3, function() {
                o.squadronKeeper.removeSquadronInfo(p)
            }, null, this)
        }, d.prototype._smallBaddiesSequenceSpawn2 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = (r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), {
                    faction: o.FACTION.BADDIES,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    hp: 40,
                    scoreValue: 90,
                    velocityMagnitude: 400,
                    normalModeConfig: {
                        x: 0,
                        y: -50,
                        startRotation: 0
                    },
                    squadronId: e
                }), s = o.worldDims.width - 80, a = (s - 80) / 15, n = 0; n < 15; n++) {
                i.normalModeConfig.x = s - a * n, i.normalModeConfig.startRotation = Phaser.Math.DegToRad(160 - 140 / 15 * n);
                var h = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_2, i);
                h.detonationTime = 1e3, h.weaponSettings.velocity = 400
            }
            var p = new l.default(e, 13, function() {
                t.gameScene.awardMedSquadronWipeReward(p)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(p), this.gameScene.time.delayedCall(5e3, function() {
                o.squadronKeeper.removeSquadronInfo(p)
            }, null, this)
        }, d.prototype._smallBaddiesPathSpawn1 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), s = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 50,
                    scoreValue: 80,
                    squadronId: e,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P2),
                        pathTravelTime: 10,
                        pathOffsets: new Phaser.Geom.Point(200, 0),
                        xMirror: !1,
                        yMirror: !1
                    }
                }, a = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 50,
                    scoreValue: 80,
                    squadronId: e,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P2),
                        pathTravelTime: 10,
                        pathOffsets: new Phaser.Geom.Point(-200, 0),
                        xMirror: !0,
                        yMirror: !1
                    }
                }, h = function(e) {
                    p.gameScene.time.delayedCall(250 * e, function(n) {
                        if (n % 2 == 0) {
                            var r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_1, s),
                                h = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_1, a);
                            r.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, r.weaponSettings.angleInRadians = .25 * Math.PI, r.weaponSettings.numShots = 2, r.weaponSettings.fireRate = 250, r.weaponSettings.barrelLength = 30, r.weaponSettings.velocity = 400, r.weaponSettings.startDelay = 500 + 150 * e, r.weaponSettings.bulletSettings = i, r.startWeapon(), r.detonationTime = 8e3, h.weaponSettings.velocity = 400, h.weaponSettings.bulletSettings = i, h.detonationTime = 8e3
                        } else r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_2, s), h = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_2, a), r.weaponSettings.velocity = 400, r.weaponSettings.bulletSettings = i, r.detonationTime = 8e3, h.weaponSettings.shootingType = o.SHOOTING_TYPE.FROM_ROTATION, h.weaponSettings.angleInRadians = .25 * Math.PI, h.weaponSettings.numShots = 2, h.weaponSettings.fireRate = 250, h.weaponSettings.barrelLength = 30, h.weaponSettings.velocity = 400, h.weaponSettings.startDelay = 500 + 150 * e, h.weaponSettings.bulletSettings = i, h.startWeapon(), h.detonationTime = 8e3
                    }, [e], p)
                }, p = this, d = 0; d < 10; d++) h(d);
            var _ = new l.default(e, 24, function() {
                t.gameScene.awardMedSquadronWipeReward(_)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(_), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(_)
            }, null, this)
        }, d.prototype._smallBaddiesPathSpawn2 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), s = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 50,
                    scoreValue: 80,
                    squadronId: e,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P1),
                        pathTravelTime: 6.2,
                        pathOffsets: new Phaser.Geom.Point(10, 0),
                        xMirror: !1,
                        yMirror: !1
                    }
                }, a = {
                    updateMode: o.UPDATE_MODEL_TYPE.PATH,
                    faction: o.FACTION.BADDIES,
                    hp: 50,
                    scoreValue: 80,
                    squadronId: e,
                    pathModeConfig: {
                        pathArr: n.PathsManager.Instance.getPath(o.PATHS.P1),
                        pathTravelTime: 6.2,
                        pathOffsets: new Phaser.Geom.Point(10, 0),
                        xMirror: !0,
                        yMirror: !1
                    }
                }, h = 0; h < 10; h++) this.gameScene.time.delayedCall(250 * h, function(e) {
                var n = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_3, s),
                    r = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B5_3, a);
                n.weaponSettings.barrelLength = 20, n.weaponSettings.velocity = 450, n.weaponSettings.bulletSettings = i, n.detonationTime = 4e3, r.weaponSettings.barrelLength = 20, r.weaponSettings.velocity = 450, r.weaponSettings.bulletSettings = i, r.detonationTime = 4e3
            }, [h], this);
            var p = new l.default(e, 24, function() {
                t.gameScene.awardMedSquadronWipeReward(p)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(p), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(p)
            }, null, this)
        }, d.prototype._smallBaddiesBunchSpawn3 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = {
                    faction: o.FACTION.BADDIES,
                    hp: 60,
                    scoreValue: 100,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: e,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(3)
                    }
                }, s = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), a = .1 * o.worldDims.width, n = o.worldDims.width * Phaser.Math.RND.realInRange(.1, .2), h = .11 * o.worldDims.width, p = -.1 * o.worldDims.width, d = 0; d < 8; d++)(_ = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, i)).setXYA(p + h * d, -.1 * o.worldDims.height, 90), _.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, _.weaponSettings.numShots = 5, _.weaponSettings.fireRate = 50, _.weaponSettings.barrelLength = 30, _.weaponSettings.velocity = 500, _.weaponSettings.shootAtTargetConfig = {
                target: this.gameScene.playerShip,
                offset_min_x: -100,
                offset_max_x: 100,
                offset_min_y: -20,
                offset_max_y: 20
            }, _.weaponSettings.bulletSettings = s, _.startAct1({
                travelToSpotTime: Phaser.Math.RND.between(1250, 1750),
                spotTime: Phaser.Math.RND.between(300, 500),
                spotX: a + h * d,
                spotY: n + Phaser.Math.RND.between(-40, 40),
                travelOutTime: Phaser.Math.RND.between(1250, 1750),
                exitX: p + h * d,
                exitY: -.1 * o.worldDims.height
            });
            for (d = 0; d < 8; d++) {
                var _;
                (_ = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B2, i)).setXYA(p + h * d, -.1 * o.worldDims.height, 90), _.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_ANGLE, _.weaponSettings.angleInRadians = o.DIRECTION_RAD.DOWN, _.weaponSettings.numShots = 10, _.weaponSettings.fireRate = 100, _.weaponSettings.barrelLength = 30, _.weaponSettings.velocity = 500, _.weaponSettings.bulletSettings = s, _.startAct1({
                    travelToSpotTime: Phaser.Math.RND.between(2e3, 2500),
                    spotTime: Phaser.Math.RND.between(1e3, 1500),
                    spotX: a + h * d,
                    spotY: n + 2 * h + Phaser.Math.RND.between(-40, 40),
                    travelOutTime: Phaser.Math.RND.between(2e3, 2500),
                    exitX: p + h * d,
                    exitY: -.1 * o.worldDims.height
                })
            }
            var c = new l.default(e, 10, function() {
                t.gameScene.awardMedSquadronWipeReward(c)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(c), this.gameScene.time.delayedCall(7e3, function() {
                o.squadronKeeper.removeSquadronInfo(c)
            }, null, this)
        }, d.prototype._smallBaddiesStrafeSpawn4 = function() {
            for (var t = this, e = "sq_" + this._numSpawnFunctionCalls, i = {
                    faction: o.FACTION.BADDIES,
                    hp: 100,
                    scoreValue: 100,
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    velocityMagnitude: 0,
                    squadronId: e,
                    normalModeConfig: {
                        turn_rate: Phaser.Math.DegToRad(3)
                    }
                }, s = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_ACID), a = 0; a < 8; a++) this.gameScene.time.delayedCall(250 * a, function() {
                var e = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B9, i);
                e.weaponSettings.shootingType = o.SHOOTING_TYPE.AT_OR_NEAR_TARGET, e.weaponSettings.numShots = 5, e.weaponSettings.fireRate = 75, e.weaponSettings.barrelLength = 80, e.weaponSettings.velocity = 550, e.weaponSettings.startDelay = 250, e.weaponSettings.shootAtTargetConfig = {
                    target: t.gameScene.playerShip,
                    offset_min_x: -80,
                    offset_max_x: 80,
                    offset_min_y: -80,
                    offset_max_y: 80
                }, e.weaponSettings.bulletSettings = s, e.startStrafesAndShootAct({
                    numStrafes: 3,
                    spotTimeMin: 500,
                    spotTimeMax: 750,
                    travelToSpotTimeMin: 1250,
                    travelToSpotTimeMax: 1500,
                    leftPosMin: .05 * o.worldDims.width,
                    leftPosMax: .25 * o.worldDims.width,
                    rightPosMin: .75 * o.worldDims.width,
                    rightPosMax: .95 * o.worldDims.width,
                    minY: .1 * o.worldDims.height,
                    maxY: .3 * o.worldDims.height
                })
            }, null, this);
            var n = new l.default(e, 4, function() {
                t.gameScene.awardMedSquadronWipeReward(n)
            }, null, this);
            o.squadronKeeper.addSquadronInfo(n), this.gameScene.time.delayedCall(1e4, function() {
                o.squadronKeeper.removeSquadronInfo(n)
            }, null, this)
        }, d.prototype._turretB8Spawn1 = function() {
            var t = this,
                e = {
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    faction: o.FACTION.BADDIES,
                    hp: 440,
                    scoreValue: 120,
                    velocityMagnitude: 180,
                    normalModeConfig: {
                        x: 1.1 * o.worldDims.width,
                        y: .05 * o.worldDims.width,
                        startRotation: Phaser.Math.DegToRad(135)
                    }
                },
                i = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                s = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
            i.attachB8Turret(s).start();
            for (var a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 5; n++) this.gameScene.time.delayedCall(750 * n, function() {
                s.loadWeapon(4, 50, 500, 0, a)
            }, null, this);
            var h = {
                    updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                    faction: o.FACTION.BADDIES,
                    hp: 440,
                    scoreValue: 120,
                    velocityMagnitude: 180,
                    normalModeConfig: {
                        x: -.1 * o.worldDims.width,
                        y: .05 * o.worldDims.width,
                        startRotation: Phaser.Math.DegToRad(45)
                    }
                },
                l = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, h),
                p = this.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, h);
            for (l.attachB8Turret(p).start(), a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 5; n++) this.gameScene.time.delayedCall(750 * n, function() {
                p.loadWeapon(4, 50, 500, 0, a)
            }, null, this);
            this.gameScene.time.delayedCall(1e3, function() {
                var e = {
                        updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                        faction: o.FACTION.BADDIES,
                        hp: 440,
                        scoreValue: 120,
                        velocityMagnitude: 180,
                        normalModeConfig: {
                            x: .35 * o.worldDims.width,
                            y: -100,
                            startRotation: Phaser.Math.DegToRad(90)
                        }
                    },
                    i = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                    s = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
                i.attachB8Turret(s).start();
                for (var a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 4; n++) t.gameScene.time.delayedCall(500 * n, function() {
                    s.loadWeapon(4, 50, 500, 0, a)
                }, null, t)
            }, null, this), this.gameScene.time.delayedCall(1e3, function() {
                var e = {
                        updateMode: o.UPDATE_MODEL_TYPE.NORMAL,
                        faction: o.FACTION.BADDIES,
                        hp: 440,
                        scoreValue: 120,
                        velocityMagnitude: 180,
                        normalModeConfig: {
                            x: .65 * o.worldDims.width,
                            y: -100,
                            startRotation: Phaser.Math.DegToRad(90)
                        }
                    },
                    i = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B7, e),
                    s = t.gameScene.actorsMng.addActor(o.ARMATURE_IDS.B8, e);
                i.attachB8Turret(s).start();
                for (var a = r.BulletsManager.getBulletSettingsCopy(o.BULLET_SETTINGS.BADDIE_BULLET_FLAME), n = 0; n < 4; n++) t.gameScene.time.delayedCall(500 * n, function() {
                    s.loadWeapon(4, 50, 500, 0, a)
                }, null, t)
            }, null, this)
        }, d);

    function d(t) {
        this._numSpawnFunctionCalls = 0, this._totalNumSpawnFunctionCalls = 10, this._stopAutoSpawn = !1, this._spawnTime1Min = 2750, this._spawnTime1Max = 3250, this._spawnTime2Min = 4e3, this._spawnTime2Max = 4500, this._easySpawnFunctions = [], this._medSpawnFunctions = [], this.gameScene = t, this.gui = t.gameUi
    }
    e.default = p
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = i(2),
        l = i(4),
        p = i(14),
        d = i(67),
        _ = i(68),
        c = i(70),
        S = i(71),
        u = i(8),
        g = (a(y, n = Phaser.Scene), y.prototype.create = function() {
            this.cam = this.cameras.main, this._isCreated = !0, this._gameScene = this.scene.manager.getScene(r.KEYS.SCENE.GAME), this._greenBg = this.add.image(0, 0, r.KEYS.GREEN_BG), this._greenBg.setOrigin(0, 0).setVisible(!1), this.gameShop = new d.GameShop(this._gameScene, this), this.gameShop.continueBtn.on("pointerup", this._onGameShopContinueClick, this), this.gamePaused = new c.GamePaused(this._gameScene, this), this.gamePaused.resumeBtn.on("pointerup", this._onGamePausedResumeClick, this), this.gamePaused.exitBtn.on("pointerup", this._onGamePausedExitClick, this), this.gameBounties = new _.GameBounties(this._gameScene, this), this.gameBounties.continueBtn.on("pointerup", this._onGameBountyContinueClick, this), this.gameUiDiag = new S.GameUiDiag(this._gameScene, this), this._livesSB = new p.SegmentedBar(this, 0, 0, r.KEYS.GAME_TEX_SS1, null, r.KEYS.GAME_UI.LIVES_BG, {
                width: 12,
                height: 22,
                maxNumSegments: r.upgrades.playerHpUpgrade.level,
                on: r.KEYS.GAME_UI.SEGMENT_ON,
                off: r.KEYS.GAME_UI.SEGMENT_OFF,
                offsets: new Phaser.Geom.Point(52, 21)
            }), this._bigLazorSB = new p.SegmentedBar(this, 0, 0, r.KEYS.GAME_TEX_SS1, null, r.KEYS.GAME_UI.BIG_LAZOR_BG, {
                width: 12,
                height: 22,
                maxNumSegments: r.upgrades.bigLazorUpgrade.level,
                on: r.KEYS.GAME_UI.SEGMENT_ON,
                off: r.KEYS.GAME_UI.SEGMENT_OFF,
                offsets: new Phaser.Geom.Point(52, 21)
            }), h.isDefined(this._gameScene) && h.isDefined(this._gameScene.playerShip) && this.updatePlayerLives(this._gameScene.playerShip.hitPoints), this._statsTitle = this.add.bitmapText(-1e3, -1e3, r.FONTS.SPACE_RANGER_BI, "Not Set Yet", 48), this._statsTitle.visible = !1, this._levelStatsBT = this.add.bitmapText(-1e3, -1e3, r.FONTS.SPACE_RANGER_BI, "Not Set Yet", 38), this._levelStatsBT.visible = !1, this._pauseBtn = this.add.image(-1e3, -1e3, r.KEYS.GAME_TEX_SS1, r.KEYS.GAME_UI.PAUSE_BTN), this._pauseBtn.setInteractive({
                useHandCursor: !0
            }).setOrigin(0, 0), this._pauseBtn.on("pointerup", this.onPauseBtnClick, this), this._pauseBtn.depth = 102, this._keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE), this._scoreBT = this.add.bitmapText(10, 10, r.FONTS.SPACE_RANGER_BI, "0", 30).setCenterAlign().setOrigin(.5, 0), this._starBg = this.add.image(0, 0, r.KEYS.GAME_TEX_SS1, r.KEYS.GAME_UI.STARS_BG).setOrigin(0, 0), this._starBT = this.add.bitmapText(0, 0, r.FONTS.SPACE_RANGER_BI, "0", 32).setOrigin(0, 0).setLeftAlign(), this.children.bringToTop(this._scoreBT), this.children.bringToTop(this._starBT), this._gameUiComponents = [this._scoreBT, this._livesSB, this._bigLazorSB, this._starBg, this._starBT, this._pauseBtn], h.isDefined(this._gameScene) && h.isDefined(this._gameScene.numStars) && this.updateStars(), this.hideAllScreens(), this.refreshResize()
        }, y.prototype.onPauseBtnClick = function() {
            this._gameScene.secondsElapsed < 1 || (r.isGamePaused ? this._onGamePausedResumeClick() : (this._gameScene.pauseGamePlay(), this.showGamePaused(), this.setIsShowing(!1)))
        }, Object.defineProperty(y.prototype, "mainCamera", {
            get: function() {
                return this.cameras.main
            },
            enumerable: !0,
            configurable: !0
        }), y.prototype.resizeFor = function(t, e, i) {
            if (this._lastResizeUiWidth = t, this._lastResizeUiHeight = e, this._lastGameSceneRatio = i, this._isCreated) {
                var s = t / r.worldDims.width,
                    a = this.cameras.main;
                this.cam.setViewport(0, 0, t, e), this._greenBg.setScale(1);
                var o = Math.max(t / this._greenBg.displayWidth, a.height / this._greenBg.displayHeight);
                this._greenBg.setScale(o), this._greenBg.x = Math.floor(.5 * (t - this._greenBg.displayWidth)), this._greenBg.y = Math.floor(.5 * (e - this._greenBg.displayHeight)), this._scoreBT.setScale(s), this._scoreBT.x = Math.floor(.5 * t), this._scoreBT.y = Math.floor(10 * s), this._starBg.setScale(s), this._starBg.x = Math.floor(t - 228 * s), this._starBg.y = Math.floor(2 * s), this._starBT.setScale(s), this._starBT.x = Math.floor(t - 192 * s), this._starBT.y = Math.floor(26 * s), this._livesSB.setScale(s), this._livesSB.setXY(Math.floor(8 * s), 4 * s), this._bigLazorSB.setScale(s), this._bigLazorSB.setXY(Math.floor(8 * s), 58 * s), this._levelStatsBT.setScale(s, s), this._levelStatsBT.x = .5 * (t - this._levelStatsBT.width), this._levelStatsBT.y = .4 * (e - this._levelStatsBT.height), this._statsTitle.setScale(s, s), this._statsTitle.x = .5 * (t - this._statsTitle.width), this._statsTitle.y = this._levelStatsBT.y, this._pauseBtn.setScale(s), this._pauseBtn.x = Math.floor(t - this._pauseBtn.displayWidth + 150 * s), this._pauseBtn.y = Math.floor(e - this._pauseBtn.displayHeight + 2 * s), this.gamePaused.resize(), this.gameShop.resize(), this.gameBounties.resize(), this.gameUiDiag.resize()
            }
        }, y.prototype.refreshResize = function() {
            -1 != this._lastResizeUiWidth && -1 != this._lastResizeUiHeight && this.resizeFor(this._lastResizeUiWidth, this._lastResizeUiHeight, this._lastGameSceneRatio)
        }, y.prototype.onPortraitHidden = function() {}, y.prototype.showStatsText = function(t, e, i, s) {
            this._levelStatsBT.text = "\n\nLevel Score: " + s + "\n\nShmupnagery: " + e + "/" + i + " (" + (100 * e / i).toFixed(2) + "%)", r.SETTINGS.IS_TOUCH_SCREEN ? this._levelStatsBT.text += "\n\n[    Touch Screen to Continue    ]" : this._levelStatsBT.text += "\n\n[    Click or Space to Continue    ]", this._levelStatsBT.visible = !0, this._levelStatsBT.active = !0, this._levelStatsBT.setCenterAlign(), this._levelStatsBT.x = .5 * (this._lastResizeUiWidth - this._levelStatsBT.width), this._levelStatsBT.y = .5 * (this._lastResizeUiHeight - this._levelStatsBT.height), this._statsTitle.text = t, this._statsTitle.visible = !0, this._statsTitle.active = !0, this._statsTitle.x = .5 * (this._lastResizeUiWidth - this._statsTitle.width), this._statsTitle.y = this._levelStatsBT.y, l.TweenMax.from(this._levelStatsBT, .5, {
                y: this._lastResizeUiHeight,
                ease: l.Back.easeOut.config(1.2)
            }), l.TweenMax.from(this._statsTitle, .5, {
                y: 1.2 * -this._statsTitle.height,
                ease: l.Back.easeOut.config(1.2)
            }), this.setIsShowing(!1)
        }, y.prototype.hideStatsText = function() {
            l.TweenMax.to(this._levelStatsBT, .5, {
                y: this._lastResizeUiHeight,
                ease: l.Back.easeOut.config(1.2),
                onComplete: this._onHideStatsTextComplete,
                onCompleteScope: this
            }), l.TweenMax.to(this._statsTitle, .5, {
                y: 1.2 * -this._statsTitle.height,
                ease: l.Back.easeOut.config(1.2)
            })
        }, y.prototype._onHideStatsTextComplete = function() {
            this._levelStatsBT.visible = !1, this._levelStatsBT.active = !1, this._statsTitle.visible = !1, this._statsTitle.active = !1
        }, y.prototype.showGameLostText = function(t, e, i) {
            this.showStatsText("Good Run!", t, e, i), this.time.delayedCall(1e3, this._enableLevelLostOnceTapScreenListener, null, this)
        }, y.prototype._enableLevelLostOnceTapScreenListener = function() {
            this.input.once("pointerup", this._onLevelLostPointerUp, this), this._keySpace.once("up", this._onLevelLostPointerUp, this)
        }, y.prototype._onLevelLostPointerUp = function() {
            var t = this;
            this.time.delayedCall(500, function() {
                if (r.isFirstRun) t.time.delayedCall(500, function() {
                    t.showFirstRunDiag(), t._gameScene.awardStars(1e3)
                }, null, t);
                else {
                    var e = Date.now(),
                        i = e - t._lastTimeShownSupportRequest;
                    console.log("[diff", i, "][every", t._shownSupportRequestEvery, "]"), i > t._shownSupportRequestEvery ? (t._lastTimeShownSupportRequest = e, t.showSupportRequestDiag(), t._gameScene.awardStars(1e3)) : t.showGameBounties()
                }
                t.setIsShowing(!1), t._gameScene.resetLevel(), t._gameScene.pauseGamePlay()
            }, null, this), this.hideStatsText(), this.input.off("pointerup", this._onLevelLostPointerUp, this), this._keySpace.off("up", this._onLevelLostPointerUp, this)
        }, y.prototype.hideAllScreens = function() {
            this.gameShop.setIsShowing(!1), this.gamePaused.setIsShowing(!1), this.gameBounties.setIsShowing(!1), this.gameUiDiag.setIsShowing(!1), this._statsTitle.visible = !1, this._levelStatsBT.visible = !1, this._greenBg.visible = !1
        }, y.prototype.showGameShop = function() {
            this.hideAllScreens(), this.gameShop.setIsShowing(!0), this._greenBg.visible = !0
        }, y.prototype.showGamePaused = function() {
            this.hideAllScreens(), this.gamePaused.setIsShowing(!0), this._greenBg.visible = !0
        }, y.prototype.showGameBounties = function() {
            this.hideAllScreens(), this.gameBounties.setIsShowing(!0), this._greenBg.visible = !0, this.gameBounties.checkPerformance(this._gameScene.collectPlayerPerformanceData())
        }, y.prototype.showFirstRunDiag = function() {
            var t = this;
            this.hideAllScreens(), this.setIsShowing(!1), this.gameUiDiag.setIsShowing(!0), this._greenBg.visible = !0, this.gameUiDiag.showSupportButtons(), this.gameUiDiag.setDiag("1000 Stars", "Good first run, let's\nget some upgrades in!\nHere's 1000 free stars!\n\nYou can support the\ndeveloper on itch.io\nand by sharing the game\nwith your friends!\n\nYour support keeps\nus going! Thank you!", 28, function() {
                r.GAME_ANALYTHICS_ENABLED && u.gameanalytics.GameAnalytics.addResourceEvent(u.gameanalytics.EGAResourceFlowType.Source, "stars", 1e3, "boost", "firstRunItchLink"), t.showGameBounties(), r.setIsFirstRun(!1)
            }, null, this, function() {
                r.GAME_ANALYTHICS_ENABLED && u.gameanalytics.GameAnalytics.addDesignEvent("click:rejectFirstRunItchLink"), t.showGameBounties(), r.setIsFirstRun(!1)
            }, null, this)
        }, y.prototype.showSupportRequestDiag = function() {
            var t = this;
            this.hideAllScreens(), this.setIsShowing(!1), this.gameUiDiag.setIsShowing(!0), this._greenBg.visible = !0, this.gameUiDiag.showSupportButtons(), this.gameUiDiag.setDiag("1000 Stars", "You're doing great!\n1000 stars are awarded\naround every 5 Minutes!\nShould you wish to\nsupport The developer\nyou can do so by using\nthe links bellow.\n\nSpread the word!\nYour support keeps\nus going! Thank You!", 28, function() {
                r.GAME_ANALYTHICS_ENABLED && u.gameanalytics.GameAnalytics.addResourceEvent(u.gameanalytics.EGAResourceFlowType.Source, "stars", 1e3, "boost", "FiveMinuiteSupportRequest"), t.showGameBounties()
            }, null, this, function() {
                r.GAME_ANALYTHICS_ENABLED && u.gameanalytics.GameAnalytics.addDesignEvent("click:rejectFirstSupportRequest"), t.showGameBounties()
            }, null, this)
        }, y.prototype.setIsShowing = function(t) {
            for (var e = 0; e < this._gameUiComponents.length; e++) this._gameUiComponents[e].visible = t
        }, y.prototype.updatePlayerLives = function(t) {
            this._isCreated && this._livesSB.setMaxNumActiveSegments(t)
        }, y.prototype.updateBigLazor = function(t) {
            this._isCreated && this._bigLazorSB.setMaxNumActiveSegments(t)
        }, y.prototype.updateScore = function(t) {
            this._isCreated && (this._scoreBT.text = "" + t)
        }, y.prototype.updateStars = function(t) {
            void 0 === t && (t = void 0), this._isCreated && (h.isDefined(t) || (t = this._gameScene.numStars), this._starBT.text = "" + t)
        }, y.prototype.upgradePlayerLives = function() {
            this._isCreated && this._livesSB.setMaxNumActiveSegments(r.upgrades.playerHpUpgrade.amount, !0)
        }, y.prototype._onGameShopContinueClick = function() {
            this.hideAllScreens(), this.updateStars(), this.setIsShowing(!0), this._gameScene.startGame()
        }, y.prototype._onGameBountyContinueClick = function() {
            this.showGameShop()
        }, y.prototype._onGamePausedResumeClick = function() {
            this.hideAllScreens(), this.setIsShowing(!0), this._gameScene.resumeGamePlay()
        }, y.prototype._onGamePausedExitClick = function() {
            this._onGamePausedResumeClick(), this._gameScene.exitGamePlay()
        }, Object.defineProperty(y.prototype, "lastTimeShownSupportRequest", {
            get: function() {
                return this._lastTimeShownSupportRequest
            },
            set: function(t) {
                this._lastTimeShownSupportRequest = t
            },
            enumerable: !0,
            configurable: !0
        }), y);

    function y() {
        var t = n.call(this, {
            key: r.KEYS.SCENE.GAME_UI
        }) || this;
        return t._isCreated = !1, t._lastResizeUiWidth = -1, t._lastResizeUiHeight = -1, t._lastGameSceneRatio = 1, t._lastTimeShownSupportRequest = 0, t._shownSupportRequestEvery = 3e5, t
    }
    e.GameUi = g
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = i(2),
        n = i(14),
        r = i(15),
        h = i(8),
        l = (p.prototype.applyStoredUpgradeLevels = function() {
            if (!o.isDefined(this._gScene) || !o.isDefined(this._gScene.playerShip)) return console.warn("Player not yet initialized, applying stored upgrade levels at a later time..."), void this._uiScene.time.delayedCall(250, this.applyStoredUpgradeLevels, null, this);
            var t = a.getStoredData();
            if (o.isDefined(t) && o.isDefined(t.upgrade_levels)) {
                var e = t.upgrade_levels;
                this._gScene.playerShip.setMaxHp(e[r.UPGRADE_INDEX.PLAYER_HP]), this._gScene.playerShip.setWeaponLevel(e[r.UPGRADE_INDEX.PLAYER_GUNS]), this._gScene.playerShip.setSpeedLevel(e[r.UPGRADE_INDEX.PLAYER_SPEED]), this._gScene.playerShip.updateItemMagnetRange(), this._gScene.playerShip.updateBigLazor(), this._gScene.playerShip.updateMissiles(), this._gScene.playerShip.updateMissilesStats(), a.dropsKeeper.setUpgradeLevel(e[r.UPGRADE_INDEX.DROP_CHANCES]), console.log("[Stored Upgrades] successfully applied.")
            }
        }, p.prototype.setIsShowing = function(t) {
            1 == (this.cont.visible = t) ? (this.cont.depth = a.MAX_DEPTH, this._upgDiagCont.depth = a.MAX_DEPTH, this.updateFunds(), this._startAnims()) : (this.cont.depth = 0, this._upgDiagCont.depth = 0, this._stopAnims())
        }, p.prototype.resize = function() {
            var t = this._cam.height / a.worldDims.height,
                e = 1.01 * this._bg.width,
                i = 1.01 * this._bg.height,
                s = Math.min(a.worldDims.width * t, window.innerWidth),
                o = window.innerHeight,
                n = Math.min(s / e, o / i);
            this.cont.setScale(n, n), this.cont.x = .5 * (s - e / 1.01 * n), this.cont.y = .5 * (o - i / 1.01 * n), this._prevContX = this.cont.x, this.resizeDiagCont()
        }, p.prototype.resizeDiagCont = function() {
            var t = this._cam.height / a.worldDims.height,
                e = 1.01 * this._upgDiagBg.width,
                i = 1.01 * this._upgDiagBg.height,
                s = Math.min(a.worldDims.width * t, window.innerWidth),
                o = window.innerHeight,
                n = Math.min(s / e, o / i);
            this._upgDiagCont.setScale(n), this._upgDiagCont.x = .5 * (s - e / 1.01 * n), this._upgDiagCont.y = .5 * (o - i / 1.01 * n), this._prevUpgDiagContX = this._upgDiagCont.x
        }, p.prototype._createUpgradeEntry = function(t, e, i, s, r, h, l, p) {
            void 0 === p && (p = void 0), o.isDefined(p) || (p = this._priceFontSize);
            var d = new n.SegmentedBar(this._uiScene, t, e, i, s, a.KEYS.UI.UPGRADES_BTN_BG, {
                width: 22,
                height: 40,
                maxNumSegments: h,
                on: a.KEYS.UI.SEGMENT_ON,
                off: a.KEYS.UI.SEGMENT_OFF,
                offsets: new Phaser.Geom.Point(130, 69)
            });
            d.setNumActiveSegments(r).addToContainer(this.cont);
            var _ = this._uiScene.add.bitmapText(134, 125, a.FONTS.SPACE_RANGER_BI, "0000", p);
            _.setLeftAlign(), d.setPriceBt(_);
            var c = this._uiScene.add.bitmapText(130, 22, a.FONTS.SPACE_RANGER_BI, "not set yet", p - 4);
            return c.setLeftAlign(), d.setNameBt(c), d.bgImg.on("pointerup", l, this), d
        }, p.prototype._onBuyLivesClick = function() {
            var t = this,
                e = a.upgrades.playerHpUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "playerHP"), e.upgrade(), t._gScene.playerShip.setMaxHp(e.level), t._uiScene.updatePlayerLives(e.level), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_HP].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_HP].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyPlayerGunClick = function() {
            var t = this,
                e = a.upgrades.playerGunsUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "playerGuns"), e.upgrade(), t._gScene.playerShip.upgradeWeapon(), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_GUNS].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_GUNS].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyPlayerEnergyClick = function() {
            var t = this,
                e = a.upgrades.playerSpeedUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "playerSpeed"), e.upgrade(), t._gScene.playerShip.upgradeSpeed(), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_SPEED].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_SPEED].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyBigLazorClick = function() {
            var t = this,
                e = a.upgrades.bigLazorUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "bigLazor"), e.upgrade(), t._gScene.gameUi.updateBigLazor(e.level), t._gScene.playerShip.updateBigLazor(), t._upgradeSBs[r.UPGRADE_INDEX.BIG_LAZOR].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.BIG_LAZOR].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyMissilesClick = function() {
            var t = this,
                e = a.upgrades.missilesNumUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "missilesNum"), e.upgrade(), t._gScene.playerShip.updateMissiles(), t._upgradeSBs[r.UPGRADE_INDEX.MISSILES_NUM].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.MISSILES_NUM].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyMissilesStatsClick = function() {
            var t = this,
                e = a.upgrades.missilesStatsUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "missilesStats"), e.upgrade(), t._gScene.playerShip.updateMissilesStats(), t._upgradeSBs[r.UPGRADE_INDEX.MISSILES_STATS].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.MISSILES_STATS].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyPlayerBotsClick = function() {
            var t = this,
                e = a.upgrades.botsNumUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "botsNum"), e.upgrade(), t._gScene.playerShip.checkBotsCountUpgrade(), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_BOTS_NUM].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_BOTS_NUM].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyPlayerBotsStatsClick = function() {
            var t = this,
                e = a.upgrades.botsStatsUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "botsStats"), e.upgrade(), t._gScene.playerShip.updateBotsStatsUpgrade(), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_BOTS_STATS].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_BOTS_STATS].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyDropChanceClick = function() {
            var t = this,
                e = a.upgrades.dropChanceUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "dropChance"), e.upgrade(), a.dropsKeeper.setUpgradeLevel(e.level), t._upgradeSBs[r.UPGRADE_INDEX.DROP_CHANCES].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.DROP_CHANCES].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onBuyMagnetClick = function() {
            var t = this,
                e = a.upgrades.playerMagnetUpgrade;
            e.canBeUpgraded() && this._showUpgradeDialog(e, function() {
                t._gScene.applyCost(e.getCost()), t.updateFunds(), a.GAME_ANALYTHICS_ENABLED && h.gameanalytics.GameAnalytics.addResourceEvent(h.gameanalytics.EGAResourceFlowType.Sink, "stars", e.getCost(), "shipUpgrade", "playerMagnet"), e.upgrade(), t._gScene.playerShip.updateItemMagnetRange(), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_MAGNET].setNumActiveSegments(e.level), t._upgradeSBs[r.UPGRADE_INDEX.PLAYER_MAGNET].priceBt.text = e.getCostString()
            }, null, this)
        }, p.prototype._onPrevPageClick = function() {
            this._currPageIndex--, this._showCurrentPageUpgrades()
        }, p.prototype._onNextPageClick = function() {
            this._currPageIndex++, this._showCurrentPageUpgrades()
        }, p.prototype._showUpgradeDialog = function(t, e, i, s) {
            this._upgMessage.text = t.getMessage(), this._upgMessage.scale = 1, this._upgMessage.scale = 400 / this._upgMessage.width, this.cont.visible = !1, this._prevContX = this.cont.x, this.cont.x = -1e4, this._upgDiagCont.visible = !0, this._upgDiagCont.x = this._prevUpgDiagContX, this._cancelBtn.visible = !0, this._canBuyUpgrade(t) ? (this._onOkClick = e, this._onOkParams = i, this._onOkScope = s, this._okBtn.alpha = 1, this._okBtn.setInteractive({
                useHandCursor: !0
            })) : (this._okBtn.alpha = .5, this._okBtn.disableInteractive())
        }, p.prototype._showUpgrades = function() {
            this.cont.visible = !0, this.cont.x = this._prevContX, this._upgDiagCont.visible = !1, this._prevUpgDiagContX = this._upgDiagCont.x, this._upgDiagCont.x = -1e4, this._showCurrentPageUpgrades()
        }, p.prototype._showCurrentPageUpgrades = function() {
            var t = this._spotCoords.length,
                e = Math.floor(this._upgradeSBs.length / t);
            this._currPageIndex > e ? this._currPageIndex = e : this._currPageIndex < 0 && (this._currPageIndex = 0);
            for (var i = this._currPageIndex * t, s = i + t - 1, a = 0; a < this._upgradeSBs.length; a++) {
                var n = this._upgradeSBs[a];
                n.cont.visible = i <= a && a <= s, o.isDefined(n.data) ? n.upgAvalableImg.visible = this._canBuyUpgrade(n.data) && !n.data.isMaxed() : n.upgAvalableImg.visible = !1
            }
        }, p.prototype._startAnims = function() {
            for (var t = 0; t < this._upgradeSBs.length; t++) {
                var e = this._upgradeSBs[t];
                o.isDefined(e.data) && e.startUpgAvailableAnim()
            }
        }, p.prototype._stopAnims = function() {
            for (var t = 0; t < this._upgradeSBs.length; t++) {
                var e = this._upgradeSBs[t];
                o.isDefined(e.data) && e.stopUpgAvailableAnim()
            }
        }, p.prototype._canBuyUpgrade = function(t) {
            return !(t.getCost() > this._gScene.numStars)
        }, p.prototype.updateFunds = function() {
            this._titleBT.text = "Upgrade\nFunds: " + this._gScene.numStars
        }, Object.defineProperty(p.prototype, "isCreated", {
            get: function() {
                return this._isCreated
            },
            enumerable: !0,
            configurable: !0
        }), p);

    function p(t, e) {
        var i = this;
        this._isCreated = !1, this._priceFontSize = 34, this._currPageIndex = 0, this._prevContX = -1e4, this._prevUpgDiagContX = -1e4, this._gScene = t, this._uiScene = e, this.cont = this._uiScene.add.container(0, 0), this._uiScene.children.bringToTop(this.cont), this._upgDiagCont = this._uiScene.add.container(0, 0), this._upgDiagCont.visible = !1, this._cam = this._uiScene.cameras.main, this._spotCoords = [new Phaser.Geom.Point(164, 130), new Phaser.Geom.Point(164, 288), new Phaser.Geom.Point(164, 447), new Phaser.Geom.Point(164, 605)], this._upgradeSBs = [], this._bg = this._uiScene.add.image(0, 0, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.UPGRADES_BG).setOrigin(0, 0), this.cont.add(this._bg), this._upgDiagBg = this._uiScene.add.image(0, 0, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.UPGRADES_CONFIRM_BG).setOrigin(0, 0), this._upgDiagCont.add(this._upgDiagBg);
        var s = this._spotCoords.length;
        a.upgrades.checkStoredUpdateLevels();
        var o = this._spotCoords[r.UPGRADE_INDEX.PLAYER_HP % s],
            n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.HEART, a.upgrades.playerHpUpgrade.level, a.upgrades.playerHpUpgrade.maxLevel, this._onBuyLivesClick);
        n.priceBt.text = a.upgrades.playerHpUpgrade.getCostString(), n.nameBt.text = "Hit Points", n.nameBt.setScale(.98), n.data = a.upgrades.playerHpUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.PLAYER_HP] = n, o = this._spotCoords[r.UPGRADE_INDEX.PLAYER_GUNS % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.BULLETS, a.upgrades.playerGunsUpgrade.level, a.upgrades.playerGunsUpgrade.maxLevel, this._onBuyPlayerGunClick)).priceBt.text = a.upgrades.playerGunsUpgrade.getCostString(), n.nameBt.text = "Main Gun", n.nameBt.x += 10, n.data = a.upgrades.playerGunsUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.PLAYER_GUNS] = n, o = this._spotCoords[r.UPGRADE_INDEX.PLAYER_SPEED % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.ENERGY, a.upgrades.playerSpeedUpgrade.level, a.upgrades.playerSpeedUpgrade.maxLevel, this._onBuyPlayerEnergyClick)).priceBt.text = a.upgrades.playerSpeedUpgrade.getCostString(), n.nameBt.text = "Ship Speed", n.nameBt.setScale(.9), n.data = a.upgrades.playerSpeedUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.PLAYER_SPEED] = n, o = this._spotCoords[r.UPGRADE_INDEX.PLAYER_MAGNET % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.MAGNET, a.upgrades.playerMagnetUpgrade.level, a.upgrades.playerMagnetUpgrade.maxLevel, this._onBuyMagnetClick)).priceBt.text = a.upgrades.playerMagnetUpgrade.getCostString(), n.nameBt.text = "Magnet", n.nameBt.x += 20, n.data = a.upgrades.playerMagnetUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.PLAYER_MAGNET] = n, o = this._spotCoords[r.UPGRADE_INDEX.MISSILES_NUM % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.MISSILES, a.upgrades.missilesNumUpgrade.level, a.upgrades.missilesNumUpgrade.maxLevel, this._onBuyMissilesClick)).priceBt.text = a.upgrades.missilesNumUpgrade.getCostString(), n.nameBt.text = "Missiles Num", n.nameBt.setScale(.75), n.nameBt.y += 5, n.data = a.upgrades.missilesNumUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.MISSILES_NUM] = n, o = this._spotCoords[r.UPGRADE_INDEX.MISSILES_STATS % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.MISSILES_SPEED, a.upgrades.missilesStatsUpgrade.level, a.upgrades.missilesStatsUpgrade.maxLevel, this._onBuyMissilesStatsClick)).priceBt.text = a.upgrades.missilesStatsUpgrade.getCostString(), n.nameBt.text = "Missiles Pow", n.nameBt.setScale(.75), n.nameBt.y += 5, n.data = a.upgrades.missilesStatsUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.MISSILES_STATS] = n, o = this._spotCoords[r.UPGRADE_INDEX.BIG_LAZOR % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.BIG_LAZOR, a.upgrades.bigLazorUpgrade.level, a.upgrades.bigLazorUpgrade.maxLevel, this._onBuyBigLazorClick)).priceBt.text = a.upgrades.bigLazorUpgrade.getCostString(), n.nameBt.text = "Big Lazor", n.data = a.upgrades.bigLazorUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.BIG_LAZOR] = n, o = this._spotCoords[r.UPGRADE_INDEX.PLAYER_BOTS_NUM % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.BOTS, a.upgrades.botsNumUpgrade.level, a.upgrades.botsNumUpgrade.maxLevel, this._onBuyPlayerBotsClick)).priceBt.text = a.upgrades.botsNumUpgrade.getCostString(), n.nameBt.text = "Bots Num", n.nameBt.x += 2, n.data = a.upgrades.botsNumUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.PLAYER_BOTS_NUM] = n, o = this._spotCoords[r.UPGRADE_INDEX.PLAYER_BOTS_STATS % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.BOTS_ENERGY, a.upgrades.botsStatsUpgrade.level, a.upgrades.botsStatsUpgrade.maxLevel, this._onBuyPlayerBotsStatsClick)).priceBt.text = a.upgrades.botsStatsUpgrade.getCostString(), n.nameBt.text = "Bots Stats", n.nameBt.setScale(.82), n.nameBt.y += 2, n.data = a.upgrades.botsStatsUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.PLAYER_BOTS_STATS] = n, o = this._spotCoords[r.UPGRADE_INDEX.DROP_CHANCES % s], (n = this._createUpgradeEntry(o.x, o.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.STAR, a.upgrades.dropChanceUpgrade.level, a.upgrades.dropChanceUpgrade.maxLevel, this._onBuyDropChanceClick)).priceBt.text = a.upgrades.dropChanceUpgrade.getCostString(), n.nameBt.text = "Drop Chance", n.nameBt.setScale(.75), n.nameBt.y += 5, n.data = a.upgrades.dropChanceUpgrade, this._upgradeSBs[r.UPGRADE_INDEX.DROP_CHANCES] = n, this._uiScene.time.delayedCall(250, this.applyStoredUpgradeLevels, null, this), this._prevPageBtn = this._uiScene.add.sprite(84, 450, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.LEFT_ARROW_BTN), this._prevPageBtn.setInteractive({
            useHandCursor: !0
        }), this._prevPageBtn.on("pointerup", this._onPrevPageClick, this), this._nextPageBtn = this._uiScene.add.sprite(600, 450, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.RIGHT_ARROW_BTN), this._nextPageBtn.setInteractive({
            useHandCursor: !0
        }), this._nextPageBtn.on("pointerup", this._onNextPageClick, this), this.cont.add(this._prevPageBtn), this.cont.add(this._nextPageBtn), this.continueBtn = this._uiScene.add.bitmapText(214, 820, a.FONTS.SPACE_RANGER_BI, "Continue", 52), this.continueBtn.setInteractive({
            useHandCursor: !0
        }), this.cont.add(this.continueBtn), this._titleBT = this._uiScene.add.bitmapText(200, 34, a.FONTS.SPACE_RANGER_BI, "Upgrade Funds\n" + this._gScene.numStars, 33), this._titleBT.setCenterAlign(), this.cont.add(this._titleBT), this._upgMessageTitle = this._uiScene.add.bitmapText(232, 36, a.FONTS.SPACE_RANGER_BI, "Buy Upgrade", 30), this._upgMessage = this._uiScene.add.bitmapText(140, 150, a.FONTS.SPACE_RANGER_BI, "NOT SET YET!!!", this._priceFontSize), this._okBtn = this._uiScene.add.sprite(240, 460, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.APPLY_BTN), this._okBtn.setInteractive({
            useHandCursor: !0
        }), this._okBtn.on("pointerup", function() {
            i._onOkClick.call(i, i._onOkParams), i._showUpgrades()
        }, this._onOkScope), this._cancelBtn = this._uiScene.add.sprite(440, 460, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.CANCEL_BTN), this._cancelBtn.setInteractive({
            useHandCursor: !0
        }), this._cancelBtn.on("pointerup", this._showUpgrades, this), this._upgDiagCont.add([this._upgMessageTitle, this._upgMessage, this._okBtn, this._cancelBtn]), this._isCreated = !0, this.resize(), this._showUpgrades(), this.setIsShowing(!1)
    }
    e.GameShop = l
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = i(2),
        n = i(16),
        r = i(69),
        h = i(4),
        l = i(8),
        p = (d.prototype.resize = function() {
            var t = this._cam.height / a.worldDims.height,
                e = 1.01 * this._bg.width,
                i = 1.01 * this._bg.height,
                s = Math.min(a.worldDims.width * t, window.innerWidth),
                o = window.innerHeight,
                n = Math.min(s / e, o / i);
            this.cont.setScale(n, n), this.cont.x = .5 * (s - e / 1.01 * n), this.cont.y = .5 * (o - i / 1.01 * n)
        }, d.prototype.checkPerformance = function(t) {
            var i = 0,
                s = this._bounties[e.BOUNTY_INDEX.BOSSES];
            if (s.level < t.maxBossLevelDefeated && !s.isMaxed())
                for (var o = t.maxBossLevelDefeated - s.level, n = 0; n < o; n++) this._uiScene.time.delayedCall(1e3 * n, this.doBountyAward, [s.getXY(), s.nextAmount], this), this._gScene.awardStars(s.nextAmount), a.GAME_ANALYTHICS_ENABLED && l.gameanalytics.GameAnalytics.addResourceEvent(l.gameanalytics.EGAResourceFlowType.Source, "stars", s.nextAmount, "bounty", "boss" + s.level), s.upgrade();
            var r = this._bounties[e.BOUNTY_INDEX.ENEMIES_DEFEATED],
                h = t.numBaddiesDefeated;
            for (i = 0, h -= r.getCost(); 0 < h && !r.isMaxed();) h -= r.getCost(), this._uiScene.time.delayedCall(1e3 * i, this.doBountyAward, [r.getXY(), r.nextAmount], this), this._gScene.awardStars(r.nextAmount), i++, a.GAME_ANALYTHICS_ENABLED && l.gameanalytics.GameAnalytics.addResourceEvent(l.gameanalytics.EGAResourceFlowType.Source, "stars", r.nextAmount, "bounty", "enemiesDefeated" + r.level), r.upgrade();
            var p = this._bounties[e.BOUNTY_INDEX.DAMAGE_DEALT],
                d = t.damageDealt;
            for (i = 0, d -= p.getCost(); 0 < d && !p.isMaxed();) d -= p.getCost(), this._uiScene.time.delayedCall(1e3 * i, this.doBountyAward, [p.getXY(), p.nextAmount], this), this._gScene.awardStars(p.nextAmount), i++, a.GAME_ANALYTHICS_ENABLED && l.gameanalytics.GameAnalytics.addResourceEvent(l.gameanalytics.EGAResourceFlowType.Source, "stars", p.nextAmount, "bounty", "damageDealt" + p.level), p.upgrade();
            var _ = this._bounties[e.BOUNTY_INDEX.SURVIVE_TIME],
                c = t.numSecondsSurvived;
            for (i = 0, c -= _.getCost(); 0 < c && !_.isMaxed();) c -= _.getCost(), this._uiScene.time.delayedCall(1e3 * i, this.doBountyAward, [_.getXY(), _.nextAmount], this), this._gScene.awardStars(_.nextAmount), i++, a.GAME_ANALYTHICS_ENABLED && l.gameanalytics.GameAnalytics.addResourceEvent(l.gameanalytics.EGAResourceFlowType.Source, "stars", _.nextAmount, "bounty", "damageDealt" + _.level), _.upgrade()
        }, d.prototype.doBountyAward = function(t, e) {
            var i = this._bitmapTextFields.pop();
            o.isDefined(i) || (i = this._createAwardBtf()), i.setX(.5 * this._bg.width).setY(t.y), i.setActive(!0).setVisible(!0), i.text = "Bounty Claimed!\n" + e + " stars!", i.alpha = .1, h.TweenMax.to(i, .5, {
                alpha: 1,
                yoyo: !0,
                repeat: 1,
                repeatDelay: .5,
                ease: h.Back.easeOut.config(1.4)
            }), h.TweenMax.to(i, 1, {
                y: i.y - 50
            }), this._uiScene.time.delayedCall(1500, this._poolBackBtf, [i], this)
        }, d.prototype.setIsShowing = function(t) {
            this.cont.setVisible(t), this.cont.depth = 1 == t ? a.MAX_DEPTH : 0
        }, d.prototype.getBountyLevels = function() {
            var t = [];
            return t[e.BOUNTY_INDEX.BOSSES] = this._bounties[e.BOUNTY_INDEX.BOSSES].level, t[e.BOUNTY_INDEX.DAMAGE_DEALT] = this._bounties[e.BOUNTY_INDEX.DAMAGE_DEALT].level, t[e.BOUNTY_INDEX.ENEMIES_DEFEATED] = this._bounties[e.BOUNTY_INDEX.ENEMIES_DEFEATED].level, t[e.BOUNTY_INDEX.SURVIVE_TIME] = this._bounties[e.BOUNTY_INDEX.SURVIVE_TIME].level, t
        }, d.prototype._createAwardBtf = function() {
            var t = this._uiScene.add.bitmapText(0, 0, a.FONTS.SPACE_RANGER_BI, "", 42);
            return t.setActive(!1).setVisible(!1), this._bitmapTextFields.push(t), this.cont.add(t), t.setCenterAlign(), t.setOrigin(.5, 0), t
        }, d.prototype._poolBackBtf = function(t) {
            t.setActive(!1).setVisible(!1), t.setX(-1e3).setY(-1e3), this._bitmapTextFields.push(t)
        }, d.prototype._runTests = function() {}, Object.defineProperty(d.prototype, "isCreated", {
            get: function() {
                return this._isCreated
            },
            enumerable: !0,
            configurable: !0
        }), d);

    function d(t, i) {
        this._isCreated = !1, this._uiScene = i, this._gScene = t, this.cont = this._uiScene.add.container(0, 0), this._bg = this._uiScene.add.image(0, 0, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.BOUNTIES_BG).setOrigin(0, 0), this.cont.add(this._bg), this._uiScene.children.bringToTop(this.cont), this._cam = this._uiScene.cameras.main, this._spotCoords = [new Phaser.Geom.Point(25, 130), new Phaser.Geom.Point(25, 288), new Phaser.Geom.Point(25, 447), new Phaser.Geom.Point(25, 605)], this._bounties = [new r.Bounty(this._uiScene, this._spotCoords[0].x, this._spotCoords[0].y, new n.UpgradeInfo(0, 3, "Defeat bosses for\n750, 1250 and 2000 stars!", [0, 1, 1, 1], [0, 750, 1250, 2e3])), new r.Bounty(this._uiScene, this._spotCoords[1].x, this._spotCoords[1].y, new n.UpgradeInfo(0, 10, "Defeat @PH[cost] enemies\nto get @PH[gain] stars!", [0, 150, 175, 200, 225, 250, 275, 300, 350, 400, 500], [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3])), new r.Bounty(this._uiScene, this._spotCoords[2].x, this._spotCoords[2].y, new n.UpgradeInfo(0, 10, "Deal @PH[cost] damage\nto get @PH[gain] stars!", [0, 1e4, 15e3, 25e3, 4e4, 5e4, 6e4, 75e3, 8e4, 82e3, 85e3], [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1e3])), new r.Bounty(this._uiScene, this._spotCoords[3].x, this._spotCoords[3].y, new n.UpgradeInfo(0, 10, "Survive for @PH[cost] seconds\nto get @PH[gain] stars!", [0, 60, 90, 120, 150, 180, 210, 220, 225, 230, 240], [0, 200, 300, 400, 500, 600, 700, 800, 900, 1e3, 1500]))];
        for (var s = 0; s < this._bounties.length; s++) this._bounties[s].addToContainer(this.cont);
        var h = a.getStoredData();
        if (o.isDefined(h) && o.isDefined(h.bounty_levels)) {
            var l = h.bounty_levels;
            this._bounties[e.BOUNTY_INDEX.BOSSES].setLevel(l[e.BOUNTY_INDEX.BOSSES]), this._bounties[e.BOUNTY_INDEX.DAMAGE_DEALT].setLevel(l[e.BOUNTY_INDEX.DAMAGE_DEALT]), this._bounties[e.BOUNTY_INDEX.ENEMIES_DEFEATED].setLevel(l[e.BOUNTY_INDEX.ENEMIES_DEFEATED]), this._bounties[e.BOUNTY_INDEX.SURVIVE_TIME].setLevel(l[e.BOUNTY_INDEX.SURVIVE_TIME])
        }
        for (this.continueBtn = this._uiScene.add.image(0, 0, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.CONTINUE_BTN).setOrigin(0, 1).setInteractive({
                useHandCursor: !0
            }).setOrigin(1, 1).setScale(.6).setX(540).setY(810), this.cont.add(this.continueBtn), this._bitmapTextFields = [], s = 0; s < 10; s++) this._createAwardBtf();
        this._uiScene.time.delayedCall(250, this._runTests, null, this), this._isCreated = !0
    }
    e.GameBounties = p, e.BOUNTY_INDEX = {
        BOSSES: 0,
        ENEMIES_DEFEATED: 1,
        DAMAGE_DEALT: 2,
        SURVIVE_TIME: 3
    }
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = i(14),
        n = (r.prototype.upgrade = function() {
            this._upgInfo.upgrade(), this.setLevel(this._upgInfo.level)
        }, r.prototype.setLevel = function(t) {
            this._sb.setNumActiveSegments(t), this._upgInfo.setLevel(t), this.isMaxed() ? this._bt.text = "Awesome Job!\nBounty Completed!" : this._bt.text = this._upgInfo.getMessage()
        }, r.prototype.setXY = function(t, e) {
            this._anchor.x = t, this._anchor.y = e, this._sb.setXY(t, e), this._bt.setX(t + 5).setY(e + 80)
        }, r.prototype.getXY = function() {
            return this._anchor
        }, r.prototype.addToContainer = function(t) {
            this._sb.addToContainer(t), t.add(this._bt)
        }, r.prototype.getMessage = function() {
            return this._upgInfo.getMessage()
        }, r.prototype.getCost = function() {
            return this._upgInfo.getCost()
        }, r.prototype.getCostString = function() {
            return this._upgInfo.getCostString()
        }, r.prototype.isMaxed = function() {
            return this._upgInfo.isMaxed()
        }, Object.defineProperty(r.prototype, "level", {
            get: function() {
                return this._upgInfo.level
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "maxLevel", {
            get: function() {
                return this._upgInfo.maxLevel
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "amount", {
            get: function() {
                return this._upgInfo.amount
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(r.prototype, "nextAmount", {
            get: function() {
                return this._upgInfo.getNextAmount()
            },
            enumerable: !0,
            configurable: !0
        }), r);

    function r(t, e, i, s) {
        this._upgInfo = s, this._anchor = new Phaser.Geom.Point(0, 0), this._sb = new o.SegmentedBar(t, 0, 0, a.KEYS.MENUS_TEX_SS2, null, a.KEYS.UI.BOUNTY_BAR_BG, {
            width: 23,
            height: 40,
            maxNumSegments: this._upgInfo.maxLevel,
            on: a.KEYS.UI.SEGMENT_ON,
            off: a.KEYS.UI.SEGMENT_OFF,
            offsets: new Phaser.Geom.Point(12, 20)
        }), this._sb.setNumActiveSegments(0), this._bt = t.add.bitmapText(0, 0, a.FONTS.SPACE_RANGER_BI, s.getMessage(), 30), this.setXY(e, i)
    }
    e.Bounty = n
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = i(17),
        n = (r.prototype.resize = function() {
            var t = this.cam.height / a.worldDims.height,
                e = 1.1 * this._bg.width,
                i = 1.1 * this._bg.height,
                s = Math.min(a.worldDims.width * t, window.innerWidth),
                o = window.innerHeight,
                n = Math.min(s / e, o / i);
            this.cont.setScale(n), this.cont.x = .5 * (s - e / 1.1 * n), this.cont.y = .5 * (o - i / 1.1 * n)
        }, r.prototype.onSfxToggle = function() {
            a.setIsSoundOn(this._sfxToggleBtn.isOn())
        }, r.prototype.onMusicToggle = function() {
            a.setIsMusicOn(this._musicToggleBtn.isOn())
        }, r.prototype.setIsShowing = function(t) {
            this.cont.setVisible(t), 1 == t ? (this.cont.depth = a.MAX_DEPTH, this._sfxToggleBtn.refreshState(), this._musicToggleBtn.refreshState()) : this.cont.depth = 0
        }, Object.defineProperty(r.prototype, "isCreated", {
            get: function() {
                return this._isCreated
            },
            enumerable: !0,
            configurable: !0
        }), r);

    function r(t, e) {
        this._gScene = t, this._uiScene = e, this.cam = e.cameras.main, this.cont = this._uiScene.add.container(0, 0), this._uiScene.children.bringToTop(this.cont), this._bg = this._uiScene.add.image(0, 0, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.PAUSE_BG), this._bg.setOrigin(0, 0), this._sfxToggleBtn = new o.ToggleButton(this._uiScene.add.image(120, 140, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.SFX_ON), this._uiScene.add.image(120, 140, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.SFX_OFF)), this._sfxToggleBtn.setOrigin(0, 0), this._sfxToggleBtn.setState(a.isSoundOn), this._sfxToggleBtn.on("toggled", this.onSfxToggle, this), this._sfxToggleBtn.setScale(.75), this._sfxToggleBtn.depth = 100, this._musicToggleBtn = new o.ToggleButton(this._uiScene.add.image(326, 140, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.MUSIC_ON), this._uiScene.add.image(326, 140, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.MUSIC_OFF)), this._musicToggleBtn.setOrigin(0, 0), this._musicToggleBtn.setState(a.isMusicOn), this._musicToggleBtn.on("toggled", this.onMusicToggle, this), this._musicToggleBtn.setScale(.75), this._musicToggleBtn.depth = 101, this.exitBtn = this._uiScene.add.image(40, 320, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.EXIT_BTN).setOrigin(0, 0), this.exitBtn.setInteractive({
            useHandCursor: !0
        }).setScale(.75), this.resumeBtn = this._uiScene.add.image(330, this.exitBtn.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.RESUME_BTN).setOrigin(0, 0), this.resumeBtn.setInteractive({
            useHandCursor: !0
        }).setScale(.75), this.supportUs = this._uiScene.add.image(314, 480, a.KEYS.GAME_TEX_SS1, a.KEYS.GAME_UI.SUPPORT_US), this.supportUs.setOrigin(.5, 0), this.supportUs.setInteractive({
            useHandCursor: !0
        }), this.supportUs.on("pointerup", function(t) {
            window.open("#", "_blank")
        }, this), this._isCreated = !0, this.cont.add([this._bg, this._sfxToggleBtn.onImg, this._sfxToggleBtn.offImg, this._musicToggleBtn.onImg, this._musicToggleBtn.offImg, this.resumeBtn, this.exitBtn, this.supportUs]), this.resize()
    }
    e.GamePaused = n
}, function(t, e, i) {
    "use strict";
    var s = this && this.__importStar || function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var a = s(i(1)),
        o = (n.prototype.resize = function() {
            var t = this._cam.height / a.worldDims.height,
                e = 1.01 * this._bg.width,
                i = 1.01 * this._bg.height,
                s = Math.min(a.worldDims.width * t, window.innerWidth),
                o = window.innerHeight,
                n = Math.min(s / e, o / i);
            this.cont.setScale(n), this.cont.x = .5 * (s - e / 1.01 * n), this.cont.y = .5 * (o - i / 1.01 * n)
        }, n.prototype.setIsShowing = function(t) {
            this.cont.visible = t, this.cont.depth = 1 == t ? a.MAX_DEPTH : 0
        }, n.prototype.setDiag = function(t, e, i, s, a, o, n, r, h) {
            this._title.text = t, this._messageBT.text = e, this._messageBT.fontSize = i, this._messageBT.scale = 1, this._messageBT.scale = 400 / this._messageBT.width, this._onOkClick = s, this._onOkParams = a, this._onOkScope = o, this._onCancelClick = n, this._onCancelParams = r, this._onCancelScope = h
        }, n.prototype.showItchIoBtn = function() {
            this._okBtn.visible = !1, this._itchIoBtn.visible = !0
        }, n.prototype.showSupportButtons = function() {
            this._okBtn.visible = !1, this._itchIoBtn.visible = !0, this._fbShareBtn.visible = !0, this._twShareBtn.visible = !0
        }, n.prototype.showOkBtn = function() {
            this._okBtn.visible = !0, this._itchIoBtn.visible = !1
        }, Object.defineProperty(n.prototype, "isCreated", {
            get: function() {
                return this._isCreated
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "messageBT", {
            get: function() {
                return this._messageBT
            },
            enumerable: !0,
            configurable: !0
        }), n);

    function n(t, e) {
        var i = this;
        this._isCreated = !1, this._gScene = t, this._uiScene = e, this.cont = this._uiScene.add.container(0, 0), this._bg = this._uiScene.add.image(0, 0, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.UPGRADES_CONFIRM_BG).setOrigin(0, 0), this._title = this._uiScene.add.bitmapText(232, 36, a.FONTS.SPACE_RANGER_BI, "1000 Stars", 32), this._messageBT = this._uiScene.add.bitmapText(144, 120, a.FONTS.SPACE_RANGER_BI, "NOT SET YET!!!", 30), this._okBtn = this._uiScene.add.sprite(240, 470, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.APPLY_BTN), this._okBtn.setInteractive({
            useHandCursor: !0
        }).setVisible(!1), this._okBtn.on("pointerup", function() {
            i._onOkClick.call(i._onOkScope, i._onOkParams)
        }, this._onOkScope), this._itchIoBtn = this._uiScene.add.sprite(180, 470, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.ITCH_IO_BTN), this._itchIoBtn.setInteractive({
            useHandCursor: !0
        }), this._itchIoBtn.on("pointerup", function() {
            window.open("#", "_blank")
        }, this._onOkScope), this._fbShareBtn = this._uiScene.add.sprite(this._itchIoBtn.x + this._itchIoBtn.displayWidth + 30, this._itchIoBtn.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.FB_BTN), this._fbShareBtn.setInteractive({
            useHandCursor: !0
        }), this._fbShareBtn.on("pointerup", function() {
            window.open("https://www.facebook.com/sharer/sharer.php?s=100&p[url]=#,'targetWindow','toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=250'", "_blank")
        }, this), this._twShareBtn = this._uiScene.add.sprite(this._fbShareBtn.x + this._fbShareBtn.displayWidth + 30, this._itchIoBtn.y, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.TW_BTN), this._twShareBtn.setInteractive({
            useHandCursor: !0
        }), this._twShareBtn.on("pointerup", function() {
            window.open('https://twitter.com/intent/tweet?text="Check out Sky Warrior HTML5 Shoot-em-up with tones of upgrades and alien space bugs to exterminate! Playable for free in your browser."&url=#', "_blank")
        }, this), this._cancelBtn = this._uiScene.add.sprite(600, 90, a.KEYS.MENUS_TEX_SS2, a.KEYS.UI.CANCEL_BTN), this._cancelBtn.setInteractive({
            useHandCursor: !0
        }), this._cancelBtn.on("pointerup", function() {
            i._onCancelClick.call(i._onCancelScope, i._onCancelParams)
        }, this), this.cont.add([this._bg, this._title, this._messageBT, this._okBtn, this._cancelBtn, this._itchIoBtn, this._fbShareBtn, this._twShareBtn]), this._cam = this._uiScene.cameras.main, this._isCreated = !0, this.resize()
    }
    e.GameUiDiag = o
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = (a(l, n = Phaser.Scene), l.prototype.init = function() {}, l.prototype.create = function() {
            this._greenBg = this.add.image(0, 0, r.KEYS.GREEN_BG).setOrigin(0, 0), this.cam = this.cameras.main, this._textContent = ["Space, cold ruthless space...", "Given the fact that all the", "comments about the Shmupnage", "story were fun jabs at the", "English being 'drivel', or", "hard to understand, a simple", "tldr; will be used this time!", "", "The action happens some time after", "Shmupnage's initial introduction", "of the 'space threat'. These things", "seem to be nest or boss like", "controlled bio-organisms that are", "annihilating and assimilating", "everything in their path.", "", "The Freedom Fighters United (FFU),", "now corporate funded are taking", "advantage of the situation", "through 'Planetary Protection", "Plans' which are really meant to", "drain valuable resources out of", "their customers in exchange for", "brief times of security.", "", "The Sky Warrior is mainly formed from", "former FFU personnel.", "Space rogues of justice, sworn", "to put an end to the threat ", "while treating everyone fairly.", "", "And finally...", "It all brings us to Lancy who finds", "herself at the controls of a basic", "new generation fighter, under", "equipped, struggling to gain the", "trust of a Lothian colony who", "themselves have been hard burned", "by the FFU out of their resources", "and left to fend for themselves."], this._scrollDBTF = this.add.dynamicBitmapText(10, 10, r.FONTS.SPACE_RANGER_BI, this._textContent, 33), this._scrollDBTF.scrollY = -this.cam.displayHeight, this._continueBtn = this.add.image(0, 0, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.CONTINUE_BTN).setOrigin(0, 1).setInteractive({
                useHandCursor: !0
            }).setOrigin(1, 1), this._continueBtn.on("pointerup", this._onContinueClick, this), this.onResize(), this.enableResizeListener()
        }, l.prototype._onContinueClick = function(t) {
            this.disableResizeListener(), this.scene.start(r.KEYS.SCENE.GAME, {
                fromScene: r.KEYS.SCENE.TITLE
            }), this.cleanUp()
        }, l.prototype.onResize = function() {
            var t = this.cam.height / r.worldDims.height,
                e = Math.min(r.worldDims.width * t, window.innerWidth),
                i = window.innerHeight;
            this.cameras.resize(window.innerWidth, window.innerHeight);
            var s = this.cameras.main;
            s.setZoom(1);
            var a = e / r.worldDims.width * .9;
            this._greenBg.setScale(1);
            var o = Math.max(e / this._greenBg.displayWidth, this.cam.height / this._greenBg.displayHeight);
            this._greenBg.setScale(o), this._greenBg.x = Math.floor(.5 * (e - this._greenBg.displayWidth)), this._greenBg.y = Math.floor(.5 * (i - this._greenBg.displayHeight)), this._scrollDBTF.setScale(a, a), this._scrollDBTF.x = .02 * s.displayWidth, this._scrollDBTF.y = .02 * s.displayHeight, this._scrollDBTF.setSize(.96 * s.displayWidth / a, .89 * s.displayHeight / a);
            var n = this._scrollDBTF.getTextBounds();
            this._max_scroll_y = 1.28 * n.local.height - s.displayHeight / a, this._continueBtn.setScale(.6 * a), this._continueBtn.x = .99 * e, this._continueBtn.y = .99 * i;
            var h = document.getElementById("gameArea");
            h.style.width = e + "px";
            var l = Math.floor(.5 * (window.innerWidth - e));
            h.style.marginLeft = l + "px"
        }, l.prototype.update = function(t, e) {
            this._scrollDBTF.scrollY += .035 * e, this._scrollDBTF.scrollY > this._max_scroll_y && (this._scrollDBTF.scrollY = this._max_scroll_y)
        }, l.prototype.enableResizeListener = function() {
            r.setCurrentScene(this), this.scale.on("resize", this.onResize, this)
        }, l.prototype.disableResizeListener = function() {
            r.setCurrentScene(null), this.scale.off("resize", this.onResize, this)
        }, l.prototype.cleanUp = function() {}, l);

    function l() {
        var t = n.call(this, {
            key: r.KEYS.SCENE.STORY_INTRO
        }) || this;
        return t._max_scroll_y = 0, t
    }
    e.StoryIntro = h
}, function(t, e, i) {
    "use strict";
    var s, a = this && this.__extends || (s = function(t, e) {
            return (s = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                })(t, e)
        }, function(t, e) {
            function i() {
                this.constructor = t
            }
            s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        o = this && this.__importStar || function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var n, r = o(i(1)),
        h = (a(l, n = Phaser.Scene), l.prototype.init = function() {}, l.prototype.create = function() {
            this._greenBg = this.add.image(0, 0, r.KEYS.GREEN_BG).setOrigin(0, 0), this.cam = this.cameras.main, this._textContent = ["Wish I could have shown some", "story images for the game's end", "but lack of artistry and", "monetary means, force me to", "only leave you with a few words.", "", "Once again the TL;DR is:", "Lancy successfully completed ", "her mission, and earned the ", "EX4CE a huge boost in reputation", "with nearby planetary coalitions.", "", "What the FFU seemengly struggled", "with for years an EX4CE cadet", "dealt with in less than a week!", "", "As Lancy leaves the Lothian colony", 'she\'s "greeted" by a fully armed', "FFU task force for a chit-chat.", "", "The free spirited Lancy, gives", "the FFU a full piece of her mind,", "exposing her suspicions upon the", "FFU ways of conducting bussiness.", "", "When things almost escalate,", "none other than 2xC,", "the commander of the EX4CE", "intervenes and quickly calms", "the situation.", "", "Clearly the FFU does not welcome", "their former client's liberation.", "Retaliation is expected", "in the near future.", "", "A BIG THANK YOU for ", "playing this game!", "It represents the culmination", "of months of work and years", "of game development experience.", "Any support will go into ", "developing more true arcade ", 'style action games!"', "", "-- Chris P"], this._scrollDBTF = this.add.dynamicBitmapText(10, 10, r.FONTS.SPACE_RANGER_BI, this._textContent, 33), this._scrollDBTF.scrollY = -this.cam.displayHeight, this._gameResetBtn = this.add.image(0, 0, r.KEYS.MENUS_TEX_SS2, r.KEYS.UI.RESET_GAME_BTN).setOrigin(0, 1).setInteractive({
                useHandCursor: !0
            }).setOrigin(1, 1), this._gameResetBtn.on("pointerup", this._onGameResetClick, this), this.onResize(), this.enableResizeListener()
        }, l.prototype._onGameResetClick = function(t) {
            this.disableResizeListener(), this.cleanUp(), window.location.reload()
        }, l.prototype.onResize = function() {
            var t = this.cam.height / r.worldDims.height,
                e = Math.min(r.worldDims.width * t, window.innerWidth),
                i = window.innerHeight;
            this.cameras.resize(window.innerWidth, window.innerHeight);
            var s = this.cameras.main;
            s.setZoom(1);
            var a = e / r.worldDims.width * .9;
            this._greenBg.setScale(1);
            var o = Math.max(e / this._greenBg.displayWidth, this.cam.height / this._greenBg.displayHeight);
            this._greenBg.setScale(o), this._greenBg.x = Math.floor(.5 * (e - this._greenBg.displayWidth)), this._greenBg.y = Math.floor(.5 * (i - this._greenBg.displayHeight)), this._scrollDBTF.setScale(a, a), this._scrollDBTF.x = .02 * s.displayWidth, this._scrollDBTF.y = .02 * s.displayHeight, this._scrollDBTF.setSize(.96 * s.displayWidth / a, .89 * s.displayHeight / a);
            var n = this._scrollDBTF.getTextBounds();
            this._max_scroll_y = 1.28 * n.local.height - s.displayHeight / a, this._gameResetBtn.setScale(.6 * a), this._gameResetBtn.x = .99 * e, this._gameResetBtn.y = .99 * i;
            var h = document.getElementById("gameArea");
            h.style.width = e + "px";
            var l = Math.floor(.5 * (window.innerWidth - e));
            h.style.marginLeft = l + "px"
        }, l.prototype.update = function(t, e) {
            this._scrollDBTF.scrollY += .035 * e, this._scrollDBTF.scrollY > this._max_scroll_y && (this._scrollDBTF.scrollY = this._max_scroll_y)
        }, l.prototype.enableResizeListener = function() {
            r.setCurrentScene(this), this.scale.on("resize", this.onResize, this)
        }, l.prototype.disableResizeListener = function() {
            r.setCurrentScene(null), this.scale.off("resize", this.onResize, this)
        }, l.prototype.cleanUp = function() {}, l);

    function l() {
        var t = n.call(this, {
            key: r.KEYS.SCENE.END_GAME
        }) || this;
        return t._max_scroll_y = 0, t
    }
    e.EndGameScene = h
}]);