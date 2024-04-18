import { UserButton, useSession } from "@clerk/clerk-react";
export const Navbar = () => {

    const { session, isLoaded } = useSession();

    return (
        <nav className="bg-emerald-600 blur-lg z-[1000] p-4 sticky top-0 mt-0 flex flex-row items-center justify-between">
            <div className="max-w-7xl flex justify-start gap-3 items-center">
                <img className="size-10" src="./ss.png" alt="logo" />
                <div className="text-black font-bold hover:italic text-3xl font-space">Quill</div>
            </div>
            <div className='flex justify-end gap-4 items-center'>
                <a href="/explain" >
                    <button className="bg-green-500  rounded-lg pt-3 pb-3 pr-8 pl-8">
                        Code Explain
                    </button>
                </a>
                <a href="/review" >
                    <button className="bg-green-500  rounded-lg pt-3 pb-3 pr-8 pl-8">
                        Code Review
                    </button>
                </a>
                <a href="https://github.com/Shemantipal/quill" target="_blank">
                    <button className="px-8 py-2 rounded-full relative bg-slate-950 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">
                            Github
                        </span>
                    </button>
                </a>
                {isLoaded && session?.user && (
                    <div className="flex justify-end items-center gap-4 font-space">
                        <span className="text-white">Hello {session.user.fullName}!</span>
                        <UserButton afterSignOutUrl='/signin' />
                    </div>
                )}
            </div>
        </nav>
    );
};