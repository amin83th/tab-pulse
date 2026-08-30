import { tabPulse } from "./index";


setTimeout(() => {
    tabPulse.notify(1, "messages");
    setTimeout(() => {
        tabPulse.notify(3, "messages");
    }, 1000);
    setTimeout(() => {
        tabPulse.clear();
    }, 4000);
}, 5000);

