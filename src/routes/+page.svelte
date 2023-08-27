<script>
	import { onMount } from 'svelte';
	import { gameSounds, sounds } from './gameSounds';

	onMount(() => {
		gameSounds.preload();
	});
</script>

<table>
	<thead>
		<tr>
			<th>Sound Keys</th>
			<th>Play</th>
			<th>Stop</th>
		</tr>
	</thead>
	{#each Object.keys(sounds) as sound}
		<tr>
			<td>{sound}</td>
			<td on:click={() => gameSounds.play(sound)}>Play</td>
			<td on:click={() => gameSounds.stop(sound)}>Stop</td>
		</tr>
	{/each}
</table>
