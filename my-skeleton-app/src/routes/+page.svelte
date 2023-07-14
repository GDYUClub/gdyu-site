<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->
<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<div class="container mx-auto flex flex-col justify-center items-center">
	<!--<div class="space-y-5"> -->
	<div
		class="flex justify-center items-center bg-[#19032b] w-screen min-h-none max-h-xl static insert-0 -z-10"
	>
		<div class="flex justify-center">
			<!--
			-->
			<img
				src="assets/logo-small.png"
				alt="club logo"
				class="  w-full min-w-[20px] max-w-xl z-10 absolute"
			/>
			<img
				src="assets/rei-real.png"
				alt="background gameplay"
				class="w-full min-w-[20px] max-w-xl z-0 relative"
			/>
		</div>
	</div>
	<h1 class="h1 text-center pt-20">The Game Development Community</h1>
	<h1 class="h1 text-center pb-10">at York University.</h1>

	<Accordion>
		<AccordionItem open>
			<svelte:fragment slot="lead"><img src="assets/shib.png" alt="" /></svelte:fragment>
			<svelte:fragment slot="summary">GDYU Lore</svelte:fragment>
			<svelte:fragment slot="content"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.</svelte:fragment
			>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"><img src="assets/beeg.png" alt="" /></svelte:fragment>
			<svelte:fragment slot="summary">What are we up to</svelte:fragment>
			<svelte:fragment slot="content"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.</svelte:fragment
			>
		</AccordionItem>
		<AccordionItem>
			<svelte:fragment slot="lead"><img src="assets/fax.png" alt="" /></svelte:fragment>
			<svelte:fragment slot="summary">How to get involved</svelte:fragment>
			<svelte:fragment slot="content"
				>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.</svelte:fragment
			>
		</AccordionItem>
		<!-- ... -->
	</Accordion>

	<h1 class="h1 text-center pt-20">Our Projects:</h1>
	<div class="max-w-3xl gallery">
		<section class="mt-20 grid grid-cols-2 md:grid-cols-3 gap-1">
			<div>
				<img
					class="h-auto max-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=256&h=256&auto=format&fit=crop"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto max-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=256&h=256&auto=format&fit=crop"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto max-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=256&h=256&auto=format&fit=crop"
					alt=""
				/>
			</div>
			<div>
				<img
					class="h-auto max-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=256&h=256&auto=format&fit=crop"
					alt=""
				/>
			</div>

			<div>
				<img
					class="h-auto max-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=256&h=256&auto=format&fit=crop"
					alt=""
				/>
			</div>

			<div>
				<img
					class="h-auto max-w-full rounded-lg"
					src="https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3&w=256&h=256&auto=format&fit=crop"
					alt=""
				/>
			</div>
		</section>
	</div>
	<section>
		<div class="mb-20 flex-row justify-center items-center">
			<button class="mt-20 btn variant-filled">Check out our work</button>
			<button class="btn variant-filled">Browse our Merch Shop!</button>
			<button class="btn variant-filled">Get in Touch</button>
			<br />
			<br />
			<br />
		</div>
	</section>
</div>
