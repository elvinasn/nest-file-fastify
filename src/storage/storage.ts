import { MultipartFile } from "@fastify/multipart";
import { FastifyRequest } from "fastify";

export interface StorageFile {
  size: number;
  fieldname: string;
  encoding: string;
  mimetype: string;
  originalFilename: string;
}

export interface Storage<T extends StorageFile = StorageFile, K = any> {
  handleFile: (file: MultipartFile, req: FastifyRequest) => Promise<T>;
  removeFile: (file: T, force?: boolean) => Promise<void> | void;
  options?: K;
}
