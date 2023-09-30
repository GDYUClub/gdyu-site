<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import GalleryCard from '$lib/galleryCard.svelte';
	import { element } from 'svelte/internal';
	import { onMount } from 'svelte';

	export let clubProjects = [
		{
			id: 'mts',
			name: 'Mail Toss Scallywag',
			author: 'Jayden "Yoush" Brooks',
			link: 'https://yoush.itch.io/mts',
			coverImg: ''
		},
		{
			id: 'xmode',
			name: 'X-Mode',
			author: 'xzippyzachx',
			link: 'https://store.steampowered.com/app/2265640/XMODE/',
			coverImg: ''
		},
		{
			id: 'baw',
			name: 'Baba is WAR',
			author: 'Jayden "Yoush" Brooks',
			link: 'https://yoush.itch.io/yudum1',
			coverImg: ''
		},
		{
			id: 'pdp',
			name: 'pdp-rpg (wip)',
			author: 'Jayden "Yoush" Brooks',
			link: 'https://yoush.itch.io/pdp-rpg',
			coverImg: ''
		},
		{
			id: 'n1',
			name: 'Small FPS game',
			author: 'Nad Labs',
			link: 'https://nad-labs.itch.io/a-small-fps-game',
			coverImg: ''
		},
		{
			id: 'n2',
			name: 'Escape the Lab',
			author: 'Nad Labs',
			link: 'https://nad-labs.itch.io/escape-the-lab',
			coverImg: ''
		},
		{
			id: 'n3',
			name: 'Adventures of IceDude in Absolute Zero',
			author: 'Nad Labs',
			link: 'https://nad-labs.itch.io/escape-the-lab',
			coverImg: ''
		}
	];
	let videoElement: HTMLVideoElement;
	let vidOrder: GalleryItem[] = [];
	let vidSrc = '';
	/*
	function playNewVid() {
		console.log(vidOrder);
		if (vidOrder.length == 0) {
			vidOrder = [];

			clubProjects.forEach((element) => vidOrder.push(element));
			console.log(vidOrder);

			for (var i = vidOrder.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = vidOrder[i];
				vidOrder[i] = vidOrder[j];
				vidOrder[j] = temp;
			}
		}

		vidSrc = 'assets/projects/demos/{id}.mp4'.replace('{id}', vidOrder.pop().id);
		console.log(vidSrc);
		console.log(videoElement);
		playCurrentVideo();
	}
	playNewVid();

	onMount(() => {
		playCurrentVideo();
	});

	function playCurrentVideo() {
		if (videoElement) {
			videoElement.src = vidSrc;
			videoElement.play().catch((error) => {
				console.error('Error playing the video:', error);
			});
		}
	}
	*/
	function restartVid() {
		//videoElement.src = 'assets/projects/demos/xmode.mp4';
		videoElement.currentTime = 0;
		videoElement.play();
	}
</script>

<div class="container mx-auto flex flex-col justify-center items-center">
	<!--<div class="space-y-5"> -->
	<div
		class="flex justify-center items-center bg-[#19032b] w-screen min-h-none max-h-xl static insert-0 -z-10 shadow-2xl"
	>
		<div class="flex justify-center">
			<!--
			-->
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
				bind:this={videoElement}
				class="w-full min-w-[20px] max-w-xl z-1 relative"
				on:ended={restartVid}
			/>
		</div>
	</div>
	<h1 class="h1 text-center pt-20">The Game Development Community</h1>
	<h1 class="h1 text-center pb-10">at York University.</h1>

	<div class="w-4/5 max-w-3xl gallery">
		<Accordion>
			<AccordionItem open>
				<svelte:fragment slot="lead"><img src="assets/shib.png" alt="" /></svelte:fragment>
				<svelte:fragment slot="summary">GDYU Lore:</svelte:fragment>
				<svelte:fragment slot="content">
					<ul class="list">
						<li>
							GDYU or "Game Devs @ YorkU" Was founded in november 2021 by (me), Jayden Brooks,
							during my first year at York University. York still hadn't returned to campus for the
							fall '21 semester, and I was looking for opportunities to make friends. I looked for a
							game development club as it was a major hobby of mine in high school and I love
							talking about video games, but quickly realized one didn't exist!
						</li>
						<li>
							so I decided to take the initiative and make the club myself. All clubs were created
							by students at some point right? Despite knowing nothing about the york club
							application/management process, I made a discord server calling us an "unofficial
							club", and advertised it in existing clubs.
						</li>
						<li>
							Shockingly, people showed up! Enough for us to apply to be a real club, and in January
							of 2022, our application was approved! GDYU was real!
						</li>
					</ul>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><img src="assets/beeg.png" alt="" /></svelte:fragment>
				<svelte:fragment slot="summary">What we're up to:</svelte:fragment>
				<svelte:fragment slot="content">
					<ul class="list">
						<li>
							Today, we're doing much better than I could have ever imagined. Not only do we have a
							large online community, but we also have an in-person presence in the Lassonde
							community at york (we got a hecking office!). We host in-person and online community
							events and workshops, a Video game book club, our Tri-Annual Game Jam: Yudum-Dare, and
							an upcoming line of merchandise (the primary motivation to make this site 😳).
						</li>
						<li>
							our most recent and most ambitious endevour has definetly been collaborating with game
							development clubs from other ontario universities and try to hold some massive
							collaborative events (The Game-dev-club Multiverse as we call it, because unsurprisingly we are ALL
							nerds.).
						</li>
					</ul>
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem>
				<svelte:fragment slot="lead"><img src="assets/fax.png" alt="" /></svelte:fragment>
				<svelte:fragment slot="summary">How to get involved:</svelte:fragment>
				<svelte:fragment slot="content">
					<ul class="list">
						<li>
							The easiest way to get involved with GDYU is to join the club! (The link to our
							campuslabs page is at the bottom of the site)
						</li>
						<li>
							If you're looking to help run the club, then we're recruiting a whole lot more
							executive members for the fall 23 year, and you should definitely apply to a role you
							think you'd be good at (we have a lot of positions, and we'll talk about it in more
							detail when the time is closer)
						</li>
					</ul>
				</svelte:fragment>
			</AccordionItem>
			<!-- ... -->
		</Accordion>
	</div>
	<h1 class="h1 text-center pt-20">Some projects made by our club members:</h1>
	<div class="max-w-3xl gallery">
		<section class="mt-20 grid grid-cols-2 md:grid-cols-3 gap-1">
			{#each clubProjects as project}
				<GalleryCard galleryItem={project} />
			{/each}

			<a href="/projects" class="h3 hover:h1 font-bold variant-filled hover:cursor-pointer relative group flex text-center items-center justify-center rounded-lg hover:brightness-75 transition-all duration-500">
				More Projects
			</a>
		</section>
	</div>
	<section>
		<div class="mb-20 flex-row justify-center items-center">
			<a href="https://yorku.campuslabs.ca/engage/organization/gdyuclub" target="_blank" class="btn variant-filled mt-20"
				>Join the Community!</a
			>
			<a href="/store" target="_blank" class="btn variant-filled mt-20">Merch (coming soon)</a>
			<a
				href="mailto:gdyuclub@gmail.com,jaydenpb@my.yorku.ca"
				target="_blank"
				class="btn variant-filled mt-20">Contact us</a
			>
		</div>
	</section>
</div>
<footer>
	<div class="flex justify-center items-center h-10 bg-[#19032b] w-screen shadow-">
		Made with 🕹️ from the GDYU Team
	</div>
</footer>
