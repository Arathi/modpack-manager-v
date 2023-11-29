export default interface Mod {
  id: number;
  author: Author;
  avatarUrl: string;
  categories: Category[];
  class: Category;
  creationDate: number; // UNIX时间戳
  // downloads: number; 不重要
  // gameVersion: string; 不重要
  name: string;
  slug: string;
  summary: string;
  updateDate: number; // UNIX时间戳
  // releaseDate: string; 不显示
  // fileSize: number; 不重要
  // isClientCompatible: boolean;
  // latestFileDetails: any;
  // hasEarlyAccessFiles
  // hasLocalization
  // status: number;
  // websiteRecentFiles
}

interface Author {
  id: number;
  name: string; // 用来显示
  username: string; // 用来拼接作者页面URL
  // isEarlyAccessAuthor: boolean;
}

interface Category {
  id: number;
  dateModified: string;
  gameId: number;
  iconUrl: string;
  name: string;
  slug: string;
  url: string;
  classId: number|null;
  displayIndex?: number; // class中才有
  isClass: boolean;
  parentCategoryId: number|null;
}
