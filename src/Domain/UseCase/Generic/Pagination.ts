export interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  lastPage: number;
  setLastPage: (page: number) => void;
  perPage: number;
  setPerPage: (page: number) => void;
  dataLengthThisPage: number;
  setDataLengthThisPage: (page: number) => void;
}
