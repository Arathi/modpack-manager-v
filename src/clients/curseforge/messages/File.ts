export default interface File {
  id: number;
  dateCreated: string;
  dateModified: string;
  fileLength: number;
  fileName: string;
  status: number;
  gameVersions: string[];
  gameVersionTypeIds: number[];
  releaseType: number;
  totalDownloads: number;
  // user: any;
  additionalFilesCount: number;
  hasServerPack: boolean;
  additionalServerPackFilesCount: number;
  isEarlyAccessContent: boolean;
}