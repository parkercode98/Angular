
export interface Bookmark {
  guid:         string;
  title:        string;
  index:        number;
  dateAdded:    number;
  lastModified: number;
  id:           number;
  typeCode:     number;
  type:         Type;
  root:         string;
  children:     BookmarkChild[];
  isFolder():   boolean;
}

export interface BookmarkChild {
  guid:         string;
  title:        string;
  index:        number;
  dateAdded:    number;
  lastModified: number;
  id:           number;
  typeCode:     number;
  type:         Type;
  root:         string;
  children?:    PurpleChild[];
}

export interface PurpleChild {
  guid:         string;
  title:        string;
  index:        number;
  dateAdded:    number;
  lastModified: number;
  id:           number;
  typeCode:     number;
  type:         Type;
  children?:    FluffyChild[];
  iconUri?:     string;
  uri?:         string;
  tags?:        string;
}

export interface FluffyChild {
  guid:         string;
  title:        string;
  index:        number;
  dateAdded:    number;
  lastModified: number;
  id:           number;
  typeCode:     number;
  tags?:        string;
  type:         Type;
  uri?:         string;
  children?:    FluffyChild[];
  iconUri?:     string;
  keyword?:     string;
  postData?:    null;
}

export enum Type {
  TextXMozPlace = "text/x-moz-place",
  TextXMozPlaceContainer = "text/x-moz-place-container",
  TextXMozPlaceSeparator = "text/x-moz-place-separator",
}
