"use client";

const Achieves: React.FC = () => {
    return (
        <section className="bg-black/58 w-full py-28">
            <div className="container-custom mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] border border-white p-4 text-center text-white h-[150px] flex flex-col justify-center">
                        <h3 className="text-4xl font-bold mb-4">2</h3>
                        <div className="w-25 h-[1px] bg-electblue mb-3 mx-auto"></div>
                        <p className="text-lg">Completed Projects</p>
                    </div>

                    <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] border border-white p-4 text-center text-white h-[150px] flex flex-col justify-center">
                        <h3 className="text-4xl font-bold mb-4">5</h3>
                        <div className="w-25 h-[1px] bg-electblue mb-3 mx-auto"></div>
                        <p className="text-lg">Happy Clients</p>
                    </div>

                    <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] border border-white p-4 text-center text-white h-[150px] flex flex-col justify-center">
                        <h3 className="text-4xl font-bold mb-4">5</h3>
                        <div className="w-25 h-[1px] bg-electblue mb-3 mx-auto"></div>
                        <p className="text-lg">Solution delivered</p>
                    </div>

                    <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] border border-white p-4 text-center text-white h-[150px] flex flex-col justify-center">
                        <h3 className="text-4xl font-bold mb-4">2</h3>
                        <div className="w-25 h-[1px] bg-electblue mb-3 mx-auto"></div>
                        <p className="text-lg">Awards won</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achieves;