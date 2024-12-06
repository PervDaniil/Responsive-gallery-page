export function getRandomImages() {
    const images = [];

    for (let i = 0; i < 16; i++) {
        const width = Math.floor(Math.random() * (1920 - 320) + 320);
        const height = Math.floor(Math.random() * (1920 - 320) + 320);
        images.push(`https://picsum.photos/${width}/${height}`);
    }

    return images
}