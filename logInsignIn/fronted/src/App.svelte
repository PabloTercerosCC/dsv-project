<script>
  import "smelte/src/tailwind.css";
  import { Router, Route } from "svelte-navigator";
  import SignUp from "./views/auth/SignUp.svelte";
  import SignIn from "./views/auth/SignIn.svelte";
  import TODO from "./views/todolist/+page.svelte";

</script>

<Router primary={false}>
  <Route path="/">
    <SignUp />
  </Route>
  <Route path="/signup">
    <SignUp />
  </Route>
  <Route path="/signin">
    <SignIn />
  </Route>
  <Route path="/todolist">
    <TODO />
  </Route>
</Router>
