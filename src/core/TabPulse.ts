import { updateTitle, restoreTitle } from "./title";
import { updateFavicon, restoreFavicon } from "./favicon";

export class TabPulse {
    private count = 0;
    private label = "";

    notify(count: number, label: string) {
        this.count = count;
        this.label = label;

        updateTitle(this.count, this.label);
        updateFavicon();
    }

    clear() {
        this.count = 0;
        this.label = "";

        restoreTitle();
        restoreFavicon();
    }
}