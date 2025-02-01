import { proxy } from "valtio";

export const editor = proxy({
    uuid: 0,
    showCode: false,
    reload: 0,
});
