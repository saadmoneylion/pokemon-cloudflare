import { Link } from "@remix-run/react";
import { onRequestGet } from "functions/sample";
import translation from "../translations/en";

export async function loader() {
    return onRequestGet();
};

export default function SignupPage() {

    const onChange = () => {

    }

    return (
        <div className="flex flex-row w-screen h-screen items-center justify-center">
            <div className="flex-row w-full max-w-content h-full mt-6 place-content-center sm:h-4/6 sm:mt-0">
                <div className="mt-6">
                    <label
                        className="flex w-full justify-center text-2xl"
                        htmlFor="title">
                        Signup Now
                    </label>

                    <input
                        className="block h-14 w-8/12 px-4 text-base rounded-2xl justify-center place-items-center
               text-black bg-slate-200 appearance-none peer outline-0 m-auto mt-8"
                        id="firstname"
                        type="text"
                        placeholder="First name"
                    />

                    <input
                        className="block h-14 w-8/12 px-4 text-base rounded-2xl justify-center place-items-center
               text-black bg-slate-200 appearance-none peer outline-0 m-auto mt-8"
                        id="lastname"
                        type="text"
                        placeholder="Last name"
                    />

                    <input
                        className="block h-14 w-8/12 px-4 text-base rounded-2xl justify-center place-items-center
               text-black bg-slate-200 appearance-none peer outline-0 m-auto mt-8"
                        id="email"
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        className="block h-14 w-8/12 px-4 text-base rounded-2xl justify-center place-items-center
               text-black bg-slate-200 appearance-none peer outline-0 m-auto mt-8"
                        id="password"
                        type="password"
                        placeholder="Password"
                    />
                    <div className="flex flex-row w-8/12 justify-center place-items-center m-auto">
                        <label
                            className="flex justify-center text-sm mt-3 text-slate-400"
                            htmlFor="title">
                            {translation.login.have_an_account}
                        </label>

                        <Link
                            className="flex ml-1 justify-center text-sm mt-3 text-slate-400 cursor-pointer"
                            to={"/"}>
                            {translation.login.cta_login}
                        </Link>
                    </div>

                    <button
                        className="block h-14 w-8/12 text-center text-base rounded-full justify-center place-items-center
               text-blac bg-teal-400 appearance-none peer outline-0 m-auto mt-8"
                        id="submit"
                        onClick={onChange}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
