let originalTitle = document.title;

export function updateTitle(count: number, label: string) {
    document.title = `${count} ${label}`;
}

export function restoreTitle() {
    document.title = originalTitle;
}