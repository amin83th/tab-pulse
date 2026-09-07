import { TabPulse } from "./core/TabPulse";

export const tabPulse = new TabPulse();


setTimeout(() => {
    tabPulse.clear();
}, 5500);
export { TabPulse };