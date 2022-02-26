import { getInitials } from "./utils.mixin.js";

export default {
    methods: {
        nameInitialsFilter(firstName, lastName){
            return getInitials(firstName, lastName);
        }
    }
}