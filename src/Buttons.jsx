import { FaDiscord } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";

function Buttons() {
    return (
        <>
        <div className="flex justify-center mt-[3%]">
          <a
            href="https://discord.com/oauth2/authorize?client_id=601205271578017813&permissions=8&scope=applications.commands%20bot"
            target="_blank"
          >
            <button className="fix bg-red-700 text-white font-bold py-4 px-6 rounded-md transform transition-all duration-300 hover:bg-red-900 hover:text-neutral-50 hover:scale-110 hover:cursor-pointer mr-6">
              <div className="flex">
                <FaDiscord size={20} className="mt-[3px]" />{" "}
                <span className="ml-2">Add to Discord</span>
              </div>
            </button>
          </a>
  
          <a href="https://discord.gg/pgvHy7YjYd" target="_blank">
            <button className="bg-red-700 text-white font-bold py-4 px-6 rounded-md transform transition-all duration-300 hover:bg-red-900 hover:text-neutral-50 hover:scale-110 hover:cursor-pointer">
              <div className="flex">
                <FaHeadset size={20} className="mt-[3px]" />{" "}
                <span className="ml-2">Support Server</span>
              </div>
            </button>
          </a>
        </div>
      </>
    );
}

export default Buttons;