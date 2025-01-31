import { proxy } from "valtio";

export const editor = proxy({
    uuid: 0,
    isDrawerOpen: false,
    reload: 0,
});
