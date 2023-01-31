import { WebPlugin } from '@capacitor/core';
import { VideoRecorderPlugin, VideoRecorderOptions, VideoRecorderPreviewFrame } from './definitions';
declare class DropShadow {
    opacity?: number;
    radius?: number;
    color?: string;
    constructor(options?: DropShadow);
}
declare class FrameConfig {
    id: string;
    stackPosition?: 'front' | 'back';
    x?: number;
    y?: number;
    width?: number | 'fill';
    height?: number | 'fill';
    borderRadius?: number;
    dropShadow?: DropShadow;
    constructor(options?: FrameConfig);
}
export declare class VideoRecorderWeb extends WebPlugin implements VideoRecorderPlugin {
    videoElement: HTMLVideoElement;
    stream: MediaStream;
    previewFrameConfigs: FrameConfig[];
    currentFrameConfig: FrameConfig;
    constructor();
    private _initializeCameraView;
    private _updateCameraView;
    initialize(options?: VideoRecorderOptions): Promise<void>;
    destroy(): Promise<any>;
    flipCamera(): Promise<void>;
    addPreviewFrameConfig(config: VideoRecorderPreviewFrame): Promise<void>;
    editPreviewFrameConfig(config: VideoRecorderPreviewFrame): Promise<void>;
    switchToPreviewFrame(options: {
        id: string;
    }): Promise<void>;
    showPreviewFrame(): Promise<void>;
    hidePreviewFrame(): Promise<void>;
    startRecording(): Promise<void>;
    stopRecording(): Promise<{
        videoUrl: string;
    }>;
    getDuration(): Promise<{
        value: number;
    }>;
    addListener(): any;
}
export {};
