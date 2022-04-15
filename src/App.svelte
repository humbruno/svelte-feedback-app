<script>
  import FeedbackList from "./components/FeedbackList.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackForm from "./components/FeedbackForm.svelte";
</script>

<main class="container">
  <FeedbackForm />
  <!-- If the prop name and prop argument/content have the same name, it can be passed as a single word/name inside curly braces, for example feedback={feedback} can be simply {feedback} -->
  <FeedbackStats />
  <FeedbackList />
</main>

<style>
</style>
