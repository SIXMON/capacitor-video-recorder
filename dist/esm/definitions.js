export const VideoRecorderErrors = {
    CAMERA_RESTRICTED: 'Camera access restricted',
    CAMERA_DENIED: 'Camera access denied',
    MICROPHONE_RESTRICTED: 'Microphone access restricted',
    MICROPHONE_DENIED: 'Microphone access denied'
};
export var VideoRecorderCamera;
(function (VideoRecorderCamera) {
    VideoRecorderCamera[VideoRecorderCamera["FRONT"] = 0] = "FRONT";
    VideoRecorderCamera[VideoRecorderCamera["BACK"] = 1] = "BACK";
})(VideoRecorderCamera || (VideoRecorderCamera = {}));
export var VideoRecorderQuality;
(function (VideoRecorderQuality) {
    VideoRecorderQuality[VideoRecorderQuality["MAX_480P"] = 0] = "MAX_480P";
    VideoRecorderQuality[VideoRecorderQuality["MAX_720P"] = 1] = "MAX_720P";
    VideoRecorderQuality[VideoRecorderQuality["MAX_1080P"] = 2] = "MAX_1080P";
    VideoRecorderQuality[VideoRecorderQuality["MAX_2160P"] = 3] = "MAX_2160P";
    VideoRecorderQuality[VideoRecorderQuality["HIGHEST"] = 4] = "HIGHEST";
    VideoRecorderQuality[VideoRecorderQuality["LOWEST"] = 5] = "LOWEST";
    VideoRecorderQuality[VideoRecorderQuality["QVGA"] = 6] = "QVGA";
})(VideoRecorderQuality || (VideoRecorderQuality = {}));
//# sourceMappingURL=definitions.js.map