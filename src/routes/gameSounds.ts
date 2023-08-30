import { createAudioStore } from '$lib/AudioStore.js';

export const sounds = {
	aboutToEnd: '/sounds/148772__daphne_in_wonderland__piano_string_hit_short-5.wav',
	go: '/sounds/232003__danmitch3ll__xylophone-b.wav',
	threeTwoOne: '/sounds/459992__florianreichelt__beep-short.mp3',
	kill: '/sounds/390462__huminaatio__punch-in-the-face.flac',
	applause: '/sounds/333386__jayfrosting__applause-2.wav',
	bgmusic: '/sounds/513667__mrthenoronha__cartoon-game-theme-loop-4.wav',
	attempt: '/sounds/361122__cabled_mess__whoop.wav',
	question: '/sounds/274829__deleted_user_3424813__whoopsie-high-pitch.wav',
	levelDown: '/sounds/531511__eponn__menu-beep.wav',
	ouch: '/sounds/345875__littlerainyseasons__funny-cute-sounds-1.mp3',
	ohNo: '/sounds/88774__pierrecartoons1979__oh-no.wav'
};

export const gameSounds = createAudioStore(sounds);
