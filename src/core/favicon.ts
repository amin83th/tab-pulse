let originalFavicon: string | null = null;

export function updateFavicon() {
    const favicon = document.querySelector<HTMLLinkElement>(
        'link[rel="icon"]'
    );

    if (!favicon) {
        return;
    }

    if (!originalFavicon) {
        originalFavicon = favicon.href;
    }

    const image = new Image();

    image.onload = () => {
        const canvas = document.createElement("canvas");

        canvas.width = 64;
        canvas.height = 64;

        const context = canvas.getContext("2d");

        if (!context) {
            return;
        }

        // favicon اصلی
        context.drawImage(image, 0, 0, 64, 64);

        // دایره قرمز
        context.fillStyle = "red";
        context.beginPath();
        context.arc(50, 14, 14, 0, Math.PI * 2);
        context.fill();

        favicon.href = canvas.toDataURL("image/png");
    };

    image.src = originalFavicon;
}

export function restoreFavicon() {
    const favicon = document.querySelector<HTMLLinkElement>(
        'link[rel="icon"]'
    );

    if (!favicon || !originalFavicon) {
        return;
    }

    favicon.href = originalFavicon;

    originalFavicon = null;
}