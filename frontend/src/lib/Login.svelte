<script lang="js">
    import {currentUser,pb} from "./pocketbase";

    let username;
    let password;
    let errorMessage="";

    async function login(){
        try{
            await pb.collection('users').authWithPassword(username,password);
        }catch(err){
            if(err == "ClientResponseError 400: Failed to authenticate."){
                errorMessage =  "wrong username/password"
            }
        }
    }
    async function signUp(){
        try{
            const data = {
                username,
                password,
                passwordConfirm: password,
            }
            const createdUser = await pb.collection('users').create(data);
            await login()
        } catch(err){
            console.log(err)
            if(err == "ClientResponseError 400: Failed to create record."){
                errorMessage =  "invalid username/password. passwords must be at least 8 characters with no spaces"
            }
        }

    }
    function signOut(){
        pb.authStore.clear();
    }

</script>

<main>
    {#if $currentUser}
        <p>signed in as {$currentUser.username}</p>
        <!-- <button on:click={signOut}>Sign Out</button> -->
    {:else}
        <p>sign up to post a comment</p>
        <p>{errorMessage}</p>
        <form on:submit|preventDefault>
            <input 
            placeholder="Username"
            type="text"
            bind:value={username}
            />
            <br>
            <input 
            placeholder="Password"
            type="password"
            bind:value={password}
            />
            <br>
            <button on:click={signUp}>Sign Up</button>
            <button on:click={login}>Login</button>
        </form>

    {/if}
</main> 