import React from "react";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://imgs.search.brave.com/2nimKGDy9Y66TyOi2hc9we1e7HL8kA9KUnzR8-dPmdg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb2Rpbmctd2Vi/LW1hbi1oYW5kcy1j/b2RpbmctaHRtbC1k/ZXZlbG9wZXItc29m/dHdhcmUtcHJvZ3Jh/bW1pbmctc2NyZWVu/LWxhcHRvcC1jb21w/dXRlci10eXBpbmct/ZGF0YS1jb2RlLXdl/YnNpdGUtcHJvZ3Jh/bW1pbmctd2l0aC1o/dG1sLXRlY2hub2xv/Z3lfMzYzMjUtNTAy/OC5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQw"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

