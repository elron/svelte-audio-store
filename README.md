# svelte-audio-store

A Svelte store for managing and playing audio, available as @elron/svelte-audio-store on npm.

`svelte-audio-store` provides a seamless way to manage audio in your Svelte projects. Whether it's for a game, a web application, or any project needing sound, `svelte-audio-store` offers an intuitive API to preload, play, stop, and manipulate audio.

[LIVE DEMO](https://svelte-audio-store.netlify.app/)

## Installation

```bash
# pnpm
pnpm install @elron/svelte-audio-store@latest

# npm
npm install @elron/svelte-audio-store@latest

# Yarn
yarn install @elron/svelte-audio-store@latest
```

## Getting Started

### 1. Create an Audio Store

Define a set of sounds for your application by associating keys to sound paths. You can give any unique key name to each sound to make it easy to remember and use.

For example, if you're creating:

```svelte
import { createAudioStore } from './AudioStore';

const sounds = {
  click: '/sounds/click.mp3',
  notification: '/sounds/notification.wav',
  alert: '/sounds/alert.mp3',
  // ... other sounds ...
};

export const gameSounds = createAudioStore(sounds);
```

By using descriptive key names, it becomes intuitive to play specific sounds in your application.

You're also free to name your store based on its function or theme. Some naming ideas:

- `uiSounds` for user-interface specific audio.
- `gameSounds` if you're creating a game and have many sounds.
- `bgMusicStore` for background music tracks.
- `effectSounds` for short-lived sound effects.

### 2. Preloading Sounds
It's a good practice to preload your sounds, especially if they are crucial to the user experience. This ensures sounds are loaded into memory for faster playback. Use the `preload` method when your component mounts.

```svelte
<script>
  import { onMount } from 'svelte';
  import { gameSounds } from './gameStore';

  onMount(() => {
    gameSounds.preload();
  });
</script>
This code usually goes into `+layout.svelte`, but feel free to use it however makes sense in your project.
```

## Usage

### Play a Sound

```svelte
<script>
  import { gameSounds } from './gameStore';

  function playGoSound() {
    gameSounds.play('go');
  }
</script>

<button on:click={playGoSound}>Play Go Sound</button>
```

### Stop a sound
```svelte
<script>
  function stopGoSound() {
    gameSounds.stop('go');
  }
</script>
<button on:click={stopGoSound}>Stop Go Sound</button>
```

### Adjust Volume (for all sounds)
```svelte
<script>
  function setVolumeToHalf() {
    gameSounds.setVolume(0.5);
  }
</script>

<button on:click={setVolumeToHalf}>Set Volume to 50%</button>

## Advanced Options
`AudioStore` offers advanced playback settings like adjusting pitch, volume, loops, fades, and trimming. For a complete list of options, check the `PlayOptions` interface in the `AudioStore.ts` module.

The `play` and `stop` methods support various advanced options:


| Option	| Description	| Default Value | 
|---|---|---|
| volume	| Adjusts the playback volume of the sound. Values should be between 0.0 (muted) and 1.0 (full volume).	| `None` | 
| loop	| Determines if the sound should loop indefinitely.	| `false` | 
| fade	| Duration (in milliseconds) for a fade-in (when playing) or fade-out (when stopping).	| `None` | 
| pitch	| Adjusts the playback speed and pitch of the sound. A value of 1.0 is the normal rate.	| `1.0` | 
| preservesPitch	| If set to true, changing the pitch with playbackRate won't affect the sound's pitch. Browser support varies.	| `false` | 
| trim	| An object specifying when to start (start) and stop (stop) the playback, in seconds.	| `None` | 

## Contributing
Want to contribute?

1. Fork the repo.
2. Make your changes.
3. Submit a pull request.

## License
MIT License: Open and free to use, modify, and distribute. See LICENSE file for full details.