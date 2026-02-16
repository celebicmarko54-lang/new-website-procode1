export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#1A1A1A] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-600 border-t-gray-900 dark:border-t-white rounded-full animate-spin" />
      </div>
    </div>
  );
}
