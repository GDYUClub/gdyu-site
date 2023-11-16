<script>
	let headerVid

	function restartVid() {
		headerVid.currentTime = 0
		headerVid.play()
	}

</script>
<div class="container mx-auto flex flex-col justify-center items-center">
	<!--<div class="space-y-5"> -->
	<div
		class="flex justify-center items-center bg-[#19032b] w-screen min-h-none max-h-xl static insert-0 -z-10 shadow-2xl"
	>
		<div class="flex justify-center">
			
			<img
				src="assets/logo-new.png"
				alt="club logo"
				class="  w-full min-w-[20px] max-w-xl z-10 absolute"
			/>
			<img
				src="assets/backdrop.png"
				alt="background gameplay"
				class="w-full min-w-[20px] max-w-xl z-0 absolute"
			/>
			<video
				src="assets/projects/demos/titledemo.mp4"
				autoplay="true"
				bind:this={headerVid}
				class="w-full min-w-[20px] max-w-xl z-1 relative"
				on:ended={restartVid}
			/>
		</div>
	</div>
	<div class="bg-[#19032b]" >
		<h1 class=" text-gray-50 text-4xl">Game Devs @ YorkU</h1>
		<h2 class ="text-gray-50 text-4xl" ></h2>
	</div>
	<div>

	</div>
</div>