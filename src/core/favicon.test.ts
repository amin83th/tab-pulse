import { beforeEach, describe, expect, it, vi } from "vitest";
import { restoreFavicon, updateFavicon } from "./favicon";

describe("favicon", () => {

    beforeEach(() => {
        document.head.innerHTML = `
            <link rel="icon" href="original-favicon.png">
        `;

        // Mock Image
        vi.stubGlobal(
            "Image",
            class {
                onload: (() => void) | null = null;

                set src(_value: string) {
                    this.onload?.();
                }
            }
        );

        // Mock canvas
        const contextMock = {
            drawImage: vi.fn(),
            fillStyle: "",
            beginPath: vi.fn(),
            arc: vi.fn(),
            fill: vi.fn(),
        };

        vi.spyOn(HTMLCanvasElement.prototype, "getContext")
            .mockReturnValue(contextMock as unknown as CanvasRenderingContext2D);

        vi.spyOn(HTMLCanvasElement.prototype, "toDataURL")
            .mockReturnValue("data:image/png;base64,mocked-favicon");
    });

    it("should do nothing when favicon does not exist", () => {
        document.head.innerHTML = "";

        expect(() => updateFavicon()).not.toThrow();
    });

    it("should update favicon", () => {
        const favicon = document.querySelector<HTMLLinkElement>(
            'link[rel="icon"]'
        );

        const originalHref = favicon!.href;

        updateFavicon();

        expect(favicon!.href).toBe(
            "data:image/png;base64,mocked-favicon"
        );

        expect(favicon!.href).not.toBe(originalHref);
    });

    it("should restore original favicon", () => {
        const favicon = document.querySelector<HTMLLinkElement>(
            'link[rel="icon"]'
        );

        const originalHref = favicon!.href;

        updateFavicon();
        restoreFavicon();

        expect(favicon!.href).toBe(originalHref);
    });

    it("should do nothing when restoring without favicon", () => {
        document.head.innerHTML = "";

        expect(() => restoreFavicon()).not.toThrow();
    });

    it("should do nothing when original favicon does not exist", () => {
        const favicon = document.querySelector<HTMLLinkElement>(
            'link[rel="icon"]'
        );

        expect(() => restoreFavicon()).not.toThrow();
    });
});