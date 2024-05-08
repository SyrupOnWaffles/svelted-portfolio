<script lang="js">
  import Comments from "./lib/Comments.svelte";
  import {currentUser,pb} from "./lib/pocketbase";
  import Login from "./lib/Login.svelte";

</script>

<main>
  <h1><u>syruponwaffles' portfolio</u></h1>
  <h2><u>about me</u></h2>
  <div><p>hello my name is nicholas korzeniowski and im a programmer from alberta canada.</p></div>
  <div><p>i am familiar in many languages, primarily c, python and javascript and have used game making tools such as godot, unity, pygame, raylib and gamemaker </p></div>

  <h2><u>projects</u></h2>
  <div><p>i have recently taken a strong interest in network programming, developing <a href="https://github.com/SyrupOnWaffles/raycaster">a simple game server</a> which syncs player positions across multiple clients, and <a href="https://github.com/SyrupOnWaffles/c-http-server">a web server written in pure c</a> </p></div>
  <img src="/src/assets/gameserver.png" alt="gameserver"><br>
  <small>game server</small>

  <div><p>an extension of this is a realtime chat app i made akin to discord called <a href="https://syrup.is-very.fun">bannock chat</a> built with vanilla js and flask python. to increase security, i ran this server through an nginx reverse proxy to deal with encryption, rate limiting etc. i plan to do a lot more web applications in the future as well.</p></div>
  <img src="/src/assets/bannockchat.png" alt="bannockchat"><br>
  <small>bannock chat</small>

  <div><p>in the past i have heavily delved into the world of software 3d renderering creating a model viewer in <a href="https://github.com/SyrupOnWaffles/Pygame-3D-Engine-WIP-">pygame</a> and in <a href="https://github.com/SyrupOnWaffles/terminalmodelviewer">the unix terminal</a> (this code is very bad and does not represent my current c knowledge). recently i have also delved in the world of psuedo 3d with a <a href="https://github.com/SyrupOnWaffles/raycaster">raycasting engine</a></p></div>
  <img src="/src/assets/softwarerendering.png" alt="softwarerendering"><br>
  <small>software renderer</small>

  <h2><u>achievements</u></h2>
  <div><a href="https://itch.io/jam/joystick-input-jam">winner of the analog joystick input jam #1</a></div>
  <img src="/src/assets/biking.png" alt="biking"><br>
  <small>controller game</small>

  <div><p>i know there were 3 submissions but thats gotta count for something right?</p></div>
  <h2><u>links</u></h2>
  <div><p><a href="https://github.com/SyrupOnWaffles/">github</a> <br><a href="https://syruponwaffles.itch.io/">itch.io</a> <br><a href="mailto:syruponwaffles@420blaze.it">email</a> </p></div>
  <div><h3><i>thanks for reading</i></h3></div>
  <hr>
<!-- <div><img src="https://i.kym-cdn.com/entries/icons/original/000/018/929/graphic_design_is_my_passion.png"></div> -->
</main>

<h1>comments</h1>
<Login />
<br>
<hr class="half">
<br>
<Comments />