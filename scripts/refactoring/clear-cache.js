const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');

try {
    (async () => {
        try {
            const cacheDir = path.resolve(__dirname, '..', '..', 'node_modules', '.cache');
            await fsp.access(cacheDir);
            await fsp.rm(cacheDir, { recursive: true });
            console.log('cache was delete');
        } catch (e) {
            console.log("cache wasn't found");
        }
    })();
} catch {
    console.log("cache didn't clear");
}
