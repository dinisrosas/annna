import { writable, derived } from 'svelte/store';

export const counter = writable(0);

export const newcounte = derived(counter, (counter) => counter * 10)


