import { useState } from "react";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="section-container py-16 flex justify-center">
            <div className="w-full max-w-md border border-[var(--border-light)] p-8 rounded-lg">

                <h2 className="text-2xl font-semibold text-[var(--heading)] mb-6 text-center">
                    {isLogin ? "Login to Cartify" : "Create Your Account"}
                </h2>

                <form className="space-y-4">

                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full border border-[var(--border-light)] px-4 py-2 rounded"
                        />
                    )}

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border border-[var(--border-light)] px-4 py-2 rounded"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-[var(--border-light)] px-4 py-2 rounded"
                    />

                    <button className="primary-btn w-full cursor-pointer">
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <p className="text-sm text-center mt-6 text-[var(--text-secondary)]">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="ml-1 text-[var(--primary)] hover:underline cursor-pointer"
                    >
                        {isLogin ? "Register" : "Login"}
                    </button>
                </p>

            </div>
        </div>
    );
};

export default AuthPage;