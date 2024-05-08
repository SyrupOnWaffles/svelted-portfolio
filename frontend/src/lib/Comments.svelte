<script lang="js">
    import {onMount, onDestroy} from 'svelte';
    import {currentUser, pb} from './pocketbase'
    import {dayjs} from "svelte-time";
    import Filter from 'bad-words';
    

    let comments = [];
    let newMessage;

    onMount(async () =>{    
        const resultList = await pb.collection('comments').getList(1,50, {
            sort:'-created',
            expand:'user',
        });
        comments = resultList.items;
        // pb 
        //     .collection('comments')
        //     .subscribe('*',async ({action,record})=>{
        //         if(action === "create"){
        //             const user = await pb.collection('users').getOne(record.user);
        //             record.expand = {user};
        //             comments = [...comments, record]
        //         }
        //     });
    });

    async function sendMessage(){
        const data = {
            text: newMessage,
            user: $currentUser.id,
        };
        const createdMessage = await pb.collection('comments').create(data);
        newMessage = null;
        document.location.reload()
    }
</script>


{#if $currentUser}
    <form on:submit|preventDefault={sendMessage}>
        <input maxlength="100" class="comment-input" placeholder="comment" type="text" bind:value={newMessage}/>
        <!-- <button type="submit">send</button> -->
    </form> 
{/if}
<div class="comments">
   {#each comments as comment (comment.id)}
        <div class="comment">
            <!-- <h5 class="from"></h5>
            <h5 class="time"></h5> -->
            <p class="comment-text">
                <b>{new Filter().clean(comment.expand?.user?.username)}</b><br>
                <small>{dayjs(comment.created).fromNow()}</small><br>
                {new Filter().clean(comment.text)}</p>
        </div>
   {/each} 
</div>  
