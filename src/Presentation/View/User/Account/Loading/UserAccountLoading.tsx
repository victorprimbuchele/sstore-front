import { Skeleton } from "@mui/material";

export const UserAccountLoading: React.FC = () => (
  <div className="mt-6 px-4 sm:px-6 lg:px-10 xl:px-16 2lx:px-24 h-full">
    <Skeleton
      className="mb-2"
      variant="rectangular"
      width="100%"
      height={140}
    />
  </div>
);
