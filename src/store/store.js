import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        storeActive: "Sample test",
        footerChoices: [
            {title: "Title", choice: [
                {name: "name", link: "abc.xyz"}
            ] },
            
    }
})