<script lang="js">
    import {onMount, onDestroy} from 'svelte';
    import {currentUser, pb} from './pocketbase'

    let comments = [];
    let newMessage;
    let currentDate = new Date().getTime();

    onMount(async () =>{    
        const resultList = await pb.collection('comments').getList(1,50, {
            sort:'-created',
            expand:'user',
        });
        comments = resultList.items;
        console.log(comments[5]);
        pb 
            .collection('comments')
            .subscribe('*',async ({action,record})=>{
                if(action === "create"){
                    const user = await pb.collection('users').getOne(record.user);
                    record.expand = {user};
                    comments = [...comments, record]
                }
            });
    });

    async function sendMessage(){
        const data = {
            text: newMessage,
            user: $currentUser.id,
        };
        const createdMessage = await pb.collection('comments').create(data);
    }
</script>

<form on:submit={sendMessage}>
    <input placeholder="comment" type="text" bind:value={newMessage}/>
    <button type="Submit">send</button>
</form> 

<div class="comments">
   {#each comments as comment (comment.id)}
        <div class="comment">
            <!-- <h5 class="from"></h5>
            <h5 class="time"></h5> -->
            <p class="comment-text">
                {comment.expand?.user?.username}<br>
                {Math.floor((currentDate - (new Date(comment.created).getTime())) / (1000 * 60 * 60 * 24))} days ago<br>
                {comment.text}</p>
        </div>
   {/each} 
</div>  
