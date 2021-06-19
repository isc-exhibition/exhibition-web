export interface ImageFile extends File {
    preview: string;
    imageData: string | ArrayBuffer;
  }

export type NFTInfoToSave = {
    creator: string;
    file: string | ArrayBuffer;
    name: string;
    description: string;
  }
