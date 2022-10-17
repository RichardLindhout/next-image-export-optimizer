/// <reference types="react" />
import { ImageProps, StaticImageData } from "next/future/image";
export interface ExportedImageProps extends Omit<ImageProps, "src" | "loader"> {
    src: string | StaticImageData;
    useWebp?: boolean;
}
declare function ExportedImage({ src, priority, loading, className, quality, width, height, useWebp, onLoadingComplete, unoptimized, placeholder, blurDataURL, onError, ...rest }: ExportedImageProps): JSX.Element;
export default ExportedImage;
