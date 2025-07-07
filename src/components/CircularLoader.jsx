import CircularProgress from "@mui/joy/CircularProgress";

export const CircularLoader = () => {
  return (
    <div className="h-full flex justify-center items-center">
      <CircularProgress color="success" size="lg" />
    </div>
  );
};
