const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[50vh] w-full">
      {/* DaisyUI Spinner */}
      <span className="loading loading-spinner text-purple-600 w-16 h-16"></span>
      <p className="mt-4 text-purple-700 font-semibold animate-pulse">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;