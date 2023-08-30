<script>
	import { gameSounds } from '../gameSounds.js';
</script>

<button
	on:click={() => {
		gameSounds.play('levelDown');
	}}
>
	Play
</button>
