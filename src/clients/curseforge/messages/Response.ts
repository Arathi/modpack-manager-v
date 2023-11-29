export default interface PaginationResponse<D> {
  data?: D[];
  pagination: Pagination;
}

interface Pagination {
  index: number;
  pageSize: number;
  totalCount: number;
}
