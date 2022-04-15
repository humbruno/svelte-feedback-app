<script>
  import FeedbackList from "./components/FeedbackList.svelte";

  let feedback = [
    {
      id: 1,
      rating: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 2,
      rating: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 3,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ];
</script>

<main>
  <FeedbackList {feedback} />
  <!-- If the prop name and prop argument/content have the same name, it can be passed as a single word/name inside curly braces, for example feedback={feedback} can be simply {feedback} -->
</main>

<style>
</style>
