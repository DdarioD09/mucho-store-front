import { useState } from 'react'
import { assets } from '../../assets/assets';

export const LoginModal = ({ onCloseModal }) => {
    // const [currentState, setCurrentState] = useState('Sign Up');
    const [currentState, setCurrentState] = useState('Login');
    return (
        <div className="fixed z-20 w-dvw h-dvh bg-black/30 grid place-items-center">
            <form className="self-center w-[max(23vw,330px)] text-gray-700 bg-white flex flex-col gap-6 px-6 py-8 rounded-lg text-sm animate-fadeIn shadow-xl">
                {/* Title */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{currentState}</h2>
                    <button
                        type="button" onClick={onCloseModal}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
                    >
                        <img src={assets.cross_icon} alt={`Close ${currentState} modal`} className="w-4 h-4"
                        />
                    </button>
                </div>

                {/* Inputs */}
                <div className="flex flex-col gap-4">
                    {currentState === 'Sign Up' && (
                        <input
                            type="text" placeholder="Your name" required
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        />
                    )}
                    <input
                        type="email" placeholder="Your email" required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="
          w-full p-3
          border border-gray-300 rounded
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all
        "
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="
        w-full py-3 px-4
        bg-blue-600 hover:bg-blue-700
        text-white font-medium
        rounded
        transition-colors
        shadow-md hover:shadow-lg
      "
                >
                    {currentState === 'Sign Up' ? 'Create account' : 'Login'}
                </button>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-2">
                    <input
                        type="checkbox"
                        required
                        className="
          mt-1
          accent-blue-600
          w-4 h-4
          cursor-pointer
        "
                    />
                    <p className="text-xs text-gray-500">
                        By continuing, I agree to the terms of use & privacy policy.
                    </p>
                </div>

                {/* Toggle Auth State */}
                {currentState === 'Login' ? (
                    <p className="text-center text-sm text-gray-600">
                        Create new account?{' '}
                        <button
                            type="button"
                            onClick={() => setCurrentState('Sign Up')}
                            className="
            text-blue-600 hover:text-blue-800
            font-medium
            underline
            transition-colors
          "
                        >
                            Click here
                        </button>
                    </p>
                ) : (
                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={() => setCurrentState('Login')}
                            className="
            text-blue-600 hover:text-blue-800
            font-medium
            underline
            transition-colors
          "
                        >
                            Login here
                        </button>
                    </p>
                )}
            </form>
        </div>
        // <div className="absolute z-20 w-dvw h-dvh bg-black/30 grid">
        //     <form className="self-center w-[max(23vw,330px)] text-gray-200 bg-white flex flex-col gap-6 px-6 py-8 rounded-lg text-sm animate-fadeIn">
        //         <div className="login-modal-title">
        //             <h2>{currentState}</h2>
        //             <img src={assets.cross_icon} alt={`Close ${currentState} modal`} onClick={onCloseModal} />
        //         </div>
        //         <div className="login-modal-inputs">
        //             {currentState === 'Sign Up' && <input type="text" placeholder='Your name' required />}
        //             <input type="email" placeholder='Your email' required />
        //             <input type="password" placeholder='Password' required />
        //         </div>
        //         <button>{currentState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        //         <div className="login-modal-condition">
        //             <input type="checkbox" required />
        //             <p>By continuing, I agree to the terms of use & privacy policy.</p>
        //         </div>
        //         {currentState === 'Login'
        //             ? <p>Create new account? <span onClick={() => setCurrentState('Sign Up')}>Click here</span></p>
        //             : <p>Already have an account? <span onClick={() => setCurrentState('Login')}>Login here</span></p>
        //         }
        //     </form>
        // </div>
    )
}
