import { useState, useEffect } from "react";

export type ImageSrc = {
  src: string;
};

export const useImageLoading = (
  imageArray: ImageSrc[]
): [boolean, () => void] => {
  const [loading, setLoading] = useState<boolean>(true);

  const preloadImage = (url: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = url;
      image.onload = (): void => resolve();
      image.onerror = (e): void => reject(e);
    });
  };

  const loadImages = async (): Promise<void> => {
    try {
      await Promise.all(imageArray.map((image) => preloadImage(image.src)));
      setLoading(false);
    } catch (e) {
      console.error(e);
      // handle error
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return [loading, loadImages];
};
