const LoadingSkeleton = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:gap-x-16 space-x-4 items-center animate-pulse">
            <div className="rounded-full bg-slate-200 h-52 w-52"></div>
            <div className="flex-1 py-1 mt-2 lg:mt-0">
                <div className="flex flex-col items-center">
                    <div className="h-3 bg-slate-200 rounded w-[190px]"></div>
                    <div className="mt-5 lg:mb-7 mb-4 h-2 bg-slate-200 rounded w-[250px]">
                    </div>
                    <div className="flex items-baseline gap-x-8">
                        <div className="flex flex-col items-center gap-y-2">
                            <div className="bg-slate-200 rounded-full h-12 w-12"></div>
                            <div className="bg-slate-200 rounded h-2 w-6"></div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                            <div className="bg-slate-200 rounded-full h-14 w-14"></div>
                            <div className="bg-slate-200 rounded h-2 w-7"></div>
                        </div>
                        <div className="flex flex-col items-center gap-y-2">
                            <div className="bg-slate-200 rounded-full h-16 w-16"></div>
                            <div className="bg-slate-200 rounded h-2 w-8"></div>
                        </div>
                    </div>
                    <div className="mt-7 flex items-center gap-x-9 h-2 bg-slate-200 rounded w-[250px]"></div>
                    <div className="mt-5 mb-3 h-2 bg-slate-200 rounded w-[150px]"></div>
                    <div className="flex flex-wrap gap-2 lg:justify-start justify-center h-16 bg-slate-200 rounded w-[300px]"></div>
                </div>
                <div className="flex flex-col lg:flex-row justify-between items-center mt-7 lg:mt-5 gap-y-3">
                    <div className="bg-slate-200 rounded h-3 w-[150px]"></div>
                    <div className="bg-slate-200 rounded h-3 w-[150px]"></div>
                </div>
            </div>

        </div>
    )
}
export default LoadingSkeleton;