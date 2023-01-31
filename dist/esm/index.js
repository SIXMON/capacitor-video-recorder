import { registerPlugin } from '@capacitor/core';
const VideoRecorder = registerPlugin('VideoRecorder', {
    web: () => import('./web').then(m => new m.VideoRecorderWeb()),
});
export * from './definitions';
export { VideoRecorder };
//# sourceMappingURL=index.js.map