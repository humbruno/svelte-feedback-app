<script>
  import { FeedbackStore } from "../stores";
  import { fade, scale } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
</script>

{#each $FeedbackStore as fb (fb.id)}
  <div in:scale out:fade={{ duration: 250 }}>
    <!-- the (fb.id) is the key for each item that is being looped, so they can be uniquely identified -->
    <FeedbackItem item={fb} />
    <!-- the on:delete-feedback when left blank, will forward this dispatcher to the parent app, which is where the data is coming from and needs to be handled -->
  </div>
{/each}
