<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  export let feedback = [];
  /* this line catches the prop passed in by the parent component, the empty array set here is used as a fallback in case the prop fails to be passed in */
</script>

{#each feedback as fb (fb.id)}
  <!-- the (fb.id) is the key for each item that is being looped, so they can be uniquely identified -->
  <FeedbackItem item={fb} on:delete-feedback />
  <!-- the on:delete-feedback when left blank, will forward this dispatcher to the parent app, which is where the data is coming from and needs to be handled -->
{/each}
