import { type } from "os"

export type storeType = {
    "id": number,
    "domainName":string,
    "parentUserName":string,
    "parentName":string,
    "userName":string,
    "title":string,
    "name": string,
    "imgUrl": string,
    "websiteUrl": string,
    "address": string,
    "neighbourhood": string,
    "menus":string[],
    "customerLogin":boolean
  }
export type webType={
  "name":string,
  "menus":string[],
  "customerLogin":boolean,
  "address": string
}
export type pageType={
  title?:string,
  description?:string,
  useTitleAsH1?:boolean,
  useHeader?:boolean
}
  