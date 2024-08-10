import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

interface UploadImageOptions {
    file: any;
    folder: string;
    height?: number;
    quality?: string;
}

export const uploadImageToCloudinary = async ({ file, folder, height, quality }: UploadImageOptions): Promise<UploadApiResponse> => {
    const options: Record<string, any> = {
        folder,
        resource_type: 'auto',
    };

    if (height) {
        options.height = height;
    }

    if (quality) {
        options.quality = quality;
    }

    return await cloudinary.uploader.upload(file.tempFilePath, options);
};
