import PocketBase from 'pocketbase';

import { writable } from 'svelte/store';

export const pb = new PocketBase("https://pocketbase-zo04ssgo4swkw0o44wc0so40.thegoodestdrawers.club");

export const currentUser = writable(pb.authStore.model)

pb.authStore.onChange((auth) =>{
    console.log('authstore changed',auth);
    currentUser.set(pb.authStore.model);
})
