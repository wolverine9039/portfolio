import CountUp from "react-countup";
import { counterItems } from "../constants";

const AnimatedCounter = () => {

    return (
        <div id="counter" className="px-4 md:px-20 xl:mt-0 mt-20 md:mt-32">
            <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-7">
                {counterItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 rounded-lg p-4 md:p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number text-white-50 text-3xl md:text-5xl font-bold mb-1 md:mb-2">
                            <CountUp suffix={item.suffix} end={item.value} />
                        </div>
                        <div className="text-white-50 text-xs md:text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;