export default function NotFoundPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6">
            <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg">

                <div className="text-blue-600 text-7xl font-bold mb-4">
                    404
                </div>

                <h2 className="text-3xl font-semibold mb-3">
                    Page Not Found
                </h2>

                <p className="text-gray-600 mb-6">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>

                <a
                    href="/"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg transition-all"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
}
