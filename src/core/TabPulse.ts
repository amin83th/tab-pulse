import { updateTitle, restoreTitle } from "./title";
import { updateFavicon, restoreFavicon } from "./favicon";

export interface TabPulseOptions {
    clearOnInteraction?: boolean;
}

export class TabPulse {
    private count = 0;
    private label = "";

    private interactionHandler?: () => void;

    notify(
        count: number,
        label: string,
        options: TabPulseOptions = {}
    ) {
        this.count = count;
        this.label = label;

        updateTitle(this.count, this.label);
        updateFavicon();

        if (options.clearOnInteraction) {
            this.listenForInteraction();
        }
    }

    clear() {
        this.count = 0;
        this.label = "";

        this.removeInteractionListener();

        restoreTitle();
        restoreFavicon();
    }

    private listenForInteraction() {
        this.removeInteractionListener();

        this.interactionHandler = () => {
            if (document.visibilityState === "visible") {
                this.clear();
            }
        };

        document.addEventListener("pointerdown", this.interactionHandler);
        document.addEventListener("keydown", this.interactionHandler);
    }

    private removeInteractionListener() {
        if (!this.interactionHandler) {
            return;
        }

        document.removeEventListener("pointerdown", this.interactionHandler);
        document.removeEventListener("keydown", this.interactionHandler);

        this.interactionHandler = undefined;
    }
}