export default function UnauthorizedPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
            <div className="bg-white shadow-lg rounded-2xl p-10 max-w-md">

                <div className="text-red-500 text-7xl mb-4">
                    ⛔
                </div>

                <h1 className="text-3xl font-bold mb-3">
                    Access Denied
                </h1>

                <p className="text-gray-600 mb-6">
                    You don’t have permission to view this page.
                    <br />
                    Please contact the administrator if you believe this is a mistake.
                </p>

                <a
                    href="/"
                    className="inline-block bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-lg text-lg transition-all"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}
